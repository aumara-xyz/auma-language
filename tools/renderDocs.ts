// AUMA doc renderer — generates the human-readable references in /docs from the
// canon JSON, so prose and canon can never drift apart. Do not hand-edit the
// generated files; change the canon (through a versioned release) and re-run:
//
//   bun tools/renderDocs.ts
//
import { readFileSync, writeFileSync, mkdirSync } from 'fs';

const CANON_PATH = 'v16.0/auma-canon-v16.json';
const READERS_PATH = 'v16.0/auma-readers-v1.json';
const canon = JSON.parse(readFileSync(CANON_PATH, 'utf8'));
const readers = JSON.parse(readFileSync(READERS_PATH, 'utf8'));
mkdirSync('docs', { recursive: true });

const STAMP = `> **Generated from \`${CANON_PATH}\` (${canon.version}, ${canon.exportDate}) by \`tools/renderDocs.ts\` — do not hand-edit.**\n> The canon JSON is the source of truth; if this file and the canon disagree, the canon wins.\n\n`;

// ---------------------------------------------------------------------------
// GRAMMAR.md
// ---------------------------------------------------------------------------
{
  const g = canon.grammarFreeze_v15;
  const p = canon.pronunciationPolicy;
  const kd = canon.curriculumPolicy?.knownDerivedPatterns ?? {};
  const markerRows = Object.entries(g.tenseAspect.markers)
    .map(([m, meaning]) => `| \`${m}\` | ${meaning} |`).join('\n');
  const vowelRows = Object.entries(p.vowels).map(([l, s]) => `| \`${l}\` | ${s} |`).join('\n');
  const consRows = Object.entries(p.consonants).map(([l, s]) => `| \`${l}\` | ${s} |`).join('\n');
  const md = `# AUMA Grammar — the frozen core

${STAMP}AUMA's grammar fits on one page, on purpose. Every rule below is frozen (\`${g.version}\`):
no irregulars, no exceptions, no conjugation tables. Learn the pattern once and it holds forever.

## The sentence

**Subject · Verb · Object — always.** Verbs never change form.

> \`mi esi bona\` — I am good · \`tu esi bona\` — you are good · \`ta esi bona\` — they are good

**Negation:** \`no\` directly before the verb — \`mi no komprende\` (I do not understand).

**Possession:** chain with \`di\` — \`tomo di ami di mi\` (my friend's house, literally *house of friend of me*).

## Tense and aspect

Small markers stand before the unchanging verb:

| Marker | Meaning |
| --- | --- |
${markerRows}

**Stacking order:** ${g.tenseAspect.stackingOrder}

## Questions

${g.questions.order}. ${g.questions.note}

> ${g.questions.example}

## The passive

Verb-root + \`${g.passive.suffix.replace(/^.*?(-\w+).*$/, '$1')}\` with \`esi\`; the agent is marked by \`${g.passive.agent}\`:

> ${g.passive.example}

## Comparison

Pattern: **${g.comparison.pattern}**

> ${g.comparison.example}

## Duration

\`${String(g.duration.marker).split(' ')[0]}\` marks a span (vs. \`${g.duration.vs}\`):

> ${g.duration.example}

## Derivation families

| Suffix | Makes |
| --- | --- |
| \`-ao\` | ${g.derivation['-ao']} |
| \`-tano\` | ${g.derivation['-tano']} |
| \`-isto\` | ${g.derivation['-isto']} |
| \`-imo\` | ordinal numbers (\`un-imo\` = first, \`du-imo\` = second) |
| \`-iva\` | the passive (see above) |
| \`-li\` | plural / collective (pronouns: \`mi → mili\`, \`iti → itili\`) |

## Transparent patterns

- **Numbers:** ten sounds + \`des\` build everything — \`des-un\` = 11, \`du-des\` = 20, \`du-des-tri\` = 23, \`sento\` = 100, \`mila\` = 1000, \`milona\` = 1,000,000.
- **Days:** ${kd.day_names ?? 'dina + number'} — \`dina-un\` = Monday … \`dina-seti\` = Sunday.
- **Root families:** \`ama\` (love) → \`amala\` (unconditional), \`amara\` (romantic), \`amana\` (communal).

## Pronunciation

Every letter always sounds the same. ${p.vowelSequenceRule}

**Vowels**

| Letter | Sound |
| --- | --- |
${vowelRows}

**Consonants**

| Letter | Sound |
| --- | --- |
${consRows}

Not used: ${p.excludedLetters.map((l: string) => `\`${l}\``).join(', ')}.

${p.interjectionNote}
`;
  writeFileSync('docs/GRAMMAR.md', md);
  console.log('docs/GRAMMAR.md');
}

// ---------------------------------------------------------------------------
// GOVERNANCE.md
// ---------------------------------------------------------------------------
{
  const c = canon.languageConstitution;
  const e = canon.communityEvolutionPolicy;
  const m = canon.canonPolicyForAumaModel;
  const t = canon.trainingFreeze;
  const dep = canon.deprecatedForms.map((d: any) => `| ${d.deprecated} | ${d.current} | ${d.reason ?? ''} |`).join('\n');
  const md = `# AUMA Governance — how the language evolves without breaking

