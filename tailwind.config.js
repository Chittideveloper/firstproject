/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // important so Tailwind scans all React files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5", // purple
        accent: "#06b6d4",  // cyan
        dark: "#0f172a",    // dark background
      },
    },
  },
  plugins: [],
}
