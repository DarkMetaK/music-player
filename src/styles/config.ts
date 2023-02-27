import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      black: '#000',

      'green-light': '#00B37E',
      'green': '#00875F',

      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-700': '#323238',
      'gray-600': '#7C7C8A',
      'gray-500': '#8D8D99',
      'gray-400': '#C4C4CC',
      'gray-300': '#E1E1E6',
    },
  },
  media: {
    sm: '(max-width: 640px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 1024px)',
  },
});

export const rightToLeft = keyframes({
  '0%': { transform: 'translateX(100%)' },
  '100%': { transform: 'translateX(-90%)' },
});