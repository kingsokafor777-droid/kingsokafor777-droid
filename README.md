<h1 align="center">Kingsley Okafor</h1>

<p align="center">
  <b>AI/ML Platform Engineer · Cloud Security · Energy Systems</b><br>
  <sub>Ottawa, Ontario, Canada</sub>
</p>

<p align="center">
  <a href="https://kingsleyokafor.dev"><img src="https://img.shields.io/badge/Portfolio-kingsleyokafor.dev-0A0A0A?style=for-the-badge&logo=firefox-browser&logoColor=white" alt="Portfolio"></a>
  <a href="mailto:okaforkingsley777@gmail.com"><img src="https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"></a>
</p>

---

## About

I build machine learning systems end to end — probabilistic forecasting, real-time optimization, and edge-deployed inference — and I care as much about the evaluation harness and the documentation as I do about the model.

Right now I'm Product Lead Architect on an AI/ML energy platform at **EnerCognity** with the University of Ottawa: quantile-regression neural networks for probabilistic load forecasting, real-time dispatch optimization, and inference deployed to distributed edge devices. Before that, cloud and endpoint security at **Microsoft** (Defender XDR, Azure Security Center), operations analytics at **Amazon**, and four years of structural engineering delivering real buildings.

That range is deliberate. It means I can take a system from problem statement through model design, threat model, and the business case for building it at all.

**M.Eng.** Engineering Design & Innovation, University of Ottawa (expected 2026) · **MBA** Finance, London Business School · **B.Eng.** Mechanical Engineering · **PMP**®

---

## Tech

