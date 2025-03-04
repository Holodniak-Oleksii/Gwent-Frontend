import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Gwent';
    src: url('/src/assets/fonts/Gwent/Gwent_extrabold.woff2') format('woff2');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'HalisGR';
    src: url('/src/assets/fonts/HalisGR/HalisGRBlack.woff2') format('woff2');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'HalisGR';
    src: url('/src/assets/fonts/HalisGR/HalisGRBold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'HalisGR';
    src: url('/src/assets/fonts/HalisGR/HalisGRBook.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'HalisGR';
    src: url('/src/assets/fonts/HalisGR/HalisGRExtraLight.woff2') format('woff2');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'HalisGR';
    src: url('/src/assets/fonts/HalisGR/HalisGRLight.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'HalisGR';
    src: url('/src/assets/fonts/HalisGR/HalisGRMedium.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'HalisGR';
    src: url('/src/assets/fonts/HalisGR/HalisGRRegular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'HalisGR';
    src: url('/src/assets/fonts/HalisGR/HalisGRThin.woff2') format('woff2');
    font-weight: 100;
    font-style: normal;
  }

html {
  width: 100%;
  height: 100%;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body, #root {
  width: 100%;
  height: 100%;
  background-color: rgba(25,26,30,255);
}


body::-webkit-scrollbar {
  width: 0;
}

* {
  font-family: "Gwent", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


h1 {
  font-size: 96px;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  background-color: transparent;
  text-decoration: none;
  color: inherit;
  font-weight: inherit;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
  pointer-events: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button{
  outline: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}
`;

export default GlobalStyles;
