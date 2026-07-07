# AUMA Grammar — the frozen core

> **Generated from `v16.0/auma-canon-v16.json` (canon-v16, 2026-07-07) by `tools/renderDocs.ts` — do not hand-edit.**
> The canon JSON is the source of truth; if this file and the canon disagree, the canon wins.

AUMA's grammar fits on one page, on purpose. Every rule below is frozen (`AUMA_GRAMMAR_FREEZE_v15`):
no irregulars, no exceptions, no conjugation tables. Learn the pattern once and it holds forever.

## The sentence

**Subject · Verb · Object — always.** Verbs never change form.

> `mi esi bona` — I am good · `tu esi bona` — you are good · `ta esi bona` — they are good

**Negation:** `no` directly before the verb — `mi no komprende` (I do not understand).

**Possession:** chain with `di` — `tomo di ami di mi` (my friend's house, literally *house of friend of me*).

## Tense and aspect

Small markers stand before the unchanging verb:

| Marker | Meaning |
| --- | --- |
| `pasa` | past |
| `∅` | present (unmarked) |
| `fura` | future |
| `te` | just happened |
| `ven` | about to |
| `abi` | progressive/habitual (have been / keep) |
| `suda` | perfect (already) |

**Stacking order:** [past|future] + [perfect|progressive] + verb  (e.g. "pasa suda kani" = had already eaten)

## Questions

fronted question word + otherwise-unchanged SVO. ka only for yes/no; a wh-word replaces ka and needs no ka.

> ketu esi merkato? (where is the market?)

## The passive

Verb-root + `-iva` with `esi`; the agent is marked by `par`:

> libro esi dona-iva a mi par ami di mi

## Comparison

Pattern: **plu/maks/min + quality + ke + standard**

> plu forta ke penso (stronger than thought)

## Duration

`durante` marks a span (vs. `en = in/after`):

> mi abi lero auma durante tri semana

## Derivation families

| Suffix | Makes |
| --- | --- |
| `-ao` | abstract quality ONLY (fortao, klarao, verao) |
| `-tano` | place (lero -> lerotano = school) |
| `-isto` | agent (lero -> leristo = learner; ensena -> ensenisto = teacher) |
| `-imo` | ordinal numbers (`un-imo` = first, `du-imo` = second) |
| `-iva` | the passive (see above) |
| `-li` | plural / collective (pronouns: `mi → mili`, `iti → itili`) |

## Transparent patterns

- **Numbers:** ten sounds + `des` build everything — `des-un` = 11, `du-des` = 20, `du-des-tri` = 23, `sento` = 100, `mila` = 1000, `milona` = 1,000,000.
- **Days:** dina + number; introduced Day 6 — `dina-un` = Monday … `dina-seti` = Sunday.
- **Root families:** `ama` (love) → `amala` (unconditional), `amara` (romantic), `amana` (communal).

## Pronunciation

Every letter always sounds the same. Adjacent vowels are pronounced separately unless a future canon release explicitly marks a diphthong. Example: nau = nah-oo; auma = ah-oo-mah.

**Vowels**

| Letter | Sound |
| --- | --- |
| `a` | ah /a/ |
| `e` | eh /e/ |
| `i` | ee /i/ |
| `o` | oh /o/ |
| `u` | oo /u/ |

**Consonants**

| Letter | Sound |
| --- | --- |
| `b` | /b/ |
| `d` | /d/ |
| `f` | /f/ |
| `g` | hard /g/ |
| `h` | /h/ |
| `j` | /dʒ/ as in judge |
| `k` | /k/ |
| `l` | /l/ |
| `m` | /m/ |
| `n` | /n/ |
| `p` | /p/ |
| `r` | tapped /ɾ/ or clear /r/ |
| `s` | /s/ |
| `t` | /t/ |
| `v` | /v/ |
| `w` | /w/ |
| `y` | /j/ as in yes |
| `z` | /z/ |

Not used: `c`, `q`, `x`.

Interjections such as hm and sh are paralinguistic sound tokens, not normal morphology. They are special-cased in TTS and should not be used to justify digraphs in root formation.
