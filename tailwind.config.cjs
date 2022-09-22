/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',                // modo just-in-time
  purge: [                   // purge diminui o tamanho do arquivo css
    "./src/**/*.tsx",
    "./index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}