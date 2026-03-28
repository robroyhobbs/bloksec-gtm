# PRODUCT_CONTEXT

## Purpose
This file is the internal product-truth reference for BlokSec marketing, sales, partner, and GTM work.

Use it to check whether a claim is:
- safe for external use now
- safe only with careful qualifier language
- blocked until product proof or citations are verified
- off-limits until replaced

This is the working source of truth for **what we can say**, **how strongly we can say it**, and **what evidence should exist before publishing**.

## How to use this file
1. Draft the copy, page, deck, or campaign asset.
2. Break the messaging into individual claims.
3. Check each claim against the matrix below.
4. If a claim is not covered here, treat it as `Needs verification` until product proof is added.
5. For any number, benchmark, or quantified promise, also check `docs/content/research/source-hygiene-and-metrics-cleanup.md`.
6. Update this file whenever product capabilities, proof assets, or public documentation change.

## Product truth snapshot
### What BlokSec is
BlokSec is a passwordless authentication platform for organizations that need secure, phishing-resistant access across both office workers and frontline/shared-device workers.

### Best-fit buyers
- SMB and mid-market organizations
- frontline-heavy environments
- teams with shared or semi-shared devices
- buyers dealing with password-reset burden, shift changes, turnover, PPE, or phone-constrained workflows
- MSPs and partners serving those environments

### Best-fit initial industries
- manufacturing
- retail
- warehousing and logistics
- food processing
- care settings

### Primary GTM wedge
The sharpest opening is still: **frontline/shared-device authentication where passwords and traditional MFA create friction, resets, and accountability gaps**.

## Claim status legend
### Approved external
Safe to use in public-facing copy now, assuming the wording stays close to the approved phrasing.

### Approved with qualifier
Safe to use if phrased carefully, without overpromising or quantifying outcomes that are not yet proven publicly.

### Needs verification
Do not publish until the exact product proof, documentation, or citation is checked.

### Do not use yet
Do not publish in current external-facing materials.

## Capability and claims matrix
| Topic | Safe public claim | Status | Evidence to check | Usage rule |
| --- | --- | --- | --- | --- |
| Product category | BlokSec is a passwordless authentication platform. | Approved external | `PRODUCT.md`, current product pages, docs | Keep phrasing simple; do not add unsupported architecture claims. |
| Workforce coverage | BlokSec supports both office workers and frontline/shared-device workers. | Approved external | `PRODUCT.md`, March 2026 audit, product pages for BlokKey and BlokBadge | This is one of the strongest core claims. |
| Frontline fit | BlokSec is a strong fit where workers share devices or cannot reliably use smartphones. | Approved external | March 2026 audit, industry briefs, BlokBadge positioning | Use as a best-fit statement, not as a universal statement about every buyer. |
| Product structure | BlokKey serves workers with phones; BlokBadge serves workers without phones or on shared devices. | Approved external | current product pages and research revisit | Good for homepage and partner explanation. |
| Security posture | BlokSec is positioned as passwordless and phishing-resistant. | Approved external | public site/docs positioning | Stay close to product-language phrasing; avoid broader security superiority claims without proof. |
| Operational outcome | BlokSec can reduce password-reset burden and shared-credential workarounds. | Approved with qualifier | product narrative, workflow fit, future case studies | Use qualitative language unless a specific measurable result is sourced. |
| Accountability | BlokSec can improve user-level accountability on shared devices and workstations. | Approved with qualifier | audit findings, product positioning, reporting story | Good for compliance-sensitive messaging; avoid claiming compliance certification from this alone. |
| Re-provisioning story | BlokSec supports faster recovery after lost credentials or onboarding changes. | Approved with qualifier | onboarding/re-issue product proof, docs, demos | Do not use words like `instant` unless the exact workflow is verified. |
| Platform maturity | BlokSec now has a visible v4.0 story with improved admin tooling, reporting, onboarding, and documentation. | Approved external | release notes, product pages, docs, March 2026 audit | Strong credibility signal for proof sections and partner conversations. |
| Identity-stack fit | BlokSec can complement existing identity environments rather than requiring a rip-and-replace. | Approved with qualifier | verified integrations, docs, deployment examples | Use only when the exact stack in question is known or documented. |
| Integration coverage | Public materials support careful mention of Microsoft environments, Google Workspace, and Okta as part of BlokSec's stack-fit story. | Approved with qualifier | public docs, product pages, Microsoft Learn partner doc | Keep the wording broad and avoid implying identical integration depth across every provider. |
| Ping-specific coverage | BlokSec works with Ping Identity. | Needs verification | exact public docs or product pages | Do not name Ping in public-facing copy until provider-specific proof is confirmed. |
| Channel readiness | MSPs and partners are a strong route to market, but the motion should be described as developing rather than fully productized. | Approved with qualifier | March 2026 repo audit, `docs/content/strategy/msp-channel.md`, partner materials | Avoid promising mature NFR policy, partner portal, or fully repeatable reseller operations until they are documented. |
| Industry fit | BlokSec is especially relevant in manufacturing, retail, logistics, food processing, and care settings. | Approved with qualifier | research revisit, industry briefs | Frame as best-fit verticals, not proven dominance. |
| Compliance value | BlokSec helps organizations pursue stronger auditability and cleaner access accountability. | Approved with qualifier | reporting story, industry/compliance docs | Avoid claiming formal compliance status unless separately documented. |
| Ticket reduction numbers | BlokSec reduces reset tickets by X% or saves $Y per user. | Needs verification | case studies, validated ROI model, customer evidence | No quantified claims without specific proof. |
| Time-to-auth numbers | Login is X seconds faster or onboarding is X% faster. | Needs verification | measured product evidence | Do not infer metrics from intuition. |
| Competitive claims | BlokSec is better than Entra QR + PIN, Duo, OLOID, or SDO. | Needs verification | battlecards, scenario-specific proof | Use only in direct competitive contexts and only with scenario-specific wording. |
| Universal-fit claims | BlokSec solves passwordless access for every workforce and every device model. | Do not use yet | none | Too broad and easy to challenge. |
| Unsupported market stats | Large market-size, adoption-intent, or benchmark stats from weak sources. | Do not use yet | see source-hygiene doc | Replace with stronger sources or with qualitative workflow truth. |

