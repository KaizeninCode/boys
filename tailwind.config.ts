import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
        marcellus: ['Marcellus', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('/hero.jpg')",
        'contact': "url('/contact.jpg')",
      }
    },
  },
  plugins: [],
} satisfies Config;
