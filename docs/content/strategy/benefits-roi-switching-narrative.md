# BlokSec: Benefits, ROI & Switching Narrative

> **Audience:** Internal — Sales Lead, CEO, Rob  
> **Purpose:** Build the narrative for why buyers choose BlokSec, what they gain, and why switching is low-risk  
> **Date:** March 2026  
> **Evidence basis:** Product repo v4.0 audit, Interra POC, Carroll Supply case, ADR review

---

## The One-Line Story

**BlokSec is the only passwordless platform that covers both office workers and frontline workers — without requiring smartphones, hardware tokens, or infrastructure changes.**

That's the wedge. Everything below supports it.

---

## 1. Benefit Map by Buyer Persona

| Persona | What They Care About | BlokSec Benefit | Proof Point |
|---------|---------------------|-----------------|-------------|
| **CISO / Security** | Breach risk, phishing, audit trail integrity | Passwordless eliminates #1 attack vector; immutable append-only audit logs can't be tampered with — even by compromised admins | Carroll Supply: weak passwords transmitted in plaintext; BlokSec eliminates this entirely |
| **IT Director** | Help desk burden, deployment speed, protocol coverage | Delegated badge management shifts resets to line managers; OIDC + SAML + WS-Fed from one platform | ADR-0009: manager-level delegation shipped; Interra POC: 3 apps federated in 2 weeks |
| **VP Operations** | Shift-change speed, gloved/PPE environments, seasonal onboarding | BlokBadge: scan QR + optional PIN — works with gloves, no typing, no phone | ADR-0013: Level 0 (no-PIN) shipped Oct 2025 for supervised environments |
| **CFO / Finance** | Total cost, hardware spend, support costs | No hardware tokens to buy/replace; serverless architecture = pay-per-use; fewer IT tickets | ADR-0008: Lambda/CloudFront = no infrastructure CAPEX |
| **Compliance** | FDA 21 CFR Part 11, PCI DSS 4.0, SOC 2, HIPAA | Individual accountability on shared devices; immutable audit trail; unique electronic signatures | Architecture: append-only ledger designed to prevent key-replacement attacks |
| **MSP Partner** | Margin, differentiation, support burden | White-label ready; delegated admin reduces support calls; recurring revenue model | Admin: branding/theming shipped; bulk badge ops via centralized API |

---

## 2. ROI Framework

> ⚠️ **Honest position:** We do not yet have published case studies with specific dollar figures. The framework below uses industry benchmarks and repo-verified capabilities. First case studies are a priority deliverable.

### Cost Avoidance (Quantifiable)

| Cost Category | Industry Benchmark | How BlokSec Helps | Estimated Impact |
|--------------|-------------------|-------------------|-----------------|
| **Password reset tickets** | $70/ticket avg (Gartner); 20–50% of help desk volume | Passwordless = zero password resets | Org with 500 users: **$50K–$175K/yr** in ticket cost avoidance |
| **Hardware token procurement** | $25–$90/key (Yubico); replacement cycle 18 months | BlokBadge prints on standard badge printer; $0 per-unit cost | 500 users × $50 avg = **$25K saved** on initial rollout alone |
| **Onboarding time (frontline)** | 2+ weeks for device-based MFA provisioning | BlokBadge-first provisioning: admin creates user → badge ready same day | ADR-0010: single atomic API call; seasonal hiring unblocked |
| **Audit preparation** | 40–80 hours per audit cycle for log compilation | Immutable logs with built-in export, geo-tracking, event filtering | Compliance team hours reduced; auditor confidence increased |

### Operational Gains (Qualitative but Real)

- **Shift-change speed:** 2-second badge scan vs. 2-minute password entry on shared terminals
- **IT ticket deflection:** Manager-level badge delegation means PIN resets don't hit the help desk
- **Reduced credential sprawl:** Shared credential vaults replace sticky notes and spreadsheets
- **Protocol consolidation:** One platform handles OIDC, SAML 2.0, and WS-Federation — no vendor per protocol

---

## 3. Why Switch? Rationale by Competitor Category

### vs. Push-MFA Platforms (Duo, Okta Verify)

| Problem with Status Quo | BlokSec Answer |
|------------------------|----------------|
| Requires every user to have a smartphone | BlokBadge works without any personal device |
| Frontline workers in manufacturing/retail often lack company phones | 80%+ of frontline workers don't carry managed devices on shift |
| Push fatigue leads to approval of fraudulent prompts | No push notifications — badge + optional PIN is deliberate, not reflexive |

### vs. Microsoft Entra ID (standalone)

| Problem with Status Quo | BlokSec Answer |
|------------------------|----------------|
| No native frontline/shared-device solution | BlokBadge fills the gap Entra doesn't cover |
| WS-Trust legacy complexity creates re-auth loops | Carroll Supply evidence: BlokSec eliminates the password backend entirely |
| Entra MFA still depends on phone or FIDO2 key | BlokSec complements Entra — federate the domain, add passwordless |

