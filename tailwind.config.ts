import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode - Basado en demo-project (#0b1020, cyan accents)
        dark: {
          bg: '#0b1020',  // Fondo principal oscuro
          primary: {
            50: '#0a0f1f',
            100: '#141a2e',
            200: '#1d253d',
            300: '#26304c',
            400: '#2f3b5b',
            500: '#38466a',  // Azul oscuro principal
            600: '#4a5279',
            700: '#5c5e88',
            800: '#6e6a97',
            900: '#8076a6',
          },
          accent: {
            50: '#0d1a2a',
            100: '#16253a',
            200: '#1f304a',
            300: '#283b5a',
            400: '#31466a',
            500: '#3a517a',  // Cyan principal (#22d3ee adaptado)
            600: '#4c5c89',
            700: '#5e6798',
            800: '#7072a7',
            900: '#827db6',
          },
          secondary: {
            50: '#0f172a',
            100: '#1e2942',
            200: '#2d3b5a',
            300: '#3c4d72',
            400: '#4b5f8a',
            500: '#5a7182',
            600: '#69839a',
            700: '#7895b2',
            800: '#88a7ca',
            900: '#98b9e2',
          }
        },
        // Light mode - Luxury con dorados
        light: {
          primary: {
            50: '#fefdf8',
            100: '#fefbed',
            200: '#fdf7e1',
            300: '#fdf3d7',
            400: '#fcefcd',
            500: '#fceb23',  // Dorado suave
            600: '#fce719',
            700: '#fbd30f',
            800: '#fbbf05',
            900: '#fabb00',
          },
          secondary: {
            50: '#f8f9fb',
            100: '#f1f3f7',
            200: '#eaedf3',
            300: '#e3e7ef',
            400: '#dce0e7',
            500: '#d5d9df',
            600: '#ced2d7',
            700: '#c7cbd1',
            800: '#c0c6cb',
            900: '#b9c1c5',
          },
          accent: {
            50: '#fff8f0',
            100: '#fef1e1',
            200: '#fdead2',
            300: '#fce3c3',
            400: '#fbdbb4',
            500: '#fad3a5',  // Coral dorado
            600: '#f9cb96',
            700: '#f8c387',
            800: '#f7bb78',
            900: '#f6b369',
          }
        },
        // Colores base compatibles
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        gold: {
          50: '#fffdf0',
          100: '#fef9e3',
          200: '#fef5d6',
          300: '#fef1c9',
          400: '#fdecbc',
          500: '#fde9af',  // Dorado premium
          600: '#fce5a2',
          700: '#fbe195',
          800: '#fadd88',
          900: '#f9d97b',
        }
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0b1020 0%, #1e2942 50%, #38466a 100%)',
        'gradient-light': 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
        'gradient-luxury': 'linear-gradient(135deg, #fde9af 0%, #fceb23 25%, #fff 50%, #fceb23 75%, #fde9af 100%)',
        'grid-bg': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        'grid-bg-light': 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)',
        'hero-glow': 'radial-gradient(ellipse at 60% 50%, rgba(34, 211, 238, 0.08) 0%, transparent 70%)',
        'hero-glow-light': 'radial-gradient(ellipse at 60% 50%, rgba(37, 99, 235, 0.06) 0%, transparent 70%)',
      },
      boxShadow: {
        'luxury-light': '0 4px 20px rgba(253, 233, 175, 0.15), 0 2px 8px rgba(253, 233, 175, 0.1)',
        'luxury-dark': '0 4px 20px rgba(60, 74, 149, 0.3), 0 2px 8px rgba(60, 74, 149, 0.2)',
        'gold-glow': '0 0 30px rgba(253, 233, 175, 0.4)',
        'glow-cyan': '0 0 40px rgba(34, 211, 238, 0.15)',
        'glow-cyan-light': '0 0 40px rgba(37, 99, 235, 0.1)',
        'shadow-lg': '0 10px 25px rgba(0, 0, 0, 0.1)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      }
    },
  },
  plugins: [],
};

export default config;