## Messaging guardrails
### Lead with workflow truth, not abstract identity language
Use real buying friction:
- shared devices
- shift changes
- password resets and lockouts
- lost credentials
- turnover and onboarding speed
- accountability on shared terminals

### Use `best-fit` language instead of `universal-fit` language
Prefer:
- `best fit for`
- `especially strong in`
- `works well when`
- `designed for environments where`

Avoid:
- `perfect for every enterprise`
- `replaces all MFA`
- `works for every workforce scenario`

### Treat quantified ROI as evidence, not copywriting decoration
If the number is not sourced, do not publish it.

### Separate product truth from GTM hypothesis
Some things are strong GTM hypotheses but not yet public proof. Example:
- `frontline/shared-device wedge is the best entry point` = strong GTM thesis
- `this vertical sees X% reset reduction with BlokSec` = proof claim that needs evidence

### Be careful with the `lost-password elimination` story
This is strategically powerful, but the external phrasing must stay grounded in verified workflows.
Use:
- `reduces password-reset burden`
- `supports faster recovery and re-issue flows`

Avoid until verified:
- `eliminates all password resets instantly`
- `zero downtime after lost credentials`

## Current validation gaps
These should be closed before bigger launch pushes or broader paid campaigns:
1. exact public integration coverage by identity provider and app category
2. source-backed quantified outcomes for resets, onboarding, and login speed
3. stronger public case-study proof by target vertical
4. exact public wording for reporting, compliance, and auditability capabilities
5. partner/NFR guidance that can be stated consistently across the site and partner assets
6. a reviewed list of claims that are approved for homepage, decks, industry pages, and partner pages

## Recommended operating workflow
### Before publishing any asset
1. classify every meaningful statement as capability, outcome, benchmark, or competitive claim
2. check this file for approval status
3. check `docs/content/research/source-hygiene-and-metrics-cleanup.md` for any number or benchmark
4. add source links or internal evidence notes for anything marked `Needs verification`
5. downgrade weak claims into qualitative language when proof is missing

### During review
Ask:
- Is this claim visible on the live product surface, docs, release notes, or public case studies?
- Is this a capability claim or an outcome claim?
- If it is an outcome claim, do we have buyer-facing proof?
- Would a skeptical MSP, buyer, or security lead challenge this wording immediately?

### After product updates
Whenever BlokSec ships a meaningful product or documentation change, update:
- this file
- `PRODUCT.md`
- any affected prototype pages or hub copy
- `CLAIMS_EVIDENCE_REGISTER.csv`

## Suggested next steps
1. Use `CLAIMS_EVIDENCE_REGISTER.csv` as the companion working register for claim-by-claim validation.
2. Audit the current homepage and demo prototype copy line by line against this file.
3. Pull exact integration and workflow proof from the public docs into the evidence register.
4. Turn the strongest validated rows into reusable copy blocks for homepage, industry, and partner pages.
5. Add a lightweight review gate: no public page ships until all quantitative and competitive claims are marked `Approved external` or downgraded.
