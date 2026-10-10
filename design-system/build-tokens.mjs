// Generates tokens.css from tokens.json. Run: node design-system/build-tokens.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const dir = new URL('.', import.meta.url);
const tokens = JSON.parse(readFileSync(new URL('tokens.json', dir), 'utf8'));
const [primary, ...others] = tokens.color.themes.map((t) => t.id);

// "{neutral-50}" → var(--neutral-50); anything else passes through.
const resolve = (v) => String(v).replace(/^\{([^}]+)\}$/, 'var(--$1)');
const valueFor = (value, theme) =>
  typeof value === 'object' && value !== null ? value[theme] ?? value[primary] : value;

const base = [];
const themed = Object.fromEntries(others.map((id) => [id, []]));

for (const group of Object.values(tokens)) {
  if (!group?.tokens) continue;
  for (const { name, value } of group.tokens) {
    base.push(`  --${name}: ${resolve(valueFor(value, primary))};`);
    if (typeof value !== 'object' || value === null) continue;
    for (const id of others) {
      if (value[id] !== undefined && value[id] !== value[primary]) {
        themed[id].push(`  --${name}: ${resolve(value[id])};`);
      }
    }
  }
}

for (const [role, stack] of Object.entries(tokens.type.families)) {
  base.push(`  --font-${role}: ${stack};`);
}

const typeClasses = tokens.type.groups.flatMap((g) =>
  g.styles.map((s) =>
    [
      `.text-${s.name} {`,
      `  font-family: var(--font-${g.family});`,
      `  font-size: ${s.fontSize};`,
      `  line-height: ${s.lineHeight};`,
      `  font-weight: ${s.fontWeight};`,
      s.letterSpacing ? `  letter-spacing: ${s.letterSpacing};` : null,
      s.textTransform ? `  text-transform: ${s.textTransform};` : null,
      '}',
    ]
      .filter(Boolean)
      .join('\n'),
  ),
);

const css = [
  '/* Generated from tokens.json by build-tokens.mjs. Do not edit by hand. */',
  `:root {\n${base.join('\n')}\n}`,
  ...others.map(
    (id) => `[data-theme="${id}"], .${id} {\n${themed[id].join('\n')}\n  color-scheme: ${id};\n}`,
  ),
  ...typeClasses,
  '',
].join('\n\n');

writeFileSync(new URL('tokens.css', dir), css);
console.log(`tokens.css written: ${base.length} tokens, themes: ${[primary, ...others].join(', ')}`);

// ---------- Tailwind v4 theme (tailwind-theme.css) ----------
// Utilities point at the tokens.css variables, so themed values switch with data-theme.
// Tailwind's defaults are reset so only design-system values exist as utilities.

// bg-* → canvas/surface/…, text-* → ink-*, border-* → line-*; everything else keeps its token name.
const colorKey = (name) =>
  name
    .replace(/^bg-/, '')
    .replace(/^text-primary$/, 'ink')
    .replace(/^text-/, 'ink-')
    .replace(/^border-default$/, 'line')
    .replace(/^border-/, 'line-');

const tokenNames = (family) => tokens[family].tokens.map((t) => t.name);
const tokenValue = (family, name) => tokens[family].tokens.find((t) => t.name === name).value;

const twColors = tokenNames('color').map((n) => `  --color-${colorKey(n)}: var(--${n});`);
const twRadius = tokenNames('radius')
  .filter((n) => !['radius-none', 'radius-full'].includes(n)) // built into Tailwind
  .map((n) => `  --${n}: var(--${n});`);
const twShadow = [
  ...tokenNames('shadow')
    .filter((n) => /^shadow-(sm|md|lg)$/.test(n))
    .map((n) => `  --${n}: var(--${n});`),
  '  --shadow-focus: var(--focus-ring);',
  '  --shadow-focus-error: var(--focus-ring-error);',
];
const twFonts = Object.keys(tokens.type.families).map((r) => `  --font-${r}: var(--font-${r});`);
const twText = tokens.type.groups.flatMap((g) =>
  g.styles.flatMap((s) =>
    [
      `  --text-${s.name}: ${s.fontSize};`,
      `  --text-${s.name}--line-height: ${s.lineHeight};`,
      `  --text-${s.name}--font-weight: ${s.fontWeight};`,
      s.letterSpacing ? `  --text-${s.name}--letter-spacing: ${s.letterSpacing};` : null,
    ].filter(Boolean),
  ),
);
// Media queries can't read custom properties, so breakpoints are literal values.
const twBreakpoints = tokenNames('screen').map(
  (n) => `  --breakpoint-${n.replace('screen-', '')}: ${tokenValue('screen', n)};`,
);

const tailwindCss = [
  '/* Generated from tokens.json by build-tokens.mjs. Do not edit by hand. */',
  '/* Import after tailwindcss and tokens.css. */',
  '',
  '@theme {',
  '  --color-*: initial;',
  '  --font-*: initial;',
  '  --text-*: initial;',
  '  --radius-*: initial;',
  '  --shadow-*: initial;',
  '  --breakpoint-*: initial;',
  ...twBreakpoints,
  '}',
  '',
  '@theme inline {',
  ...twColors,
  '',
  ...twFonts,
  '',
  ...twText,
  '',
  '  --spacing: var(--space-1);',
  '  --spacing-gutter: var(--grid-gutter);',
  '  --spacing-page: var(--page-margin);',
  '  --spacing-nav: var(--nav-height);',
  '  --container-content: var(--content-max);',
  '  --container-reading: var(--reading-max);',
  '',
  ...twRadius,
  '',
  ...twShadow,
  '}',
  '',
].join('\n');

writeFileSync(new URL('tailwind-theme.css', dir), tailwindCss);
console.log('tailwind-theme.css written');
