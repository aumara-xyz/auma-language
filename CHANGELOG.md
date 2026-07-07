# AUMA Language Changelog

---

## v16.0 — The Launch Canon
**Date:** 2026-07-07

- Finalized the v15.1 repair series as the stable launch canon — **the first machine-gated release**: `tools/aumaCanonLint.ts` must pass with 0 errors for any canon to ship
- Repaired all 12 v15-renamed words that still carried the old word's pronunciation + ttsKey (lexicon **and** lesson flashcards)
- Merged the duplicate `malu`; `skirvi` → `skrivi` metathesis repair with antibody
- **Applied the v15 tense freeze to the curriculum** — all seven deprecated tense words (`deja`, `todi`, `pasuna`, `agon`, `nu`, `na`, `justa`) were still being taught; removed, replacements re-homed (`suda`→Day 9, `ankora`/`pasa`→Day 54), antibodies recorded
- Gave lesson cards to the 22 lexicon words that had an introduction day but were never taught (`persona`, `femina`, `viro`, `ensena`, `komprende`, `moneta`, …)
- Closed 16 future-word leaks; day 83 slimmed 52→36 cards (patterns, not memorization); day 84 is now a real 22-question graduation exam
- Lexical dedup: `parla` (speak/talk) vs `pali` (say/tell) differentiated; `despues` → `pos`; `siti` → `tirsta` (breaks the `sita`/`sisa` confusion cluster)
- `teachingMode` (`card` | `pattern` | `recognition`) tagged on every entry; TTS embedded per-entry (no separate TTS lexicon from v16 on)
- **New artifact class — the corpus**: `auma-readers-v1.json`, six graded readers, day-gated and lint-enforced
- Resulting lexicon: **948 entries**, 84 days, 1,464 steps, 354 quizzes, 16 deprecation antibodies
- Training/eval companions remain v13.1-era, pending a v16-native refresh

## v15.0 — Grammar Freeze + Lexicon Repair
**Date:** 2026-07-03 *(published retroactively with v16 for lineage)*

- Froze the grammar (`AUMA_GRAMMAR_FREEZE_v15`): tense/aspect stacking, fronted questions, passive `-ita`→`-iva`, `-ao`/`-tano`/`-isto` derivation, comparison, duration
- ~11 cross-language landmine renames propagated across all 84 days; ~21 human-basics added; 326 quizzes de-biased
- Resulting lexicon: 956 entries. Shipped with hand-edit defects (see v16 notes) — repaired and consolidated in v16

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
