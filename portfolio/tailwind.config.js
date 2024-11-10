/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    fontFamily: {
      title: ["Poppins", "sans-serif"],
      text: ["Nobile", "sans-serif"],
    },
    extend: {
      colors: {
        aquamarine: {
          900: "#151b30",
          1000: "#111417",
        },
        jasmine: {
          900: "#18362e",
          1000: "#0f1211",
        },
        wine: {
          900: "#402239",
          1000: "#0f070e",
        },
      },
    },
  },
  plugins: [],
};
