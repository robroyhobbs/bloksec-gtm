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

## Executive takeaway

Healthcare is attractive because the buying pressure is becoming external, not optional.

- **HIPAA pressure is rising**
- **PointClickCare is increasing MFA urgency inside LTC**
- **the default phone-centric MFA model fits poorly on shared stations**

That combination makes long-term care the sharpest regulated wedge for BlokSec today.

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

## What PointClickCare changes

Publicly, PointClickCare appears to be taking a very specific security posture:

- native **TOTP-style MFA** is now mandatory for many users
- there is **no clear public named MFA / IAM partner** for long-term care customers
- **SSO and native MFA are separate paths**, which means customers using SSO push authentication responsibility upstream to their IdP
- IP allow-listing is part of the broader control model

This sharpens the wedge. PointClickCare is increasing authentication urgency, but the public model still appears to assume a fairly standard personal-device MFA experience. That is exactly where LTC workflows get messy.

### Strategic implication

For BlokSec, the PointClickCare moment is not just “MFA is now mandatory.”

It is “MFA is now mandatory **in a workflow where the default model fits poorly**.”

That gives BlokSec two plausible positions:

1. **Operator-side solution** — help LTC organizations meet PointClickCare-driven MFA pressure in shared-station environments more cleanly than phone-centric methods.
2. **Platform / embedded IAM collaboration** — explore whether PointClickCare could eventually benefit from a stronger frontline IAM layer for its own LTC customer base and possibly for parts of its own workforce environment.

The first is the near-term motion. The second is a strategic hypothesis, not a current claim.

---

## The PointClickCare risk frame

This is the clearest external framing surfaced by the recent research.

### From PointClickCare's perspective

Publicly, the current posture appears to create five categories of risk:

1. **Lowest-common-denominator MFA**
   Native TOTP is adequate as a baseline control, but it leaves the workflow burden on the facility.

2. **SSO / MFA split**
   If SSO customers bypass native MFA, PCC is effectively pushing authentication quality upstream without visibly standardizing the result.

3. **Limited centralized assurance**
   App-agnostic TOTP gives less visibility into enrollment quality, device state, and lifecycle control than a more managed IAM model.

4. **Reputational and regulatory exposure**
   If authentication is weak or workaround-heavy in LTC environments, PCC still sits at the center of the workflow when something goes wrong.

5. **Missed ecosystem opportunity**
   A weakly defined IAM stance leaves room for another vendor to define the security standard around PCC-heavy workflows.

### From the LTC operator's perspective

The practical risks are even clearer:

- shared workstations do not pair naturally with personal authenticator apps
- high turnover makes deprovisioning and recovery more error-prone
- smaller operators often lack the IAM depth to make SSO the clean answer
- generic MFA can create workaround behavior that is worse than the intended control
- audit and compliance liability still sits with the facility

This is the cleanest way to frame the opportunity:

> The gap is not whether MFA exists. The gap is whether MFA actually works in the LTC environment without creating unsafe or non-compliant workarounds.

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

We do not need a giant matrix in the field. We need a clear competitive posture.

### 1. Traditional MFA vendors

**Duo, Okta, and Entra** mostly frame the market around identity sprawl, phishing, and zero-trust access.

- Their posture is valid for enterprise IAM.
- Their default operating assumption is still closer to **managed users, phones, and conventional workforce patterns**.
- That is not the strongest fit for LTC floors built around shared stations and rotating staff.

BlokSec should not try to out-enterprise them on generic IAM language. The better line is:

> Traditional MFA vendors secure the identity problem broadly. BlokSec solves the specific frontline shared-device problem they handle poorly.

### 2. Imprivata

**Imprivata** is still the closest conceptual healthcare comparison.

Its strengths are real:

- purpose-built healthcare positioning
- deep clinical workflow framing
- strong EHR and compliance posture
- badge- and proximity-based access with substantial hospital credibility

The BlokSec angle remains:

- lighter-weight story for smaller care environments
- no immediate requirement for readers, docks, or deeper infrastructure assumptions
- easier to position in LTC operators that need frontline coverage without buying a large hospital-style access platform

### 3. Twosense

**Twosense** is not a classic MFA vendor. Its strongest argument is continuous behavioral authentication.

