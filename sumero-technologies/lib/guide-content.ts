import { PRICING, formatRm } from "./pricing";
import type { GuideId } from "./guide-paths";
import type { SiteLocale } from "./seo";

type Guide = {
  title: string;
  description: string;
  answer: string;
  sections: { heading: string; paragraphs: string[]; checklist?: string[] }[];
};
export const guideContent: Record<SiteLocale, Record<GuideId, Guide>> = {
  en: {
    costs: {
      title:
        "Clinic software costs in Malaysia: subscription, setup and migration",
      description:
        "Calculate HealthOS subscription and onboarding costs in Malaysia, and check migration, MyKad readers, training and optional connection charges before choosing a plan.",
      answer: `SUMERO HealthOS Essential is ${formatRm(PRICING.essential.monthly)} per clinic per month or ${formatRm(PRICING.essential.annual)} per year, with ${formatRm(PRICING.onboarding.essential)} one-time onboarding. Professional is ${formatRm(PRICING.professional.monthly)} per month or ${formatRm(PRICING.professional.annual)} per year, with ${formatRm(PRICING.onboarding.professional)} onboarding. Budget for migration and optional services separately. These are SUMERO's published prices, not a market-wide price survey.`,
      sections: [
        {
          heading: "Compare the subscription and onboarding together",
          paragraphs: [
            "A monthly subscription is only one part of the buying decision. Compare twelve monthly payments plus onboarding with the annual subscription plus onboarding. The table below uses the published HealthOS prices and assumes one clinic for a full year.",
            "Essential covers one branch, up to two doctors and eight staff accounts. Professional covers one branch with routine staff accounts under fair use, and adds advanced inventory, suppliers, purchasing, panel receivables, workforce operations and advanced reporting.",
          ],
        },
        {
          heading: "Add the costs that depend on your clinic",
          paragraphs: [
            `Structured patient/catalogue spreadsheet migration starts from ${formatRm(PRICING.onboarding.migrationFrom)}. Complex legacy history and group rollouts require an agreed scope. A starting price does not mean every record, document or historical transaction can be imported.`,
            "Ask whether the proposal includes your training arrangements, MyKad reader software and compatible equipment, printing setup, WhatsApp connection and any optional support. e-Invoice activation requires clinic assessment, configuration, authorisation, testing and activation; ordinary receipts are separate.",
          ],
          checklist: [
            "Subscription and billing period",
            "One-time onboarding and agreed training scope",
            "Migration scope, source formats and validation",
            "Equipment, optional connections and applicable SST",
            "Staff-account limits and branch access",
          ],
        },
        {
          heading: "Choose by the workflow, then confirm the plan",
          paragraphs: [
            "Ask for a demonstration of a complete patient visit: registration, consultation, medicine dispensing, receipt and follow-up. Check which features are included in the quoted plan. Newer capabilities and connection costs are agreed in the clinic proposal.",
            "Use the contact form to share your branch count, current process and main requirement. SUMERO can then discuss onboarding and trial arrangements without assuming that every clinic needs the same implementation.",
          ],
        },
      ],
    },
    migration: {
      title: "Changing clinic software: a migration and MyKad setup checklist",
      description:
        "A practical checklist for Malaysian clinics moving patient and catalogue records, validating imports, checking MyKad equipment and preparing staff for HealthOS.",
      answer:
        "Before changing clinic software, agree what will move, obtain an authorised export, inspect the source format and test a sample import. Validate the results before go-live. For HealthOS MyKad import, confirm a compatible reader connected to a Windows computer and the required reader software; staff review imported details and photos before saving.",
      sections: [
        {
          heading: "1. Define the migration scope before exporting",
          paragraphs: [
            "List the records your team needs in the new system. Patient demographics and a medicine catalogue are different from consultation history, attachments, stock batches, panel balances and historical receipts. Ask the implementation team to confirm each item instead of assuming a complete historical transfer.",
            `HealthOS structured patient/catalogue spreadsheet migration starts from ${formatRm(PRICING.onboarding.migrationFrom)}. Complex data and group rollouts are quoted to an agreed scope. Do not cancel access to your existing system before agreeing how required historical information will remain available.`,
          ],
          checklist: [
            "Record types and date range",
            "Source export formats and required fields",
            "Duplicate records and matching rules",
            "Attachments and history that will remain in the old system",
            "Who is authorised to export, transfer and validate the records",
          ],
        },
        {
          heading: "2. Test and validate before the switch",
          paragraphs: [
            "Arrange an agreed sample and compare the imported records with the source. Check names, identifiers, dates and medicine units. Review missing values and duplicates with the implementation team. Agree how errors will be corrected and who signs off the result.",
            "Keep patient data out of general demo requests and public website forms. Agree a suitable transfer arrangement with the implementation team before sending any migration files. The public website previews use fictional records only.",
          ],
        },
        {
          heading: "3. Check the workstation and MyKad reader",
          paragraphs: [
            "For MyKad import, HealthOS needs a compatible reader connected to a Windows computer and the required reader software. Confirm the actual reader model and connection during setup. Staff should review imported details and the photo before saving the patient.",
            "Also test your intended medicine-label and receipt printing arrangements. Ask the team to demonstrate the layouts you plan to use, rather than assuming every printer or label size works without configuration.",
          ],
        },
        {
          heading: "4. Rehearse the clinic day and agree go-live",
          paragraphs: [
            "Have the front desk, doctor and dispensing team practise a fictional visit. Check staff permissions, the patient queue, consultation notes, medicine instructions, receipts and outstanding payments.",
            "Agree staff training, support arrangements, the changeover time, handling of unresolved imports and a fallback process if the clinic cannot complete its work. Group clinics should confirm contracted branches and access arrangements explicitly.",
          ],
          checklist: [
            "Named owner for migration validation",
            "Staff roles and training",
            "Equipment and printing checks",
            "Go-live date and unresolved-data plan",
            "Support and fallback arrangements",
          ],
        },
      ],
    },
    walkthrough: {
      title: "HealthOS walkthrough: registration, consultation and dispensing",
      description:
        "Explore a fictional clinic visit in SUMERO HealthOS with populated registration, consultation and dispensary examples, plus a written walkthrough for each step.",
      answer:
        "This walkthrough follows a fictional clinic visit from registration to consultation, dispensing and payment. Each example is a website demonstration with fictional data. It does not connect to the clinic application, save a patient record, send a message or process a payment.",
      sections: [
        {
          heading: "1. Register and add the patient to the queue",
          paragraphs: [
            "At the front desk, find or enter the patient, review identity and contact details, and record the reason for the visit. Select the relevant visit and billing arrangements, then review the details before Save & Add To Queue.",
            "MyKad import uses a compatible reader connected to a Windows computer and the required reader software. Imported details and photos need staff review before saving. The registration example below is populated with fictional details; it is not a reader test.",
          ],
        },
        {
          heading: "2. Complete the consultation form",
          paragraphs: [
            "In Compact EMR, review the patient context and write the current visit notes. The example includes vitals, presenting concern, examination, assessment and a care plan. These are demonstration entries, not medical advice.",
            "Edit the example consultation and use Save demo note to see its local confirmation. Switching its day/night control preserves the current preview edits. Reloading the page resets the demo; it does not create or change a clinical record.",
          ],
        },
        {
          heading: "3. Review dispensing and outstanding payment",
          paragraphs: [
            "Select To Dispense, Awaiting Payment or Completed Today in the dispensary preview. Choose a fictional patient to see the relevant medicines and amounts. The example includes three patients to dispense, two awaiting payment and three completed.",
            "In the clinic workflow, staff review medicine instructions and the correct label or receipt format before completing their work. Website preview checkout and printing controls are display-only. They do not dispense medicine or collect a payment.",
          ],
        },
        {
          heading: "4. Plan the next review",
          paragraphs: [
            "HealthOS follow-up worklists distinguish patients needing contact, contacted patients, booked appointments and completed reviews. A sent reminder or booked appointment is not a completed clinical review.",
            "For a live product demonstration, tell SUMERO your branch count, current process and main requirement. Confirm feature allocation and any MyKad, messaging, e-Invoice or group setup in the proposal.",
          ],
        },
      ],
    },
  },
  ms: {
    costs: {
      title: "Kos sistem pengurusan klinik: langganan, persediaan dan migrasi",
      description:
        "Kira kos langganan dan persediaan HealthOS di Malaysia serta semak migrasi, pembaca MyKad, latihan dan caj sambungan pilihan sebelum memilih pelan.",
      answer: `SUMERO HealthOS Essential berharga ${formatRm(PRICING.essential.monthly)} setiap klinik sebulan atau ${formatRm(PRICING.essential.annual)} setahun, dengan persediaan sekali sahaja ${formatRm(PRICING.onboarding.essential)}. Professional berharga ${formatRm(PRICING.professional.monthly)} sebulan atau ${formatRm(PRICING.professional.annual)} setahun, dengan persediaan ${formatRm(PRICING.onboarding.professional)}. Bajet migrasi dan perkhidmatan pilihan adalah berasingan. Ini ialah harga SUMERO yang diterbitkan, bukan tinjauan harga seluruh pasaran.`,
      sections: [
        {
          heading: "Bandingkan langganan bersama caj persediaan",
          paragraphs: [
            "Langganan bulanan hanyalah satu bahagian dalam keputusan pembelian. Bandingkan dua belas bayaran bulanan bersama persediaan dengan langganan tahunan bersama persediaan. Jadual di bawah menggunakan harga HealthOS yang diterbitkan untuk satu klinik sepanjang tahun.",
            "Essential meliputi satu cawangan, sehingga dua doktor dan lapan akaun petugas. Professional meliputi satu cawangan dengan akaun petugas rutin tertakluk pada penggunaan saksama, serta inventori lanjutan, pembekal, pembelian, penghutang panel, operasi tenaga kerja dan laporan lanjutan.",
          ],
        },
        {
          heading: "Tambah kos yang bergantung pada klinik anda",
          paragraphs: [
            `Migrasi berstruktur bagi hamparan pesakit/katalog bermula daripada ${formatRm(PRICING.onboarding.migrationFrom)}. Sejarah sistem lama yang kompleks dan pelaksanaan kumpulan memerlukan skop yang dipersetujui. Harga permulaan tidak bermakna semua rekod, dokumen atau transaksi lama boleh diimport.`,
            "Tanya sama ada cadangan merangkumi latihan, perisian pembaca MyKad dan peralatan serasi, persediaan percetakan, sambungan WhatsApp serta sokongan pilihan. Pengaktifan e-Invois memerlukan penilaian klinik, konfigurasi, kebenaran, ujian dan pengaktifan; resit biasa adalah berasingan.",
          ],
          checklist: [
            "Langganan dan tempoh bil",
            "Persediaan sekali sahaja dan skop latihan",
            "Skop migrasi, format sumber dan pengesahan",
            "Peralatan, sambungan pilihan dan SST jika berkenaan",
            "Had akaun petugas dan akses cawangan",
          ],
        },
        {
          heading: "Pilih mengikut aliran kerja, kemudian sahkan pelan",
          paragraphs: [
            "Minta demonstrasi lawatan pesakit lengkap: pendaftaran, konsultasi, pendispensan ubat, resit dan susulan. Semak fungsi yang termasuk dalam pelan yang ditawarkan. Fungsi baharu serta kos sambungan dipersetujui dalam cadangan klinik.",
            "Gunakan borang pertanyaan untuk berkongsi bilangan cawangan, proses semasa dan keperluan utama. SUMERO boleh membincangkan persediaan dan aturan percubaan mengikut keperluan klinik anda.",
          ],
        },
      ],
    },
    migration: {
      title:
        "Menukar sistem klinik: senarai semak migrasi dan persediaan MyKad",
      description:
        "Senarai semak untuk klinik Malaysia memindahkan rekod pesakit dan katalog, mengesahkan import, menyemak peralatan MyKad dan menyediakan petugas untuk HealthOS.",
      answer:
        "Sebelum menukar sistem klinik, persetujui data yang akan dipindahkan, dapatkan eksport yang dibenarkan, semak format sumber dan uji sampel import. Sahkan hasil sebelum mula guna. Import MyKad HealthOS memerlukan pembaca serasi yang disambungkan ke komputer Windows dan perisian pembaca yang diperlukan; petugas menyemak maklumat serta foto sebelum menyimpan.",
      sections: [
        {
          heading: "1. Tetapkan skop migrasi sebelum mengeksport",
          paragraphs: [
            "Senaraikan rekod yang diperlukan dalam sistem baharu. Maklumat pesakit dan katalog ubat berbeza daripada sejarah konsultasi, lampiran, kelompok stok, baki panel dan resit lama. Minta pasukan pelaksanaan mengesahkan setiap item; jangan menganggap semua sejarah akan dipindahkan.",
            `Migrasi berstruktur bagi hamparan pesakit/katalog HealthOS bermula daripada ${formatRm(PRICING.onboarding.migrationFrom)}. Data kompleks dan pelaksanaan kumpulan disebut harga mengikut skop. Jangan tamatkan akses sistem sedia ada sebelum bersetuju bagaimana maklumat sejarah yang diperlukan boleh terus dirujuk.`,
          ],
          checklist: [
            "Jenis rekod dan julat tarikh",
            "Format eksport dan medan yang diperlukan",
            "Rekod pendua dan peraturan pemadanan",
            "Lampiran serta sejarah yang kekal dalam sistem lama",
            "Pihak yang dibenarkan mengeksport, memindah dan mengesahkan rekod",
          ],
        },
        {
          heading: "2. Uji dan sahkan sebelum pertukaran",
          paragraphs: [
            "Aturkan sampel yang dipersetujui dan bandingkan rekod import dengan sumber. Semak nama, pengenal, tarikh serta unit ubat. Semak nilai hilang dan pendua bersama pasukan pelaksanaan. Persetujui pembetulan ralat dan pihak yang mengesahkan hasil.",
            "Jangan masukkan data pesakit dalam permintaan demo umum atau borang laman web awam. Persetujui aturan pemindahan yang sesuai dengan pasukan pelaksanaan sebelum menghantar fail migrasi. Pratonton laman web menggunakan rekod rekaan sahaja.",
          ],
        },
        {
          heading: "3. Semak komputer dan pembaca MyKad",
          paragraphs: [
            "Import MyKad HealthOS memerlukan pembaca serasi yang disambungkan ke komputer Windows dan perisian pembaca yang diperlukan. Sahkan model serta sambungan sebenar semasa persediaan. Petugas perlu menyemak maklumat import dan foto sebelum menyimpan pesakit.",
            "Uji juga aturan percetakan label ubat dan resit. Minta pasukan menunjukkan format yang ingin digunakan; jangan menganggap setiap pencetak atau saiz label berfungsi tanpa konfigurasi.",
          ],
        },
        {
          heading: "4. Latih aliran kerja dan persetujui mula guna",
          paragraphs: [
            "Minta petugas kaunter, doktor dan pasukan dispensari berlatih dengan lawatan pesakit rekaan. Semak kebenaran petugas, giliran, nota konsultasi, arahan ubat, resit dan bayaran tertunggak.",
            "Persetujui latihan petugas, aturan sokongan, masa pertukaran, pengendalian import belum selesai dan proses sandaran jika kerja klinik terganggu. Kumpulan klinik perlu mengesahkan cawangan yang diliputi serta aturan akses.",
          ],
          checklist: [
            "Penanggungjawab pengesahan migrasi",
            "Peranan dan latihan petugas",
            "Semakan peralatan dan percetakan",
            "Tarikh mula guna serta rancangan data belum selesai",
            "Aturan sokongan dan proses sandaran",
          ],
        },
      ],
    },
    walkthrough: {
      title: "Panduan HealthOS: pendaftaran, konsultasi dan pendispensan",
      description:
        "Terokai lawatan klinik rekaan dalam SUMERO HealthOS dengan contoh pendaftaran, konsultasi dan dispensari yang telah diisi serta panduan bertulis setiap langkah.",
      answer:
        "Panduan ini mengikuti lawatan klinik rekaan dari pendaftaran hingga konsultasi, pendispensan dan bayaran. Setiap contoh ialah demonstrasi laman web dengan data rekaan. Ia tidak menyambung ke aplikasi klinik, menyimpan rekod pesakit, menghantar mesej atau memproses bayaran. Antara muka contoh dipaparkan dalam bahasa Inggeris.",
      sections: [
        {
          heading: "1. Daftar dan tambah pesakit ke giliran",
          paragraphs: [
            "Di kaunter, cari atau masukkan pesakit, semak identiti dan maklumat hubungan serta rekod sebab lawatan. Pilih aturan lawatan dan bil yang berkaitan, kemudian semak maklumat sebelum Save & Add To Queue.",
            "Import MyKad menggunakan pembaca serasi yang disambungkan ke komputer Windows serta perisian pembaca yang diperlukan. Maklumat dan foto import perlu disemak sebelum disimpan. Contoh pendaftaran di bawah diisi dengan maklumat rekaan; ia bukan ujian pembaca.",
          ],
        },
        {
          heading: "2. Lengkapkan borang konsultasi",
          paragraphs: [
            "Dalam Compact EMR, semak konteks pesakit dan tulis nota lawatan semasa. Contoh merangkumi tanda vital, aduan, pemeriksaan, penilaian dan rancangan penjagaan. Ini ialah entri demonstrasi, bukan nasihat perubatan.",
            "Sunting contoh konsultasi dan gunakan Save demo note untuk melihat pengesahan setempat. Kawalan siang/malam mengekalkan suntingan pratonton semasa. Muat semula halaman untuk menetapkan semula demo; ia tidak mencipta atau mengubah rekod klinikal.",
          ],
        },
        {
          heading: "3. Semak pendispensan dan bayaran belum selesai",
          paragraphs: [
            "Pilih To Dispense, Awaiting Payment atau Completed Today dalam pratonton dispensari. Pilih pesakit rekaan untuk melihat ubat serta jumlah berkaitan. Contoh mengandungi tiga pesakit menunggu ubat, dua menunggu bayaran dan tiga telah selesai.",
            "Dalam aliran kerja klinik, petugas menyemak arahan ubat serta format label atau resit sebelum melengkapkan kerja. Kawalan bayaran dan percetakan dalam pratonton laman web adalah untuk paparan sahaja. Ia tidak mendispens ubat atau menerima bayaran.",
          ],
        },
        {
          heading: "4. Rancang semakan seterusnya",
          paragraphs: [
            "Senarai susulan HealthOS membezakan pesakit yang perlu dihubungi, telah dihubungi, mempunyai janji temu dan telah selesai semakan. Peringatan dihantar atau janji temu ditempah tidak bermakna semakan klinikal selesai.",
            "Untuk demonstrasi produk, maklumkan bilangan cawangan, proses semasa dan keperluan utama kepada SUMERO. Sahkan kelayakan fungsi serta persediaan MyKad, mesej, e-Invois atau kumpulan dalam cadangan.",
          ],
        },
      ],
    },
  },
};
