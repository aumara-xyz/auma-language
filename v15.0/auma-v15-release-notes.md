# AUMA v15.0 — Grammar Freeze + Lexicon Repair
**Date:** 2026-07-03 · **Lexicon:** 956 entries · **Status:** superseded by v16 (kept for lineage, as shipped)

v15 came out of a deep parallel read of the assembled v14.1 canon, which surfaced five
crush-risks the language had been carrying:

1. **Lexicon phonological monoculture + cross-language landmines** — too many
   near-identical CVCV words, and several tokens with unfortunate meanings in major
   natural languages.
2. **Uncomposed tense particles** — past/future/perfect markers existed but had no
   frozen composition rules.
3. **Missing human basics** — no woman, man, person, teach, understand, light, money,
   buy, sell, left, right.
4. **A fake "Mastery" tier** — late-course days that re-taught early content instead of
   extending it.
5. **Quiz answer-position bias** — correct answers over-represented in one option slot.

## What v15 did

- **Grammar freeze** (`AUMA_GRAMMAR_FREEZE_v15`): tense/aspect markers with an explicit
  stacking order (`pasa suda kani` = had already eaten), fronted question words over
  unchanged SVO, the passive rebuilt as `-iva` (de-conflicting `ita` = "that"), the
  `-ao` / `-tano` / `-isto` derivation families, comparison (`plu … ke …`), and
  duration (`durante`).
- **~11 landmine renames** propagated across all 84 lesson days (`suka`→`dulsa`,
  `kalda`→`varma`, `tero`→`dele`, `animao`→`alma`, `negra`→`nera`, `asola`→`malu`, …).
- **21 human-basics added** (`persona`, `femina`, `viro`, `ensena`, `komprende`,
  `moneta`, `kompra`, `venda`, `sinistra`, `destra`, `lumo`, …).
- **326 quizzes rebalanced** to kill the answer-position bias.

## Honesty note

v15 shipped with hand-edit defects that were only caught when the release process
gained machine validation: the renamed words still carried the *old* word's
pronunciation and ttsKey, one rename created a duplicate token, and the tense freeze
was never applied to the curriculum (all seven deprecated tense words were still being
taught as lesson cards). All of this was found and repaired in the v15.1 series and
consolidated as **v16** — see `/v16.0/auma-v16-release-notes.md`. This file preserves
v15 exactly as shipped, for lineage.
