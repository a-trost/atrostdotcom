module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/posts/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["InterVariable", "sans-serif"],
      handwriting: ["Patrick Hand", "script"],
    },
    fontStyle: {
      "var-italic": "font-variation-settings: var(--font-regular-italic);",
    },
    extend: {
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "2xs": "11px",
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem",
      },
    },
  },
  variants: {
    extend: {},
  },
};
