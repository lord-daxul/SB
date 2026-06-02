import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0b1020',
          primary: {
            500: '#38466a',
          },
          accent: {
            500: '#3a517a',
          },
        },
        light: {
          primary: {
            500: '#fceb23',
          },
          accent: {
            500: '#fad3a5',
          },
        },
        gold: {
          500: '#fde9af',
        }
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0b1020 0%, #1e2942 50%, #38466a 100%)',
        'grid-bg': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        'hero-glow': 'radial-gradient(ellipse at 60% 50%, rgba(34, 211, 238, 0.08) 0%, transparent 70%)',
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(253, 233, 175, 0.4)',
        'glow-cyan': '0 0 40px rgba(34, 211, 238, 0.15)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      }
    },
  },
  plugins: [],
};

export default config;
