# Litmus AI Claude Design Artifact Brief

Use this brief when replacing the source-derived process SVGs with Claude Design exports.

## Source package

- Project: `/Users/reggiealleyne/Projects/ai-literacy-platform`
- Main files: `README.md`, `src/App.jsx`, `src/pages/HomePage.jsx`, `src/pages/AssessmentPage.jsx`, `src/pages/TrainingPage.jsx`, `src/pages/CertificationPage.jsx`, `src/pages/BillingPage.jsx`, `src/pages/DashboardPage.jsx`, `src/pages/ProfilePage.jsx`, `src/pages/LoginPage.jsx`, `src/pages/RegisterPage.jsx`
- Supporting source: `src/data/demoFallback.js`, `src/config/apiEndpoints.js`, `src/services/supabaseClient.js`
- Do not use: `docs/testing/COMPLETE_VERIFICATION.md` or any private environment, webhook, billing-secret, or account-specific material.

## Requested exports

- `litmus-ai-sitemap.svg`: product map for home, assessment, results, training, certification, billing, dashboard, profile, login, and registration.
- `litmus-ai-assessment-flow.svg`: user flow from assessment entry to level calibration, 15 questions, score review, recommendations, training, certification, billing, and dashboard review.
- `litmus-ai-wireframe-assessment.svg`: low-fidelity assessment setup wireframe focused on the calibration panel, level selection cards, timing cues, save-path note, and start action.
- `litmus-ai-wireframe-training-path.svg`: low-fidelity training hub wireframe focused on role filters, module cards, learning bullets, locked premium states, and module actions.

## Direction

Keep the artifacts portfolio-readable and low-fidelity. The goal is to show how the learner or team-lead persona became product structure, not to redesign the final UI. Use the real LitmusAI app routes and screen roles as source material, and avoid adding unsupported adoption, revenue, or learning-outcome metrics.
