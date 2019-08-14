import Typography from "typography";
import noriegaTheme from "typography-theme-noriega";

noriegaTheme.googleFonts = [
  {
    name: "Raleway",
    styles: ["300", "700"],
  },
  {
    name: "Open Sans",
    styles: ["400", "400i", "700", "700i"],
  },
];

noriegaTheme.headerFontFamily = [
  "Raleway",
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
