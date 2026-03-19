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
- ECDSA asymmetric cryptography — no shared secrets

**Integrations:**
- Microsoft Entra ID (Azure AD)
- Google Workspace
- Okta
- Ping Identity
- Salesforce
- Any OIDC/SAML 2.0/WS-Federation application

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
- Badge can be printed on any standard badge printer in ~30 seconds
- Lost/stolen badge is deactivated remotely and instantly
- New badge printed immediately — no hardware procurement
- Works with gloves, in clean rooms, with PPE

**Why this matters:**
- Traditional MFA requires smartphones — 80% of frontline workers don't have company-issued devices
- Hardware tokens (YubiKeys) cost $25-90 each, get lost, require logistics
- RFID/NFC solutions (OLOID) require infrastructure investment
- BlokBadge needs only a printer

**Cost comparison:**
| Method | Per-Worker Cost | Infrastructure |
|--------|----------------|---------------|
| BlokBadge | $3-5/mo | Standard badge printer |
| YubiKey | $25-90 one-time + replacement | Key management system |
| OLOID | Not disclosed | RFID/NFC readers at every terminal |
| Smartphone MFA | $3-9/mo | Requires personal device |

---

## BlokSafe — Credential & Sensitive Data Vault

**Target:** All workers

**What it does:**
- Stores and manages credentials and sensitive data
- Zero-password sharing between team members
- Encrypted vault with access controls
- Eliminates the need for shared password spreadsheets or sticky notes

---

## BlokSec Admin — Management Console

**Target:** IT administrators, MSP technicians

**What it does:**
- Centralized management of all BlokSec products
- User provisioning and deprovisioning
- Application configuration and integration management
- Audit trail viewing and compliance reporting
- Badge printing and management (BlokBadge)
- Multi-tenant support for MSPs managing multiple clients
