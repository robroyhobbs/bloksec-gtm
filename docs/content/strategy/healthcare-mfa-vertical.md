# Healthcare MFA: BlokSec's First Target Vertical

> **Audience:** Internal — Sales Lead, CEO, Rob
> **Purpose:** Define the healthcare entry wedge, the target buyer, and the minimum proof needed to pursue it
> **Date:** March 2026
> **Status:** Strategy doc — not yet validated with prospects

---

## The market reality

Healthcare is becoming a forced-buy MFA market.

Three signals matter:

- **HIPAA is moving toward mandatory MFA** for systems handling ePHI.
- **PointClickCare is already enforcing MFA** across more of the long-term care workflow.
- **The workflow is hostile to standard MFA** because workers share stations, move fast, wear gloves, and often do not carry managed phones.

That combination makes healthcare — especially long-term care — one of the clearest regulated wedges for BlokSec.

---

## Why BlokSec fits

BlokSec is strongest when the customer has:

- shared workstations
- frontline users without reliable access to company phones
- accountability problems caused by shared credentials
- audit pressure tied to regulated workflows
- lean IT teams that cannot support hardware-heavy rollouts

That maps directly to long-term care, post-acute care, and smaller healthcare environments.

---

## The pitch

> “Healthcare now needs MFA that works in the real world, not just on paper. Your staff share stations, move fast, wear gloves, and do not all carry company phones. BlokSec gives each worker a secure badge-based login that works on shared devices, strengthens accountability, and supports a cleaner audit trail without rolling out hardware tokens everywhere.”

### Short version for outreach

> “PointClickCare and HIPAA are forcing MFA into environments where phone-based MFA does not fit. BlokSec gives long-term care teams a badge-based path that works on shared stations, improves accountability, and avoids hardware-heavy rollouts.”

---

## Why now

### Regulatory and market convergence

- HIPAA is moving from “addressable” MFA language toward a stronger mandatory posture.
- PointClickCare is already creating operational urgency in long-term care by expanding MFA enforcement.
- Many healthcare organizations still do not have a workable answer for floor staff and shared terminals.

### Market signals

| Metric | Value |
|--------|-------|
| US healthcare workers | ~18 million |
| Long-term care facilities in the US | ~15,000+ |
| Nurses sharing credentials | 57.5% |
| Healthcare IT leaders calling MFA mission-critical | 85% |
| Healthcare IT leaders with passwordless already deployed | 7% |

**The opportunity:** the market knows the problem is real, but most organizations still do not have a workable deployment model.

---

## Who we target first

### Primary ICP

**Long-term care and post-acute care operators**

- skilled nursing
- assisted living
- memory care
- rehab
- home health agencies

Best fit:

- **50–500 staff per facility**
- **2–20 location operators**
- **PointClickCare-heavy environments**
- **lean internal IT or outsourced IT**
- **shared workstation workflows**

### Secondary ICP

Smaller clinics, urgent care chains, and regional healthcare groups where the shared-device problem still exists but the sales cycle is less enterprise-heavy than large hospital systems.

### Disqualifiers for now

- very large hospital systems with entrenched enterprise IAM stacks
- buyers who require SCIM from day one
- programs that depend on capabilities still outside the current claim set

---

## The problem we solve

Traditional MFA breaks down in healthcare for simple reasons:

- **shared workstations:** a phone prompt at every station change is not workable
- **gloves and PPE:** typing and biometric assumptions fail
- **speed pressure:** login friction becomes care disruption
- **high turnover:** onboarding and re-issues have to happen fast
- **shared credentials:** the workaround destroys accountability

BlokSec answers that with:

- badge-based authentication for shared devices
- optional PIN levels depending on the environment
- Level 0 flows for supervised kiosk-style access
- delegated badge management for faster recovery
- immutable audit records tied to a real individual

---

## The buyer story

### Clinical IT

This buyer cares about PointClickCare readiness, rollout complexity, and support burden.

**Opening question:**
*How are you planning to meet PointClickCare MFA requirements for workers on shared stations?*

### Nursing leadership

This buyer cares about speed, adoption, and disruption to care workflows.

