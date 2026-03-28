# Healthcare MFA: BlokSec's First Target Vertical

> **Audience:** Internal — Sales Lead, CEO, Rob  
> **Purpose:** Define healthcare/LTC as first target vertical with pitch, ICP, benefits, gaps, and GTM approach  
> **Date:** March 2026  
> **Status:** Strategy doc — not yet validated with prospects

---

## Why Healthcare, Why Now

Two regulatory forces are converging to create **mandatory MFA demand** across healthcare — especially long-term care (LTC) and post-acute care (PAC):

### 1. HIPAA Security Rule Update (2026–2027)
- First major update in **20 years**
- MFA moves from "addressable" (optional with documentation) to **mandatory**
- Covers **all ePHI systems**: EHR/EMR, cloud, imaging, email, file shares, admin consoles, VPN, APIs
- Applies to **all workforce members** — clinicians, support staff, administrators, business associates
- Final rule expected mid-2026; enforcement ~early 2027 after 180-day grace period
- **SMS-based MFA considered last-resort** — phishing-resistant methods (FIDO2, hardware tokens) preferred

### 2. PointClickCare Mandatory MFA (Active Now)
- PointClickCare is the **dominant EHR platform in long-term and post-acute care**
- MFA already mandatory for: remote users, IT admins, security/config access
- Expanding to **all users** (mobile, eMAR, POC, API integrations) by 2026
- 3-legged OAuth required for Marketplace partners by Feb 2026
- LTC facilities using PointClickCare **must comply regardless of HIPAA timeline**

### The Market Opportunity
| Metric | Value |
|--------|-------|
| US healthcare workers | ~18 million |
| Average healthcare breach cost | $10M+ (IBM) |
| Nurses sharing credentials | 57.5% (direct HIPAA violation) |
| Healthcare IT leaders with passwordless | Only 7% |
| Healthcare IT leaders calling MFA "mission-critical" | 85% |
| Long-term care facilities in US | ~15,000+ |

**The gap:** 85% say it's critical, 7% have done it, and now it's mandatory. That's a market in panic-buy mode.

---

## The Problem We Solve

Healthcare MFA is hard because **healthcare workflows are hostile to traditional MFA**:

| Challenge | Why Standard MFA Fails | BlokSec Answer |
|-----------|----------------------|----------------|
| **Shared workstations** | Push MFA requires personal phone at every login; clinicians move between 5–10 stations per shift | BlokBadge: scan QR badge at any station — no phone needed |
| **Gloves and PPE** | Can't type passwords or use fingerprint readers with surgical/exam gloves | BlokBadge: scan-only, no typing required |
| **Speed pressure** | Login delays during patient care are unacceptable; MFA fatigue leads to workaround behavior | Level 0: tap-and-go in supervised areas (2 seconds); Level 1–4: badge + PIN |
| **High turnover** | CNAs and seasonal staff cycle rapidly; device-based MFA provisioning takes weeks | BlokBadge-first provisioning: admin prints badge, worker is live same day |
| **Credential sharing** | 57.5% of nurses share passwords — "everyone knows the password" culture | Passwordless eliminates shared credentials entirely; each badge is unique |
| **Night/weekend shifts** | IT support unavailable; lockouts go unresolved for hours | Delegated badge management: charge nurse or shift supervisor resets PINs |
| **Compliance audit trail** | Shared credentials make audit logs meaningless — who actually accessed the record? | Immutable per-user audit trail; every access tied to an individual |

---

## The Pitch (30-Second Version)

> *"HIPAA now requires MFA on every system that touches patient records. Your nurses share workstations, wear gloves, and don't carry company phones. Traditional MFA doesn't work here. BlokSec gives every healthcare worker their own secure badge — scan it at any station, add a PIN, and they're in. No phone, no hardware token, no typing. Individual accountability, immutable audit trail, HIPAA-ready."*

---

## Benefits Map — Healthcare Personas

