/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#efeef1",
        background: "#121212",
        "primary-button": "#005741",
        "secondary-button": "#242424",
        accent: "#00bd8e",
      },
    },
  },
  plugins: [],
};
