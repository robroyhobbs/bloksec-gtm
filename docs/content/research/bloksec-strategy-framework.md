# BlokSec Growth Strategy Framework

## Company Assessment, Market Analysis & Go-to-Market Playbook

**Date:** February 12, 2026
**Status:** Research & Strategy (Draft for Discussion)

---

## 1. Company Overview

**BlokSec Technologies Inc.** | Oshawa, Ontario, Canada | Founded 2019

**Leadership:**

- **Mike Gillan** - CEO & CTO (security architecture, scalable passwordless tech)
- **Kevin Smith** - Chief Revenue Officer (B2B tech sales)
- **Ketan Kapadia** - Chairman & Co-Founder (26+ years IAM, serial entrepreneur, ex-Netegrity/CA/SailPoint/Centrify)
- **Rahul Katariya** - Country Manager, India

**Product Suite:**
| Product | What It Does | Target |
|---------|-------------|--------|
| **BlokKey** | Mobile-first passwordless MFA (biometric + device + intent = 3-factor) | Knowledge workers, office workers |
| **BlokBadge** | Deviceless MFA via printed QR badge + PIN (possession + knowledge = 2-factor) | Frontline workers, retail, healthcare, manufacturing |
| **BlokSafe** | Credential & sensitive data vault with zero-password sharing | All workers |
| **BlokSec Admin** | Admin management console & app config | IT admins |

**Technical Architecture:**

- Identity Provider (IdP) supporting OIDC, SAML 2.0, WS-Federation
- Backend: MongoDB, DynamoDB, Immutable DB (append-only audit trail)
- Asymmetric cryptography (ECDSA) - no shared secrets, no server-side passwords
- HD wallet for per-app key isolation (BlokKey)
- Split-key security (BlokBadge) - badge half + server half, neither usable alone

**Key Integrations:** Microsoft Entra ID, Google Workspace, Okta, Ping, Delinea, CyberArk, BeyondTrust, Salesforce

**Notable:** Microsoft has featured BlokSec as an Azure AD B2C partner on Microsoft Learn documentation.

---

## 2. Market Landscape

### 2.1 Market Size & Growth

| Metric              | Value                                 | Source                           |
| ------------------- | ------------------------------------- | -------------------------------- |
| 2025 Market Size    | $21.8-25.3B                           | Grand View / Mordor Intelligence |
| 2030 Projection     | $55.7B (18.2% CAGR)                   | Grand View Research              |
| 2033 Projection     | $86.4B (18.8% CAGR)                   | Mordor Intelligence              |
| Enterprise Segment  | 61.5% of market (2024)                | Precedence Research              |
| North America Share | 38.4% of market (2024)                | Grand View Research              |
| Adoption Intent     | 61% of orgs plan passwordless by 2026 | ISACA                            |

**Translation:** This is a ~$25B market growing 18%+ annually. Enterprise is the dominant buyer. The question isn't "will passwordless win?" - it already has. The question is who captures which segments.

### 2.2 The BlokBadge Opportunity: Frontline Workers

This is BlokSec's sharpest edge. The numbers:

