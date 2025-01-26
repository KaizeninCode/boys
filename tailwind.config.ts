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
        'about-1': "url('/about-1.jpg')",
        'about-2': "url('/about-2.jpg')",
        'mission-1': "url('/mission-1.jpg')",
        'mission-2': "url('/mission-2.jpg')",
      }
    },
  },
  plugins: [],
} satisfies Config;
