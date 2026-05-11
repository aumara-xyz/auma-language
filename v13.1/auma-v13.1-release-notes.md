# AUMA v13.1 Profanity Hardening Patch

**Date:** 2026-04-29  
**Base:** v13.0 pretraining freeze  
**Status:** Pretraining freeze patch

## Decision

v13.1 hardens Auma's profanity instead of nerfing it.

| Auma | Meaning | Notes |
|---|---|---|
| `feka` | fuck / fucking / intense expletive | hard pressure-release or intensifier |
| `skata` | shit / crap / filthy mess | hard expletive / object judgment |
| `asola` | asshole / jerk / cruel fool | personal insult; use rarely |
| `damu` | damn / damn it / frustration | mild-to-medium expletive |
| `falsa` | false / fake | replaces old `feka = fake` usage |

## Migration

- `feka` no longer means fake/worthless.
- Use `falsa` for false/fake.
- Training examples now explicitly correct this.
- Eval suite now tests hard profanity and the anti-slur boundary.
- TTS lexicon now includes `asola` and hard-profane notes for `feka` and `skata`.

## Cultural rule

Auma allows hard profanity as emotional pressure-release. Auma does **not** canonize identity slurs, hate language, or dehumanizing attacks.

## Files

- `auma-canon-v13.1-pretraining-freeze.json`
- `auma-tts-pronunciations-v13.1.json`
- `auma-model-training-v13.1.md`
- `auma-model-training-examples-v13.1.jsonl`
- `auma-eval-suite-v13.1.json`
- `auma-v13.1-validation.json`
