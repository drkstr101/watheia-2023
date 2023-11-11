const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        neutral: colors.neutral,
        primary: colors.cyan,
        secondary: colors.sky,
        accent: colors.teal,
        danger: colors.rose,
        warning: colors.amber,
        success: colors.emerald,
        white: '#fafafa',
        black: '#0a0a0a',
      }),
      fontFamily: {
        book: [...fontFamily.sans],
        display: [...fontFamily.sans],
        code: [...fontFamily.mono],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
