module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Changa: ["Changa", "sans-serif"],
        Rochester: ["Rochester", "cursive"],
      },
      height: {
        93: "22rem",
        100: "30rem",
      },
      colors: {
        navbar: "#084184",
        premium: "#F8BF7D",
        footerBottom: "#1F1F1F",
        footerBg: "#444444",
        searchBg: "#AB51E2",
        uploadResumeBg: "#DB9A4D",
      },
      fontSize: {
        tiny: ".60rem",
      },
      textColor: {
        premium: "#F8BF7D",
        alert: "#FDF654",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 2px 2px 4px rgba(0, 0, 0, 0.25)",
        "3xl": "0px 4px 4px 7px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        none: "none",
      },
    },
  },
  plugins: [],
};
