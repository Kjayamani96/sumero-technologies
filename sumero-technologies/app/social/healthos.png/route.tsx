import { ImageResponse } from "next/og";
export const dynamic = "force-static";
export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0b1026",
        padding: "64px",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, color: "#70e8ef" }}>
        SUMERO Technologies / HealthOS
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 66,
            fontWeight: 700,
            lineHeight: 1.12,
          }}
        >
          A simpler clinic day.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 31,
            marginTop: 24,
            color: "#d7e2f5",
          }}
        >
          Clinic management software for Malaysia
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            marginTop: 14,
            color: "#d7e2f5",
          }}
        >
          Sistem pengurusan klinik untuk Malaysia
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 24, color: "#70e8ef" }}>
        Registration · Consultation · Dispensing · Follow-up
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
