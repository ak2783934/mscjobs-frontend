module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbar: "#084184",
        premium: "#F8BF7D",
        footerBottom: "#1F1F1F",
        footerBg: "#444444",
      },
      textColor: {
        premium: "#F8BF7D",
      },
    },
  },
  plugins: [],
};