| Persona | Title Examples | What They Care About | BlokSec Benefit | Conversation Opener |
|---------|---------------|---------------------|-----------------|-------------------|
| **Clinical IT** | IT Director, CIO, CISO | PointClickCare MFA compliance, deployment complexity, help desk load | Badge-based MFA that works on shared stations; deploys in days not months; delegated resets reduce IT tickets | *"How are you planning to meet PointClickCare's MFA mandate for eMAR and POC users?"* |
| **Nursing Leadership** | CNO, DON, Nurse Manager | Workflow disruption, staff resistance, speed of care | 2-second badge scan doesn't slow care; no app install; works with gloves | *"Your nurses move between 10 stations a shift. How many times a day are they typing passwords?"* |
| **Compliance / Risk** | Compliance Officer, Privacy Officer, Risk Manager | HIPAA audit readiness, individual accountability, breach liability | Immutable audit logs per user; eliminates shared-credential violation; breach evidence is tamper-proof | *"If 57% of your staff share credentials, your audit trail isn't proving what you think it's proving."* |
| **Operations / Admin** | Administrator, ED, COO | Onboarding speed, staff turnover cost, operational disruption | Same-day provisioning for new hires; badge reprint in 30 seconds for lost credentials; no hardware procurement | *"How long does it take to get a new CNA authenticated on all your systems today?"* |
| **IT at MSP serving LTC** | vCIO, Service Desk Lead | Multi-facility management, support ticket volume, recurring revenue | White-label; centralized admin across facilities; badge delegation reduces tickets | *"How many password reset tickets do your LTC clients generate per month?"* |

---

## Ideal Customer Profile (ICP)

### Primary: Long-Term Care / Post-Acute Care Facilities

| Attribute | Target |
|-----------|--------|
| **Facility type** | Skilled nursing, assisted living, memory care, rehab, home health agencies |
| **Size** | 50–500 staff per facility; multi-facility operators (2–20 locations) ideal |
| **EHR platform** | PointClickCare (dominant in LTC), MatrixCare, American HealthTech |
| **Current auth** | Passwords on shared workstations; possibly AD/LDAP; minimal or no MFA |
| **Compliance pressure** | HIPAA MFA mandate 2026–2027; PointClickCare MFA enforcement now; state survey readiness |
| **IT maturity** | Low — lean teams (1–3 IT staff) or outsourced to MSP/MSSP |
| **Budget authority** | Administrator/ED (small), VP IT or CIO (multi-facility), MSP (outsourced) |
| **Pain signal** | Recent survey finding, PointClickCare MFA enforcement email, breach at peer facility, cyber insurance questionnaire |

### Secondary: Regional Healthcare / Clinics

| Attribute | Target |
|-----------|--------|
| **Facility type** | Community hospitals, urgent care chains, dental/vision chains, outpatient clinics |
| **Size** | 100–5,000 staff |
| **EHR platform** | Epic, Cerner, athenahealth, NextGen |
| **Current auth** | Mix of AD + Duo/Okta for office; shared passwords on clinical stations |
| **Pain signal** | HIPAA audit finding, HITRUST certification requirement, clinical workflow complaints |

### Disqualifiers (Don't Pursue Yet)
- Large hospital systems (>5,000 staff) — enterprise sales cycle, existing IAM vendors entrenched
- Organizations requiring SCIM provisioning — not yet shipped
- Facilities needing mobile credential vault — not yet released

---

## Competitive Landscape in Healthcare