That matters because it shows another way the category is moving:

- away from point-in-time MFA
- toward lower-friction and more contextual identity

For BlokSec, the takeaway is not “we are Twosense.” It is:

- the market increasingly agrees that **workflow friction is a core identity problem**
- BlokSec can credibly participate in that conversation from the frontline, shared-device angle

### 4. LTC-focused MSPs

This research clarified something useful:

- **Prelude, RSN, Meriplex, and similar firms are not the main technology competitors**
- they are better understood as **potential routes to market**, because they already serve senior living and LTC operators with managed security and IT services

That means the healthcare motion should keep two tracks open:

1. direct operator wedge
2. channel / reseller / integration wedge through LTC-focused MSPs

### The practical posture

The healthcare pitch should stay narrow:

**PointClickCare urgency + shared stations + no-phone workflows + auditability + lighter deployment**

---

## Why a healthcare buyer would choose BlokSec

These reasons need to stay tied to what we can actually support today.

### 1. The workflow fit is better

Healthcare buyers do not just need MFA. They need MFA that works when:

- staff rotate across shared stations
- gloves and PPE make typing painful
- shift-based work makes phone prompts disruptive

That is where BlokBadge is strongest.

### 2. The rollout is lighter

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

### 4. The business case is easier to explain

The near-term business case is not abstract AI-security language. It is:

- fewer password resets
- fewer workaround exceptions
- lower credential replacement overhead than hardware-heavy models
- faster onboarding and recovery for rotating staff

### 5. The wedge is clearer than generic IAM

Most competitors can talk about MFA. Fewer can talk credibly about **shared clinical workflows**.

That is why the healthcare pitch should stay narrow:

**shared stations + no-phone workflows + auditability + lighter deployment**

---

## Commercial and pricing hypotheses

The latest sales feedback improves the commercial framing in three ways.

### 1. The business case should combine risk reduction and revenue protection

The near-term LTC message should not be framed only as:

- “better security”

It should be framed as:

- **better risk management / avoidance**
- **less workflow disruption**
- **less operational drag**
- **less chance that access friction affects staff productivity, resident service, or occupancy-supporting operations**

That is a stronger executive story than generic cybersecurity language alone.

### 2. LTC pricing may need to anchor on beds, not users

This is still a hypothesis, but it is worth testing early.

Long-term care buyers may respond better to pricing framed around:

- **number of beds**

rather than:

- named users
- total identities

Why this may work better:

- beds are easier for operators to understand and budget against
- staffing levels shift with turnover, casual labor, and agency usage
- user-based pricing can feel punitive in high-turnover environments
- bed-based pricing aligns more naturally with facility economics and operator planning

We should not commit to this publicly yet, but we should test it in discovery immediately.

### 3. Strategic PCC collaboration is worth exploring carefully

There is a credible strategic hypothesis that BlokSec could matter to PointClickCare beyond a single-facility sale:

- PCC may eventually need a stronger frontline IAM story for its LTC ecosystem
- BlokSec could potentially fit as an operator-side overlay or longer-term embedded / partnership layer

This is not current proof, but it is worth treating as a serious strategic question because it creates upside beyond one operator at a time.

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
   One LTC proof point is worth more than ten more pages.

Supporting needs:

- HIPAA mapping collateral
- BAA readiness
- healthcare persona and outreach assets

---

## Discovery questions for PCC and early operator conversations

These are the most useful questions surfaced by the new sales input and external research.

### Questions for a PointClickCare contact

1. How does PCC currently think about the gap between native TOTP MFA and real shared-station workflows in LTC?
2. Does PCC see authentication as a facility responsibility, an IdP responsibility, or an ecosystem opportunity?
3. How often do customers raise workflow friction, support burden, or user adoption concerns around native MFA?
4. Are there classes of PCC customers where SSO adoption is low because the IT stack is not mature enough?
5. Has PCC evaluated a stronger frontline IAM or shared-device authentication partner strategy?
6. Would PCC view a lighter-weight IAM layer for LTC as complementary, competitive, or channel-partner material?

### Questions for LTC operators

