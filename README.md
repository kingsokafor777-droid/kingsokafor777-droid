<h1 align="center">Kingsley Okafor</h1>

<p align="center">
  <strong>AI/ML Platform Engineering · Cloud Security · Data Systems</strong><br />
  <sub>Ottawa, Ontario, Canada · Designing systems that are measurable, governable, and built to ship</sub>
</p>

<p align="center">
  <a href="https://kingsleyokafor.dev"><img src="https://img.shields.io/badge/Portfolio-kingsleyokafor.dev-0A101F?style=for-the-badge&logo=firefox-browser&logoColor=22D3EE" alt="Portfolio" /></a>
  <a href="mailto:okaforkingsley777@gmail.com"><img src="https://img.shields.io/badge/Email-Contact-0A101F?style=for-the-badge&logo=gmail&logoColor=10B981" alt="Email" /></a>
  <a href="https://github.com/kingsokafor777-droid?tab=repositories"><img src="https://img.shields.io/badge/Repositories-14_public-0A101F?style=for-the-badge&logo=github&logoColor=A78BFA" alt="Public repositories" /></a>
</p>

---

## Engineering thesis

I build end-to-end systems where **the model, the data contract, the runtime controls, and the operating evidence agree**. My work sits at the intersection of probabilistic forecasting, cloud-security engineering, applied data systems, and technical product architecture.

I am currently a Product Lead Architect on an AI/ML energy platform with the University of Ottawa, working across probabilistic load forecasting, real-time dispatch optimization, and edge-deployed inference. Earlier work includes cloud and endpoint security at Microsoft, operations analytics at Amazon, and structural engineering delivery. That range is deliberate: it enables me to take a system from problem framing through data and model design, threat modeling, implementation, and the business case for operating it.

> **M.Eng.** Engineering Design & Innovation, University of Ottawa (expected 2026) · **MBA** Finance, London Business School · **B.Eng.** Mechanical Engineering · **PMP®**

---

## Basalt — cloud-security platform portfolio

**Basalt** is a modular security posture platform built around a shared finding contract. Multi-cloud, IaC, and Kubernetes scanners emit normalized findings; the Warehouse tracks posture drift; the Dashboard turns evidence into decision-ready risk views; RAG provides cited explanations; and the Agent closes the loop with Terraform remediation proposals.

