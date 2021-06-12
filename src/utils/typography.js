import Typography from "typography";
import noriegaTheme from "typography-theme-noriega";

noriegaTheme.headerFontFamily = [
  "InterVariable",
  "Helvetica Neue",
  "sans-serif",
];

noriegaTheme.bodyFontFamily = ["InterVariable", "Helvetica Neue", "sans-serif"];

noriegaTheme.headerWeight = "300";
noriegaTheme.headerGray = "80";
noriegaTheme.headerGrayHue = "200";
noriegaTheme.baseFontSize = "18px";
noriegaTheme.scaleRatio = 3;
noriegaTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
  "h1,h2,h3,h4,h5,h6": {
    marginBottom: rhythm(1 / 2),
    marginTop: rhythm(1),
    color: "hsl(219, 41%, 30%);",
  },
});
const typography = new Typography(noriegaTheme);

if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
