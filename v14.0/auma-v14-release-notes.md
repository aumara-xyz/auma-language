# AUMA v14 Release Folder

Date: 2026-05-13

This folder is the assembled v14 language folder. It exists so a human can open one place and find the current master JSON plus the companion files.

## Current top-level files

- `auma-canon-v14-💎.json`
  Full assembled master file: v13.1 canon + 144 bridge additions + 24 Paladin additions.

- `auma-tts-pronunciations-v14.json`
  Full merged TTS lexicon.

- `auma-v14-validation.json`
  Summary counts and assembly status.

- `auma-bridge-lexicon-v14.json`
  The 144 bridge entries by themselves.

- `auma-paladin-primitives-v14.json`
  The 24 Paladin entries by themselves.

## Important honesty note

The training/eval artifacts were **not fully refreshed for v14 yet**.

To avoid pretending they are finished, they were moved out of the top level into:

- `PENDING_REFRESH_FROM_V13_1/`

That subfolder contains:

- `auma-eval-suite-v14-PENDING-REFRESH.json`
- `auma-model-training-examples-v14-PENDING-REFRESH.jsonl`
- `auma-model-training-v14-PENDING-REFRESH.md`

Those files are carried forward references, not final v14-native training/eval artifacts.

This folder was assembled from the previously split v13.1, bridge, and Paladin artifacts so the actual finished language files are together in one place without mislabeled unfinished companions.