- **2.7 billion frontline workers globally** (BlokSec's own Cyber Innovation deck)
- **~70% of the global workforce is deskless/frontline**
- **80% of deskless workers don't have company-issued devices**

**The core problem:** Traditional MFA requires smartphones. Frontline workers in healthcare, manufacturing, retail, and warehousing either can't or aren't allowed to use personal phones on the floor. They share terminals, rotate shifts, and need to authenticate fast.

**Industries most affected:**

| Industry                  | NA Workers | Auth Pain Points                                                         | Compliance Drivers                                                       |
| ------------------------- | ---------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| **Healthcare**            | ~18M       | HIPAA, ePHI access, shared nursing stations, sterile environments        | HIPAA Security Rule 2026 update: MFA now **mandatory** (not addressable) |
| **Manufacturing**         | ~12.8M     | Gloved workers, clean rooms, no personal devices on floor, shift changes | FDA 21 CFR Part 11 (pharma), SOC 2 audit trails                          |
| **Retail**                | ~16M       | Shared POS terminals, high turnover, seasonal workers                    | PCI DSS 4.0: universal MFA for all CDE access (March 2025 deadline)      |
| **Warehousing/Logistics** | ~1.8M      | Shared scanners, gloved workers, fast pace                               | SOC 2, customer audit requirements                                       |
| **Energy/Utilities**      | ~1.1M      | Remote sites, harsh environments, critical infrastructure                | NERC CIP: mandatory MFA for BES access                                   |
| **Food Processing**       | ~1.7M      | Hygiene restrictions, shared terminals, PPE                              | FDA compliance, FSMA                                                     |

**Cost of the current problem:**

- Password resets cost **$70 each** (Forrester)
- **40% of all help desk calls** are password-related (Gartner)
- Average org saves **$48K/year** just from self-service resets (Specops)
- **Over 50% of breaches** involve stolen/weak credentials (Verizon DBIR 2025)
- Average breach cost: **$4.44M** (IBM, 2025)

**Current workarounds (all broken):**

- Shared passwords (no accountability, compliance failure)
- Proximity cards alone (single factor, no MFA)
- PIN-only (weak, shoulder-surfable)
- Paper logbooks (unscalable, audit nightmare)
- "Just skip MFA for frontline" (compliance time bomb)

### 2.3 Regulatory Tailwinds

Every major framework now **requires** phishing-resistant MFA:

| Framework               | What Changed                                                | When           | Impact                                   |
| ----------------------- | ----------------------------------------------------------- | -------------- | ---------------------------------------- |
| **CISA / OMB M-22-09**  | Federal Zero Trust mandate, phishing-resistant MFA required | Active now     | All federal agencies + contractors       |
| **NIST SP 800-63B**     | AAL2/AAL3 require cryptographic authenticators              | Active now     | Standard for all US security assessments |
| **PCI DSS 4.0**         | Universal MFA for ALL cardholder data access                | March 2025     | Every company handling payment cards     |
| **HIPAA Security Rule** | MFA now **mandatory** (first update in 20 years)            | Late 2026-2027 | Every healthcare provider in the US      |
| **NERC CIP**            | MFA + PKI for critical infrastructure access                | Active now     | All energy/utility operators             |
| **FDA 21 CFR Part 11**  | Unique electronic signatures, 2-factor auth                 | Active now     | Pharma/biotech/medical devices           |
| **EU eIDAS 2.0**        | Digital identity wallets required                           | 2026           | All EU member states                     |
| **SOC 2**               | Individual authentication, unique user IDs, MFA             | Active now     | Any company undergoing SOC 2 audit       |

**Net effect:** Compliance is no longer a nice-to-have differentiator - it's a forcing function. Companies that don't implement phishing-resistant MFA face regulatory penalties, failed audits, and insurance consequences.

---

## 3. Competitive Landscape

### 3.1 Competitor Map

**Tier 1: Enterprise Passwordless Platforms**

| Company             | Focus                       | Pricing                   | Strength                                | Weakness                           |
| ------------------- | --------------------------- | ------------------------- | --------------------------------------- | ---------------------------------- |
| **HYPR**            | Identity Assurance platform | $4/user/mo (workforce)    | 324% ROI (Forrester), 18.7% mindshare   | Enterprise-heavy, complex for SMBs |
| **Beyond Identity** | Device-bound zero trust     | ~$31K/yr avg              | Cryptographic device trust, AI security | Expensive, complex deployment      |
| **Yubico**          | Hardware FIDO2 keys         | $25-90/key + subscription | Physical security, FIPS validated       | Hardware logistics at scale        |

**Tier 2: Identity Platform Giants (passwordless as feature)**

| Company             | Focus            | Pricing           | Strength                          | Weakness                       |
| ------------------- | ---------------- | ----------------- | --------------------------------- | ------------------------------ |
| **Okta**            | IAM ecosystem    | $6-17/user/mo     | Thousands of integrations         | Passwordless isn't core focus  |
| **Microsoft Entra** | M365 ecosystem   | Bundled with M365 | Native Microsoft integration      | Lock-in, no frontline solution |
| **Cisco Duo**       | MFA + zero trust | $3-9/user/mo      | Strong MSP channel, pay-as-you-go | Not "true" passwordless        |

**Tier 3: Developer-First Platforms**

| Company                 | Focus               | Pricing            | Strength                            | Weakness                        |
| ----------------------- | ------------------- | ------------------ | ----------------------------------- | ------------------------------- |
| **Descope**             | CIAM for developers | From $249/mo       | Developer UX, transparent pricing   | Not enterprise deployment       |
| **Passage (1Password)** | Passkey APIs        | Not disclosed      | 1Password brand, developer friendly | Limited workforce focus         |
| **Stytch (Twilio)**     | Auth APIs           | Enterprise pricing | API-first                           | Post-acquisition pricing jumped |

**Tier 4: Closest Competitors (frontline worker focus)**

| Company                   | Focus                                       | Pricing       | Strength                                                                     | Weakness                        |
| ------------------------- | ------------------------------------------- | ------------- | ---------------------------------------------------------------------------- | ------------------------------- |
| **OLOID**                 | Frontline worker auth (face, RFID, NFC, QR) | Not disclosed | Tyson Foods, PepsiCo, Dell customers; backed by Dell/Okta/Honeywell ventures | Enterprise-only, no MSP channel |
| **IDmelon (HID)**         | Badge-to-FIDO2 key                          | Not disclosed | HID physical security integration                                            | Mid-acquisition integration     |
| **Secret Double Octopus** | Enterprise passwordless + MSP program       | Not disclosed | ZeroPassword MSP program                                                     | Lower brand recognition         |
| **IDEE (AuthN)**          | Passwordless MFA for MSPs                   | Per-user SaaS | White-label, MSP-designed                                                    | Smaller company, EU-focused     |

### 3.2 BlokSec's Competitive Position

**Unique combination that no one else has:**

1. **Deviceless QR badge MFA** (simpler than OLOID's RFID/NFC requirement)
2. **Immutable audit trail** (append-only DB, not just logs)
3. **Split-key cryptography** (badge half + server half = both needed)
4. **MSP-friendly architecture** (vs. OLOID's enterprise-direct model)
5. **Full worker coverage** (BlokKey for office + BlokBadge for frontline = one platform)

**Where BlokSec needs to close gaps:**

- Brand recognition (vs. HYPR, Beyond Identity)
- Customer proof points / case studies
- Content & SEO presence
- Formal MSP partner program
- Developer documentation

---

## 4. Growth Strategy: MSP/Partner Channel

### 4.1 Why MSPs Are the Right Channel

BlokSec's sweet spot is SMB-to-mid-market companies with frontline workers who need MFA compliance but lack in-house IAM teams. That's exactly the MSP customer profile.

**MSP economics for passwordless auth:**

- Healthy MSP gross margins: 50-70%
- White-label security add-ons: $10-30/user/month
- Password resets are MSPs' #1 ticket volume (40% of all tickets per Gartner)
- Eliminating password resets = less ticket burden + higher margin

**Value prop to MSPs:**

1. **Reduce their own costs** - Fewer password reset tickets (their #1 volume driver)
2. **New recurring revenue** - Passwordless auth as managed service ($3-5/user/mo)
3. **Compliance differentiator** - "We make you HIPAA/PCI compliant" upsell
4. **Frontline coverage** - Something Okta/Microsoft/Duo can't do for their clients

### 4.2 Recommended Partner Program Structure

**Tier Structure:**

| Tier           | Requirements                  | Benefits                                                |
| -------------- | ----------------------------- | ------------------------------------------------------- |
| **Authorized** | Sign up, complete training    | 30% margin, basic support, co-brand rights              |
| **Silver**     | 50+ users deployed, 3 clients | 40% margin, dedicated partner manager, MDF access       |
| **Gold**       | 200+ users, 10 clients        | 50% margin, priority support, joint case studies        |
| **Platinum**   | 500+ users, 25 clients        | 55%+ margin, executive sponsorship, custom integrations |

**Program Elements (modeled on best-in-class: IDEE, Keeper, Sophos):**

- Multi-tenant management console (critical for MSPs)
- White-label authentication pages and portals
- NFR licenses for MSP staff to demo
- Co-branded marketing kit (email campaigns, landing page templates)
- ROI calculator tool (MSP can run for prospects)
- Deal registration with protection
- Quarterly business reviews at Silver+
- Campaign-in-a-box (ready-made marketing assets)

### 4.3 Target MSP Profile

**Ideal MSP partner:**

- 200-2,000 managed seats
- Serves healthcare clinics, dental offices, manufacturing SMBs, retail chains, or food processing
- Already selling Microsoft 365 or Google Workspace
- Has compliance-driven clients (HIPAA, PCI DSS)
- Currently struggling with password reset ticket volume

**Where to find them:**

- MSP Summit / Channel Partners Conference
- ConnectWise, Datto, Kaseya partner ecosystems
- TD Synnex distribution (IDEE already uses this channel)
- CompTIA community
- Local IT peer groups (HTG, ASCII, Robin Robins)

### 4.4 Ideal End-Customer Profiles

**Tier 1 targets (highest fit for BlokBadge):**

| Segment                        | Company Size        | Why They Need BlokBadge                               | Compliance Driver           | Example                                  |
| ------------------------------ | ------------------- | ----------------------------------------------------- | --------------------------- | ---------------------------------------- |
| Healthcare clinics & hospitals | 50-5,000 workers    | Nurses at shared stations, no phones in patient areas | HIPAA 2026 MFA mandate      | Regional hospital systems, dental chains |
| Manufacturing plants           | 100-2,000 workers   | Floor workers, gloves, no personal devices            | FDA 21 CFR Part 11, SOC 2   | Food processing, pharma, auto parts      |
| Retail chains                  | 50-500 per location | Shared POS, high turnover, seasonal staff             | PCI DSS 4.0 universal MFA   | Franchise operations, specialty retail   |
| Warehousing                    | 100-1,000 workers   | Shared scanners, fast-paced, gloved                   | Customer audit requirements | 3PL providers, distribution centers      |
| Senior care facilities         | 50-300 workers      | Shared stations, low tech literacy                    | HIPAA                       | Assisted living chains                   |

**Tier 2 targets (BlokKey + BlokBadge combined):**

- Construction companies (office + field crews)
- Food service / hospitality (corporate + kitchen/floor staff)
- Government agencies (office + field workers)
- Education (admin + campus facilities)

---

## 5. SEO & Content Strategy

### 5.1 Current State Assessment

BlokSec's website (bloksec.com) has basic product pages and a few blog posts. There's minimal SEO presence. Competitors like HYPR, Beyond Identity, and OLOID have significantly more content authority.

**The opportunity:** No one owns the "frontline worker authentication" content space. The compliance content around HIPAA + passwordless and PCI + passwordless is also under-served.

### 5.2 Content Pillar Strategy

**Pillar 1: "Frontline Worker Authentication" Hub**

- Target keywords: "frontline worker authentication", "deskless worker MFA", "shared device authentication", "passwordless without phones"
- Format: 4,000-word pillar page + 10-15 supporting blog posts
- Supporting content: Industry-specific guides (healthcare, manufacturing, retail)
- This is BlokSec's unique angle - own it completely

**Pillar 2: Compliance Resource Center**

- Target keywords: "HIPAA MFA requirements 2026", "PCI DSS 4.0 MFA", "CISA phishing resistant MFA", "NIST 800-63 compliance"
- Format: Framework-specific compliance guides with checklists
- Tools: Interactive compliance assessment ("Which frameworks apply to you?")
- Updates: Track regulatory changes, publish timely analysis

**Pillar 3: Security Intelligence & Breach Prevention**

- Target keywords: "data breach prevention", "credential breach analysis", "phishing attack prevention"
- Format: Weekly breach analysis series ("How Passwordless Would Have Prevented This")
- Database: Curated breach database (filterable by industry, attack vector, year)
- This builds topical authority and generates backlinks from news coverage

**Pillar 4: MSP Partner Resources (public-facing)**

- Target keywords: "MSP passwordless partner", "MSP MFA program", "selling passwordless to clients"
- Format: Partner program page, ROI calculator, sales enablement resources
- Content: "MSP's Guide to Selling Passwordless Authentication" (gated whitepaper as lead magnet)

### 5.3 The DocSmith Idea: Assessment

Your idea about using DocSmith to build content pages around security-related repos is interesting. Here's my assessment:

**Potential targets and traffic value:**

| Repo / Tool                 | GitHub Stars | Monthly Searches (related terms)           | Relevance to BlokSec                                           |
| --------------------------- | ------------ | ------------------------------------------ | -------------------------------------------------------------- |
| Keycloak (open source IAM)  | ~25K         | High ("keycloak tutorial", "keycloak SSO") | **HIGH** - Direct auth relevance, can show BlokSec integration |
| OWASP ZAP                   | ~36K         | High ("OWASP ZAP tutorial")                | MEDIUM - Security tool, tangential                             |
| Metasploit                  | ~35K         | Very High ("metasploit tutorial")          | LOW - Pen testing, not auth                                    |
| Authentik (open source IdP) | ~15K         | Medium ("authentik setup")                 | **HIGH** - Identity provider, direct competitor area           |
| Bitwarden                   | ~40K         | Very High                                  | MEDIUM - Password management, adjacent                         |
| ory/kratos (identity)       | ~12K         | Medium                                     | **HIGH** - Identity management                                 |

**Recommendation: Selective, not broad.**

DocSmith for ALL security repos would dilute focus. Instead:

1. **Do:** Build DocSmith docs for **2-3 auth/identity repos** (Keycloak, Authentik, ory/kratos) - these attract the exact audience that needs passwordless solutions
2. **Do:** Include "Securing [Tool] with Passwordless Authentication" sections that naturally reference BlokSec
3. **Don't:** Build docs for pen testing tools (Metasploit, Burp Suite) - wrong audience, would dilute brand as auth company
4. **Don't:** Try to become a general security resource center - stay focused on auth/identity

**Better content investments for traffic:**

- Compliance guides (HIPAA, PCI DSS, NIST) - higher conversion intent
- Frontline worker authentication content - underserved niche
- Breach analysis series - linkable, shareable, builds authority
- Developer integration docs - attracts technical decision-makers

### 5.4 Quick Wins (First 30 Days)

1. **"HIPAA MFA Requirements 2026: Complete Guide"** - Timely, high-intent keyword, regulatory deadline approaching
2. **"Frontline Worker Authentication Buyer's Guide"** - Own the niche, no competitor has a definitive guide
3. **ROI Calculator page** - Lead generation tool, helps MSPs sell
4. **"The Real Cost of Credential-Based Breaches" analysis** - Evergreen thought leadership piece using current DBIR data

### 5.5 Content Calendar (90-Day)

**Month 1: Foundation**

- Publish 4 pillar pages (frontline auth, HIPAA guide, PCI guide, MSP partner page)
- Launch ROI calculator
- Start weekly breach analysis series (1/week)
- Set up blog cadence (2 posts/week)

**Month 2: Depth**

- Publish 5 industry-specific guides (healthcare, manufacturing, retail, warehousing, food processing)
- Launch DocSmith pilot for Keycloak with "BlokSec integration" section
- Create competitive comparison content (vs. Duo, vs. Okta, vs. OLOID)
- Begin building MSP resource library

**Month 3: Authority**

- Launch breach database v1.0 (50 breaches with prevention analysis)
- Publish NIST 800-63 compliance guide
- Create CISA Zero Trust Identity Pillar guide
- Begin guest posting program (The Hacker News, CSO Online, Dark Reading)

---

## 6. Positioning & Messaging Framework

### 6.1 Core Positioning

**For MSPs/Partners:**

> "BlokSec gives MSPs a white-label passwordless authentication platform that covers every worker - from office to frontline - so you can eliminate password reset tickets, add recurring revenue, and make your clients compliant."

**For End Customers (IT decision-makers):**

> "BlokSec is the only passwordless platform that covers your entire workforce. BlokKey for office workers. BlokBadge for the floor. One platform, zero passwords, complete compliance."

**For Healthcare:**

> "HIPAA now requires MFA for all ePHI access. BlokBadge gives every nurse, tech, and staff member phishing-resistant authentication - no smartphone needed, no passwords to forget."

**For Manufacturing:**

> "Your floor workers can't use phones. Traditional MFA doesn't work with gloves. BlokBadge gives every worker secure, auditable access with just a badge scan and PIN."

### 6.2 Key Differentiators to Lead With

1. **"Authentication for workers without phones"** - The one thing competitors can't do well
2. **"One platform, every worker"** - BlokKey (office) + BlokBadge (floor) = no gaps
3. **"No hardware to buy, no hardware to lose"** - QR badge is printed, not purchased
4. **"Immutable audit trail"** - Not just logs, but tamper-proof records (regulators love this)
5. **"Deploy in hours, not months"** - Standard protocols (OIDC/SAML/WS-Fed), no custom integration

### 6.3 Competitive Battlecard Positioning

| Against             | Lead With                                                                             |
| ------------------- | ------------------------------------------------------------------------------------- |
| **Duo/Okta**        | "They need your workers to have smartphones. BlokBadge doesn't."                      |
| **HYPR**            | "Enterprise-complex and enterprise-priced. BlokSec is built for MSPs and mid-market." |
| **Yubico**          | "Hardware keys cost $25-90 each, get lost, need logistics. QR badges are printed."    |
| **OLOID**           | "OLOID needs RFID/NFC infrastructure. BlokBadge needs a printer."                     |
| **Microsoft Entra** | "Entra doesn't cover frontline workers without phones. BlokBadge does."               |

---

## 7. Revenue Model & Pricing Guidance

### 7.1 Competitive Pricing Benchmarks

| Company         | Pricing                | Model                       |
| --------------- | ---------------------- | --------------------------- |
| Duo             | $3-9/user/mo           | Per-user subscription       |
| HYPR            | $4/user/mo (workforce) | Per-user, custom enterprise |
| Okta            | $6-17/user/mo          | Per-user, tiered features   |
| Beyond Identity | ~$31K/yr average       | Annual contract             |
| Descope         | From $249/mo           | Usage-based                 |

### 7.2 Recommended Pricing Strategy

**Direct Sales:**

- BlokKey: $4-6/user/month
- BlokBadge: $3-5/user/month
- BlokSafe: $2-3/user/month
- Platform Bundle (all products): $7-10/user/month
- Volume discounts at 250, 500, 1000+ users

**MSP/Partner Pricing:**

- Wholesale at 40-55% off list (depending on tier)
- MSP sells at list price, keeps the margin
- Example: $5/user list, MSP buys at $2.50-3.00 = $2.00-2.50 margin per user/month
- At 500 managed users: $1,000-1,250/month recurring margin for MSP

### 7.3 Revenue Scenarios

**Conservative (Year 1):**

- 10 MSP partners, average 200 users each = 2,000 users
- At $3.50 avg revenue/user/month = $7,000/mo = $84K ARR

**Moderate (Year 2):**

- 50 MSP partners, average 300 users each = 15,000 users
- At $3.50/user/month = $52,500/mo = $630K ARR

**Aggressive (Year 3):**

- 150 MSP partners + 20 direct enterprise deals = 75,000 users
- At $3.75 blended/user/month = $281K/mo = $3.4M ARR

---

## 8. Strategic Recommendations (Priority Order)

### Immediate (Next 30 Days)

1. **Build the MSP Partner Program page** - Even if only 1-page, signal that you have a channel program
2. **Create the ROI Calculator** - Essential sales tool for both direct and MSP sales
3. **Publish 3 compliance guides** - HIPAA MFA 2026, PCI DSS 4.0, and "Frontline Worker Authentication" pillar page
4. **Identify 5 target MSPs** - In healthcare and manufacturing verticals, start conversations

### Short-Term (30-90 Days)

5. **Formalize MSP program** with tiers, pricing, enablement materials
6. **Build content engine** - 2 blog posts/week, weekly breach analysis, monthly compliance update
7. **Launch DocSmith pilot** on Keycloak (or Authentik) - auth-relevant repo only
8. **Get 2-3 case studies** - Even pilot/POC customers, document the outcomes
9. **Competitive battlecards** for MSP partners to use in sales conversations

### Medium-Term (90-180 Days)

10. **Attend MSP Summit / Channel Partners Conference** - Direct partner recruitment
11. **Pursue TD Synnex distribution** partnership (follow IDEE's model)
12. **Build breach database** as ongoing content asset
13. **Launch guest posting program** targeting CSO Online, Dark Reading, HealthTech Magazine
14. **Create vertical landing pages** - /healthcare, /manufacturing, /retail with industry-specific messaging

### Strategic (6-12 Months)

15. **Pursue Microsoft co-sell** partnership (already have Azure AD B2C integration)
16. **Target healthcare vertical hard** - HIPAA 2026 mandate creates massive urgency
17. **Consider SOC 2 Type II certification** if not already obtained
18. **Evaluate FedRAMP** authorization for government sector

---

## 9. Key Risks & Considerations

| Risk                                                                 | Mitigation                                                         |
| -------------------------------------------------------------------- | ------------------------------------------------------------------ |
| **OLOID has enterprise momentum** (Tyson, PepsiCo, Dell, GE)         | Focus on SMB/mid-market via MSPs - different segment               |
| **Microsoft adding frontline auth features** (QR code auth in Entra) | Position as complement, not replacement - BlokSec works WITH Entra |
| **Small team, limited resources**                                    | MSP channel = force multiplier, let partners sell and support      |
| **No public case studies yet**                                       | Prioritize getting 2-3 pilot customers documented                  |
| **Pricing pressure from Duo ($3/user)**                              | Compete on frontline coverage (Duo can't do deviceless), not price |

---

## Appendix: Key Data Points for Sales Conversations

- **$70** = Average cost of a single password reset (Forrester)
- **40%** = Help desk calls that are password-related (Gartner)
- **50%+** = Breaches involving stolen/weak credentials (Verizon DBIR 2025)
- **$4.44M** = Average cost of a data breach (IBM, 2025)
- **2.7B** = Frontline workers globally
- **80%** = Global workforce that is deskless
- **56%** = Organizations that failed their last security audit (Ponemon)
- **90%** = Reduction in IT help desk tickets with passwordless (industry benchmark)
- **324%** = ROI from passwordless authentication (Forrester/HYPR study)
- **16 hours/day** = Time reclaimed in healthcare settings (BlokSec's own data point)