| Layer | Repository | Delivered capability |
|---|---|---|
| Contract foundation | [`basalt-core`](https://github.com/kingsokafor777-droid/basalt-core) | Provider-neutral findings, deterministic risk scoring, versioned control catalog, SARIF/OCSF emitters, and a scanner-plugin interface. |
| Cloud scanners | [`basalt-aws`](https://github.com/kingsokafor777-droid/basalt-aws) · [`basalt-azure`](https://github.com/kingsokafor777-droid/basalt-azure) | Read-only AWS posture assessment plus a second-provider implementation that proves the scanner contract is portable. |
| Static and cluster security | [`basalt-iac`](https://github.com/kingsokafor777-droid/basalt-iac) · [`basalt-k8s`](https://github.com/kingsokafor777-droid/basalt-k8s) | Terraform analysis to SARIF and Kubernetes posture checks for RBAC, Pod Security Standards, and NetworkPolicy. |
| Data and decisions | [`basalt-warehouse`](https://github.com/kingsokafor777-droid/basalt-warehouse) · [`basalt-dashboard`](https://github.com/kingsokafor777-droid/basalt-dashboard) | DuckDB/dbt-oriented finding history, drift modeling, tenant-scoped analytics, and an executive posture dashboard. |
| AI assistance | [`basalt-rag`](https://github.com/kingsokafor777-droid/basalt-rag) · [`basalt-agent`](https://github.com/kingsokafor777-droid/basalt-agent) | Citation-first retrieval across findings and controls, plus Terraform-remediation planning with safety boundaries. |
| Platform and governance | [`basalt-platform`](https://github.com/kingsokafor777-droid/basalt-platform) | Terraform, Helm, deployment workflows, architecture decisions, product documentation, and release controls. |

### What makes the platform worth reading

The platform is designed around **verifiable contracts rather than presentation-only claims**. Basalt Core uses lossless resource identities, a canonical control catalogue, and deterministic risk factors so scanner output can remain joinable downstream. The AWS scanner enforces its read-only posture in CI rather than relying on a README promise. Dashboard analytics require an authenticated organization boundary and are prepared to fail closed when a production Warehouse read source is not configured. Platform work includes immutable workflow pins, SBOM generation, signed-release paths, protected production environments, and digest-aware Helm rendering.

The production release path is intentionally conservative. Image publication and cloud provisioning are deferred until a zero-high/critical container gate passes—evidence of a working security control, not an omitted capability. The current operator handoff and release evidence are documented in [`basalt-review`](https://github.com/kingsokafor777-droid/basalt-platform/tree/main/docs/production).

---

## Selected engineering work

### [Ontario Electricity Demand — Day-Ahead Forecasting](https://github.com/kingsokafor777-droid/ontario-demand-forecast)

An end-to-end forecasting workflow built on public IESO demand and Open-Meteo weather data. Its central design constraint is **knowability**: every feature must be available 24 hours before the target hour. Evaluation uses chronological holdout rather than random K-fold, plus both 24-hour persistence and seasonal-naïve baselines. The model choice favors explainability and measured value over unnecessary complexity.

### [Basalt Core](https://github.com/kingsokafor777-droid/basalt-core)

A reusable security data contract that makes cloud, Kubernetes, and infrastructure-as-code findings interoperable. The key engineering decision is the stable resource URN: earlier non-lossless normalization was replaced with percent encoding, and round-trip tests now enforce identity reversibility. This prevents distinct resources from collapsing into the same downstream fingerprint.

### [Basalt AWS](https://github.com/kingsokafor777-droid/basalt-aws)

A posture scanner for IAM, S3, MFA, CloudTrail, and KMS. Its read-only guarantee is operationalized in tests: requested IAM actions are checked for mutating verbs, the packaged Terraform permissions are tested against the declared permission set, and the offline suite uses Moto without cloud credentials.

---

## Technical toolkit

| Domain | Technologies |
|---|---|
| **Languages & data** | Python, TypeScript, SQL, pandas, NumPy, DuckDB, dbt |
| **ML & AI** | scikit-learn, PyTorch, quantile forecasting, retrieval, grounded explanations, evaluation harnesses |
| **Cloud & security** | AWS, Azure, Kubernetes, Terraform, Helm, SARIF, OCSF, IAM, posture management |
| **Platform engineering** | GitHub Actions, CI policy, SBOMs, provenance, container hardening, release gates, architecture decision records |

```text
Forecasting     quantiles · calibration · prediction intervals · time-aware validation
Security        shared schemas · IaC analysis · posture drift · evidence-first remediation
Data systems    ingestion contracts · dimensional models · reproducible analytics
Product         requirements · architecture decisions · operating criteria · business cases
```

---

## GitHub activity

<p align="center">
  <img width="100%" src="https://streak-stats.demolab.com/?user=kingsokafor777-droid&hide_border=true&background=0A101F&stroke=22D3EE&ring=A78BFA&fire=10B981&currStreakLabel=22D3EE&sideLabels=94A3B8&currStreakNum=F8FAFC&sideNums=F8FAFC&dates=64748B&card_width=1180" alt="GitHub contribution streak" />
</p>

> Statistics that require a private GitHub token are intentionally **not** embedded from a shared public endpoint. They will be added only after a self-hosted, rate-limit-resilient instance is configured—never by exposing a token or pretending a public API is production-grade.

---

## Connect

I am open to meaningful project-based and remote work across AI/ML, data systems, cloud-security engineering, and technical product architecture.

- **Portfolio:** [kingsleyokafor.dev](https://kingsleyokafor.dev)
- **Email:** [okaforkingsley777@gmail.com](mailto:okaforkingsley777@gmail.com)

<sub>Ask me about building systems that are analytically useful, operationally accountable, and secure enough to keep running.</sub>