**Languages & Data**

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=postgresql&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![pandas](https://img.shields.io/badge/pandas-150458?style=flat-square&logo=pandas&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white)
![DuckDB](https://img.shields.io/badge/DuckDB-FFF000?style=flat-square&logo=duckdb&logoColor=black)
![dbt](https://img.shields.io/badge/dbt-FF694B?style=flat-square&logo=dbt&logoColor=white)

**ML & AI**

![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=flat-square&logo=scikit-learn&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![Jupyter](https://img.shields.io/badge/Jupyter-F37626?style=flat-square&logo=jupyter&logoColor=white)
![RAG](https://img.shields.io/badge/RAG%20%2F%20Retrieval-6E56CF?style=flat-square)
![LLM Agents](https://img.shields.io/badge/LLM%20Agents-10A37F?style=flat-square)

**Cloud & Security**

![Azure](https://img.shields.io/badge/Azure-0078D4?style=flat-square&logo=microsoftazure&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![Terraform](https://img.shields.io/badge/Terraform-7B42BC?style=flat-square&logo=terraform&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Defender XDR](https://img.shields.io/badge/Defender%20XDR-0078D4?style=flat-square&logo=microsoft&logoColor=white)

---

## Currently building — Basalt

**Basalt** is a cloud security posture platform I'm building in public, one repository at a time. Findings flow through a single pipeline: multi-cloud scanners emit a shared schema, a warehouse tracks posture drift over time, retrieval explains *why* something is a risk with citations, and an agent opens the remediation PR.

Each repo is a real, standalone artifact. The dependency order is the build order.

| # | Repository | What it is | Track | Status |
|:--|:--|:--|:--|:--|
| 01 | [`basalt-core`](https://github.com/kingsokafor777-droid/basalt-core) | Finding schema, risk model, control catalog, SARIF + OCSF emitters, scanner plugin interface. | Foundation | ✅ Shipped |
| 02 | `basalt-aws` | AWS posture scanner — IAM, S3, MFA, CloudTrail, KMS. First consumer of core. | Cloud Security | ⏳ Planned |
| 03 | `basalt-azure` | Azure scanner. Proves the plugin contract holds across providers. | Cloud Security | ⏳ Planned |
| 04 | `basalt-iac` | Terraform static analyzer → SARIF → GitHub Code Scanning. | Cloud Security | ⏳ Planned |
| 05 | `basalt-k8s` | Kubernetes posture — RBAC, Pod Security Standards, NetworkPolicy. | Cloud Security | ⏳ Planned |
| 06 | `basalt-warehouse` | Ingests findings from every scanner. DuckDB + dbt, drift-over-time models. | Data Engineering | ⏳ Planned |
| 07 | `basalt-dashboard` | Next.js. Risk trend, control coverage, compliance views, executive summary. | Data / Frontend | ⏳ Planned |
| 08 | `basalt-rag` | Retrieval over findings and control catalogs, with citations: why is this a risk, which control, what remediation. | AI / RAG | ⏳ Planned |
| 09 | `basalt-agent` | Takes a finding, generates a Terraform remediation PR. Closes the loop back to `basalt-iac`. | AI Agents | ⏳ Planned |
| 10 | `basalt-platform` | Terraform + Helm + GitHub Actions to deploy the whole stack, plus the product documentation hub — PRDs, roadmap, ADR index, research. | Cloud Eng + PM | ⏳ Planned |

<sub>✅ Shipped · 🚧 In progress · ⏳ Planned — this table updates as each repo lands. Links appear when the repo is public.</sub>

---

## Selected work

### [basalt-core](https://github.com/kingsokafor777-droid/basalt-core)

`Python` `Pydantic v2` `SARIF 2.1.0` `OCSF 1.3.0`

One finding schema for cloud posture, IaC and Kubernetes security scanners. Security tooling fragments at the seams — every scanner emits a different JSON shape, and every dashboard and warehouse downstream needs a bespoke adapter. Basalt Core removes that layer by defining the contract once: a provider-neutral finding model, a deterministic risk score that ships with the factors that produced it, versioned control catalogs as replaceable data, and a scanner plugin interface discovered through Python entry points.

Two decisions I'd point at. The resource URN percent-escapes `:` and `%` within segments, because ARNs and CloudFormation type names contain colons and would otherwise destroy the fixed-arity join key the whole warehouse design depends on — and `parse_urn()` plus round-trip tests enforce that reversibility rather than asserting it in a docstring. And the Python floor sits at 3.10, not 3.11, because Ubuntu 22.04 LTS is supported into 2027 and a foundation library every scanner depends on should have the lowest floor it can defend. ADR 0006 records that trade and the condition for reverting it.

### [Ontario Electricity Demand — Day-Ahead Forecasting & Dashboard](https://github.com/kingsokafor777-droid/ontario-demand-forecast)

`Python` `scikit-learn` `pandas` `Streamlit`

An end-to-end forecasting project on real public data: an automated pipeline pulling hourly IESO demand joined to Open-Meteo weather, a day-ahead forecast with a strict knowability constraint (every feature is available 24 hours before the target hour), and an interactive dashboard.

The part I'd point at first is the validation design. Chronological holdout rather than random K-fold, which leaks future information on time series, and the model is judged against both a 24-hour persistence baseline and a seasonal-naive baseline — because a model that cannot beat seasonal-naive has learned nothing worth deploying. Gradient boosting was chosen over deep learning deliberately for the data volume and explainability. Limitations are documented rather than hidden.

---

## Focus areas

```text
Probabilistic forecasting     quantile regression, prediction intervals, calibration
ML systems                    evaluation harnesses, baselines, drift, edge inference
Cloud security                posture scanning, IaC analysis, SARIF/OCSF, threat detection
Data engineering              ingestion pipelines, DuckDB + dbt, dimensional modeling
Technical writing             specifications, PRDs, ADRs, rubric and criteria design
```

---

## GitHub

<p align="center">
  <img height="165" src="https://github-readme-stats.vercel.app/api?username=kingsokafor777-droid&show_icons=true&hide_border=true&include_all_commits=true&count_private=true&theme=github_dark" alt="GitHub stats">
  <img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=kingsokafor777-droid&layout=compact&hide_border=true&langs_count=8&theme=github_dark" alt="Top languages">
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com?user=kingsokafor777-droid&hide_border=true&theme=github-dark" alt="Streak">
</p>

---

## Contact

Open to project-based and remote work in AI/ML, data, and cloud security.

- **Email** — [okaforkingsley777@gmail.com](mailto:okaforkingsley777@gmail.com)
- **Portfolio** — [kingsleyokafor.dev](https://kingsleyokafor.dev)

<sub>💬 Ask me about probabilistic forecasting, evaluation design, cloud security posture, or turning an engineering problem into a business case.</sub>

