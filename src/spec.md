# Specification

## Summary
**Goal:** Fix deployment failures and enable end-to-end `dfx` deployment of the Motoko backend and Vite/React frontend.

**Planned changes:**
- Add a root-level `dfx.json` defining a Motoko `backend` canister (from `backend/main.mo`) and a static asset `frontend` canister serving the Vite build output from `frontend/dist`.
- Add a complete `frontend/package.json` with the scripts/dependencies needed by the existing frontend so `npm install` and `npm run build` succeed.
- Ensure the frontend canister build/install process uses the Vite build output (run `npm run build` before packaging assets) so the deployed asset canister serves HTML/CSS/JS without missing-asset errors.
- Complete and update `frontend/DEPLOYMENT.md` with an accurate, copy/paste end-to-end flow for local replica deployment and IC mainnet deployment, matching the repo’s actual files and paths.

**User-visible outcome:** Running `dfx start --clean` and `dfx deploy` locally deploys both canisters successfully; the deployed frontend loads in the browser and displays backend-provided site info, and the deployment guide provides working local + mainnet instructions.