**Opening question:**
*How many times a shift are nurses or aides still typing credentials at shared stations?*

### Compliance and risk

This buyer cares about individual accountability and defensible audit evidence.

**Opening question:**
*If staff still share credentials, what is your audit trail actually proving?*

### Operations

This buyer cares about onboarding speed and recovery when credentials are lost or forgotten.

**Opening question:**
*How long does it take to get a new or rotating worker fully authenticated today?*

---

## Competitive wedge

We do not need a long competitor matrix here. We need one clear posture.

### The real healthcare comparison

**Imprivata** is the closest conceptual competitor because it is known for badge-based clinical access.

The BlokSec angle is simpler:

- Imprivata is associated with deeper infrastructure and workstation-level reader assumptions
- BlokSec's QR-based approach is lighter-weight and easier to picture in smaller care environments

### The phone-based comparison

**Duo, Okta, and similar push-MFA models** still assume a phone-centric workflow. That is the wrong assumption for many floor staff and shared-device environments.

### The platform comparison

**Entra** still matters in the environment, but not as the full answer for shared clinical workflows. BlokSec should be framed as the layer that closes the frontline gap.

---

## Why a healthcare company would choose BlokSec

These reasons need to stay tied to what we can actually support today.

### 1. The workflow fit is better

Healthcare buyers do not just need MFA. They need MFA that works when:

- staff rotate across shared stations
- gloves and PPE make typing painful
- shift-based work makes phone prompts disruptive

That is where BlokBadge is strongest.

### 2. The rollout can be lighter

BlokSec is easier to picture in smaller care environments because the story is lighter-weight:

- QR-based badge flow
- no assumption that every worker has a managed phone
- no immediate requirement for hardware-token logistics
- standards-based federation instead of proprietary lock-in

### 3. The accountability story is stronger

Healthcare environments often still rely on shared credentials or weak exceptions.

BlokSec gives a cleaner story around:

- unique worker-level authentication
- immutable audit records
- badge lifecycle control
- delegated recovery for operational teams

### 4. The economics are easier to explain

The near-term business case is not abstract AI-security language. It is:

- fewer password resets
- fewer workaround exceptions
- lower credential replacement overhead than hardware-heavy models
- faster onboarding and recovery for rotating staff

### 5. The wedge is clearer than generic IAM

Most competitors can talk about MFA. Fewer can talk credibly about **shared clinical workflows**.

That is why the healthcare pitch should stay narrow and practical:

**shared stations + no-phone workflows + auditability + lighter deployment**

---

## What we already have

Repo-verified strengths that matter for healthcare:

- BlokBadge QR + PIN authentication
- Level 0 passphrase for supervised environments
- immutable append-only audit logs
- delegated badge management
- BlokBadge-first provisioning
- bulk badge operations
- directory sync
- OIDC, SAML 2.0, and WS-Federation support

This is enough to justify the wedge. It is not yet enough to claim healthcare repeatability at scale.

---

## What must be true before we push hard

Three items matter most:

1. **PointClickCare federation validation**
   This is the blocking proof point for long-term care.

2. **A healthcare demo or pilot environment**
   The team needs a believable shared-station story, not just a generic platform story.

3. **A first pilot and case study**
   One LTC proof point is worth more than ten speculative healthcare pages.

Supporting needs:

- HIPAA mapping collateral
- BAA readiness
- healthcare persona and outreach assets

---

## What we need to validate claims

We should treat healthcare as a proof-led motion. Before scaling the story, we need validation in four areas.

### 1. Technical validation

- confirm **PointClickCare federation** works cleanly in a realistic environment
- document the **exact login flow** for shared stations, badge scan, and fallback paths
- validate **session behavior** so the workflow does not create constant re-prompts for staff
- verify **camera/scanner assumptions** in real workstation setups

### 2. Buyer and workflow validation

- test the story with **clinical IT**, **nursing leadership**, and **compliance** buyers
- validate whether the strongest wedge is really **PointClickCare urgency**, **shared stations**, or **auditability**
- confirm that the **Imprivata comparison** resonates in LTC, not just in hospital environments
- learn where the real objection shows up first: workflow change, trust, security review, or budget

