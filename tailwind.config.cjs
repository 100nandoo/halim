/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,ts}"],
  daisyui: {
    themes: ["nord", "sunset", "dracula"]
  },
  plugins: [require("daisyui")]
};
