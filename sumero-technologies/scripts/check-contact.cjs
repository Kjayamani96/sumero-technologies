// Offline contract checks: never sends email or reads real credentials.
const fs = require("fs");
const vm = require("vm");
const ts = require("typescript");
const assert = require("node:assert/strict");
function compile(path, requires, env = {}) {
  const source = ts.transpileModule(fs.readFileSync(path, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  const module = { exports: {} };
  vm.runInNewContext(source, {
    module,
    exports: module.exports,
    require: (key) => {
      if (!(key in requires)) throw new Error(key);
      return requires[key];
    },
    process: { env },
    Response,
    Request,
    console,
  });
  return module.exports;
}
(async () => {
  const shared = compile("lib/contact.ts", {});
  let mode = "success",
    sends = 0;
  class Resend {
    emails = {
      send: async (data) => {
        sends++;
        assert.equal(data.to, "test@example.invalid");
        if (mode === "throw") throw new Error("private failure");
        return mode === "error"
          ? { error: { message: "private error" } }
          : { data: { id: "mock-id" } };
      },
    };
  }
  const handler = (env) =>
    compile(
      "app/api/contact/route.ts",
      { resend: { Resend }, "@/lib/contact": shared },
      env,
    ).POST;
  const valid = {
    name: "Demo Contact",
    clinicName: "Demo Clinic",
    email: "test@example.invalid",
    phone: "",
    branches: "1",
    requirement: "Demo request",
    consent: true,
    plan: "Essential",
  };
  const request = (value) =>
    new Request("http://localhost/api/contact", {
      method: "POST",
      body: typeof value === "string" ? value : JSON.stringify(value),
    });
  const configured = handler({
    RESEND_API_KEY: "mock-key",
    CONTACT_FROM_EMAIL: "test@example.invalid",
    CONTACT_TO_EMAIL: "test@example.invalid",
  });
  let count = 0;
  for (const value of [
    "{",
    null,
    [],
    {},
    { ...valid, email: "" },
    { ...valid, email: "bad" },
    { ...valid, phone: "bad" },
    { ...valid, branches: "0" },
    { ...valid, branches: "1.5" },
    { ...valid, consent: false },
    { ...valid, requirement: "x".repeat(2001) },
  ]) {
    const res = await configured(request(value));
    assert.equal(res.status, 400);
    count++;
  }
  assert.equal(sends, 0);
  for (const env of [
    {},
    { RESEND_API_KEY: "mock" },
    { RESEND_API_KEY: "mock", CONTACT_FROM_EMAIL: "mock" },
  ]) {
    const res = await handler(env)(request(valid));
    assert.equal(res.status, 503);
    assert.equal((await res.json()).success, false);
    count++;
  }
  const large = await configured(request("x".repeat(16001)));
  assert.equal(large.status, 413);
  count++;
  for (const payload of [
    valid,
    { ...valid, email: "", phone: "+60 123456789" },
  ]) {
    const res = await configured(request(payload));
    assert.equal(res.status, 200);
    assert.equal((await res.json()).success, true);
    count++;
  }
  const legacy = { ...valid, requirement: undefined, primaryInterest: "Clinic workflow", currentSystem: "Paper", preferredContact: "Email" };
  const normalised = shared.validateContact(legacy).payload;
  assert.ok(normalised.requirement.includes("Clinic workflow"));
  assert.ok(normalised.requirement.includes("Current system: Paper"));
  assert.ok(normalised.requirement.includes("Preferred contact: Email"));
  assert.equal((await configured(request(legacy))).status, 200);
  count++;
  for (const payload of [
    { ...legacy, consent: false },
    { ...legacy, primaryInterest: "" },
    { ...legacy, primaryInterest: "x".repeat(2001) },
    { ...legacy, email: "" },
  ]) {
    assert.equal((await configured(request(payload))).status, 400);
    count++;
  }
  assert.equal(shared.validateContact({ ...valid, primaryInterest: "Legacy" }).payload.requirement, valid.requirement);
  for (mode of ["error", "throw"]) {
    const res = await configured(request(valid));
    assert.equal(res.status, 502);
    const data = await res.json();
    assert.equal(data.success, false);
    assert.ok(!data.message.includes("private"));
    count++;
  }
  console.log(
    `${count} contact validation, configuration and mocked delivery checks passed. No email sent.`,
  );
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