### 3. Operational validation

- measure **login speed**
- measure **new-user provisioning time**
- measure **badge re-issue / recovery time**
- measure whether delegated management actually reduces support dependency

These metrics matter more than abstract ROI estimates.

### 4. Trust and compliance validation

- confirm what buyers expect in a **security review**
- confirm whether a **BAA** is mandatory before pilot or only before production
- map BlokSec to the healthcare buyer's real checklist: MFA, audit trail, accountability, recovery, and admin controls
- identify which claims need legal or compliance sign-off before external use

---

## Support content required

If we want this to become a real vertical, we need a tighter content package around it.

### Required proof assets

- **PointClickCare validation note** — what was tested, what worked, and what caveats remain
- **pilot case study** — even anonymized at first
- **workflow diagram** — badge-to-shared-station flow for LTC staff
- **security / compliance mapping** — how BlokSec supports MFA, auditability, and accountability requirements

### Required buyer-facing content

- **healthcare one-pager** for first meetings
- **healthcare landing page** or focused hub page
- **persona briefs** for clinical IT, nursing leadership, compliance, and operations
- **FAQ** covering phones, gloves, shared stations, audit trails, and rollout friction

### Required sales enablement

- **talk track** for PointClickCare-triggered outreach
- **competitive battlecard** for Imprivata
- **objection handling** for “we already have Duo/Entra” and “we cannot disrupt clinical workflow”
- **pilot offer outline** with scope, success criteria, and expected buyer effort

### Required trust content

- **security overview**
- **BAA / legal readiness**
- **implementation checklist**
- **proof register** showing which claims are validated, directional, or still pending

---

## Ranked execution plan

This is the practical order of operations.

### Tier 1 — Must have before outreach

These are the minimum items needed before we push the healthcare story hard:

1. **PointClickCare federation validation**
2. **clear healthcare talk track**
3. **simple healthcare one-pager**
4. **proof register for claims**

Without these, we are still selling an idea more than a wedge.

### Tier 2 — Must have before pilot

These are required to run a real healthcare evaluation cleanly:

1. **healthcare demo environment**
2. **workflow diagram for shared-station login**
3. **security / HIPAA mapping**
4. **BAA / legal readiness**
5. **pilot offer with success criteria**

Without these, the first pilot will feel improvised.

### Tier 3 — Must have before scale

These are needed once the first pilot proves the motion:

1. **pilot case study**
2. **Imprivata battlecard**
3. **persona briefs**
4. **objection handling**
5. **healthcare landing page**
6. **MSP outreach sequence for LTC-focused providers**

Without these, the motion may work once but remain hard to repeat.

### Tier 4 — Nice to have after proof

These help turn a good vertical into a real program:

1. **SEO page around healthcare MFA / HIPAA**
2. **EHR integration matrix**
3. **secondary-clinic expansion content**
4. **conference and partner package**

These matter, but they should follow proof — not replace it.

---

## Go-to-market sequence

### Phase 1: Validate

Prove the motion in one LTC environment:

- validate PointClickCare federation
- run one pilot
- capture login speed, onboarding speed, and audit feedback

### Phase 2: Package

Turn the proof into a repeatable sales motion:

- one-pager
- HIPAA mapping
- healthcare demo
- SEO content around healthcare MFA

### Phase 3: Scale

Expand through the best channels:

- MSPs serving LTC and post-acute care
- partner conversations around PointClickCare-heavy accounts
- secondary expansion into clinics and regional providers

---

## Stakeholder version

### For the CEO

Healthcare is attractive because the demand is being forced by regulation and vendor enforcement, not by abstract security education.

### For the sales lead

The wedge is simple: PointClickCare urgency plus a workflow that phone-based MFA handles poorly.

### For the team

Do not confuse opportunity with readiness. We have a real wedge, but we still need federation proof and a pilot.

---

## Summary

Healthcare should be treated as a **high-potential first regulated vertical**, with long-term care as the sharpest entry point.

The case is strong because:

- the urgency is real
- the workflow fit is strong
- the competitive angle is clear

The next step is not more writing. It is proof.
