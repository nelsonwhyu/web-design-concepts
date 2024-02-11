import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'rgb(var(--bg-primary))',
        secondary: 'rgb(var(--bg-secondary))',
        tertiary: 'rgb(var(--bg-tertiary))',
      },
      textColor: {
        primary: 'rgb(var(--text-primary))',
        secondary: 'rgb(var(--text-secondary))',
        tertiary: 'rgb(var(--text-tertiary))',
      },
      borderColor: {
        accent: 'rgb(var(--bg-tertiary))'
      },
      boxShadowColor: {
        primary: 'rgb(var(--bg-primary))',
        secondary: 'rgb(var(--bg-secondary))',
        tertiary: 'rgb(var(--bg-tertiary))',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
