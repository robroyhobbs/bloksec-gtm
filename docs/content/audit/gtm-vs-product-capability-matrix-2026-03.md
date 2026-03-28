# GTM vs Product Capability Matrix — March 2026

## Why this exists

Before writing more GTM, site copy, partner copy, or product marketing, we needed to compare the current BlokSec GTM thesis against the actual product and documentation state in the current `bloksec-main` codebase review.

This document is the working bridge between:
- the GTM roadmap in this repo
- the March 2026 audit and positioning work
- the current product evidence found in the downloaded `bloksec-main` repository

Use this page as a calibration layer before making new claims.

## Source set used for this comparison

### GTM source set
- `PRODUCT.md`
- `PRODUCT_CONTEXT.md`
- `docs/content/audit/research-revisit-2026-03.md`
- `docs/content/strategy/gtm-plan.md`
- `docs/content/strategy/msp-channel.md`
- `docs/content/strategy/target-markets.md`

### Product evidence source set
- `bloksec-main/README.md`
- `bloksec-main/docs/bloksafe-smb-features.md`
- `bloksec-main/docs/changelogs/2026-03-18-CHANGELOG.md`
- `bloksec-main/docs/diagrams-and-presentations/bloksec-reference-architecture.md`
- `bloksec-main/docs/data-flows/blokbadge-first-data-flow.md`
- `bloksec-main/docs/clients/Interra Networks/production POC.md`
- `bloksec-main/docs/communications/2026-03-18-carroll-supply-wstrust-active-auth.md`
- key ADRs covering BlokBadge, passcodes, provisioning, invalid scans, mobile return handling, device management, and push control

## Executive summary

The current GTM thesis got the main wedge mostly right: BlokSec is strongest where frontline workers, shared devices, password-reset friction, and accountability gaps intersect.

What the repo review changed is the level of precision we should use.

BlokSec is not just a narrow auth concept. It is a broader identity platform with:
- multi-protocol IdP support
- a real admin layer
- a credential vault and launchpad story
- reporting and audit features
- stronger product maturity than the public GTM currently signals

At the same time, some GTM assumptions are still too aggressive or too fuzzy:
- the MSP-first motion is strategically plausible but not yet clearly productized
- the Entra story needs tighter wording and stronger caveats
- several enterprise expectations are still roadmap items, not shipped truth

## Status legend

- **Right** — GTM is directionally correct and supported by product evidence now
- **Right with qualifier** — broadly correct, but needs tighter wording or scope limits
- **Overstated** — currently ahead of product evidence or too broad for safe external use
- **Missed opportunity** — product evidence is stronger than current GTM emphasis
- **Roadmap, not proof** — useful internally, but should not be positioned as fully ready yet

## GTM vs product matrix