| Competitor | What They Offer | Their Weakness | Our Angle |
|-----------|----------------|----------------|-----------|
| **Duo (Cisco)** | Push MFA, strong MSP channel | Requires smartphone — nurses don't carry phones on the floor | *"Duo requires a phone. Your CNAs don't have one."* |
| **Imprivata** | Tap-and-go badge auth, deep Epic integration | Enterprise-priced, requires proprietary readers at every station (~$200+/station) | *"Imprivata needs hardware at every workstation. BlokSec needs a printer."* |
| **Microsoft Entra** | Bundled with M365, FIDO2 support | No native shared-workstation solution; FIDO2 keys expensive at scale | *"Entra doesn't solve for shared stations. BlokSec fills that gap."* |
| **Okta** | Broad IAM platform | No frontline/shared-device MFA; phone-centric | *"Okta assumes every worker has a managed device."* |
| **Badge-only proximity (HID, RF Ideas)** | Tap-to-login at workstation | Single factor — not MFA; doesn't meet HIPAA 2026 mandate alone | *"Proximity badges are single-factor. HIPAA now requires MFA. BlokBadge is MFA."* |

**Key positioning vs. Imprivata:** Imprivata is the incumbent in hospital badge auth but requires significant infrastructure investment (proprietary readers, virtual desktop agents, per-workstation hardware). BlokSec's QR-based approach works with any device that has a camera — no per-station hardware.

---

## What We Have Today (Repo-Verified)

| Capability | Status | Healthcare Relevance |
|-----------|--------|---------------------|
| BlokBadge QR + PIN authentication | ✅ Shipped | Core shared-workstation MFA |
| Level 0 passphrase (tap-and-go) | ✅ Shipped (ADR-0013) | Supervised kiosk/medication station access |
| Immutable append-only audit logs | ✅ Shipped | HIPAA audit trail requirement |
| Delegated badge management | ✅ Shipped (ADR-0009) | Charge nurse / shift supervisor resets |
| BlokBadge-first provisioning | ✅ Shipped (ADR-0010) | Same-day staff onboarding |
| Bulk badge operations | ✅ Shipped (ADR-0007) | Multi-facility batch provisioning |
| Directory sync (MS Graph, Google) | ✅ Shipped | Sync from AD/Azure AD |
| SAML 2.0 + OIDC + WS-Federation | ✅ Shipped | EHR federation (PointClickCare supports SAML) |
| White-label / branding | ✅ Shipped | MSP and multi-facility custom branding |
| Geo-tracking in audit logs | ✅ Shipped | Multi-facility compliance reporting |
| Split-key cryptography | ✅ Shipped | Badge theft alone is useless |
| App templates marketplace | ✅ Shipped | Faster EHR integration setup |

---

## What We Need to Build / Prove

### Must-Have (Before First Healthcare Sale)

| Gap | Why It Matters | Effort Estimate | Owner |
|-----|---------------|-----------------|-------|
| **PointClickCare SAML integration validation** | PCC is the dominant LTC platform; must prove federation works | Test environment + documentation | Engineering |
| **Healthcare-specific demo environment** | Can't sell without showing badge → EHR login flow | Preconfigured tenant with simulated EHR | Engineering + Sales |
| **HIPAA compliance mapping document** | Buyers need a checklist showing how BlokSec maps to each HIPAA control | Marketing/compliance artifact | Product Marketing |
| **BAA (Business Associate Agreement) template** | Required before any healthcare org shares ePHI access | Legal artifact | Legal / CEO |
| **1 LTC pilot / proof-of-concept** | No healthcare case study = no credibility; need a reference-able deployment | 4–6 week POC (Interra model) | Sales + Engineering |

### Should-Have (Before Scaling)

| Gap | Why It Matters | Effort Estimate |
|-----|---------------|-----------------|
| **Healthcare buyer persona content** (CNO, DON, Compliance Officer) | Sales needs persona-specific decks and one-pagers | Product Marketing |
| **"HIPAA MFA 2026" SEO content** | High-intent keyword identified in market research; we should own this page | Content Marketing |
| **ROI calculator for healthcare** | Password reset cost + breach risk + onboarding speed | Product Marketing |
| **MSP healthcare outreach sequence** | MSPs serving LTC are the fastest channel | Sales / Marketing |
| **EHR integration matrix** | Which EHRs support SAML/OIDC and what's the federation path | Engineering / Partnerships |

