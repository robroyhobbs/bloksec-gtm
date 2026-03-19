# Source Hygiene and Metrics Cleanup

## Goal
Make future BlokSec content more credible by separating strong claims from weak or internal-only claims.

## Why this matters
The older research has useful strategic thinking, but some numbers are weakly sourced, self-cited, or too easy for a buyer to challenge. GTM content should be sharp and persuasive without leaning on brittle statistics.

## Claim classes
### Approved for external use
Use when the claim has a strong public source or a clearly attributable BlokSec-owned proof point.

Examples:
- current product and platform capabilities shown on `bloksec.com` and `docs.bloksec.dev`
- case-study claims that BlokSec can publicly stand behind
- broadly accepted category and regulatory changes that can be linked to source material

### Use with explicit citation check before publishing
Use only after the exact source is verified and linked in the final asset.

Examples:
- market size and CAGR numbers
- password reset cost benchmarks
- breach frequency or credential-theft percentages
- compliance deadlines or enforcement language

### Internal-only or needs replacement
Do not use publicly unless a stronger source is found.

Examples from earlier materials:
- any self-cited global frontline-worker number that cannot be independently supported
- any unverifiable adoption-intent stat
- any overly precise ROI claim borrowed from competitor materials without clear context

## Specific cleanup priorities
### High-risk legacy claims
- `61% of orgs plan passwordless by 2026`
- `2.7B frontline workers globally` when used without clear attribution and context
- `80% of deskless workers do not have company devices`
- any version of the breach stat that is inconsistent across documents

### Reset-cost model
Use a consistent rule:
- separate direct support cost from full productivity cost
- avoid presenting a single number as universal truth
- when possible, use a range and explain what the range includes

Recommended framing:
- direct support cost per reset
- lost productivity cost per reset
- total blended cost per reset

## Safer content habits
- favor operational truths over flashy category stats
- prefer workflow examples to questionable market-size claims
- write `buyers lose time to resets, shift-change friction, and shared-credential workarounds` even when an exact stat is still under review
- attach a source-review pass to every public-facing page before publish

## Suggested working process
1. Draft the content.
2. Mark every number as `verified`, `needs check`, or `internal only`.
3. Replace weak numbers with stronger sourced numbers or with qualitative language.
4. Keep a short approved-metrics sheet once the citation review is complete.