1. Where does authentication friction actually hurt most today: nursing stations, admin stations, remote access, onboarding, or audits?
2. Are staff carrying personal phones consistently enough for native TOTP to work well?
3. What happens when a staff member leaves, loses a device, or needs urgent re-access?
4. Is the bigger pain workflow disruption, security review, compliance exposure, or help desk burden?
5. Would pricing make more sense to you per user, per facility, or per bed?

These questions matter because they tell us which wedge actually closes:

- PointClickCare urgency
- workflow fit
- auditability
- or operator economics

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
- validate whether buyers respond more to **risk reduction**, **workflow fit**, or **revenue / operations protection**
- learn where the real objection shows up first: workflow change, trust, security review, or budget
- test whether **bed-based pricing** is more intuitive than user-based pricing

### 3. Operational validation

- measure **login speed**
- measure **new-user provisioning time**
- measure **badge re-issue / recovery time**
- measure whether delegated management actually reduces support dependency

These metrics matter more than abstract ROI language.

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
- **PCC architecture note** — native MFA, SSO split, and where BlokSec fits

### Required buyer-facing content

- **healthcare one-pager** for first meetings
- **healthcare landing page** or focused hub page
- **persona briefs** for clinical IT, nursing leadership, compliance, and operations
- **FAQ** covering phones, gloves, shared stations, audit trails, and rollout friction

### Required sales enablement

- **talk track** for PointClickCare-triggered outreach
- **competitive battlecard** for Imprivata
- **vendor landscape brief** covering Duo, Entra, Imprivata, Twosense, and LTC-focused MSPs
- **objection handling** for “we already have Duo/Entra” and “we cannot disrupt clinical workflow”
- **pilot offer outline** with scope, success criteria, and expected buyer effort
- **discovery guide** for PCC and LTC operator conversations
- **pricing hypothesis memo** covering per-user vs per-bed framing

### Required trust content

- **security overview**
- **BAA / legal readiness**
- **implementation checklist**
- **proof register** showing which claims are validated, directional, or still pending

---

## Ranked execution plan

This is the order of operations.

### Tier 1 — Must have before outreach

These are the minimum items needed before we push the healthcare story hard:

1. **PointClickCare federation validation**
2. **clear healthcare talk track**
3. **simple healthcare one-pager**
4. **proof register for claims**
5. **discovery questions for PCC and LTC operators**

Without these, we are still selling an idea more than a motion.

### Tier 2 — Must have before pilot

These are required to run a real healthcare evaluation cleanly:

1. **healthcare demo environment**
2. **workflow diagram for shared-station login**
3. **security / HIPAA mapping**
4. **BAA / legal readiness**
5. **pilot offer with success criteria**
6. **pricing model hypothesis**

Without these, the first pilot will feel improvised.

### Tier 3 — Must have before scale

These are needed once the first pilot proves the motion:

1. **pilot case study**
2. **Imprivata battlecard**
3. **persona briefs**
4. **objection handling**
5. **healthcare landing page**
6. **MSP outreach sequence for LTC-focused providers**

Without these, the motion may work once but stay hard to repeat.

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
- pricing hypothesis
- SEO content around healthcare MFA

### Phase 3: Scale

Expand through the best channels:

- MSPs serving LTC and post-acute care
- partner conversations around PointClickCare-heavy accounts
- strategic exploration of a PCC-adjacent or embedded IAM angle if discovery supports it
- secondary expansion into clinics and regional providers

---

## Stakeholder version

### For the CEO

Healthcare is attractive because the demand is being forced by regulation and vendor enforcement, not by abstract security education.

The bigger upside is not just selling MFA to one operator at a time. It may be defining a stronger frontline IAM layer around PointClickCare-heavy LTC workflows.

### For the sales lead

The wedge is simple: PointClickCare urgency plus a workflow that phone-based MFA handles poorly.

The best early conversations should test three things:

- whether the pain is strong enough to force action now
- whether bed-based pricing resonates more than user-based pricing
- whether PCC itself sees value in a stronger IAM layer for LTC

### For the team

Do not confuse opportunity with readiness. We have a real wedge, but we still need federation proof and a pilot.

---

## Summary

Healthcare should be treated as a **high-potential first regulated vertical**, with long-term care as the sharpest entry point.

The case is strong because:

- the urgency is real
- the workflow fit is strong
- the competitive angle is clear

The next step is not more writing. It is proof, packaging, and live conversations.
