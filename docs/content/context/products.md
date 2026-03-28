# BlokSec Product Suite

## BlokKey — Mobile-First Passwordless MFA

**Target:** Knowledge workers, office workers, anyone with a smartphone

**How it works:**
1. User attempts to log into an application
2. BlokSec sends a push notification to the user's registered mobile device
3. User confirms with biometric (fingerprint/face) + intent verification
4. Authentication completes — no password entered at any point

**Authentication factors (3-factor):**
- **Something you are:** Biometric (fingerprint, face recognition)
- **Something you have:** Registered mobile device
- **Something you do:** Intent verification (conscious approval action)

**Technical details:**
- HD (Hierarchical Deterministic) wallet generates unique key pairs per application
- Per-app key isolation prevents cross-application compromise
- Private keys never leave the device
- Asymmetric cryptography reduces reusable shared-secret exposure

**Integration fit:**
- Standards-based support across OIDC, SAML 2.0, and WS-Federation applications
- Microsoft environments are part of the stack-fit story, with exact setup depending on the federation path and customer environment
- Google Workspace, Okta, and similar identity environments should be described according to the documented deployment pattern in use
- Named-provider claims should follow current proof rather than generic compatibility assumptions

---

## BlokBadge — Deviceless MFA for Frontline Workers

**Target:** Factory floor workers, retail staff, warehouse workers, food processing, anyone without a personal device

**This is BlokSec's sharpest competitive edge.**

**How it works:**
1. Worker receives a printed QR badge (like a name badge)
2. At a shared terminal/kiosk, worker scans the QR badge
3. Worker enters their personal PIN
4. Authentication completes — 2-factor MFA without any electronic device

**Authentication factors (2-factor):**
- **Something you have:** Physical QR badge (possession)
- **Something you know:** Personal PIN (knowledge)

**Technical details:**
- **Split-key cryptography:** The QR badge contains half of an encryption key. The server holds the other half. Neither half works alone.
- Badges can be printed on standard badge printers or delivered digitally where supported
- Deactivation and re-issue are handled through administrative workflows
- Works well with gloves, in clean rooms, and in PPE-constrained environments

**Why this matters:**
- Phone-based MFA breaks down when workers do not have reliable smartphone access
- Hardware tokens create replacement and logistics overhead
- Reader-based approaches can add infrastructure cost and rollout friction
- BlokBadge fits QR-based workflows that work with existing cameras and badge operations

---

## BlokSafe — Credential & Sensitive Data Vault

**Target:** All workers

**What it does:**
- Stores and manages credentials and sensitive data
- Gives users a launchpad for credentials and application access
- Supports controlled sharing workflows for users and groups
- Replaces ad hoc password spreadsheets and sticky-note workarounds with encrypted, permissioned access

---

## BlokSec Admin — Management Console

**Target:** IT administrators, MSP technicians

**What it does:**
- Centralized management of BlokSec authentication, vault, and application configuration
- User provisioning, suspension, and lifecycle management
- Reporting, analytics, export, and audit-trail review
- Badge provisioning, bulk actions, and device management
- Multi-tenant and branding foundations that can support partner-led deployments with the right operating model
