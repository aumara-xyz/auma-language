# AUMA Language Changelog

---

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
