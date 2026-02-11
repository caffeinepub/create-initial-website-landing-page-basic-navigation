# Specification

## Summary
**Goal:** Replace repeated travel imagery with unique, distinct photography across key pages, matching the visual style reference (aptraavelservices.com).

**Planned changes:**
- Add new, distinct travel photography assets under `frontend/public/assets/generated/` and ensure no repeats across cards/sections.
- Update `frontend/src/pages/TourPackages.tsx` so each package card uses its own unique image asset (instead of a single shared image).
- Update `frontend/src/pages/HoneymoonOffers.tsx` so each of the 6 offer cards uses a different image asset (remove the current 3-image rotation based on `offer.id`).
- Update `frontend/src/pages/Home.tsx` so the Home About section and Home Tour Guide section use dedicated images that are not reused from the About and Tour Guide pages.

**User-visible outcome:** Tour Packages, Honeymoon Offers, and Home page sections display distinct, non-repeating travel photos per card/section while keeping navigation (e.g., “Book Now”) working as before.
