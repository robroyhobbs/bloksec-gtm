# BlokSec Technical Architecture

## System Overview

BlokSec operates as a full **Identity Provider (IdP)** that sits between users and enterprise applications, handling authentication without passwords.

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
- **Zero shared secrets:** No passwords, tokens, or secrets stored server-side

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
- **No shared secrets** — Asymmetric crypto eliminates MITM and replay attacks
- **Per-app isolation** — Compromise of one app doesn't affect others
- **Immutable audit** — Append-only database for tamper-proof authentication logs

## Data Storage

| Database | Purpose | Properties |
|----------|---------|-----------|
| **MongoDB** | Configuration, user profiles, app settings | Flexible schema, scalable |
| **DynamoDB** | Runtime authentication events, session data | Low-latency, high throughput |
| **Immutable DB** | Audit trail, compliance evidence | Append-only, tamper-proof, cryptographically verified |

## Integration Points

### Identity Providers (Federation)
- Microsoft Entra ID (Azure AD) — including B2C
- Google Workspace
- Okta
- Ping Identity

### Privileged Access Management
- Delinea
- CyberArk
- BeyondTrust

### Business Applications
- Salesforce
- Any OIDC/SAML/WS-Fed compatible application

## Deployment Model

- Cloud-hosted SaaS (primary)
- Standard protocol integration — no custom agents or plugins required
- Typical deployment: < 1 day for most environments
- MSP multi-tenant support built-in

## Security Comparison vs. Traditional MFA

| Property | SMS/TOTP | Push (Duo/Okta) | FIDO2 Keys | BlokKey | BlokBadge |
|----------|---------|-----------------|-----------|---------|-----------|
| Phishing resistant | No | Partial | Yes | Yes | Yes |
| No shared secrets | No | No | Yes | Yes | Yes |
| Works without phone | No | No | Yes | No | Yes |
| Works with gloves | N/A | No | Depends | No | Yes |
| Per-app key isolation | No | No | No | Yes | N/A |
| Immutable audit trail | No | No | No | Yes | Yes |
| Replacement cost | N/A | N/A | $25-90/key | $0 | $0 (reprint) |
