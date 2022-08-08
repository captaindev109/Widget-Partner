import { createGlobalStyle } from 'styled-components';
import { getCdnFontFaces, fonts } from './fonts';

const GlobalStyles = createGlobalStyle`

${getCdnFontFaces()}

*, *::before, ::after {
  padding:0;
  margin:0;
  box-sizing: border-box;
}

body {
  font-family: ${fonts.FAVORIT} sans-serif;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
}
`;

export default GlobalStyles;
