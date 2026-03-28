# BlokSec Technical Architecture

## System Overview

BlokSec operates as a passwordless **Identity Provider (IdP)** and access platform that sits between users and enterprise applications, handling authentication flows while also supporting vault, admin, and audit workflows.

```
┌─────────────────────────────────────────────────────────┐
│                   Enterprise Applications                │
│  (M365, Google Workspace, Salesforce, Custom Apps, etc) │
└──────────────┬──────────────┬──────────────┬────────────┘
               │ OIDC         │ SAML 2.0     │ WS-Fed
               ▼              ▼              ▼
┌─────────────────────────────────────────────────────────┐
│              BlokSec Identity Provider                   │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐             │
│  │ BlokKey  │  │ BlokBadge│  │ BlokSafe │             │
│  │ (Mobile) │  │ (QR+PIN) │  │ (Vault)  │             │
│  └──────────┘  └──────────┘  └──────────┘             │
│                                                         │
│  ┌──────────────────────────────────────────┐          │
│  │         BlokSec Admin Console            │          │
│  └──────────────────────────────────────────┘          │
└──────────────┬──────────────┬──────────────┬────────────┘
               │              │              │
               ▼              ▼              ▼
┌──────────┐ ┌──────────┐ ┌──────────────────┐
│ MongoDB  │ │ DynamoDB │ │ Immutable DB     │
│ (config) │ │ (runtime)│ │ (audit trail)    │
└──────────┘ └──────────┘ └──────────────────┘
```

## Supported Protocols

| Protocol | Version | Use Case |
|----------|---------|----------|
| **OIDC** | OpenID Connect | Modern web apps, SPAs, mobile apps |
| **SAML 2.0** | Security Assertion Markup Language | Enterprise SSO, legacy apps |
| **WS-Federation** | WS-Fed | Microsoft ecosystem, ADFS migration |

## Cryptographic Architecture

### BlokKey (Mobile)
- **Algorithm:** ECDSA (Elliptic Curve Digital Signature Algorithm)
- **Key Management:** HD (Hierarchical Deterministic) wallet
- **Key Isolation:** Unique key pair generated per application
- **Private Key Storage:** Device-only, never transmitted
- **Reduced reusable secrets:** No shared passwords and no exportable private keys stored server-side

### BlokBadge (QR Badge)
- **Split-Key Architecture:**
  - Badge contains: Encrypted partial key (Key Fragment A)
  - Server holds: Complementary partial key (Key Fragment B)
  - Authentication requires: Both fragments + user PIN
  - Neither fragment is usable alone
- **Badge Generation:** Standard QR code, printable on any badge printer
- **Revocation:** Instant server-side deactivation

### Key Security Properties
- **No server-side passwords** — Nothing to breach in a database compromise
- **No shared passwords or reusable cryptographic secrets** — Asymmetric crypto reduces replay and credential-reuse risk
- **Per-app isolation** — Compromise of one app doesn't affect others
- **Immutable audit** — Append-only database for tamper-proof authentication logs

## Data Storage

| Database | Purpose | Properties |
|----------|---------|-----------|
| **MongoDB** | Configuration, user profiles, app settings | Flexible schema, scalable |
| **DynamoDB** | Runtime authentication events, session data | Low-latency, high throughput |
| **Immutable DB** | Audit trail, compliance evidence | Append-only, tamper-proof, cryptographically verified |

## Integration Points

### Identity-stack fit
- Standards-based application support across OIDC, SAML 2.0, and WS-Federation
- Microsoft environments are part of the stack-fit story, with exact deployment details depending on the federation path and customer environment
- Google Workspace, Okta, and similar identity environments should be described using the documented deployment pattern in use
- Named-provider positioning should follow current proof rather than generic compatibility assumptions

### Business Applications
- Salesforce and other standards-compatible business applications
- Any OIDC, SAML, or WS-Federation compatible application

## Deployment Model

- Cloud-hosted SaaS is the primary operating model
- Standard protocol integration reduces the need for custom agents or plugins for core SSO use cases
- Deployment speed depends on the customer environment, protocol mix, directory setup, and desired branding or governance flows
- Multi-tenant administration and branding foundations exist, but partner operating workflows and packaging still need formalization

## Security Comparison vs. Traditional MFA

| Property | SMS/TOTP | Push (Duo/Okta) | FIDO2 Keys | BlokKey | BlokBadge |
|----------|---------|-----------------|-----------|---------|-----------|
| Phishing resistant | No | Partial | Yes | Yes | Yes |
| No shared secrets | No | No | Yes | Yes | Yes |
| Works without phone | No | No | Yes | No | Yes |
| Works with gloves | N/A | No | Depends | No | Yes |
| Per-app key isolation | No | No | No | Yes | N/A |
| Immutable audit trail | No | No | No | Yes | Yes |
| Replacement cost | N/A | N/A | Hardware replacement required | App/device re-enrollment | Badge reprint or re-issue workflow |
