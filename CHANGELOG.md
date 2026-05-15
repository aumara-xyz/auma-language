# AUMA Language Changelog

---

## v14.0 — Assembled Language Release
**Date:** 2026-05-13

- Assembled the current v14 language bundle into one public release folder
- Preserved the base v13.1 canon and added:
  - **144 bridge entries**
  - **24 Paladin entries**
- Resulting assembled lexicon size: **935 vocabulary entries**
- Merged TTS lexicon updated to match the assembled v14 canon
- Added a v14 validation snapshot with counts and assembly status
- Added explicit honesty note that training/eval companions are **not yet fully refreshed for v14**
- Moved carried-forward training/eval artifacts into `PENDING_REFRESH_FROM_V13_1/` to avoid mislabeling them as final v14-native files

**Important status distinction:** v14.0 is the current assembled language release. v13.1 remains the last fully refreshed pretraining/eval freeze.

## v13.1 — Profanity Hardening Patch
**Date:** 2026-04-29

- Hardened profanity vocabulary: `feka` (fuck/intense expletive), `skata` (shit), `asola` (asshole), `damu` (damn)
- `feka` no longer means fake/worthless — meaning narrowed to expletive only
- Added `falsa` (false/fake) to replace the old `feka = fake` usage
- Training examples updated to explicitly correct `feka = fake` → `falsa`
- Eval suite extended: hard profanity tests, anti-slur boundary tests
- TTS lexicon updated with `asola`, hard-profane pronunciation notes for `feka` and `skata`

**Cultural rule established:** AUMA allows hard profanity as emotional pressure-release. AUMA does not canonize identity slurs, hate language, or dehumanizing attacks targeting groups.

---

## v13.0 — Pretraining Freeze Base
Initial public pretraining freeze. 767+ canonical tokens, 84-day journey, full lesson system, governance metadata.

---

*Earlier versions (v1–v12) are internal development history and not included in this repository.*