**Positioning:** BlokSec is not an Entra replacement. It's the frontline layer Entra doesn't have.

### vs. Hardware Token Vendors (Yubico, etc.)

| Problem with Status Quo | BlokSec Answer |
|------------------------|----------------|
| $25–$90 per key; keys get lost, broken, forgotten | Badges print in 30 seconds on existing printers; $0 marginal cost |
| Replacement logistics for distributed workforce | Admin or manager reprints badge on-site — no procurement cycle |
| Doesn't work with gloves or PPE | QR scan works hands-free or with any gloves |

### vs. Enterprise Passwordless (HYPR, Beyond Identity)

| Problem with Status Quo | BlokSec Answer |
|------------------------|----------------|
| Enterprise-complex, enterprise-priced | BlokSec is built for MSPs and mid-market; simpler deployment model |
| Requires managed devices | BlokBadge works for workers without any managed device |
| No MSP/channel motion | BlokSec white-labels; delegated admin supports partner operations |

---

## 4. The "Aha" Moment — Risk Mitigation Narrative

> **The skeptic's question:** *"Why should we trust a newer vendor over Okta/Microsoft?"*

### The reframe:

**The risk isn't switching. The risk is staying.**

1. **Your passwords are already being transmitted in plaintext.**  
   Carroll Supply discovered Microsoft Exchange was sending credentials in clear text in request bodies. The password was the company name. This isn't an edge case — it's the norm for organizations with legacy auth. BlokSec eliminates the password backend entirely. There's nothing to intercept.

2. **Your audit logs can be tampered with.**  
   Traditional identity platforms store audit logs in mutable databases. One compromised admin account and your compliance evidence disappears. BlokSec stores authentication events in an append-only immutable ledger — records can only be added, never modified or deleted. This is the difference between "we have logs" and "we have proof."

3. **Your frontline workers are your biggest gap.**  
   Office workers have laptops and phones. Frontline workers have shared terminals and gloves. Every identity platform in the market assumes a personal device. BlokSec doesn't. That's not a feature — it's a fundamentally different architecture.

### The proof it works:

- **Interra Networks POC:** Tenant created Week 1. Three CRM applications federated via templates by Week 2. Seventeen users onboarded with passwordless login under 10 seconds. Four-week timeline from zero to production-ready.
- **Carroll Supply:** Domain re-federation took 30 seconds. Legacy auth pain (10–15 re-auth prompts/day) eliminated. No user migration required.

### The switching cost is near-zero:

- Standard protocols (OIDC, SAML, WS-Fed) mean no proprietary lock-in
- Directory sync from Microsoft Graph and Google Workspace means no manual user import
- Pre-built app templates mean configuration, not custom development
- BlokBadge-first provisioning means users are live before they install anything

---

## 5. Three Conversations to Have Next

### Conversation 1: "The Floor Problem" (Operations / IT)
> *"How do your frontline workers authenticate today? Shared passwords? Buddy-punching? No MFA at all? Every one of those is a compliance finding waiting to happen — and none of the big identity vendors solve it."*

### Conversation 2: "The Compliance Trigger" (CISO / Compliance)
> *"PCI DSS 4.0 requires MFA for every point-of-sale terminal. FDA 21 CFR Part 11 requires unique electronic signatures. Your seasonal workers don't have company phones. How are you planning to comply?"*

### Conversation 3: "The Cost of Doing Nothing" (CFO / CEO)
> *"You're spending $70 per password reset ticket and replacing $50 hardware tokens every 18 months. Your help desk spends 30% of its time on credential issues. BlokSec eliminates the password, eliminates the hardware, and lets managers handle badge resets themselves."*

---

## 6. What We Can't Say Yet

Transparency builds trust internally. These items are **not ready for external use**:

| Claim | Status | What's Needed |
|-------|--------|---------------|
| Specific dollar ROI from a named customer | No case studies published | Interra or Carroll Supply willing to be referenced |
| "70% IT ticket reduction" | Directional estimate, not measured | Instrumented before/after measurement at a deployment |
| SCIM provisioning available | Roadmap, not shipped | Engineering delivery |
| Mobile credential vault | Not yet released | Product launch |
| MSP portal and partner operations | Developing, not productized | Partner workflow formalization |
| Specific Ping Identity integration | No repo evidence | Testing and documentation |

---

## Summary: The Narrative Arc

1. **Open with the gap:** "Your identity platform doesn't cover your frontline workers."
2. **Name the pain:** Shared passwords, no MFA on the floor, compliance exposure, help desk overload.
3. **Show the architecture:** Passwordless, device-free, split-key crypto, immutable audit.
4. **Prove it works:** Interra POC (4 weeks), Carroll Supply (30-second cutover).
5. **Frame the economics:** No hardware, no passwords, delegated admin, pay-per-use infrastructure.
6. **Close with risk:** The risk is staying on passwords, not switching to passwordless.

---

*This document is grounded in product repo v4.0 evidence. Claims marked as not-yet-ready are excluded from the narrative. Update as case studies and new capabilities ship.*