${STAMP}## Purpose

${c.purpose}

## The Constitution (\`${c.version}\`)

${c.laws.map((l: string, i: number) => `${i + 1}. ${l}`).join('\n')}

## The three rings

| Ring | What lives there |
| --- | --- |
| **Seed core** | ${c.rings.seed_core} |
| **Living canon** | ${c.rings.living_canon} |
| **Community garden** | ${c.rings.community_garden} |

## Community evolution (\`${e.version}\`)

**Principle:** ${e.principle}

A word moves through these statuses: ${e.statuses.map((s: string) => `\`${s}\``).join(' → ')}.

**Every proposal must carry:** ${e.proposalRequiredFields.join(', ')}.

**Promotion gates — all must pass:**

${e.promotionGates.map((g: string) => `- ${g}`).join('\n')}

${e.aumaBehavior}

## Authority order

When sources disagree, higher wins:

${m.authorityOrder.map((a: string, i: number) => `${i + 1}. ${a}`).join('\n')}

## Deprecated forms — the antibodies

A deprecated form is not AUMA even if a model says it. Every deprecation is tracked so
teachers (human or model) can correct it gently:

| Deprecated | Current | Why |
| --- | --- | --- |
${dep}

## Training doctrine (\`${t.version}\`)

Train into weights: ${t.trainIntoWeights.join('; ')}.

Keep dynamic, outside weights: ${t.keepDynamicOutsideWeights.join('; ')}.

**${t.preFineTuneWarning}**

## The gate

Since v16, no canon ships without \`bun tools/aumaCanonLint.ts\` passing at **0 errors** —
duplicates, pronunciation drift, words taught out of order, deprecated forms in teaching
surfaces, ghost tokens, quiz integrity, and the corpus day gates are all machine-checked.
`;
  writeFileSync('docs/GOVERNANCE.md', md);
  console.log('docs/GOVERNANCE.md');
}

// ---------------------------------------------------------------------------
// CORPUS.md — the six readers, readable on GitHub
// ---------------------------------------------------------------------------
{
  let body = '';
  for (const r of readers.readers) {
    body += `\n---\n\n## ${r.title} · *${r.titleEn}*\n\n**Days 1–${r.maxDay}.** ${r.intro}\n\n`;
    for (const line of r.lines) {
      body += `> **${line.a}**\n> ${line.e}\n\n`;
    }
  }
  const md = `# The AUMA Corpus — graded readers

${STAMP.replace(CANON_PATH, READERS_PATH)}A language lives in texts, not word lists. These are AUMA's first six texts — **graded readers**,
each hard-gated to a day range of the 84-day Journey: every AUMA word in reader *N* is introduced
on or before its declared day, enforced by \`tools/aumaCanonLint.ts\`. If you can read a reader,
those days are truly yours.
${body}
---

*Want to write the seventh? Texts are proposals too — see [CONTRIBUTING](../CONTRIBUTING.md). A
submitted text must pass the same day-gate lint as these.*
`;
  writeFileSync('docs/CORPUS.md', md);
  console.log('docs/CORPUS.md');
}

// ---------------------------------------------------------------------------
// DICTIONARY.md — the full lexicon, alphabetical
// ---------------------------------------------------------------------------
{
  const entries = [...canon.vocab].sort((a: any, b: any) => a.token.localeCompare(b.token));
  let letter = '';
  let body = '';
  for (const v of entries) {
    const first = (v.token.replace(/^-/, '')[0] ?? '').toUpperCase();
    if (first !== letter) { letter = first; body += `\n### ${letter}\n\n| Word | Pronunciation | Meaning | Day | Mode |\n| --- | --- | --- | --- | --- |\n`; }
    const day = v.introducedDay != null ? String(v.introducedDay) : '—';
    const flags = [v.sacredCore ? '**sacred**' : '', v.secondarySense ? `*${v.secondarySense}*` : ''].filter(Boolean).join(' ');
    body += `| \`${v.token}\` | ${v.pronunciation ?? ''} | ${v.translation}${flags ? ' — ' + flags : ''} | ${day} | ${v.teachingMode ?? ''} |\n`;
  }
  const md = `# The AUMA Dictionary — all ${entries.length} words

${STAMP}Every canonical word, alphabetically. **Day** is the lesson day that introduces it
(— means it is recognition canon outside the 84-day course). **Mode** is how it is taught:
\`card\` (flashcard lesson), \`pattern\` (derived by rule — never memorized), \`recognition\`
(in the canon for models and the community).
${body}`;
  writeFileSync('docs/DICTIONARY.md', md);
  console.log('docs/DICTIONARY.md (' + entries.length + ' entries)');
}

console.log('done — docs regenerated from ' + canon.version);
