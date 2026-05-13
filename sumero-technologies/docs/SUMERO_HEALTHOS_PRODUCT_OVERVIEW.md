# Sumero HealthOS

**Healthcare Intelligence Platform · Clinic Operations Infrastructure**

> *“Modern Clinic Operations Platform. Manage patients, appointments, billing, pharmacy, and workforce operations from one secure healthcare ecosystem.”*

Sumero HealthOS is the operational backbone built by **Sumero Technologies** for modern private clinics, group practices and multi-branch healthcare operators. It is not a generic “hospital management system” — it is an end-to-end **clinic operations platform** that unifies front desk intake, doctor consultation, dispensary, billing, panel insurance receivables, inventory, workforce attendance, migration tooling, and multi-tenant SaaS administration on a single secure foundation.

---

## Table of Contents

1. [Product Overview](#1-product-overview)
2. [Complete Module Breakdown](#2-complete-module-breakdown)
3. [User Role Summary](#3-user-role-summary)
4. [Workflow Architecture](#4-workflow-architecture)
5. [Security & Infrastructure Summary](#5-security--infrastructure-summary)
6. [Marketing Positioning](#6-marketing-positioning)
7. [Website Content](#7-website-content)
8. [Investor / Sales Summary](#8-investor--sales-summary)
9. [System Strength Analysis](#9-system-strength-analysis)
10. [Improvement Recommendations](#10-improvement-recommendations)
11. [Technical Appendix](#11-technical-appendix)

---

## 1. Product Overview

### 1.1 What is Sumero HealthOS

Sumero HealthOS is a **cloud-native, multi-tenant healthcare SaaS platform** that runs a clinic's entire daily operation — from the moment a patient walks in, through consultation, pharmacy dispense, billing, panel insurer claims, and reporting, all the way to workforce attendance and finance reconciliation at the end of the day.

It is delivered as a **single-domain web workspace** built on Next.js 14 (App Router), Supabase (Postgres + Auth + Storage with Row Level Security), and TypeScript — purpose-engineered for clinics that need enterprise-grade reliability without enterprise-grade cost or complexity.

The platform is structured around three workspaces:

- **Clinic workspace** — the day-to-day operational application used by clinic staff.
- **Platform workspace** — the supreme-admin cockpit used by Sumero Technologies (or a brand reseller) to provision tenants, manage subscriptions, and handle cross-tenant account recovery.
- **Operations hub** — embedded dashboards, reporting, and workforce analytics layered on top of the live operational data.

### 1.2 Who it is for

- **Single-doctor general practice clinics** that need a structured operating system rather than fragmented tools (paper, Excel, WhatsApp).
- **Multi-doctor private clinics** with full-time, part-time and locum (visiting) doctors who need clear permission and revenue boundaries.
- **Group / multi-branch operators** that want central control over branding, subscriptions, and cross-branch sharing without manual database stitching.
- **Panel / TPA-heavy clinics** that rely on company panels and insurance receivables and need a real AR ledger, not a glorified invoice printer.
- **Pharmacist-led and clinic-pharmacy hybrid operations** that need a real Medicine Counter POS with sticker labels and stock-aware sales.

### 1.3 Operational problems it solves

Sumero HealthOS replaces the typical clinic stack of *“paper queue book + ad-hoc Excel + a desktop billing program + a WhatsApp group + a separate attendance machine + a panel insurance file folder”* with one coherent, audited system that:

- Enforces a strict **Patient → Queue → Consultation → Dispense → Billing → Reporting** flow.
- Locks visit billing once a doctor finalizes a consultation, with controlled correction audit.
- Separates **doctor-prescribed values** from **dispenser-finalized values** for legally clean pharmacy records.
- Tracks **panel insurer receivables at the invoice line level** with partial payments, reminders, escalation, and credit blocks.
- Treats **inventory as an append-only ledger** with batches, expiries, suppliers, purchase orders and FIFO allocations.
- Treats **workforce attendance** as a first-class clinical operations module — QR punch, rosters, leave exceptions, locum exemption.
- Applies **tenant-isolated Row Level Security** so a clinic's data is hard-bounded from every other clinic on the platform.
- Captures a complete **audit trail** for clinical, financial, and security-sensitive actions.

### 1.4 Why it is different from a generic clinic system

Most “clinic software” is a digitized paper system. Sumero HealthOS is built like a **real SaaS operating system**:

| Generic clinic software | Sumero HealthOS |
|---|---|
| One-app-per-PC, file-based | Cloud-native, multi-tenant, real-time-aware |
| Single user role or hard-coded permissions | 8 first-class roles + locum/permanent doctor types + admin-desk expansion |
| Receipts only — no real receivables | Full panel AR ledger with partial payments, reminders, escalation, credit gate |
| Inventory = stock count field | Suppliers, POs, batches, expiry, FIFO ledger, near-expiry & dead-stock analytics |
| No subscription lifecycle | First-class clinic subscriptions, plans, trial→paid conversion, grace, soft/hard lock |
| No clinic-migration tooling | Dedicated Migration Center: legacy patient flow, CSV importers, attachments, history |
| Hard-coded letterheads | Per-tenant letterhead, branding, SSM/KKM/MMC/APC fields, logo storage bucket |
| Generic audit, if any | Trigger-level audit for patients/visits/items/payments/MC/medicine-sales + platform audit + doctor permission audit + financial privacy audit |

Sumero HealthOS treats every operational entity (queue ticket, visit, prescription, invoice, panel claim, leave exception, batch movement) as a workflow object with status, ownership, and auditability — not a row in a spreadsheet.

---

## 2. Complete Module Breakdown

Each module below is implemented in the live codebase (routes under `src/app/(protected)/`, server logic under `src/lib/`, schema in `supabase/migrations/`). Modules are described in operational language so they can be lifted directly into product, sales, and onboarding material.

### 2.1 Patient Registration & Master File

**Purpose.** Single source of truth for the patient's identity, contact, clinical baseline, and panel relationship — used by every downstream module (queue, consultation, billing, panel, follow-up).

**What it stores.** MRN, IC / passport, nationality, gender, date of birth, race, structured address (line 1/2/3 + postcode + city + state + country with Malaysia postcode and state datasets), assigned doctor, allergies, chronic conditions, medical history, clinical notes audit columns, panel chit number, legacy MRN / previous clinic for migrated records, long-term medication summary, `imported_manually` flag.

**Workflow.**
1. Front desk registers a new patient or recalls an existing one by phone / IC / MRN / name.
2. Patient demographics, allergies and conditions are captured once and reused across visits.
3. Doctors view and update clinical baselines from inside the consultation workspace, with `clinical_notes_updated_at` and `clinical_notes_updated_by` audit columns.
4. Migration Center records (legacy / CSV) tag the patient with provenance metadata so historical patients are visibly distinguished from in-system registrations.

**Roles involved.** Front desk, nurse, doctor, admin / clinic owner.

**Operational value.** Eliminates double-registration, locks demographic accuracy at intake, and feeds clean patient data into every downstream workflow.

**Business value.** Cleaner panel claims, fewer rejected receipts, faster recall, and a credible patient base for analytics and migration to/from other systems.

---

### 2.2 Queue Management

**Purpose.** Replace paper queue books and shouted patient names with a structured digital queue, role-aware visibility, priority handling, and an optional public Queue TV display.

**What it stores.** Queue rows with patient, **assigned_doctor_id**, queue number, priority level (`normal` / `priority` / `emergency`), reason for visit, status (`waiting` → `called` → `in_progress` / `in_consultation` → `completed`), `started_at`, `called_at`, `completed_at`, and bidirectional links to the visit and appointment.

**Workflow.**
1. Front desk (or self check-in flow) creates a queue ticket bound to a doctor.
2. Priority FIFO logic claims the next patient (`claim_next_patient` migration enforces priority-then-FIFO).
3. Doctor opens "My Queue", picks up the patient, status flips to `in_consultation`, started_at is stamped.
4. Queue TV (`/queue-tv/manage`, `/queue-tv/settings`) shows the current ticket, doctor name, room number, and bumps on doctor reassignment.
5. Completion auto-routes to dispense / payment based on visit prescription_status.

**Roles involved.** Front desk, nurse, doctor (My Queue), admin / clinic owner (Queue admin, Queue TV settings).

**Operational value.** No more "next patient!" by voice. Patients see their position. Doctors see only their relevant queue. Front desk sees the whole floor.

**Business value.** Higher throughput, reduced lobby anxiety, professional patient experience that justifies premium pricing.

---

### 2.3 Appointments & Doctor Scheduling

**Purpose.** Convert the queue from a walk-in board into an appointment-aware desk.

**What it stores.** Appointments with date, time, doctor, visit type (`consultation` / `follow_up` / `review` / `vaccination` / `other`), reminder channels, status (`scheduled` / `confirmed` / `arrived` / `completed` / `cancelled` / `no_show`), and `queue_id` once the patient checks in. Per-doctor appointment rules (`doctor_appointment_rules`) define available weekdays, work window, break window, slot duration, max patients per slot, and max appointments per day.

**Workflow.** Front desk books → patient arrives → check-in flips appointment to a queue row → consultation completes → optional follow-up suggested date written back.

**Roles involved.** Front desk, doctor (own schedule), admin / clinic owner (rules and overrides).

**Operational value.** Doctor calendars are not a Google Sheet anymore. Slots respect break windows. No-shows are tracked.

**Business value.** Better doctor utilization, less idle time, follow-up adherence, fewer missed visits.

---

### 2.4 Consultation Workspace

**Purpose.** The doctor's primary workspace — opens from "My Queue", carries the full patient context, captures the encounter, and emits prescriptions, MCs, referral letters, and billing lines.

**What it stores.** Visits with `patient_id`, `doctor_id`, `queue_id` (one-to-one), `clinic_id`, visit date, **SOAP** notes (subjective / objective / assessment / plan), legacy symptoms / diagnosis / prescription / notes, `is_locked`, `billing_status` (`pending` / `paid`), legacy status (`in_consultation` → `ready_for_payment` → `paid` → `completed`), and the formal `prescription_status` lifecycle (`PRESCRIBED` → `DISPENSING` → `READY_FOR_PAYMENT` → `PAID` → `COMPLETED`).

It also captures consultation clinical images, completed-by doctor display name, prescription submission / dispensing finalization / case completion timestamps, billing correction audit, and integrated emission of:

- **Prescription lines** (`prescriptions` + `visit_items` with `clinic_items` of type `medicine`).
- **Service lines** (`visit_items` with `clinic_items` of type `service`).
- **Medical Certificate** (`medical_certificates` with unique `mc_number`, rest days, start/end dates).
- **Referral Letter** (`referral_letters` with urgency `routine` / `urgent` / `emergency`, MMC number, etc.).
- **Follow-up Reminder** (`follow_up_reminders` with date, time, reason, status).

**Workflow.** Open queue → review patient → enter SOAP notes → pick services/medicines (with smart diagnosis templates) → submit → automatic routing to dispense (if medicines) or directly to billing.

**Roles involved.** Doctor (write), front desk / admin (read for billing handoff).

**Operational value.** A clinical encounter becomes one cohesive screen instead of multiple manual handoffs.

**Business value.** Higher charge capture (no missed service lines), clean clinical documentation for panel claims, MCs and referrals that match real visit data.

---

### 2.5 Dispensing Hub

**Purpose.** Production-grade pharmacist / dispenser workspace that turns prescribed items into a payment-ready, label-printed dispense — without ever overwriting the doctor's original intent.

**What it implements.** A two-column model on `visit_items`:

- **Doctor's immutable intent** — `prescribed_quantity`, `prescribed_duration`, `prescribed_item_id`, `prescribed_snapshot` (JSON snapshot).
- **Dispenser's final action** — `final_quantity`, `final_duration`, `final_item_id`, `dispense_status` (`PRESCRIBED` / `DISPENSING` / `READY_FOR_PAYMENT` / `PAID` / `COMPLETED`), `dispense_remarks`, `dispense_edit_reason`, `dispense_finalized_at`, `dispense_finalized_by`.

It also handles label printing (`label_printed`), inventory deduction (FIFO when allocations are present, aggregate decrement otherwise), and refuses to allow payment for visits whose medicines are not dispensable (`assert-visit-medicines-dispensable-for-payment`).

**Workflow.** Visit lands in dispensing → pharmacist verifies → finalises → labels print → status flips to `READY_FOR_PAYMENT` → billing module collects payment → on payment success the visit transitions to `PAID` / `COMPLETED`.

**Roles involved.** Pharmacist, front desk, admin / clinic owner.

**Operational value.** Legally clean separation between prescription and dispense; no silent re-pricing; correct stock movement.

**Business value.** Pharmacy errors and over-issues are eliminated; stock movements stay accurate; receipts match what actually left the cabinet.

---

### 2.6 Inventory (Standard + Advanced)

**Purpose.** Treat medicines and supplies as production inventory, not a counter on a card.

**Standard inventory.** Medicines master (`medicines` with name, strength, form, list_price, cost_price, billing category), per-clinic `medicine_inventory` aggregates with reorder level, `medicine_stock_movements` legacy stock-receipt audit, and separate `inventory_items` for non-medicine supplies.

**Advanced inventory (production-grade).**
- **Suppliers** (`inventory_suppliers`) — vendor master per clinic.
- **Purchase Orders** (`inventory_purchase_orders` + `inventory_purchase_order_lines`) with statuses `draft` / `sent` / `partially_received` / `received` / `cancelled`, currency, expected date, ordered/closed timestamps.
- **Stock Batches** (`medicine_stock_batches`) — lot number, expiry, unit cost, remaining quantity.
- **Inventory Movements Ledger** (`medicine_inventory_movements`) — append-only stock ledger for every future flow.
- **Visit-item batch allocations** (`visit_item_batch_allocations`) — FIFO record of which lots fulfilled which visit line.
- **Analytics views** — near-expiry, dead-stock heuristic, estimated margin from catalog cost price.
- **Stock adjustment audit** — append-only, with an explicit “audit append-only guard” trigger (`stock_adjustments_dedicated_audit_table`).
- **Reorder suggestions, executive summary, margin report** routes under `/api/inventory/*`.

**Workflow.** Receive PO → batches created with expiry / cost → dispensing consumes stock via FIFO allocations → low-stock notifications fire → reorder suggestions surface in the dashboard.

**Roles involved.** Pharmacist, admin / clinic owner, accountant (cost & margin).

**Operational value.** No more “we ran out” surprises; no expired stock dispensed; every adjustment is traceable.

**Business value.** Lower carrying cost, lower expiry write-offs, defensible cost of goods, accurate margin per medicine.

---

### 2.7 Medicine Counter (POS)

**Purpose.** A dedicated pharmacy / OTC counter that sells medicines directly (without a doctor visit) — for walk-in pharmacy sales, panel chit pickups and refill workflows.

**What it stores.** `medicine_sales` with `sale_number`, billing type (`cash` / `panel` / `company` / `insurance`), payment method (`cash` / `card` / `e_wallet` / `online_transfer` / `panel_claim` / `other`), subtotal / discount / tax / total, status (`completed` / `voided`), optional patient and panel company, created_by. Sale items capture medicine name, quantity, unit price, total, stock deduction state.

**Features.** Sticker label items, prescription defaults from master, receipt printing, panel-receivable attach (so a Medicine Counter sale can be linked to a panel invoice), billing search & panel link upgrade.

**Roles involved.** Pharmacist, front desk.

**Operational value.** OTC and refill flow without forcing a fake visit; clean separation of pharmacy revenue.

**Business value.** Unlocks pharmacy revenue as a separately reportable line; supports clinics where the pharmacy is a real profit center.

---

### 2.8 Billing & Receipts

**Purpose.** Convert a completed visit (or a Medicine Counter sale) into a receipted, audited payment — covering cash, card, online transfer, e-wallet, and panel-claim flows.

**What it implements.**
- Visit payment recording (`record-queue-visit-payment`, `execute-record-queue-visit-payment`).
- Panel billing recalculation (`recalculate-visit-panel-billing`).
- Zero-charge handling (`is-zero-charge`).
- Receipt number formatting and breakdown (`format-receipt-number`, `receipt-breakdown`).
- Pre-payment guard: refuses payment if medicines aren't dispensable yet.
- Visit billing lock on completion (`visits_billing_lock_migration`) with a controlled correction audit (`visit_billing_correction_audit`).
- A4 landscape and standard receipt printing, panel invoice and statement print components.

**Workflow.** Visit ready → cashier picks payment method → receipt prints → payment row written → visit flips to `PAID`. Panel-paid lines flow into the panel AR ledger instead of cash.

**Roles involved.** Front desk, admin / clinic owner, accountant.

**Operational value.** No double-billing, no edit-without-trace, no premature unlock.

**Business value.** Audit-clean revenue, panel claim defensibility, predictable end-of-day reconciliation.

---

### 2.9 Panel Companies & Receivables (TPA / Direct Panel)

**Purpose.** Run real **insurance & panel-company receivables** the way clinics actually need it — invoices, partial payments, statements, reminders, escalation, and credit gating.

**What it implements.**
- `panel_companies` registry with **SSM**, **SST**, **TIN**, two contact persons / numbers, collection escalation (`normal` / `follow_up` / `urgent` / `legal_review`).
- `panel_invoices` and `visit_panel_billings` (per-visit panel portion) with full audit normalization.
- `panel_invoice_payments` — invoice-level partial payments with reference number, method, remarks, created_by.
- `panel_ar_receipts_email_log` — outbound AR receipt email log.
- `panel_invoice_reminder_log` — pre-due-7 / on-due / overdue-7 / overdue-30 reminders with delivery status (`recorded` / `sent` / `failed`).
- `panel_company_collection_notes` — collection conversation log.
- Clinic-level **credit gate** (`panel_credit_block_new_billing_enabled`, `panel_credit_block_min_overdue_amount`) that blocks new panel-payable billing for companies whose overdue exceeds a threshold.
- TPA vs direct chit support via `patients.panel_chit_number`.
- Print clients: panel invoice, panel statement, panel company payment receipt, panel statement correspondence.

**Workflow.** Visit billed to panel → panel invoice grouped/generated → reminders cycle → partial payments allocated → escalation level updated → credit gate applied to future billing until cleared.

**Roles involved.** Front desk, admin / clinic owner, accountant.

**Operational value.** Panel insurance stops being a folder of paper chits.

**Business value.** Faster cash conversion on receivables, lower bad debt, clear AR aging, defensible statements to companies and TPAs.

---

### 2.10 Reports & Operational Dashboards

**Purpose.** Surface the real numbers a clinic owner, admin and accountant actually act on — and gate financial reports behind ownership.

**Implemented dashboards.**
- **Daily Sales Dashboard** — today total sale (excl. panel claim AR), receipt count, panel sales, panel receipt count, visits today, dispensed patients distinct, low-stock count, outstanding balances, upcoming-week appointments.
- **Owner Summary** (`/dashboard/owner-summary`) — owner-only consolidated view.
- **Revenue Dashboard** (`/reports/revenue`) — payment-indexed, aligned to paid `payment_date`, with revenue summary views.
- **Profit Dashboard** (`/reports/profit`) — expenses ledger (`clinic_expenses`: doctor salary, staff salary, medicines cost, rent, utilities, equipment, maintenance, other) joined to revenue.
- **Doctor Revenue Dashboard** (`/reports/doctor-revenue`) — per-doctor revenue, **gated** by `profiles.allow_doctor_revenue_view` and the doctor's linked roster; non-permitted access is captured in `financial_privacy_audit`.
- **Outstanding Payments** (`/reports/outstanding-payments`) with reminder tracking.
- **Follow-up Report** and **Missed Follow-up Recovery** (`/reports/follow-up`, `/reports/missed-followups`).
- **Panel Receivables** (`/reports/panel-receivables`) — open invoices, aging, status correspondence.
- **Recent Payments, Top Medicines, Low Stock, Desk Collections** tables on the main dashboard.

**Roles involved.** Admin desk roles (clinic owner / admin / pharmacist / accountant) see operational reports; doctors only see their own revenue if explicitly permitted.

**Operational value.** Owners and accountants don't have to wait for end-of-month manually-built reports.

**Business value.** Real margin visibility, faster collections, owner-aligned data without exposing financials to the wrong roles.

---

### 2.11 Workforce Attendance (Premium)

**Purpose.** First-class **workforce operating system** for the clinic — punch-in, rosters, leave, exceptions, kiosk, analytics — with locum exemption baked in.

**What it implements.**
- `attendance_policies` (renamed from `attendance_settings`) — per-clinic start time, timezone (default `Asia/Kuala_Lumpur`), grace minutes.
- `attendance_records` — one row per user per day with check-in / break-start / break-end / check-out, late flag, late minutes, status (`present` / `on_break` / `checked_out` / `absent`), remarks, justified_late.
- `attendance_adjustment_logs` — admin edits captured with old/new value JSON and reason.
- **QR system** for self-service punch (`attendance_qr_system`).
- **Kiosk client** at `/attendance/kiosk` for in-clinic terminals.
- **Phone punch** at `/attendance/m`.
- **Timetable v2** + **Premium workforce attendance** layer (`staff_workforce_type` = FULL_TIME / PART_TIME / LOCUM, `attendance_required` flag, `staff_department`, sync trigger to `doctors.attendance_exempt`).
- **Shifts** with abbreviations (M / E / F / O), kinds (`morning` / `evening` / `full_day` / `split` / `custom` / `half_day` / `off`), display color, sort order.
- **Rosters** with publish workflow, `assignment_kind` (`shift` / `off` / `leave_marker`), per-date assignments.
- **Leave & Exceptions** (`/attendance/leave`) with status (`pending` / `approved` / `rejected`), attachments, rejection reason, staff-update-pending flow.
- **Analytics** (`/attendance/analytics`) — workforce KPIs (locums excluded).
- **Reports** (`/attendance/reports`).

**Workflow.** Admin builds roster → publishes → staff punches via QR / kiosk / phone → lateness computed against policy → leave requests with attachments → admin approves/rejects → analytics roll up.

**Roles involved.** Admin / clinic owner / pharmacist / accountant (full management), doctor / front desk / nurse (own attendance + leave), locums (exempt).

**Operational value.** A complete HR-ops layer specific to clinic shift patterns, not generic HRIS bloat.

**Business value.** Defensible payroll inputs, locum cost separation, real shift coverage visibility.

---

### 2.12 Migration Center

**Purpose.** Onboard a clinic from paper / Excel / legacy systems without polluting the production data model.

**What it implements (`/migration-center/*`).**
- **Legacy Patient flow** — manual single-patient entry with provenance fields (`legacy_external_mrn`, `legacy_previous_clinic`, `legacy_migration_source`, `legacy_original_registration_date`, `long_term_medication`), `imported_manually = true`.
- **CSV Importers** for `patients`, `inventory`, `panel_companies` (with normalize, spreadsheet, run-import-commit, and panel/import templates).
- **Failed imports** review.
- **Migration history** view — every imported patient gets a `patient_migration_records` row with `import_method` (`manual_legacy` / `csv_patients` / `csv_inventory` / `csv_panel_companies`), source system, duplicate resolution, attachment summary.
- **Attachment storage** — private `patient-migration-attachments` bucket, clinic-id-prefixed folder, RLS pinned to the user's clinic.

**Workflow.** Admin uploads CSV → mapping & validation → preview → commit → history + per-record audit + uploaded scans/PDFs retained as evidence.

**Roles involved.** Admin / clinic owner (gate via `canAccessMigrationCenter`), front desk for assisted entry, supreme admin for cross-tenant assistance.

**Operational value.** New clinics onboard in days, not months, with traceable provenance.

**Business value.** **Sales acceleration** — the platform can absorb existing clinic data instead of forcing rip-and-replace.

---

### 2.13 Staff Management (Enterprise)

**Purpose.** Treat clinic users as real HR records, not just login accounts.

**What it implements on `profiles`.**
- Identity — `identity_nric`, `identity_passport`, `birth_date`, `gender`, `nationality`, `visa_number`.
- Contact — `personal_phone`, `emergency_contact_name`, `emergency_contact_phone`, `contact_email`.
- Employment — `employment_commenced_on`, `department`, `branch_assignment`, `reporting_manager_id`, `staff_work_status` (`active` / `suspended` / `resigned` / `on_leave`), `joining_date`.
- Professional — `pharmacy_registration_number`, `nursing_registration_number`.
- Login branding — `login_username_local` paired with `clinics.staff_login_suffix` (e.g. `amirul@medivora`).
- Security — `last_login_at`, `mfa_enrolled`, `account_status`, `failed_login_attempts`, `locked_until`, `must_change_password`, `temp_password_expires_at`.
- HR metadata JSON for future extension.

**Roles involved.** Admin desk roles manage. Supreme admin can cross-tenant manage during recovery.

**Operational value.** One canonical staff record powers login, payroll inputs, attendance, audit, and clinical documents.

**Business value.** Audit-ready staff register; enterprise compliance baseline.

---

### 2.14 Doctor Management & Permission System

**Purpose.** Treat doctors as both a clinical resource (queue, schedule, room) and a permissioned role with locum/permanent distinction.

**What it implements.**
- `doctors` roster with status (`on_duty` / `off_duty` / `on_leave` / `inactive`), room number, specialty, MMC, APC, signature storage path, `supabase_user_uuid` link to a profile.
- `doctor_appointment_rules` for per-doctor schedules.
- `doctor_revenue_summary` view — fallback ordering, paid-payment-date alignment, payments.doctor_id backfill and enforcement.
- `doctor_permission_audit` — every denied financial action by a doctor is logged with attempted price vs catalog price.
- `enforce_visit_item_price_from_catalog` trigger — doctors can't silently re-price visit items.
- `locum_doctor_permission_system` — explicit `doctor_type` (`locum_doctor` / `permanent_doctor`) and a route guard (`locum-financial-route-guard`) keeping locums out of revenue/financial views.
- `attendance_exempt` synced from `staff_workforce_type = LOCUM`.

**Operational value.** Locum vs permanent is enforced, not hoped-for.

**Business value.** Defensible payouts to locums, no "phantom revenue access," and per-doctor revenue dashboards that don't leak across roles.

---

### 2.15 Diagnosis & Service Templates

**Purpose.** Standardise consultation output and accelerate common cases.

**What it implements.** `diagnosis_templates` (name, diagnosis, notes, active), `template_items` linking to `clinic_items` (services and medicines) with quantities, "smart template" upgrade, dedicated `clinic_items` `service_category` field for grouping in the catalog UI (`/settings/services`).

**Operational value.** Common conditions become a one-click line bundle.

**Business value.** Higher charge-capture consistency, faster doctor throughput, fewer billing omissions.

---

### 2.16 Medical Certificates & Referral Letters

**Purpose.** Generate official, printable clinical documents that are bound to the underlying visit and audited.

**Medical Certificates.** `medical_certificates` with unique `mc_number`, rest days, start/end date, diagnosis, audit trigger.

**Referral Letters.** `referral_letters` capturing patient demographics snapshot, presenting complaint, examination findings, investigation findings, impression, diagnosis, referred-to facility, referral reason, urgency, doctor MMC number, status (`draft` / `completed` / `printed`), printed_at, with draft mode where `referred_to` is nullable.

**Operational value.** No more Word templates emailed around the team.

**Business value.** Clean, branded, audit-bound documents that reinforce clinic professionalism.

---

### 2.17 Queue TV Display (Patient-Facing)

**Purpose.** Branded waiting-area display that combines live queue status and clinic media.

**What it implements.**
- `queue_tv_settings` per clinic — show patient name (`full` / `initials` / `queue_only`), show doctor name, show room number, refresh interval, screen duration, audio alerts, fullscreen, grouped-by-doctor, welcome message, clinic logo URL.
- `queue_tv_media` per clinic — `video` / `image` / `announcement`, scheduled start/end, display order, YouTube media support, target screen type.
- Realtime voice / audit (`queue_tv_voice_realtime_audit`) and a bump on doctor reassignment so the screen reacts instantly.

**Roles involved.** Admin / clinic owner (manage), public TV displays (no login needed at `/tv-queue`, `/tv-display`, `/tv`).

**Operational value.** Replaces a static clinic poster with a live, controlled patient-facing channel.

**Business value.** Reinforces clinic brand, supports in-clinic announcements and content (including third-party promotional content if monetized).

---

### 2.18 Notifications

**Purpose.** Role-targeted operational alerts (not patient-facing chat).

**What it implements.** `notifications` with `role_target` (`frontdesk` / `doctor` / `admin`), title, message, links to `queue_id` / `visit_id` / `patient_id` / `medicine_id`, `is_read`, clinic-scoped indices. Low-stock notifications are emitted automatically via `sync-low-stock-notifications`. Billing alert and patient-event columns are first-class.

**Operational value.** Operational events surface to the right desk role without spamming everyone.

**Business value.** Faster reaction to low stock, billing exceptions and queue events.

---

### 2.19 Settings & Branding

**Purpose.** Configure the operational behavior and visual identity of the clinic.

**What it implements.**
- Services catalog (`/settings/services`) — `clinic_items` with type `service` / `medicine`, price, active, service category, clinic-scoped tenancy.
- Letterhead and clinic profile (Section A–E of `clinic_enterprise_profile_letterhead`): legal company name, logo, primary & secondary phone, email, website, full address, SSM/KKM/business license/MOH facility code, default practitioner (name, MMC, APC, specialty), letterhead visibility toggles.
- Branding storage — `clinic-assets` public bucket for logos (`logo_storage_path`).
- Subscription-aware UI banners (`SubscriptionWarningBanner`) and operational status strip.

**Operational value.** Letterheads, MC, referral letters, receipts and panel statements all share one configured identity.

**Business value.** No third-party design dependency for clinical documents.

---

### 2.20 Platform Workspace (Supreme Admin)

**Purpose.** The Sumero Technologies (or reseller) cockpit at `/platform/*`.

**What it implements.**
- **Overview** (`/api/platform/overview`) — totals: clinics, profiles with clinic, subscriptions expiring ≤30d, expired/suspended, latest clinics list (≤300), nearest subscription expiries.
- **Provision Wizard** (`/platform/provision`) — supreme-admin clinic provisioning that creates clinic + owner profile + subscription + branding logo via service-role server actions.
- **Invite Dashboard** — token-based onboarding invitations (`onboarding_invitations` with SHA-256 token hash, expiry, status `pending` / `completed` / `expired` / `cancelled`), claim/complete flow.
- **Subscriptions** — list, plan, status (`active` / `expiring` / `suspended` / `expired`), `account_kind` (`trial` / `paid`), trial → paid conversion that resets expiry to one year.
- **Account Recovery** (`/platform/auth-recovery`) — cross-tenant password reset / lockout support, fully audited.
- **Subscription warning banners** and **operational status strip** in tenant UIs are platform-driven.

**Roles involved.** Supreme admin only (RLS-enforced).

**Operational value.** Sumero Technologies can run the SaaS without touching Postgres directly.

**Business value.** Brandable, resellable cockpit; supports a reseller/partner model later.

---

### 2.21 Audit & Compliance

**Purpose.** Make clinical, financial and security-sensitive actions undeniable.

**What it implements.**
- **General audit logs** (`audit_logs`) with database triggers on `patients`, `visits`, `visit_items`, `payments`, `medical_certificates`, `medicine_sales`, `patient_migration_records`. Captures old/new JSON and the actor `auth.uid()`.
- **Platform audit logs** (`platform_audit_logs`) — cross-tenant, supreme admin read-only.
- **Auth security events** (`auth_security_events`) — append-only stream of `password_reset`, `temp_password_issued`, `forced_password_complete`, `login_success`, `login_failed`, `account_locked`, `account_unlocked`, `account_disabled`, `account_enabled`, `sessions_revoked`, `login_blocked_disabled`, `login_blocked_locked`, `temp_password_expired`.
- **Doctor permission audit** (`doctor_permission_audit`) — every doctor attempting to override catalog price or restricted financial action is logged.
- **Financial privacy audit** (`financial_privacy_audit_and_doctor_revenue_flag`) — captures access to doctor revenue dashboards beyond entitlement.
- **Visit billing correction audit** and **stock adjustment audit** — dedicated append-only audit tables with guard triggers.

**Operational value.** Any "who changed this?" question has a single, trustworthy answer.

**Business value.** Compliance posture suitable for enterprise contracts, panel insurer audits, and regulator scrutiny.

---

## 3. User Role Summary

The role model is the literal RBAC enforced by the application (`src/lib/auth/roles-model.ts` + middleware allowlist).

### 3.1 Supreme Admin (`supreme_admin`)
- Sumero Technologies or authorized reseller.
- Has **no `clinic_id`** by constraint.
- Full access to `/platform/*` and (logically) all clinic workspaces through service-role and RLS bypass helpers (`is_platform_supreme_admin()`).
- Provisions clinics, issues onboarding invitations, manages subscriptions, performs cross-tenant account recovery.
- Audited via `platform_audit_logs`.

### 3.2 Clinic Owner (`clinic_owner`)
- Full tenant administrator.
- Treated as **admin-desk** for nav, plus owner-only summary, doctor revenue, profit and revenue dashboards.
- Manages staff, doctors, panel companies, services catalog, letterhead, queue TV, subscriptions warnings, inventory advanced, attendance schedule/analytics/reports/leave, migration center.

### 3.3 Admin (`admin`)
- Tenant administrator (legacy role; expands to all admin-desk privileges).
- All operational + reporting modules.
- May invite new users, reset staff passwords (via temp-password + `must_change_password`), suspend accounts.

### 3.4 Pharmacist (`pharmacist`) — admin-desk
- Inherits the admin-desk navigation (advanced inventory, dispensing, billing, medicine counter, reports).
- Primary owner of the Inventory and Dispensing Hub modules.

### 3.5 Accountant (`accountant`) — admin-desk
- Inherits admin-desk navigation.
- Primary consumer of Revenue, Profit, Outstanding, Panel Receivables, Doctor Revenue (when permitted).

### 3.6 Doctor (`doctor`)
- Owns **My Queue**, consultation, appointments, templates, referral letters.
- Sees own attendance and may file leave.
- Sees doctor-revenue dashboard only if `allow_doctor_revenue_view` is true and a `linked_doctor_id` exists.
- Cannot silently override catalog prices (trigger-enforced); attempts are audited.
- `doctor_type` (`locum_doctor` / `permanent_doctor`) gates financial views.
- LOCUM doctors are exempt from attendance and excluded from workforce KPIs.

### 3.7 Front Desk (`frontdesk`)
- Patient registration, queue management, panel-company recall, dispensing handoff, billing, medicine counter, inventory view, templates, referral letters.
- Attendance: own punch and leave exceptions.
- Reports: missed-followups, panel receivables.
- Access to Migration Center if granted.

### 3.8 Nurse (`nurse`)
- Same operational bundle as front desk (queue, patients, panel companies, visits, dispensing, billing, medicine counter, inventory, templates, referral letters), plus own attendance.
- Does not access financial dashboards by default.

### 3.9 Locum vs Permanent Doctor (orthogonal flag)
- `doctor_type = locum_doctor`: blocked from financial routes, excluded from attendance, no per-doctor revenue dashboard.
- `doctor_type = permanent_doctor`: full clinical role plus optional revenue view.

### 3.10 Cross-cutting controls
- `account_status = disabled` → blocked at login, redirected to `/login?reason=account_disabled`.
- `locked_until` in future → blocked at login, redirected to `/login?reason=account_locked`.
- `must_change_password` → forced through `/force-password-reset` before any other UI is usable.
- Clinic-level `operational_status = suspended` or `suspension_mode = hard_lock` → redirected to `/clinic-suspended` (HTTP 423 on API).
- `suspension_mode = soft_lock` → mutating API methods (POST/PUT/PATCH/DELETE) return 423 with `CLINIC_READ_ONLY`.

---

## 4. Workflow Architecture

### 4.1 Core Patient Operational Flow

```
Patient Registration / Recall  (front desk · nurse)
        ↓
Queue Ticket  (priority FIFO, doctor-assigned)
        ↓
Consultation Workspace  (doctor · SOAP · templates · clinical images)
        ↓
Visit emits:
   • Prescription lines
   • Service lines
   • Medical Certificate (optional)
   • Referral Letter (optional)
   • Follow-up Reminder (optional)
        ↓
Dispensing Hub  (pharmacist verifies & finalizes labels)
        ↓
Billing  (cash · card · e-wallet · online transfer · panel claim)
        ↓
Reporting + Audit  (revenue, doctor revenue, profit, panel AR)
        ↓
Follow-up Recall  (missed-follow-up recovery, panel statement, AR reminders)
```

### 4.2 Panel Patient Flow (TPA / Company)

```
Patient (with panel_chit_number or TPA card)
        ↓
Queue → Consultation → Dispensing (same as cash flow)
        ↓
Billing routes panel portion to visit_panel_billings
        ↓
panel_invoices generated / grouped (by company)
        ↓
panel_invoice_reminder_log fires (pre_due_7 · on_due · overdue_7 · overdue_30)
        ↓
panel_invoice_payments record partial collections
        ↓
collection_escalation moves: normal → follow_up → urgent → legal_review
        ↓
clinic-level Credit Gate blocks new panel billing when overdue ≥ threshold
        ↓
Settled: AR cleared, panel statement printed for audit
```

### 4.3 Inventory & Dispensing Flow

```
Purchase Order (draft → sent → partially_received → received)
        ↓
Medicine Stock Batches  (lot · expiry · unit cost · remaining_qty)
        ↓
medicine_inventory_movements ledger
        ↓
Doctor prescribes → visit_items.prescribed_*
        ↓
Pharmacist finalizes → visit_items.final_*  + dispense_status PRESCRIBED → READY_FOR_PAYMENT
        ↓
visit_item_batch_allocations consume batches (FIFO)
        ↓
Low-stock notifications · near-expiry / dead-stock views · margin report
        ↓
Stock adjustments (append-only audit) for any manual correction
```

### 4.4 Migration Workflow

```
Admin opens Migration Center
        ↓
Choose mode:
   • Manual Legacy Patient (single)
   • CSV: patients / inventory / panel_companies
        ↓
Normalize · validate · de-duplicate
        ↓
Optional attachment upload → patient-migration-attachments bucket
        ↓
Commit
        ↓
patients tagged with imported_manually + legacy_* metadata
patient_migration_records row written with import_method + duplicate_resolution
        ↓
History view + Failed Imports queue available for review
```

### 4.5 Attendance Workflow

```
Admin builds shifts (M/E/F/O) + roster with publish + assignment_kind
        ↓
Staff arrives → QR / kiosk / phone punch
        ↓
attendance_records computes late_minutes vs attendance_policies grace
        ↓
Breaks tracked (start/end)
        ↓
Leave/Exception filed (pending → approved/rejected; attachments, rejection reason)
        ↓
Admin overrides via attendance_adjustment_logs (reason mandatory, audited)
        ↓
Workforce Analytics + Attendance Reports
   (LOCUM staff excluded; FULL_TIME/PART_TIME tracked)
```

### 4.6 Onboarding (SaaS Tenant Provisioning)

```
Supreme admin issues invitation
   → token_hash + clinic name + owner email + plan + trial/paid + expiry
        ↓
Owner opens /onboarding/{token}
        ↓
Wizard collects clinic profile, letterhead, owner identity, password
        ↓
Password policy validated · staff_login_suffix generated
        ↓
execute-clinic-provision (service role):
   • clinics row · branding logo · subscription · clinic_owner profile · audit
        ↓
Owner redirected to clinic workspace
   → subscription warning banner if near expiry
```

### 4.7 Authentication & Lockout Flow

```
User submits identifier (email / staff-id / username@suffix)
        ↓
/api/auth/check-login-allowed · /api/auth/resolve-staff-login
        ↓
Supabase Auth signs in
        ↓
/api/auth/login-success: increments last_login_at, resets failed_login_attempts
   /api/auth/login-failed: increments failures · sets locked_until on threshold
        ↓
Middleware verifies session, role, must_change_password, account_status, locked_until,
   clinic operational_status / suspension_mode
        ↓
Routing decision:
   • supreme_admin → /platform
   • must_change_password → /force-password-reset
   • clinic locked → /clinic-suspended
   • role-allowed default → /dashboard or role-specific entry
        ↓
auth_security_events stream records every gate decision
```

---

## 5. Security & Infrastructure Summary

### 5.1 Tenant isolation
- **Single shared Postgres database** with **logical multi-tenancy** via `clinic_id` on every operational table.
- **Row Level Security** is enabled on all tenant-bearing tables; policies route through `auth.uid()` and a `current_user_clinic_id()` helper.
- Supreme admin uses a `security definer` helper `is_platform_supreme_admin()` to bypass tenant filters where intentional.
- Cross-branch sharing is **declarative** via `clinic_branch_shares` (hub_clinic_id, member_clinic_id, share_patients / appointments / inventory / staff_directory) — the app honours flags when querying; no global write is implied.
- Storage buckets enforce tenant scoping by **first folder = clinic_id** (e.g. `patient-migration-attachments`); branding (`clinic-assets`) is public-read for embedding in letterheads.

### 5.2 Authentication
- Supabase Auth backs JWT-based sessions on the edge (Next.js middleware validates `getUser` on every navigation, not just cookie presence).
- Login accepts **email**, **staff_id**, and **username@clinic-suffix** identifiers — resolved server-side without leaking presence.
- **Password policy** validated by `describePasswordPolicyFailures`.
- **Force password reset** flow (`/force-password-reset`) is enforced for any account with `must_change_password = true`, including a temp-password expiry (`temp_password_expires_at`).
- **Login lockout** with `failed_login_attempts` and `locked_until`.
- **MFA scaffolded** via `mfa_enrolled` boolean on profiles (ready for Supabase MFA enrollment).
- **Idle session guard** (`SessionIdleGuard`) on the authenticated layout.

### 5.3 Role-based permissions
- 8 named roles (`supreme_admin` / `clinic_owner` / `admin` / `doctor` / `frontdesk` / `nurse` / `pharmacist` / `accountant`) plus orthogonal `doctor_type` (locum/permanent) and `staff_workforce_type` (FULL_TIME/PART_TIME/LOCUM).
- Middleware enforces **path allowlists per role** before the route renders.
- Server actions and API routes additionally enforce role-gated guards (`requireRole`, `expandDeskRoleAllowList`, `server-guard`).
- Doctor-financial-route guard and locum-financial-route guard add a second-layer block for revenue dashboards.
- DB triggers (`enforce_visit_item_price_from_catalog`) provide a third line of defense.

### 5.4 Audit logging
- DB triggers on patients, visits, visit_items, payments, medical_certificates, medicine_sales, patient_migration_records emit append-only `audit_logs` rows with old/new JSON.
- `platform_audit_logs` for cross-tenant actions (supreme admin read-only).
- `auth_security_events` for the entire auth/security lifecycle.
- `doctor_permission_audit` and `financial_privacy_audit` for principle-of-least-privilege violations.
- Dedicated **append-only guards** for visit billing corrections and stock adjustments.

### 5.5 Secure session handling
- Cookies are managed by `@supabase/ssr` and refreshed in middleware.
- Internal redirects after login are decoded via a safe-redirect allowlist (`decodeInternalRedirectNext`) — open-redirect proof.
- Mutating API methods (POST/PUT/PATCH/DELETE) are blocked when clinic is in `soft_lock`; all methods blocked under `hard_lock` / suspended.
- API exemptions during forced password change are explicit (`/api/auth/forced-password-change`, `/api/auth/login-success POST`).

### 5.6 Password recovery architecture
- **No self-serve email reset** by design — recovery is enterprise-style:
  - **Admin-issued temp password** with `must_change_password = true` and `temp_password_expires_at`.
  - **Forced-change flow** logs `temp_password_issued`, `forced_password_complete`, `temp_password_expired`.
  - Supreme admin can cross-tenant assist via **Platform → Account recovery** with audited reset.
- This prevents social-engineering and aligns with clinic compliance posture.

### 5.7 Cloud deployment structure
- Front end: **Next.js 14 App Router**, server-rendered, optimized for Vercel-class hosting; middleware runs at the edge.
- Back end: **Supabase** (Postgres, Auth, Storage, Realtime channels for queue/leave navigation badges).
- Storage buckets: `clinic-assets` (public branding), `patient-migration-attachments` (private, clinic-folder-prefixed).
- Cron-friendly route at `/api/cron/*` for scheduled jobs (e.g. reminders).
- Realtime subscriptions in the dashboard nav for live queue / billing / leave counters.

---

## 6. Marketing Positioning

### 6.1 Taglines (recommended)
- *Sumero HealthOS — the clinic operations platform.*
- *Run your clinic like a system, not a stack.*
- *Healthcare workflow infrastructure.*
- *One platform. Every desk in your clinic.*
- *Operations-first healthcare SaaS.*

### 6.2 Positioning statements
- **Primary:** *Sumero HealthOS is the operating system for modern private clinics. It unifies patient intake, consultation, dispensing, billing, panel insurance receivables, inventory, and workforce attendance — secured by tenant-isolated infrastructure built for healthcare.*
- **For multi-branch operators:** *A single control plane for every clinic you run — central branding, central subscriptions, branch-level operations, audited end-to-end.*
- **For panel-heavy clinics:** *A real receivables engine for panel and TPA claims — invoice-level partial payments, reminders, escalation, and credit control built in.*
- **For pharmacist-led clinics:** *Pharmacy-grade dispensing and a dedicated Medicine Counter POS — with batch, expiry, FIFO and margin reporting that finally match clinical reality.*

### 6.3 Value propositions
1. **Operate the whole clinic from one workspace.** Patients, queue, consultation, dispense, billing, panel, inventory, attendance, reports.
2. **Built for real receivables.** Panel insurer AR with partial payments, reminders, escalation and credit blocks — not just printed invoices.
3. **Pharmacy-grade dispensing.** Doctor intent is immutable; dispenser action is editable and audited; stock is FIFO with batches and expiries.
4. **Enterprise-grade security.** Tenant-isolated RLS, role-based middleware, append-only audit, lockouts, forced password resets, financial privacy audit.
5. **SaaS-ready from day one.** Subscriptions, trial→paid, grace periods, soft/hard lock, supreme-admin platform cockpit.
6. **Migration without pain.** Manual legacy onboarding + CSV importers + attachment evidence + provenance audit.
7. **Workforce-aware.** Rosters, QR punch, kiosk, leave exceptions, locum exemption — not a generic HRIS.

### 6.4 Competitive strengths
- Strict workflow modeling (status machines on visit, prescription, dispense, panel invoice).
- Triple-layered authorization: middleware allowlist → server guard → DB trigger.
- Append-only audit on financial corrections and stock adjustments.
- Locum-aware financials and attendance — a real gap in generic clinic software.
- A native Migration Center that turns sales objections into onboarding wins.
- A platform cockpit that supports a reseller / brand-license model.

### 6.5 Modern SaaS messaging
- *Cloud-native. Multi-tenant. Audit-clean.*
- *Workflow infrastructure for clinics.*
- *Operating system, not just a record system.*
- *Secure healthcare intelligence platform.*

---

## 7. Website Content

### 7.1 Homepage hero
> # Run your clinic like a system, not a stack.
>
> Sumero HealthOS unifies patient intake, doctor consultation, dispensing, billing, panel insurer receivables, inventory and workforce attendance — on one secure, multi-tenant healthcare platform.
>
> **[ Request a demo ]**   **[ Talk to sales ]**

### 7.2 Trust strip (below hero)
- Tenant-isolated infrastructure
- Row Level Security on every table
- Append-only audit on every payment, prescription and stock movement
- Enterprise-style account recovery
- Built on Supabase + Next.js + Postgres

### 7.3 Feature sections

**Patient & Queue.** A live, priority-aware queue with patient-facing TV display. No more shouted names, no more paper books.

**Consultation Workspace.** SOAP-structured notes, clinical images, diagnosis & service templates, medical certificates, referral letters — all bound to the visit.

**Dispensing Hub.** Doctor intent stays immutable. The dispenser's action is editable, audited, label-printed, and stock-deducted via FIFO batches.

**Billing & Panel AR.** Cash, card, e-wallet, online transfer, panel claim. Invoice-level partial payments. Reminders, escalation and credit blocks for slow-paying panels.

**Inventory.** Suppliers, purchase orders, batches, expiries, FIFO ledger, near-expiry and dead-stock analytics, margin per medicine.

**Attendance & Workforce.** QR / kiosk / phone punch, roster builder, leave exceptions with attachments, locum exemption, workforce analytics.

**Reports.** Revenue, profit, doctor revenue (privacy-gated), outstanding payments, follow-up recovery, panel receivables, owner summary.

**Migration Center.** Move from paper or any legacy system in days. Manual legacy entry, CSV imports, attachment evidence, full audit trail.

**Platform Cockpit.** A supreme-admin control plane for clinic provisioning, subscriptions, trial→paid conversion and audited account recovery.

### 7.4 Workflow section (one-liner under each)
*Register → Queue → Consult → Dispense → Bill → Report → Recall.*

### 7.5 Security section
> **Healthcare-grade security, by design.**
>
> Every clinic on Sumero HealthOS is hard-isolated by Row Level Security at the database level. Every financial correction and stock adjustment lands in an append-only audit. Doctors cannot silently re-price visit lines. Locked accounts, suspended tenants and read-only modes are enforced at the edge. Password recovery is admin-issued, not email-blasted.

### 7.6 About section
> Sumero HealthOS is built by **Sumero Technologies**, a healthcare engineering team focused on the unsexy but vital problem of running real clinic operations. We don't build a record system. We build the operating system that runs your clinic.

### 7.7 Primary CTA copy
- **Book a 20-minute platform walkthrough.**
- **Move my clinic to Sumero HealthOS.**
- **Talk to our onboarding team.**

### 7.8 Footer copy
- Sumero HealthOS · Powered by Sumero Technologies.
- Healthcare Intelligence Platform · Modern Clinic Operations.
- © Sumero Technologies. Built for clinics. Engineered for trust.

---

## 8. Investor / Sales Summary

### 8.1 Scalability
- **Logical multi-tenancy on a single Postgres database** scales linearly with tenants while keeping a single ops stack.
- All tenant queries are **RLS-bounded**, not application-bounded — adding clinics does not multiply infrastructure surface.
- **Edge-rendered Next.js** middleware keeps auth, role and tenant gates cheap and uniform.
- Realtime channels are clinic-scoped, so per-tenant noise stays local.

### 8.2 SaaS model
- First-class `clinic_subscriptions` with **plans**, **trial / paid `account_kind`**, **expiry date**, **grace period (default 14 days)**, and **status** (`active` / `expiring` / `suspended` / `expired`).
- Operational gating is platform-driven (`operational_status`, `suspension_mode`) so non-payment translates into product-level soft/hard lock without engineering work.
- Supreme-admin **trial → paid conversion** in one click resets expiry to one year.
- Onboarding invitations support **plan selection + trial/paid kind + expiry days** at invite time.

### 8.3 Multi-tenant capability
- Per-tenant branding (logo, letterhead, SSM / KKM / MMC / APC, letterhead toggles).
- Per-tenant login suffix (`amirul@medivora`) so each clinic feels like its own product.
- Per-tenant catalog (`clinic_items`), per-tenant inventory, per-tenant audit, per-tenant attachments storage prefix.
- Optional **branch sharing** declarative model for group operators.

### 8.4 Operational strengths
- Strict status machines on the core workflow objects → predictable behavior, predictable analytics.
- Real receivables ledger → cash flow visibility most competitors don't offer.
- Dispensing separation of doctor vs dispenser → legal clarity, regulator-friendly.
- Workforce attendance and locum exemption → addresses one of the noisiest pain points in clinic operations.

### 8.5 Clinic migration capabilities
- Migration Center is **first-class**, not an afterthought. Sales teams can promise a real migration plan with audit evidence.
- Patients carry provenance fields so post-migration analytics distinguish historical vs in-system patients.

### 8.6 Future expansion potential
- **Reseller / brand-license model** is already viable thanks to the supreme-admin cockpit.
- **MFA enrollment** scaffolded via `mfa_enrolled`.
- **SSO** integration aligned with `login_username_local` + `staff_login_suffix`.
- **Telehealth / patient app** can slot in on top of the existing patient + visit data model.
- **Insurance / panel TPA integrations** plug into the existing `panel_invoices` + `panel_invoice_payments` + `panel_invoice_reminder_log` model.
- **Advanced clinical modules** (lab orders, imaging requests, immunizations) extend the visit_items + clinic_items + templates pattern naturally.

---

## 9. System Strength Analysis

### 9.1 Strongest product differentiators
1. **Dispensing separation of doctor intent vs dispenser action.** Immutable `prescribed_*` columns vs editable `final_*` columns, with explicit `dispense_status` lifecycle and append-only batch allocations.
2. **Real panel receivables, not just invoices.** Partial payments, reminder log, escalation, credit gate, statement correspondence, AR receipts email log.
3. **Triple-layered authorization.** Middleware allowlist → server guards → DB triggers (price-from-catalog enforcement, audit triggers, RLS).
4. **Migration Center.** Sales-winning, audit-evidenced onboarding from paper / Excel / legacy systems.
5. **Workforce attendance with locum exemption.** Premium roster builder, QR/kiosk/phone punch, leave exceptions with attachments, abbreviations (M/E/F/O), assignment kinds (shift/off/leave_marker).
6. **Platform cockpit with subscriptions + recovery + invites.** Production-grade SaaS administration in-product.

### 9.2 Enterprise-grade features
- Row Level Security across every operational table.
- Append-only audit at the table-trigger level for clinically and financially sensitive events.
- Append-only guards on stock and billing corrections.
- Forced password reset + lockout + admin-issued temp passwords + cross-tenant audited recovery.
- Operational lock states (active / soft_lock / hard_lock / suspended) enforced at the edge.

### 9.3 Workflow advantages
- Status machines wherever it matters: visit `prescription_status`, queue `status`, panel invoice and reminder kinds, attendance `status`, leave `status`, subscription `status`, onboarding invitation `status`.
- Realtime nav badges so desks react to what just happened — billing pending and pending-leave counts are live.

### 9.4 Operational uniqueness
- Locum-aware financial gates *and* attendance exemption — combined.
- Doctor revenue dashboard with **owner-flagged opt-in** plus a financial privacy audit if accessed beyond entitlement.
- Receipts, MCs, referral letters, panel statements, panel payment receipts, A4 landscape receipts all share one letterhead identity.

### 9.5 Architecture maturity
- Idempotent migrations (`create table if not exists`, `add column if not exists`, defensive `do $$ ... $$`).
- Single source of truth for roles in TypeScript with parser, profile mapper, role expansion utilities, and a path allowlist that mirrors the same model.
- Branding constants centralized (`SUMERO_PRODUCT_NAME`, `HEALTHOS_TAGLINE`, `SUMERO_THEME_COLOR`, `SUMERO_TITLE_TEMPLATE`) — already wired into the document title template `%s • Sumero HealthOS`.
- Open-redirect safe helpers and per-tenant storage path enforcement.

---

## 10. Improvement Recommendations

These are gaps relative to a "ready-for-enterprise-RFP" posture; none are blockers, all are opportunities.

### 10.1 Missing enterprise features
- **Supabase MFA enrollment UX** — `mfa_enrolled` exists; the enrollment flow should be exposed in Settings and required for `admin` / `clinic_owner` / `supreme_admin`.
- **SAML / OIDC SSO** for enterprise group operators.
- **Configurable role hierarchy / per-role permission editor** (today the role-to-route mapping is in code).
- **Data export packages** (per-clinic ZIP / CSV bundles) for portability / DSAR compliance.
- **Anonymized analytics warehouse** ETL — current views are operational, not analytical.
- **Patient consent registry** (consent type, signed_at, document) — there's a clinical-notes audit but not a structured consent table.

### 10.2 Scalability improvements
- Move from "single shared Postgres" to **physical sharding by clinic_id** when tenant count or per-tenant payload demands it.
- Introduce a **read replica** for reports (`/reports/*`) to isolate analytical load from operational load.
- Add **materialized views with scheduled refresh** for revenue / profit / doctor revenue (some `_view` patterns exist; promoting them yields cheaper dashboards).
- Cache low-stock counts and dispensing-pending counts at the edge instead of recomputing on every nav render.

### 10.3 UX improvements
- A **global command palette** for power users (jump to patient, queue, invoice).
- **Unified inbox** for notifications + leave pending + billing pending + panel AR alerts (today the badges are scattered).
- A **mobile-first redesign** of `/my-queue`, `/attendance/m` and the patient registration flow.
- **Empty states and onboarding tours** per role (especially for first-time clinic owners post-provision).

### 10.4 Security improvements
- Force **MFA for `clinic_owner` and `supreme_admin`** before access to financial dashboards.
- Add **CSP and HSTS headers** explicitly in Next.js config (currently relying on platform defaults).
- Add **WAF / rate-limit at /api/auth/login-failed** and **CAPTCHA after N failures**.
- **Field-level encryption** at rest for `identity_nric` / `identity_passport`.
- **Per-action approval flow** for high-risk actions (e.g. voiding a paid receipt) — today these are audited but not gated by a second approver.

### 10.5 Production readiness improvements
- **Backup verification job** and a documented restore drill cadence.
- **Migration center "preflight check"** that summarises pending DB migrations and flags drift.
- **Health endpoints** beyond `/api/clinic/subscription-health` (DB latency, storage availability, realtime channel health).
- **Status page** surfaced inside the platform workspace for incident communication to clinic owners.
- **Localization framework** — strings are mostly English; multi-language switching is a foreseeable expansion need for SE Asia.
- **Test coverage** — add automated regression for the queue → dispense → billing happy paths (the repo already has `GO_LIVE_SMOKE_TEST_5MIN.md`, `PANEL_PATIENT_UAT_CHECKLIST.md`, `DOCTOR_FRONTDESK_REGRESSION_CHECKLIST.md` as a strong baseline — promote them to CI).

---

## 11. Technical Appendix

### 11.1 Stack
- **Frontend**: Next.js 14 (App Router) · React 18 · TypeScript 5 · Tailwind CSS 3 · Lucide icons · Sonner toasts · `@dnd-kit` for drag-and-drop · `react-datepicker` · `xlsx` for spreadsheet I/O.
- **Auth**: `@supabase/ssr` + `@supabase/auth-helpers-nextjs`.
- **Backend**: Supabase (Postgres + Auth + Storage + Realtime).
- **Locale baseline**: Malaysia (`Asia/Kuala_Lumpur`, RM currency, SSM / KKM / MMC / APC, NRIC formatting, Malaysia postcodes & states datasets).
- **Branding constants** (`src/lib/brand/healthos.ts`):
  - `SUMERO_PRODUCT_NAME = "Sumero HealthOS"`
  - `SUMERO_COMPANY_NAME = "Sumero Technologies"`
  - `HEALTHOS_TAGLINE = "Secure healthcare intelligence platform"`
  - `CLINIC_WORKSPACE_LABEL = "Clinic workspace"`
  - `PLATFORM_WORKSPACE_LABEL = "Platform workspace"`
  - `OPERATIONS_HUB_LABEL = "Operations hub"`
  - `FOOTER_POWERED_BY = "Powered by Sumero Technologies"`
  - `FOOTER_RUNNING_ON = "Running on Sumero HealthOS"`
  - `SUMERO_THEME_COLOR = "#0F2B63"`

### 11.2 Route surface (high-level)

**Public (no auth):** `/login`, `/check-in`, `/onboarding/[token]`, `/clinic-suspended`, `/access-denied`, `/tv`, `/tv-display`, `/tv-queue`, `/queue-tv` (display only).

**Authenticated workspace (`/(protected)/`):** `dashboard`, `dashboard/owner-summary`, `patients`, `panel-companies`, `doctors`, `appointments`, `queue`, `my-queue`, `doctor-dashboard`, `visits`, `consultation/[queueId]`, `dispensing`, `prescriptions`, `label-print`, `billing`, `billing/receipt`, `billing/outstanding-invoice`, `medicine-counter`, `medicine-counter/receipt`, `inventory`, `inventory/advanced`, `templates`, `referral-letters`, `medical-certificates`, `queue-tv/manage`, `queue-tv/settings`, `attendance` (kiosk · scan · qr · schedule · analytics · leave · management · reports · settings), `migration-center` (history · import · inventory · legacy-patient · manual-migration · panel-companies · patients · failed-imports), `admin/users`, `admin/staff`, `audit-logs`, `patient-activity`, `reports` (revenue · profit · doctor-revenue · outstanding-payments · panel-receivables · follow-up · missed-followups), `settings` (services).

**Platform workspace (`/platform/*`):** `auth-recovery`, `provision`, and the main cockpit.

**API surface (`/api/*`):** `admin/*`, `appointments`, `attendance/*`, `auth/*`, `billing/*`, `clinic/*`, `cron`, `doctor`, `inventory/*`, `medicine-counter/*`, `migration-center/*`, `onboarding/[token]`, `platform/*`, `queue`, `queue-tv/*`, `referral-letters`, `reports/*`, `templates`.

### 11.3 Schema highlights (108+ migrations)
- Core: `clinics`, `profiles`, `doctors`, `patients`, `appointments`, `queue`, `visits`, `visit_items`, `prescriptions`, `medicines`, `medicine_inventory`, `medicine_stock_movements`, `clinic_items`, `payments`, `medical_certificates`, `diagnosis_templates`, `template_items`, `inventory_items`, `audit_logs`, `notifications`.
- Panel & receivables: `panel_companies`, `panel_invoices`, `visit_panel_billings`, `panel_invoice_payments`, `panel_invoice_reminder_log`, `panel_ar_receipts_email_log`, `panel_company_collection_notes`.
- Advanced inventory: `inventory_suppliers`, `inventory_purchase_orders`, `inventory_purchase_order_lines`, `medicine_stock_batches`, `medicine_inventory_movements`, `visit_item_batch_allocations`, near-expiry / dead-stock / margin views, `stock_adjustments` dedicated audit table.
- Medicine Counter: `medicine_sales`, `medicine_sale_items`, sticker sale snapshots.
- Attendance: `attendance_policies`, `attendance_records`, `attendance_adjustment_logs`, `attendance_shifts`, `attendance_rosters`, `attendance_exceptions` (leave), QR system, kiosk and timetable v2.
- Referral & follow-up: `referral_letters`, `follow_up_reminders`.
- Queue TV: `queue_tv_settings`, `queue_tv_media`.
- SaaS / platform: `clinic_subscriptions`, `clinic_branch_shares`, `platform_audit_logs`, `onboarding_invitations`, `clinic_expenses`.
- Auth / security: `auth_security_events`, `doctor_permission_audit`, `financial_privacy_audit_*`, `visit_billing_correction_audit`, `stock_adjustments_dedicated_audit_table`.
- Migration: `patient_migration_records`, `patient-migration-attachments` storage bucket.

### 11.4 Key invariants enforced at the database
- `profiles.role` ∈ {`supreme_admin`, `clinic_owner`, `admin`, `doctor`, `frontdesk`, `nurse`, `pharmacist`, `accountant`}.
- `profiles.role = 'supreme_admin' ⇒ clinic_id IS NULL` (constraint).
- `visits.prescription_status` lifecycle restricted to `PRESCRIBED` → `DISPENSING` → `READY_FOR_PAYMENT` → `PAID` → `COMPLETED`.
- `visit_items.price` must match `clinic_items.price` unless the actor is allowed to override (locum/doctor attempts logged).
- Append-only guards on stock adjustments and visit billing corrections.
- Doctors' MRN unique per clinic; `supabase_user_uuid` unique globally.
- Idempotent migrations throughout (defensive `do $$ ... $$` blocks, `drop policy if exists`, `add column if not exists`).

### 11.5 Operational artefacts already in the repo
- `GO_LIVE_SMOKE_TEST_5MIN.md` — 5-minute smoke test.
- `PANEL_PATIENT_UAT_CHECKLIST.md` — panel patient UAT.
- `DOCTOR_FRONTDESK_REGRESSION_CHECKLIST.md` — doctor / front desk regression checklist.

These are direct evidence that Sumero HealthOS is run as an operational product, not a prototype.

---

*Document version: generated from the live `src/`, `supabase/migrations/`, and `lib/brand` source of truth. Every module, role, workflow and table described above maps to actual implementation in this repository.*
