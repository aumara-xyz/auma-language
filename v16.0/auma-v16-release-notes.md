# AUMA v16.0 — The Launch Canon
**Date:** 2026-07-07 · **Lexicon:** 948 entries · **Status:** current — first machine-gated release

v16 is the v15.1 repair series finalized as the stable launch canon. It is the first
AUMA release that **had to pass automated validation to exist**: `tools/aumaCanonLint.ts`
runs clean at 0 errors, and every future release is held to the same gate.

## The repair series (v15 → v15.1)

A machine audit of v15-as-shipped found and fixed:

- **All 12 v15-renamed words carried the OLD word's pronunciation and ttsKey** — on
  both the lexicon entries and the lesson flashcards. Learners were being taught wrong
  sounds (`dulsa` shown as "soo-kah", `varma` as "kahl-dah"). Regenerated everywhere.
- **Duplicate `malu`** (the `asola` rename collided with the existing word) — merged
  into one entry: *bad / evil*, with the personal-insult sense as a documented
  secondary use.
- **`skirvi` → `skrivi`** (write) — a fossilized metathesis; the canon's own deprecated
  form `skrivita` attested the `skriv-` root. Antibody added.
- **The v15 tense freeze had never been applied to the curriculum**: all seven
  deprecated tense words (`deja`, `todi`, `pasuna`, `agon`, `nu`, `na`, `justa`) were
  still taught as lesson cards. Removed; `suda` (already) now teaches on Day 9,
  `ankora` (still) and `pasa` (past marker) on Day 54; days 74/77/81/84 rewritten to
  canon forms; antibodies recorded for every removed form.
- **22 lexicon words had an introduction day but no lesson card** (the v15 additions —
  *person, woman, man, teach, understand, money, buy, sell, left, right…*). All have
  cards now, at their assigned days, with examples that respect introduction order.
- **16 future-word leaks closed** (`usa` moved Day 78→24, `ritua` 27→25, `atenda`
  84→41; early-day example sentences reworded).
- **Day 83 slimmed from 52 to 36 cards** — transparent compounds (tens, `-lona`
  numbers, `-imo` ordinals, diagonal directions) are taught as patterns, not
  memorization.
- **Day 84 is now a real graduation**: a 22-question exam across numbers, tense
  stacking, the passive, question fronting, derivation, comparison, and the protected
  roots. (It previously claimed to be a "full mastery assessment" and contained none.)
- **Lexical dedup**: `parla` = speak/talk (activity) vs `pali` = say/tell (report)
  differentiated; `despues` deprecated into `pos`; `siti` (thirsty) renamed `tirsta`,
  breaking the `sita`/`sisa` one-edit confusion cluster.
- **`teachingMode` tagged on every entry**: `card` (taught with a flashcard),
  `pattern` (derived by rule — day names, tens, affixes), `recognition` (in the canon
  for the model/community, not in the 84-day course).

## New artifact class: the corpus

`auma-readers-v1.json` — **six graded readers**, the language's first real texts. Each
is hard-gated to a day range (r1 *salama, ami* uses only days 1–14; r6 *auma — prima
lumo* has the full language telling its own origin story). The gate is enforced by the
lint: **the corpus can never outrun the curriculum.**

## The toolchain

`tools/aumaCanonLint.ts` (Bun) validates: duplicate tokens, ttsKey/pronunciation
drift, words used before their introduction day, deprecated forms in any teaching
surface, ghost tokens, quiz shape, journey/stats consistency, and reader day gates.
Every check exists because v15 shipped a hand-edit bug it would have caught.

## Honesty notes

- Training/eval companions (chat-format examples, eval suite) remain v13.1-era and are
  **pending a v16-native refresh**. v16 is the machine-clean base that refresh should
  be generated from — do not fine-tune against pre-v16 canons without the
  deprecated-form antibody scan.
- TTS pronunciation is embedded per-entry (`pronunciation` + `ttsKey`) from v16 onward;
  there is no separate TTS lexicon file to drift out of sync.
- Open design questions deferred to **v17** (canon-council decisions, not lane
  repairs): number-word confusability (`soka`~`sona`, `suna`~`luna`), `tuli`/`tali`
  pronoun proximity, `akwa`/`wata` sense split, per-entry part-of-speech/IPA metadata.