| GTM assumption or roadmap item | Current call | What the repo evidence says | What to do now |
| --- | --- | --- | --- |
| Frontline and shared-device authentication is the sharpest wedge | Right | This is strongly supported by the product shape, BlokBadge flows, target workflow fit, and the March 2026 product materials. | Keep this as the primary opening narrative. |
| BlokKey for office/mobile-first workers and BlokBadge for frontline/no-phone workers is the core product story | Right | The repo clearly supports the two-method architecture across product docs, architecture docs, and authentication flows. | Keep using this as the simplest product explanation. |
| BlokSec is a passwordless, phishing-resistant authentication platform | Right with qualifier | The repo strongly supports passwordless and phishing-resistant positioning, but BlokBadge still relies on a user PIN or passphrase. | Keep the claim, but avoid language suggesting the system removes every memorized secret in every mode. |
| BlokSec is a mature multi-protocol identity provider | Right | OIDC, SAML, and WS-Federation are clearly present in the repo, architecture, and package structure. | Elevate this more in GTM, especially for technical buyers. |
| BlokSec complements existing identity environments rather than requiring rip-and-replace | Right with qualifier | The repo supports this positioning, especially for protocol fit and federation patterns. | Keep the complement message and avoid any replacement framing unless stack-specific proof exists. |
| Microsoft Entra integration is a clean near-term GTM lever | Right with qualifier | Entra-related support is real, but the repo also shows important nuance: Graph-based federation work is still in-progress and WS-Trust active auth creates real edge-case pain. | Reframe to careful stack-fit language and document the legacy-protocol caveat. |
| Google Workspace and Okta can be named confidently as first-class supported stacks | Right with qualifier | Broad protocol fit is real, but the repo evidence is stronger for generic protocol support than for identical maturity across every named provider. | Use broad wording unless provider-specific setup proof is visible. |
| Ping Identity belongs in standard public integration claims | Overstated | Current GTM context files mention Ping, but the repo review did not surface enough provider-specific proof to treat Ping as validated public copy. | Move Ping back to `Needs verification` until exact evidence is pulled forward. |
| SMB and mid-market frontline-heavy teams are the best-fit initial ICP | Right | The product capabilities and workflow shape fit this audience well, especially where shared devices, turnover, and phone constraints exist. | Keep this as the primary buyer lens. |
| MSPs are the primary scale channel right now | Right with qualifier | The strategy logic is strong, but the repo does not show a clearly productized MSP operating layer beyond multi-tenant/admin capabilities and branding support. | Keep MSP as a strategic path, not as a fully proven motion. |
| Self-serve trial or low-friction partner NFR motion is ready | Overstated | The repo shows a real admin product, but not a clearly documented self-serve trial, NFR, or low-friction partner onboarding path. | Treat trial/NFR as a design gap that needs policy and workflow definition. |
| BlokSec’s admin/reporting maturity is still early | Missed opportunity | The repo shows more maturity than the current GTM gives credit for: analytics, audit exports, reporting, search, guided setup elements, device management, and bulk badge operations. | Market the admin and reporting layer more confidently, using careful evidence-based language. |
| BlokSec is mainly an auth story | Missed opportunity | The repo supports a broader platform story that includes BlokSafe credential sharing, launchpad, groups, notifications, and operational admin workflows. | Add a secondary platform story for buyers who need more than MFA. |
| Immutable audit logs and forensic integrity are niche technical details | Missed opportunity | This is one of the strongest differentiators in the repo and architecture docs. | Promote this more in compliance, regulated-ops, and security-lead messaging. |
| Shared-device accountability and auditability are only soft narrative benefits | Missed opportunity | The repo supports stronger language around audit trails, event detail, before/after diffs, geo data, and badge lifecycle control. | Turn this into a clearer compliance and operations proof narrative. |
| Fast provisioning and badge re-issue are still mostly theoretical | Missed opportunity | The repo and ADRs show substantial BlokBadge provisioning and delegated management thought, including badge-first flows and bulk operations. | Surface faster onboarding and re-provisioning as a major day-one admin value story, with careful wording. |
| Enterprise-readiness is already complete | Overstated | Some enterprise expectations remain unfinished or clearly marked as future work, including SCIM and more granular admin controls. | Keep enterprise language measured and separate from the frontline-first wedge. |
| SCIM provisioning can be treated as current capability | Roadmap, not proof | The SMB feature roadmap marks SCIM as not yet built. | Do not market SCIM as available now. |
| Mobile credential vault is part of the current product promise | Roadmap, not proof | The SMB feature roadmap marks the mobile vault as not yet shipped. | Do not fold this into current mobile-first messaging. |
| Multi-tenant and white-label support exist | Right with qualifier | The repo supports multi-tenant administration and branding, but that does not automatically equal a full MSP-grade operating model. | Use carefully for partner-facing discussions; avoid over-claiming channel readiness. |
| Manufacturing and retail are the strongest first verticals | Right | The GTM plan still matches the strongest workflow and compliance fit visible in the product story. | Keep these as the first two verticals. |
| Care settings should be treated as equally ready as manufacturing and retail | Right with qualifier | The workflow fit exists, but proof and GTM depth appear thinner than the first two verticals. | Keep care settings in the shortlist, but not as the primary launch vertical. |

