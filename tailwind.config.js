module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "var(--black_900)", "900_19": "var(--black_900_19)" },
        blue_gray: { 100: "var(--blue_gray_100)", 800: "var(--blue_gray_800)" },
        cyan: { 900: "var(--cyan_900)" },
        deep_orange: { 50: "var(--deep_orange_50)" },
        gray: { 50: "var(--gray_50)", 200: "var(--gray_200)", "50_01": "var(--gray_50_01)" },
        orange: { "400_33": "var(--orange_400_33)", "400_cc": "var(--orange_400_cc)" },
        red: { 600: "var(--red_600)" },
        slate: { 400: "var(--slate_400)" },
        teal: {
          300: "var(--teal_300)",
          600: "var(--teal_600)",
          800: "var(--teal_800)",
          900: "var(--teal_900)",
          "300_33": "var(--teal_300_33)",
          "300_cc": "var(--teal_300_cc)",
        },
        white: { a700: "var(--white_a700)" },
      },
      boxShadow: { xs: "0 8px 12px 0 #00000019" },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #2ec4b633,#ff9f1c33)",
        gradient1: "linear-gradient(180deg, #2ec4b6cc,#ff9f1ccc)",
        gradient2: "linear-gradient(180deg, #f9efe4,#2ec4b6)",
      },
      fontFamily: { crimsonpro: "Crimson Pro", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
