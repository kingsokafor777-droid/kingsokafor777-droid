window.PORTFOLIO_PROGRAMS = [
  {
    slug: "basalt",
    name: "Basalt",
    eyebrow: "Cloud-security posture platform",
    headline: "Normalize posture evidence. Preserve the operational trail.",
    summary: "A ten-repository cloud-security system joining multi-cloud, IaC, and Kubernetes evidence through a common finding contract, drift-aware Warehouse models, and controlled remediation paths.",
    boundary: "All 10 current-main branches have hosted quality and zero-high/critical image gates passing as of 2026-08-26. No container image or dependent cloud provisioning is represented as published; Basalt remains source software rather than a deployed cloud service or production release.",
    status: "10 current-main check sets clean · platform production gate retained",
    rows: [
      ["01", "basalt-core", "Canonical findings, deterministic risk model, control catalogue, SARIF/OCSF, scanner interface.", "Foundation", "Source component · current-main checks passing"],
      ["02", "basalt-aws", "Read-only AWS posture scanner for IAM, S3, MFA, CloudTrail, and KMS.", "Cloud Security", "Source component · current-main checks passing"],
      ["03", "basalt-azure", "Azure scanner validating the multi-provider plugin contract.", "Cloud Security", "Source component · current-main checks passing"],
      ["04", "basalt-iac", "Terraform static analysis and SARIF output.", "Cloud Security", "Source component · current-main checks passing"],
      ["05", "basalt-k8s", "Kubernetes RBAC, Pod Security Standards, and NetworkPolicy posture checks.", "Cloud Security", "Source component · current-main checks passing"],
      ["06", "basalt-warehouse", "Finding ingestion, DuckDB/dbt modeling, and posture drift history.", "Data Engineering", "Source component · current-main checks passing"],
      ["07", "basalt-dashboard", "Tenant-aware executive posture analytics and Warehouse read boundary.", "Data / Frontend", "Source component · current-main checks passing"],
      ["08", "basalt-rag", "Retrieval over findings and controls with citations.", "AI / RAG", "Source component · current-main checks passing"],
      ["09", "basalt-agent", "Guarded Terraform-remediation planning.", "AI Agents", "Source component · current-main checks passing"],
      ["10", "basalt-platform", "Terraform, Helm, CI/CD, architecture decisions, and release documentation.", "Platform Engineering", "Source component · current-main checks passing · production gate retained"]
    ].map(([id, repository, description, track, status]) => ({ id, repository, description, track, status }))
  },
  {
    slug: "agentproof",
    name: "AgentProof",
    eyebrow: "Workflow security regression testing for AI agents",
    headline: "Make unsafe composed agent paths reproducible.",
    summary: "A completed, local-first verification program for tool-using AI-agent workflows: versioned evidence contracts, deterministic invariants, replay, and CI-ready reporting for unsafe action sequences.",
    boundary: "These are tagged source releases with offline validation; they do not imply a hosted service, package-registry publication, or live destructive tool call.",
    status: "10 shipped · v0.1.0 source releases",
    rows: [
      ["01", "agentproof-core", "Versioned trace and finding contracts, policy result model, evidence IDs, JSON Schema.", "Foundation", "Shipped"],
      ["02", "agentproof-otel", "Offline OTLP ingestion, explicit tool-span selection, and deterministic trace normalization.", "Observability", "Shipped"],
      ["03", "agentproof-mcp", "Offline MCP transcript parsing, tool-definition provenance, and privacy-minimized capability inventory.", "Agent Security", "Shipped"],
      ["04", "agentproof-policy", "Closed invariant DSL, deterministic Core evaluator, stable findings, and bounded Rego/Cedar review artifacts.", "Policy Engineering", "Shipped"],
      ["05", "agentproof-replay", "Deterministic stateful replay, sequence graph, approval observations, and shortest policy-violation paths.", "Security Engineering", "Shipped"],
      ["06", "agentproof-corpus", "Versioned synthetic safe/adversarial fixtures, strict manifest integrity, and deterministic benchmarks.", "Security Research", "Shipped"],
      ["07", "agentproof-action", "Bundled Node Action with strict local evidence validation and deterministic SARIF/JUnit/JSON output.", "DevSecOps", "Shipped"],
      ["08", "agentproof-python", "Typed append-only Core trace capture, lifecycle helpers, and deterministic offline OTLP JSON handoff.", "Developer Experience", "Shipped"],
      ["09", "agentproof-typescript", "Typed trace capture, bounded Node lifecycle helpers, deterministic fingerprints, and local CLI.", "Developer Experience", "Shipped"],
      ["10", "agentproof-platform", "Program architecture, accepted ADRs, security/release policy, CI references, and operator runbooks.", "Platform Engineering", "Shipped"]
    ].map(([id, repository, description, track, status]) => ({ id, repository, description, track, status }))
  },
  {
    slug: "ccm",
    name: "Continuous Control Monitoring",
    eyebrow: "Evidence engineering for cloud control posture",
    headline: "Version evidence before declaring a technical assessment.",
    summary: "A ten-repository deterministic platform for AWS and Azure technical-control posture, tamper-evident evidence, supplied-observation assessment, casework, and audit-preparation views.",
    boundary: "It reports versioned technical-control assessments and supporting evidence—not ISO certification, SOC 2 attestation, or a provisioned cloud environment.",
    status: "10 shipped · verified source releases",
    rows: [
      ["01", "ccm-core", "Versioned evidence, control, assessment, exception, remediation, and audit-package contracts; canonical hashing and append-only journal verification.", "Foundation", "Shipped"],
      ["02", "ccm-controls", "Declarative technical-control DSL, versioned control packs, mapping provenance, deterministic evaluation, severity, and SLA policy.", "Control Engineering", "Shipped"],
      ["03", "ccm-aws", "Read-only AWS snapshots and deterministic normalization for identity, storage, CloudTrail, Config, KMS, network, encryption, and logging posture.", "Cloud Security", "Shipped"],
      ["04", "ccm-azure", "Read-only Azure snapshots and deterministic normalization for Resource Graph, storage, network, Monitor/Activity Log, Key Vault, and encryption posture.", "Cloud Security", "Shipped"],
      ["05", "ccm-ledger", "PostgreSQL migration assets, content-addressed evidence references, immutable audit journal, retention/expiry lifecycle, and integrity verification.", "Data / Evidence Engineering", "Shipped"],
      ["06", "ccm-assessor", "Deterministic supplied-observation assessment orchestration, evidence coverage, drift comparison, risk rollups, and sealed manifests.", "Risk Engineering", "Shipped · v0.1.0"],
      ["07", "ccm-casework", "Control-exception references, compensating-control evidence, remediation ownership/state, supplied-time SLA evaluation, approval evidence, and closure verification.", "GRC Engineering", "Shipped · v0.1.0"],
      ["08", "ccm-audit-export", "Payload-blind evidence packages, declared redaction policy, integrity manifests, and offline verification CLI for audit preparation.", "Audit Engineering", "Shipped · v0.1.0"],
      ["09", "ccm-console", "Tenant-scoped FastAPI/PostgreSQL API boundary, RBAC, payload-blind evidence explorer, and executive coordination workbench.", "Product / Frontend", "Shipped · v0.1.2"],
      ["10", "ccm-platform", "Docker/Compose references, provider-free Terraform test environment, telemetry minimization, CI/CD, deployment references, ADRs, and runbooks.", "Platform Engineering", "Shipped · v0.1.0"]
    ].map(([id, repository, description, track, status]) => ({ id, repository, description, track, status }))
  },
  {
    slug: "cyrisk",
    name: "Cyrisk",
    eyebrow: "Evidence-governed cyber-risk quantification",
    headline: "Keep uncertainty visible from technical evidence to review.",
    summary: "A completed ten-component source-release program for deterministic scenario analysis, provenance-aware assumptions, non-causal control comparisons, review signals, and reproducible audit material.",
    boundary: "FAIR-inspired only. Outputs are supplied-input analyses, not forecasts, insurance estimates, real-loss predictions, authorization decisions, or compliance certification.",
    status: "10 shipped · independent audit complete",
    rows: [
      ["01", "cyrisk-core", "Versioned scenario, factor-range/distribution, loss-component, calculation-manifest, comparison, risk-register, and review-decision contracts; JSON Schema and canonical hashing.", "Foundation", "Shipped · v0.1.0"],
      ["02", "cyrisk-model", "Seed-controlled exposure-range simulation, percentile summaries, sensitivity analysis, and stable calculation traces.", "Quantitative Risk Engineering", "Shipped · v0.1.0"],
      ["03", "cyrisk-evidence", "Input provenance, estimate/assumption registry, confidence/completeness rules, calibration-review records, integrity, and expiry.", "Evidence Engineering", "Shipped · v0.1.0"],
      ["04", "cyrisk-controls", "Versioned control-effect and cost assumptions plus explicit non-causal before/after comparison artifacts.", "Control Economics", "Shipped · v0.1.0"],
      ["05", "cyrisk-register", "Cybersecurity risk-register lifecycle, appetite/tolerance context, rollup, review evidence, escalation, and decision boundaries.", "GRC / ERM Engineering", "Shipped · v0.1.0"],
      ["06", "cyrisk-ccm", "Offline adapter from versioned CCM evidence/assessment references to scenario-input candidates and coverage gaps.", "Integration Engineering", "Shipped · v0.1.0"],
      ["07", "cyrisk-scenarios", "Sealed synthetic scenario corpus, benchmark harness, regression fixtures, and adversarial assumption-quality cases.", "Risk Research", "Shipped · v0.1.0"],
      ["08", "cyrisk-audit-export", "Reproducible payload-blind review packages, declared redaction policy, manifests, and offline verification CLI.", "Audit Engineering", "Shipped · v0.1.0"],
      ["09", "cyrisk-console", "FastAPI/static-workbench source reference, synthetic tenant scope, demonstrative caller-context role checks, and a PostgreSQL schema reference.", "Product / Frontend", "Shipped · v0.1.0"],
      ["10", "cyrisk-platform", "Deterministic handoff validator; disabled Compose reference, provider-free Terraform guard, telemetry minimization, CI/release controls, ADRs, and runbooks.", "Platform Engineering", "Shipped · v0.1.0"]
    ].map(([id, repository, description, track, status]) => ({ id, repository, description, track, status }))
  }
];
