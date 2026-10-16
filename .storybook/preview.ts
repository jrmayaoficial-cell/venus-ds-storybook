import { setCompodocJson } from '@storybook/addon-docs/angular';
import type { Decorator, Preview } from '@storybook/angular';
import { themes } from 'storybook/theming';
import docJson from '../documentation.json';
import {
	isTeddyStorybookBrand,
	STORYBOOK_BRAND_TOOLBAR_ITEMS,
	TEDDY_STORYBOOK_DEFAULT_BRAND,
	type TeddyStorybookBrand,
} from './storybook-globals';

setCompodocJson(docJson);

/**
 * Venus.ds (Consig 360): `data-theme` e `data-brand` na toolbar.
 * Tokens: `.storybook/venus-tokens.css` (Venus) + `.storybook/styles.css` (Solaris, `npm run compile:styles`).
 */
const withPlutaoStorybookGlobals: Decorator = (storyFn, context) => {
	if (typeof document !== 'undefined') {
		const rawTheme = context.globals['theme'];
		const theme = rawTheme === 'light' ? 'light' : 'dark';
		document.documentElement.setAttribute('data-theme', theme);

		const rawBrand = context.globals['brand'] as string | undefined;
		const brand: TeddyStorybookBrand = isTeddyStorybookBrand(rawBrand)
			? rawBrand
			: TEDDY_STORYBOOK_DEFAULT_BRAND;
		document.documentElement.setAttribute('data-brand', brand);
	}
	return storyFn();
};

const customTheme = {
	...themes.dark,
	brandTitle: 'Venus.ds · Consig 360',
	brandUrl: './',
	fontBase: 'DM Sans, sans-serif',
	fontCode: 'Source Code Pro, monospace',

	colorPrimary: '#0A7B76',
	colorSecondary: '#30BFB9',

	appBg: '#0C1114',
	appContentBg: '#0C1114',
	appPreviewBg: '#0C1114',
	appBorderColor: '#2E353A',

	textColor: 'rgba(255, 255, 255, 1)',
	textMutedColor: 'rgba(255, 255, 255, 0.72)',
	textInverseColor: '#0C1114',

	barBg: '#12171B',
	barTextColor: 'rgba(255, 255, 255, 1)',
	barSelectedColor: '#30BFB9',
	inputBg: '#12171B',
	inputBorder: '#2E353A',
	inputTextColor: 'rgba(255, 255, 255, 1)',
	inputBorderRadius: 4,
};

const preview: Preview = {
	decorators: [withPlutaoStorybookGlobals],
	parameters: {
		options: {
			storySort: {
				order: ['!Primeiros Passos', 'Fundamentos', 'Venus-DS', 'Protótipos'],
			},
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		backgrounds: {
			default: 'dark',
			values: [
				{ name: 'dark', value: 'var(--color-theme-base, #202020)' },
				{ name: 'light', value: '#ffffff' },
				{ name: 'neutral-strong', value: '#2D2D2D' },
			],
		},
		docs: {
			theme: customTheme,
		},
	},
	globalTypes: {
		theme: {
			description: 'Tema claro ou escuro (tokens semânticos)',
			defaultValue: 'dark',
			toolbar: {
				title: 'Tema',
				icon: 'circlehollow',
				items: [
					{ value: 'light', title: 'Light' },
					{ value: 'dark', title: 'Dark' },
				],
				dynamicTitle: true,
			},
		},
		brand: {
			description: 'Marca Venus.ds (Consig 360) — Solaris como referência',
			defaultValue: TEDDY_STORYBOOK_DEFAULT_BRAND,
			toolbar: {
				title: 'Marca',
				icon: 'component',
				items: STORYBOOK_BRAND_TOOLBAR_ITEMS,
				dynamicTitle: true,
			},
		},
	},
};


export default preview;
