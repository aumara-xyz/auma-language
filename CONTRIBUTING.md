# Contributing to AUMA Language

Thank you for wanting to help grow this language. AUMA is alive because people use it, refine it, and care about its integrity. Here is how to participate.

---

## The Authority Order

Before proposing anything, understand the chain:

1. **Active canon JSON** — the file wins
2. **Canon policy / governance docs** — this file and the training doctrine
3. **Community proposals** — evaluated against canon principles
4. **Model weights** — always subordinate to the living file
5. **User habit** — what people say informally is not automatically canon

A word is not AUMA until it is in the canon. A deprecated word is not AUMA even if a model says it.

---

## Proposing a New Word

Open a GitHub Issue with the label **`proposal: new word`**.

Your proposal must include:

```
Token: [the word, all lowercase]
Meaning: [primary English meaning, brief]
Part of speech: [noun / verb / adjective / adverb / particle / exclamation]
Etymology: [what roots it draws from, if any]
Usage example: [one sentence using it naturally]
Why it belongs: [what gap in the vocabulary it fills — be specific]
Cultural note: [any cultural weight, sensitivity, or boundary to name]
```

Proposals without all fields will be closed without review. This is not gatekeeping — it is clarity.

---

## Proposing a Deprecation

Open a GitHub Issue with the label **`proposal: deprecation`**.

Include:
- The token to deprecate
- Why (meaning collision, phonetic confusion, cultural harm, superseded by a better word)
- Proposed replacement token, if any
- Migration note (what existing speakers / models should do)

Deprecations are serious. The training data must be updated, eval antibodies added, and TTS lexicon cleaned. Do not propose lightly.

---

## Reporting a Hallucination or Canon Error

If you find a place where AUMA is being spoken incorrectly — by a model, in training data, in documentation — open an Issue with the label **`bug: canon drift`**.

Include:
- The incorrect form you encountered
- The correct canonical form
- Where you found it (app, training file, doc)

These are treated as bugs, not proposals. Fast track.

---

## What Will Not Be Canonized

AUMA does not canonize:
- Identity slurs
- Dehumanizing language targeting groups
- Words designed to demean rather than to express

Hard profanity (emotional pressure-release, intensity, frustration) is already in canon. The line is between human emotional expression and weaponized hate. If you are unsure which side your proposal is on, ask in the Issue before submitting.

---

## Canon Authority

Peter Viviani holds final canon authority in this phase. This will open to a broader council as the community grows. The governance model itself is versioned — proposals to change governance belong in Issues labeled **`governance`**.

---

## Style

- All tokens lowercase
- Keep proposals focused — one word per Issue
- Cite the canon file version you are working against
- Be direct. AUMA's voice does not flatter. Neither should proposals.
