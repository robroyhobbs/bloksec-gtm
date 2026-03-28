# BlokSec: Benefits, ROI & Switching Narrative

> **Audience:** Internal — Sales Lead, CEO, Rob
> **Purpose:** Clarify why buyers switch, what value they get, and how to tell the story without over-claiming
> **Date:** March 2026
> **Evidence basis:** Product repo v4.0 audit, Interra POC, Carroll Supply case, ADR review

---

## The one-line story

**BlokSec is the passwordless platform that covers both office workers and frontline workers without requiring smartphones, hardware tokens, or infrastructure-heavy rollouts.**

That is the wedge.

---

## Why this matters now

Three things are converging:

- **MFA is becoming mandatory** in more regulated environments.
- **Frontline workers are still the gap** in most identity stacks.
- **The cost of the current workaround is real**: password resets, shared credentials, badge or token replacement, and audit friction.

This is not a generic IAM story. It is a workflow and accountability story.

---

## Who cares most

### 1. CISO / Compliance

This is the highest-urgency buyer because the pain is visible and measurable:

- shared credentials break individual accountability
- mutable logs weaken audit confidence
- passwords remain the easiest attack path

BlokSec answers that with passwordless authentication, immutable audit records, and per-user accountability on shared devices.

### 2. IT Director

This is the operator buyer:

- fewer password reset tickets
- one platform across OIDC, SAML, and WS-Federation
- delegated badge management instead of routing every issue through IT

The proof here is operational, not theoretical. Interra showed a real tenant, real federation, and real user onboarding in a four-week window.

### 3. Operations and shift-based leaders

These buyers care about speed, friction, and turnover:

- workers need fast access on shared devices
- gloves, PPE, and shift changes make typing painful
- new hires and re-issues need to happen fast

BlokBadge is strongest here because it removes the device assumption most competitors still depend on.

### 4. CFO / business owner

This buyer cares about avoidable spend:

- hardware token procurement and replacement
- help desk burden from password resets
- rollout complexity and integration cost

The simplest economic story is still the best one: no hardware logistics, fewer reset tickets, and less friction to deploy.

---

## ROI frame

We should keep this honest: **we do not yet have published customer case studies with named dollar outcomes.**

What we do have is a credible ROI model built from industry benchmarks and repo-verified product capabilities.

### Cost avoidance

- **Password resets:** industry benchmarks still put reset cost at meaningful levels. Passwordless removes that category entirely.
- **Hardware tokens:** Yubico-style models add upfront procurement plus replacement cost. BlokBadge prints on existing badge infrastructure.
- **Onboarding time:** device-based MFA often adds delays. BlokBadge-first provisioning gets workers live faster.
- **Audit prep:** immutable logs with export and filtering reduce manual evidence collection.

### Operational gains

- faster worker switching on shared devices
- delegated badge resets instead of central IT escalation
- less credential sprawl in sticky-note and spreadsheet environments
- one standards-based platform instead of solving each protocol separately

The right way to use ROI in the field is not to lead with giant savings claims. Lead with obvious pain and then show how the savings fall out of fixing it.

---

## Why buyers switch

### Against push MFA

Push MFA works best when every worker has a phone and the workflow can tolerate prompts.

That breaks down on factory floors, retail counters, and clinical stations. BlokSec wins by removing the phone requirement.

### Against Microsoft Entra alone

Entra remains important in many customer environments, but it does not solve the frontline shared-device problem by itself.

The right framing is: **BlokSec complements Entra by covering the worker and workflow Entra leaves exposed.**

### Against hardware-token models

Hardware keys are secure, but they create logistics:

- buy
- issue
- replace
- support

BlokBadge changes that conversation. The credential is printed, not procured.

### Against enterprise passwordless suites

Some passwordless vendors solve well for managed devices and office-heavy workforces. They are less compelling when the user has no managed device at all.

That is where BlokSec is different.

---

## The “aha” moment

> **The risk is not switching. The risk is staying on the current workaround.**

That line works because it is backed by real evidence:

- **Carroll Supply:** weak passwords were still being transmitted in legacy flows; BlokSec removes the password backend entirely.
- **Immutable audit logs:** BlokSec stores authentication events in append-only storage, which is stronger than “we have logs in a database.”
- **Frontline coverage:** most identity platforms still assume a personal device; BlokSec does not.

For skeptical buyers, this is the core reframing:

**BlokSec is not a nice-to-have upgrade. It closes a gap the existing stack still leaves open.**

---

## Three sales conversations to use

### The floor problem

> “How do your frontline workers authenticate today? Shared passwords, exceptions, or no MFA at all? That gap is usually where the risk lives.”

### The compliance trigger

> “More frameworks now require individual MFA and defensible audit trails. How are you meeting that on shared devices?”

### The cost of doing nothing

> “You are already paying for the workaround — resets, hardware, exceptions, and audit clean-up. BlokSec removes the workaround.”

---

## Proof roadmap

These are internal reminders, not part of the main sales narrative:

- we still need named case studies
- we should instrument before-and-after operational metrics
- SCIM and mobile vault remain out of scope for current claims
- partner operating maturity is still developing

Use this page to tell the story. Use the product-truth matrix to police the claims.

---

## Summary

The narrative arc should be simple:

1. **Open with the gap:** most identity platforms do not cover frontline shared-device workflows well.
2. **Name the risk:** shared credentials, weak accountability, reset burden, and compliance exposure.
3. **Show the fit:** passwordless, device-light, immutable audit, standards-based deployment.
4. **Prove credibility:** Interra and Carroll Supply show the model is real.
5. **Close on economics:** less hardware, less reset burden, less rollout friction.

This page should build confidence, not exhaust the reader.