## What GTM got right

### 1. The frontline/shared-device wedge
This remains the best opening because the repo evidence supports a real product difference for workers who cannot rely on personal smartphones.

### 2. The two-method product model
`BlokKey` and `BlokBadge` are a strong and defensible top-level explanation of the platform.

### 3. The best-fit industry shortlist
Manufacturing, retail, warehousing/logistics, food processing, and care settings still map well to the real workflow constraints the product addresses.

### 4. The compliance and accountability direction
The product evidence supports stronger auditability and user-level accountability stories than many current GTM assets are using.

## What GTM got wrong or too fuzzy

### 1. The MSP-first story is ahead of proof
The strategy may still be correct, but the repo does not yet show a deeply productized partner operating layer.

### 2. The Entra story needs precision, not hype
The repo supports real stack fit, but it also reveals edge-case complexity that should be reflected in messaging.

### 3. Some integration naming is looser than the evidence
Provider-specific language should follow provider-specific proof.

### 4. Some roadmap items are still being marketed like current capability
SCIM, a clean self-serve trial/NFR path, and parts of enterprise admin maturity need to stay in roadmap language until they are fully proven.

## Biggest missed opportunities

### 1. BlokSafe is under-marketed
The product is not just an authentication layer. The repo supports a broader vault, launchpad, credential-sharing, and admin workflow story.

### 2. Immutable audit logs are underused in GTM
This is a meaningful differentiation point for regulated operations, security reviews, and partner conversations.

### 3. Admin maturity is stronger than the site implies
Bulk badge actions, analytics, exports, audit filtering, and device management are practical proof points that make the platform look more real and more deployable.

### 4. Provisioning and recovery deserve more attention
Badge-first and delegated-management flows point to a stronger onboarding and re-issue story than current messaging gives credit for.

## Recommended message corrections now

### Keep saying
- BlokSec is a passwordless authentication platform.
- BlokSec is especially strong in frontline and shared-device environments.
- BlokKey serves workers with phones; BlokBadge serves workers without phones or on shared devices.
- BlokSec fits alongside existing identity stacks through standard protocols.

### Say more carefully
- named integration coverage by provider
- admin speed, deployment speed, and onboarding speed
- recovery and re-issue claims
- competitive superiority claims against Entra QR + PIN, Duo, OLOID, or others

### Do not say yet
- SCIM is available now
- the MSP motion is fully productized
- every major IdP is supported at the same level of maturity
- BlokSec eliminates every secret in every workflow mode

## How this should change the roadmap

### Immediate GTM changes
1. Keep the frontline/shared-device wedge.
2. Split the story into two layers:
   - frontline-first access wedge
   - broader identity, vault, audit, and admin platform story
3. Reframe Entra messaging with explicit caveats.
4. Stop treating MSP scale-readiness as already solved.

### Immediate content changes
1. Use this page before rewriting homepage, demo, partner, or vertical pages.
2. Pull stronger admin, reporting, vault, and immutable-log proof into public-facing materials.
3. Downgrade unsupported provider-specific and roadmap claims.

### Immediate product-marketing opportunities
1. Build a clearer BlokSafe platform narrative.
2. Build a stronger forensic-integrity and immutable-log narrative.
3. Turn badge provisioning and re-issue into a concrete buyer story.
4. Publish tighter stack-fit guidance for Microsoft, Google, and protocol-based deployments.

## Suggested follow-up work

- update `PRODUCT_CONTEXT.md` rows that now need stronger qualification after the repo review
- review `docs/content/context/products.md` and `docs/content/context/architecture.md` against this matrix
- rewrite partner and integration claims so they match current proof rather than best-case assumptions
- turn the strongest repo-backed proof points into homepage, demo, and vertical-page copy blocks
