import Typography from "typography";
import noriegaTheme from "typography-theme-noriega";

noriegaTheme.googleFonts = [
  {
    name: "Rubik",
    styles: ["500", "700"],
  },
  {
    name: "Open Sans",
    styles: ["400", "400i", "700", "700i"],
  },
];

noriegaTheme.headerFontFamily = [
  "Rubik",
  "Helvetica Neue",
  "Segoe UI",
  "Helvetica",
  "Arial",
  "sans-serif",
];

noriegaTheme.bodyFontFamily = [
  "Open Sans",
  "Helvetica Neue",
  "Segoe UI",
  "Helvetica",
  "Arial",
  "sans-serif",
];

const typography = new Typography(noriegaTheme);

export default typography;
