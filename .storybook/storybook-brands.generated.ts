// Gerado por scripts/compile-scss-to-css.js — Plutão DS (marca única solaris-conKey).
// Rode `npm run compile:styles` após atualizar @teddy-conkey/conkey-ds-tokens.

export const TEDDY_STORYBOOK_DEFAULT_BRAND = 'solaris-conKey' as const;

export const TEDDY_STORYBOOK_BRANDS = [
  'solaris-conKey',
] as const;

export type TeddyStorybookBrand = (typeof TEDDY_STORYBOOK_BRANDS)[number];

export const STORYBOOK_BRAND_TOOLBAR_ITEMS: {
  value: TeddyStorybookBrand;
  title: string;
}[] = [
  { value: 'solaris-conKey', title: "Solaris" },
];
