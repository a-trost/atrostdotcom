import { createGlobalStyle } from "styled-components";
import COLORS from "@constants/colors";
import "@fontsource/inter/variable-full.css";

const GlobalStyles = createGlobalStyle`
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  letter-spacing: -.3px;
  ${"" /* line-height: 1.5; */}
}

a{
  text-decoration:none;
  color: ${COLORS.primary};
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}


body {
  color: var(--color-text);
  background: var(--color-background);
}

a:focus {
  outline: 5px auto var(--color-primary);
}

body, input, button, select, option {
  font-family: var(--font-family);
  font-variation-settings: "wght" var(--font-weight-light), "slnt" 0;
  font-weight: var(--font-weight-light);
}

h1, h2, h3, h4, h5, h6, strong{
  font-variation-settings: "wght" var(--font-weight-bold), "slnt" var(--font-slant-none, 0);
}

h1, h2, h3, h4, h5, h6, p {
  text-rendering: optimizeLegibility;
}

p{
  margin-bottom: 1.5em;
  font-size: 1.125rem;
}

em{
  font-style:italic;
  font-variation-settings: "slnt" 10;
}

strong {
  font-variation-settings: "wght" var(--font-weight-medium), "slnt" var(--font-slant-none, 0);
  font-weight:var(--font-weight-medium);
  }

::selection {
  background-color: var(--color-primary);
  color:white;
}

@media (orientation:landscape) {
  ::-webkit-scrollbar {
    width: 9px;
    height: 11px;
    background-color:transparent;
  }
  ::-webkit-scrollbar-track{
    border-radius:3px;
    background-color:transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--color-gray-300);
    border: 2px solid var(--color-background);
  }
}

:root {

  --font-weight-thin: 100;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-black: 900;

  --font-italic-full: 10;
  --font-italic-half: 5;
  --font-italic-none:0;

  --font-thin: "wght" var(--font-weight-thin), "slnt" var(--font-italic-none);
	--font-thin-italic: "wght"  var(--font-weight-thin), "slnt" var(--font-italic-full);
  --font-light: "wght" var(--font-weight-light), "slnt" var(--font-italic-none);
	--font-light-italic: "wght"  var(--font-weight-light), "slnt" var(--font-italic-full);
  --font-regular: "wght" var(--font-weight-regular), "slnt" var(--font-italic-none);
	--font-regular-italic: "wght"  var(--font-weight-regular), "slnt" var(--font-italic-full);
  --font-medium: "wght" var(--font-weight-medium), "slnt" var(--font-italic-none);
	--font-medium-italic: "wght"  var(--font-weight-medium), "slnt" var(--font-italic-full);
  --font-semibold: "wght" var(--font-weight-semibold), "slnt" var(--font-italic-none);
	--font-semibold-italic: "wght"  var(--font-weight-semibold), "slnt" var(--font-italic-full);
  --font-bold: "wght" var(--font-weight-bold), "slnt" var(--font-italic-none);
	--font-bold-italic: "wght"  var(--font-weight-bold), "slnt" var(--font-italic-full);
  --font-black: "wght" var(--font-weight-black), "slnt" var(--font-italic-none);
	--font-black-italic: "wght"  var(--font-weight-black), "slnt" var(--font-italic-full);
 

  --font-family: "InterVariable", Futura, -apple-system, sans-serif;
  --font-family-mono: 'Source Code Pro', 'Fira Mono', monospace;

  --elevation-high: 100;

  --color-text: ${COLORS.text};
  --color-background: ${COLORS.background};
  --color-primary: ${COLORS.primary};
  --color-secondary: ${COLORS.secondary};
  --color-tertiary: ${COLORS.tertiary};
  --color-decorative: ${COLORS.decorative};
  --color-muted: ${COLORS.muted};
  --color-info: ${COLORS.info};
  --color-error: ${COLORS.error};
  --color-error-background: ${COLORS.errorBackground};
  --color-success: ${COLORS.success};
  --color-success-background: ${COLORS.successBackground};
  --color-warning: ${COLORS.warning};
  --color-warning-background: ${COLORS.warningBackground};

  --color-gray-50: ${COLORS.gray[50]};
  --color-gray-100: ${COLORS.gray[100]};
  --color-gray-200: ${COLORS.gray[200]};
  --color-gray-300: ${COLORS.gray[300]};
  --color-gray-400: ${COLORS.gray[400]};
  --color-gray-500: ${COLORS.gray[500]};
  --color-gray-600: ${COLORS.gray[600]};
  --color-gray-700: ${COLORS.gray[700]};
  --color-gray-800: ${COLORS.gray[800]};
  --color-gray-900: ${COLORS.gray[900]};
  --color-gray-1000: ${COLORS.gray[1000]};

}

`;

export default GlobalStyles;
