/**
 * Venus.ds (Consig 360): marcas disponíveis na toolbar.
 * Definido aqui (e não em storybook-brands.generated.ts) para não ser sobrescrito por `npm run compile:styles`.
 * Tokens Venus: `.storybook/venus-tokens.css` | Tokens Solaris: `.storybook/styles.css`.
 */
export const TEDDY_STORYBOOK_DEFAULT_BRAND = 'venus-consig' as const;

export const TEDDY_STORYBOOK_BRANDS = ['venus-consig', 'solaris-conKey'] as const;

export type TeddyStorybookBrand = (typeof TEDDY_STORYBOOK_BRANDS)[number];

export const STORYBOOK_BRAND_TOOLBAR_ITEMS: {
  value: TeddyStorybookBrand;
  title: string;
}[] = [
  { value: 'venus-consig', title: 'Venus (Consig 360)' },
  { value: 'solaris-conKey', title: 'Solaris (referência)' },
];

export const TEDDY_STORYBOOK_THEMES = ['light', 'dark'] as const;

export type TeddyStorybookTheme = (typeof TEDDY_STORYBOOK_THEMES)[number];

export function isTeddyStorybookBrand(value: string | undefined | null): value is TeddyStorybookBrand {
  return (
    value !== null && value !== undefined &&
    (TEDDY_STORYBOOK_BRANDS as readonly string[]).includes(value)
  );
}
