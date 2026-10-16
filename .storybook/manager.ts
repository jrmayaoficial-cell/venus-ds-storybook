import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

/** Venus.ds (Consig 360) — tema do shell do Storybook (sidebar/toolbar). */
const venusManagerTheme = create({
  base: 'dark',
  brandTitle: 'Venus.ds · Consig 360',
  brandUrl: './',
  brandImage: './.storybook/venus-logo.svg',
  brandTarget: '_self',
  fontBase: '"DM Sans", sans-serif',
  fontCode: '"Source Code Pro", monospace',
  colorPrimary: '#0A7B76',
  colorSecondary: '#0A7B76',
  appBg: '#0F1417',
  appContentBg: '#0C1114',
  appPreviewBg: '#0C1114',
  appBorderColor: '#2E353A',
  appBorderRadius: 8,
  textColor: '#FFFFFF',
  textMutedColor: '#A0AAB2',
  textInverseColor: '#0C1114',
  barBg: '#12171B',
  barTextColor: '#C9D1D9',
  barSelectedColor: '#30BFB9',
  barHoverColor: '#6AD1CD',
  inputBg: '#12171B',
  inputBorder: '#2E353A',
  inputTextColor: '#FFFFFF',
  inputBorderRadius: 8,
});

addons.setConfig({ theme: venusManagerTheme });
