/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  daisyui: {
    themes: ["nord", "sunset", "dracula"],
  },
  plugins: [require("daisyui")]
};
