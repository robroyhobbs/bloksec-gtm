# AI Tooling x GTM Funnel Matrix

## Why this exists

After the product-truth audit, the job is no longer broad ideation.

The job now is to use AI where it improves execution speed and research quality **without inventing claims, numbers, proof, or product readiness**.

This document maps where tools like **Paperclip** and similar AI research or automation systems can help across the GTM funnel.

## Operating rule

Use AI **after** grounding the work in:
- `PRODUCT_CONTEXT.md`
- `docs/content/audit/gtm-vs-product-capability-matrix-2026-03.md`
- `docs/content/research/source-hygiene-and-metrics-cleanup.md`

If an AI workflow cannot stay tied to current evidence, it should not be used for public-facing output.

## Best-fit AI jobs for this GTM motion

AI is most useful here for:
- research acceleration
- monitoring competitors and market shifts
- mining internal proof from product and customer artifacts
- account and partner research
- personalization prep for outreach
- organizing evidence into repeatable playbooks

AI is much less useful when asked to:
- invent positioning from scratch
- generate unsupported product claims
- guess ROI numbers
- imply integrations or readiness the evidence does not support

## Funnel matrix

| Funnel stage | Primary GTM job | Good AI use case | Paperclip or similar best use | Required inputs | Human review before use | Priority |
| --- | --- | --- | --- | --- | --- | --- |
| Market monitoring | Track changes in the category and adjacent competitors | Monitor Entra, Duo, OLOID, SDO, Google, and related pages for product or messaging changes | Scheduled monitoring, change summaries, page-diff alerts, and brief generation | target URLs, change cadence, competitor list | confirm the change is real and update battlecards manually | High |
| Product-truth maintenance | Keep GTM aligned with the real product | Compare release notes, changelogs, docs, and internal plans against current GTM claims | Extract product deltas from release notes and docs into claim-review notes | repo docs, release notes, support docs, audit matrix | verify every proposed claim update against `PRODUCT_CONTEXT.md` | High |
| Proof mining | Turn internal artifacts into usable evidence | Pull candidate proof points from POCs, support notes, implementation docs, and release materials | Summarize long documents, cluster repeated themes, extract before/after language candidates | POC docs, support emails, onboarding notes, release notes | confirm that any external proof is customer-approved and source-backed | High |
| ICP and account research | Find strong-fit buyers by workflow reality | Build account briefs around frontline workflows, device constraints, compliance triggers, and likely buying teams | Create account dossiers from company pages, job postings, stack signals, and public documents | target account list, vertical focus, target roles | remove weak inferences and rank by real fit, not AI confidence | High |
| MSP and partner research | Identify high-fit partners | Research MSPs by vertical focus, client profile, stack, and compliance posture | Generate partner shortlists with reason-for-fit notes and outreach context | partner list sources, vertical filters, geography, fit rules | manually verify that the partner really serves the target segment | High |
| Competitive response prep | Keep battlecards current | Summarize positioning shifts, feature deltas, and new threat narratives | Compare competitor language against current BlokSec proof set | competitor pages, battlecards, product-truth matrix | human rewrite required before anything becomes public-facing copy | High |
| Website correction pass | Find copy that drifts beyond proof | Compare homepage, partner, and industry drafts against the approved claim set | Flag risky copy lines and suggest downgrade language | current site copy, `PRODUCT_CONTEXT.md`, audit matrix | approve each wording change manually | High |
| Outreach personalization | Make outbound more relevant | Draft account-specific hooks tied to shared devices, resets, audit pain, or partner economics | Turn research briefs into email or call-prep bullets | approved offer, account brief, target persona | verify pain statements are evidenced, not imagined | Medium |
| Case-study development | Turn raw artifacts into story structure | Organize outcomes, quotes, workflows, and implementation notes into draft case-study skeletons | Extract themes from interviews, POCs, and deployment notes | transcripts, notes, POC criteria, stakeholder feedback | legal/customer approval and fact-checking required | Medium |
| Content repurposing | Reuse already-approved proof across channels | Turn approved research or proof into channel-specific variants | Adapt approved inputs into social, email, one-pagers, or landing-page variants | approved source document, target format, audience | ensure the transformation did not strengthen any claim | Medium |
| Sales enablement | Speed up internal prep | Create first-draft one-pagers, discovery prep, and objection-handling notes from approved source docs | Build concise briefs from larger internal docs | approved positioning, product-truth docs, vertical briefs | sales or GTM lead should review before use | Medium |
| CRM and note hygiene | Keep learning loops tight | Summarize calls, cluster objections, and extract recurring proof gaps | Turn call notes into structured objections and follow-up tasks | call notes, transcripts, deal stage, owner | review summaries for nuance and missing context | Medium |

## Paperclip-specific opportunities to test first

If Paperclip is good at crawling, monitoring, summarizing, and organizing multi-source research, the best first uses are:

### 1. Competitor and market monitoring
Track changes to Microsoft, Duo, OLOID, Google, and other relevant pages so battlecards stay current.

### 2. Product-proof mining
Pull structured proof candidates from BlokSec release notes, repo docs, support writeups, and customer materials.

### 3. MSP/account dossiers
Create short briefing packs for specific MSPs or target accounts before outreach.

### 4. Website and copy QA
Compare live or draft copy against the product-truth matrix and flag wording that is too strong.

### 5. Partner and vertical research
Build repeatable briefs for manufacturing, retail, logistics, food processing, and care-settings campaigns.

## What not to automate blindly

Do not let AI systems:
- publish public-facing copy without review
- create ROI claims from unsourced assumptions
- claim integrations at equal maturity when the evidence is uneven
- describe the MSP motion as fully productized
- turn roadmap items into present-tense product capability

## Recommended rollout order

### Phase 1 — highest leverage now
1. competitor monitoring
2. product-proof mining
3. website and copy QA against the claim matrix
4. MSP and account dossier generation

### Phase 2 — once the source of truth is tighter
1. outreach personalization
2. sales enablement briefs
3. case-study drafting support

### Phase 3 — only after proof systems are stable
1. broader content repurposing
2. more automated campaign support

## Minimum review workflow

For any AI-assisted output:
1. start from approved source material
2. label each statement as capability, outcome, benchmark, or competitive claim
3. check it against `PRODUCT_CONTEXT.md`
4. remove or downgrade anything not clearly supported
5. only then use it in public-facing material

## Immediate recommendation

Use AI to make the team **faster at research, validation, and execution**, not to outsource judgment.

The fastest wins are not more ideas. They are:
- faster proof collection
- faster copy correction
- faster target research
- faster competitive awareness
- faster conversion of validated material into reusable assets
