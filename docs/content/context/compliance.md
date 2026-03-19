# Compliance & Regulatory Framework

## PCI DSS 4.0 — Payment Card Industry

**Status:** Active enforcement (March 2025 deadline passed)
**Affects:** Every company handling payment card data
**Key requirement:** Universal MFA for ALL access to cardholder data environments (not just remote)
**Impact on BlokSec:** Retail clients with shared POS terminals must now have individual MFA per worker
**Penalties:** $5K-100K/month per violation, potential loss of card processing ability

## FDA 21 CFR Part 11 — Electronic Records & Signatures

**Status:** Active
**Affects:** Pharmaceutical, biotech, medical device manufacturing
**Key requirements:**
- Unique electronic signatures per individual
- Two-factor authentication for electronic signatures
- Audit trail for all signature events
- System access controls preventing unauthorized use
**Impact on BlokSec:** Manufacturing clients in pharma/biotech need per-worker auth with audit trails
**Penalties:** Warning letters, consent decrees, product seizure, criminal prosecution

## SOC 2 — Service Organization Control

**Status:** Active (ongoing audits)
**Affects:** Any company undergoing SOC 2 Type I or Type II audit
**Key requirements:**
- Individual user authentication (no shared accounts)
- Unique user IDs
- Multi-factor authentication
- Access logging and monitoring
**Impact on BlokSec:** SOC 2 auditors flag shared workstation credentials — BlokBadge solves this

## NERC CIP — Critical Infrastructure Protection

**Status:** Active
**Affects:** Energy and utility operators
**Key requirements:**
- MFA + PKI for Bulk Electric System (BES) access
- Individual identification and authentication
- Audit logging for all access events
**Impact on BlokSec:** Energy sector workers at remote sites need MFA without smartphone dependency

## NIST SP 800-63B — Digital Identity Guidelines

**Status:** Active
**Affects:** Federal agencies, government contractors, standard for all US security assessments
**Key requirements at AAL2/AAL3:**
- Cryptographic authenticators required
- Phishing-resistant MFA at AAL3
- No knowledge-based authentication alone
**Impact on BlokSec:** Sets the technical standard that BlokSec's cryptographic approach meets

## CISA / OMB M-22-09 — Federal Zero Trust

**Status:** Active
**Affects:** All federal agencies + contractors
**Key requirement:** Phishing-resistant MFA required for all federal systems
**Impact on BlokSec:** Government contractor clients need phishing-resistant MFA for compliance

## HIPAA Security Rule Update (Upcoming)

**Status:** Expected late 2026-2027
**Affects:** Every healthcare provider in the US (~18M workers)
**Key change:** MFA now MANDATORY (first update in 20 years — previously "addressable")
**Impact on BlokSec:** Massive opportunity when we're ready to enter healthcare
**Note:** Healthcare deferred in current strategy — will revisit after manufacturing/retail established

## CMMC 2.0 — Cybersecurity Maturity Model Certification

**Status:** Phased rollout
**Affects:** Defense industrial base, defense contractors
**Key requirements:** MFA for all users accessing controlled unclassified information (CUI)
**Impact on BlokSec:** Defense manufacturing clients need compliant MFA

## Compliance Coverage Matrix

| Regulation | BlokKey | BlokBadge | Audit Trail | Notes |
|-----------|---------|-----------|-------------|-------|
| PCI DSS 4.0 | Yes | Yes | Yes | Primary retail driver |
| FDA 21 CFR Part 11 | Yes | Yes | Yes | Primary manufacturing driver |
| SOC 2 | Yes | Yes | Yes | Universal enterprise driver |
| NERC CIP | Yes | Yes | Yes | Energy sector |
| NIST 800-63B | AAL2+ | AAL2 | Yes | Federal standard |
| CISA Zero Trust | Yes | Yes | Yes | Government |
| HIPAA | Yes | Yes | Yes | Future — healthcare |
| CMMC 2.0 | Yes | Yes | Yes | Defense manufacturing |
