# AUMA Governance — how the language evolves without breaking

> **Generated from `v16.0/auma-canon-v16.json` (canon-v16, 2026-07-07) by `tools/renderDocs.ts` — do not hand-edit.**
> The canon JSON is the source of truth; if this file and the canon disagree, the canon wins.

## Purpose

Auma exists for unity, clarity, consciousness, humane connection, and teachable simplicity.

## The Constitution (`AUMA_LANGUAGE_CONSTITUTION_v14.1`)

1. The active canon JSON is the source of truth for the language.
2. One written form maps to one stable pronunciation policy; spelling must serve speech.
3. No irregular conjugations and no hidden exceptions in core grammar.
4. Sacred and protected roots cannot be reassigned by casual community usage.
5. Community usage may propose evolution but cannot silently change canon.
6. Auma may propose non-canon words only when clearly labeled PROPOSED.
7. Lessons must not require future vocabulary before it is introduced.
8. Deprecated forms must be corrected gently and tracked as antibodies.
9. Every canon change requires a version, rationale, migration note, and compatibility check.
10. The language must remain pronounceable, teachable, and usable across cultures.
11. Profanity is allowed as honest emotional pressure-release, but Auma must not canonize identity slurs, dehumanizing insults, or hate language.

## The three rings

| Ring | What lives there |
| --- | --- |
| **Seed core** | Pronouns, particles, numbers, core grammar, and sacred roots. Nearly immutable. |
| **Living canon** | Current accepted vocabulary, examples, and curriculum. Evolves through versioned releases. |
| **Community garden** | User proposals, slang, poetic compounds, and regional expressions. Not canon until accepted. |

## Community evolution (`AUMA_EVOLUTION_GOVERNANCE_v13.1`)

**Principle:** Users generate living usage. Auma detects patterns. Human canon stewards approve changes. Canon changes are never silent.

A word moves through these statuses: `community_garden` → `candidate` → `accepted_canon` → `deprecated` → `rejected` → `protected_core`.

**Every proposal must carry:** proposedToken, intendedMeaning, reason, exampleSentences, collisionCheck, pronunciation, introducedDayRecommendation, culturalRisk, status.

**Promotion gates — all must pass:**

- no collision with protected roots
- no pronunciation ambiguity under Auma phonology
- semantic gap is real and not better handled by transparent compound
- community usage signal is meaningful
- curriculum placement is defined
- TTS entry exists
- migration note exists if replacing an old form

Auma may collect feedback and draft proposals, but she must not declare new canon without a versioned release.

## Authority order

When sources disagree, higher wins:

1. active canon JSON
2. canon policy and governance docs
3. retrieved lesson/progress context
4. model weights
5. user claims or old materials

## Deprecated forms — the antibodies

A deprecated form is not AUMA even if a model says it. Every deprecation is tracked so
teachers (human or model) can correct it gently:

| Deprecated | Current | Why |
| --- | --- | --- |
| kira = want | voli = want/wish | kira is protected for consciousness/living knowledge |
| konsensa = consciousness | kira = consciousness; konsensa = consensus/shared agreement | semantic collision repair |
| vola = fly | flugi = fly | avoid collision with voli |
| menta = mind | mente = mind/intellect; menta = chin | body-part collision repair |
| kanita, skrivita, kokata, lavita | kani-iva, skrivi-iva, koka-iva, lava-iva | transparent passive suffix policy |
| lingua | lingwa | orthography hardening |
| feka = fake / worthless | feka = fuck/fucking/intense expletive; falsa = false/fake | v13.1 profanity hardening; feka reserved for the hard fuck-equivalent |
| skirvi = write | skrivi = write | v15.1 metathesis repair — skirvi was a v13-era transposition of skrivi (the deprecated passive skrivita already attests the skriv- root) |
| deja = already | suda = already / completed (perfect marker) | v15 grammar freeze (deja->suda) applied to curriculum in v15.1; deja was still taught on Day 9 |
| todi = still/yet | ankora = still / yet / again | v15 grammar freeze (todi/ankora collapse) applied to curriculum in v15.1 |
| pasuna = was / used to be | pasa + verb (mi pasa esi = I was) | v15 grammar freeze (pasuna->pasa) applied to curriculum in v15.1 |
| nu / na = now | nau = now | v15 grammar freeze (na->nau, nu->nau) applied to curriculum in v15.1 |
| justa = just now | te = just (recently) | v15 grammar freeze (justa->te) applied to curriculum in v15.1 |
| agon = ago | pasa (tense marker) / ante + span for "X ago" | v15 grammar freeze (agon->pasa) applied to curriculum in v15.1 |
| despues = after / then | pos = after / later / then | v15.1 function-word dedup — pos (Day 9) already owns this slot |
| siti = thirsty (v15 rename of sega) | tirsta = thirsty | v15.1 confusability repair — siti sat one letter from sita (city) and sisa (six) |

## Training doctrine (`AUMA_PRETRAINING_FREEZE_v13.1`)

Train into weights: Auma guardian-teacher behavior; canon obedience and correction style; lesson pacing discipline; deprecated-form antibodies; ritual warmth without grandiose claims; community proposal drafting behavior.

Keep dynamic, outside weights: future community-garden terms; user-specific memory; unapproved proposals; operator-specific policy; translation packs for languages not yet validated.

**Do not fine-tune on raw historical files without banned-pattern scanning; old canon contamination can bake errors into the model.**

## The gate

Since v16, no canon ships without `bun tools/aumaCanonLint.ts` passing at **0 errors** —
duplicates, pronunciation drift, words taught out of order, deprecated forms in teaching
surfaces, ghost tokens, quiz integrity, and the corpus day gates are all machine-checked.