### Nice-to-Have (Future)

| Gap | Why It Matters |
|-----|---------------|
| Epic / Cerner integration validation | Opens hospital segment (secondary ICP) |
| HITRUST certification or mapping | Some healthcare buyers require this |
| State survey readiness guide | LTC facilities face annual state surveys |

---

## Go-to-Market Approach

### Phase 1: Validate (Months 1–2)
**Goal:** Prove BlokSec works in one LTC facility

1. **Validate PointClickCare SAML federation** in a test environment
2. **Identify 2–3 LTC facilities** through existing network, MSP partners, or cold outreach to PointClickCare-using facilities that received MFA enforcement notices
3. **Run a 4-week POC** at one facility (Interra model: Week 1 tenant setup, Week 2 app federation, Week 3 staff onboarding, Week 4 exit criteria)
4. **Capture metrics:** Login speed, badge provisioning time, staff feedback, audit log export for compliance review
5. **Produce first case study** (even anonymized)

### Phase 2: Package (Months 2–3)
**Goal:** Create repeatable healthcare sales motion

1. **HIPAA compliance mapping** document published
2. **Healthcare demo environment** operational
3. **BAA template** ready
4. **Healthcare landing page / one-pager** created
5. **"HIPAA MFA 2026 Guide"** published (SEO play)
6. **Pricing validated** for healthcare segment ($3–5/user/mo positions below Imprivata)

### Phase 3: Scale (Months 3–6)
**Goal:** Repeatable revenue from LTC vertical

1. **MSP channel activation** — identify MSPs/MSSPs serving LTC facilities
2. **PointClickCare Marketplace exploration** — can BlokSec be listed as a cybersecurity partner?
3. **Conference presence** — HIMSS, AHCA/NCAL, LeadingAge (identify which events)
4. **Expand to secondary ICP** — regional hospitals, clinic chains, dental/vision

---

## The Narrative for Stakeholder Conversations

### For the CEO
> "Healthcare is about to become a forced-buy market. HIPAA is mandating MFA for the first time in 20 years, and PointClickCare — the dominant platform in long-term care — is enforcing it now. The entire LTC industry needs MFA that works on shared workstations with workers who don't have phones. That's exactly what BlokBadge does. We have the product. We need one pilot to prove it, and then we have a vertical with 15,000+ facilities and a regulatory deadline."

### For the Sales Lead
> "The opening question for every LTC facility is: 'How are you planning to meet the PointClickCare MFA mandate for your floor staff?' Most of them don't have an answer. Duo requires phones. Imprivata requires hardware at every station. We need to validate our SAML federation with PointClickCare, run one pilot, and then we have a repeatable conversation with a clear compliance trigger."

### For the Team
> "Healthcare is our first vertical where the buyer doesn't have a choice — MFA is mandatory. Our job in Q2 is to prove we can federate with PointClickCare, run a pilot at one LTC facility, and produce a case study. Everything else — SEO, MSP channel, conference presence — follows from that proof."

---

## Risk and Honest Assessment

| Risk | Mitigation |
|------|-----------|
| No healthcare customers yet | POC-first approach; don't market until proven |
| No PointClickCare integration validation | Technical validation is first priority — must confirm SAML works |
| Imprivata is entrenched in hospitals | We're not targeting hospitals initially — LTC facilities are underserved |
| HIPAA timeline could slip | PointClickCare mandate is independent — enforcement is happening now |
| No BAA in place | Must be created before any pilot involving real ePHI |
| SCIM not shipped | LTC facilities are small enough for manual/directory-sync provisioning |

---

*This document defines healthcare as BlokSec's first target vertical based on the convergence of HIPAA MFA mandates and PointClickCare enforcement. All product claims are repo-verified. Market data sourced from HIPAA rulemaking, PointClickCare documentation, and industry research. Update as validation progresses.*
