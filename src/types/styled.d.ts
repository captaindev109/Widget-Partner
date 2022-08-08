// styled.d.ts
import 'styled-components';

interface PaletteProps {
  main: string;
  contrastText: string;
}

export interface FontsProps {
  MERRIWEATHER: string;
  CIRCULAR: string;
  SORAY: string;
  GEOMANIST: string;
  EB_GARAMOND: string;
  FAVORIT: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      common: {
        black: string;
        white: string;
        transparent: string;
      };
      primary: PaletteProps;
      secondary: PaletteProps;
    };
    size: {
      margin: {
        m1: string;
        m2: string;
        m3: string;
        m4: string;
        m5: string;
        m6: string;
        m7: string;
        m8: string;
        m9: string;
        m10: string;
        m11: string;
        m12: string;
        m16: string;
        m20: string;
        m40: string;
      };
      padding: {
        p1: string;
        p2: string;
        p3: string;
        p4: string;
        p5: string;
        p6: string;
        p7: string;
        p8: string;
        p9: string;
        p10: string;
        p11: string;
        p12: string;
        p16: string;
        p20: string;
        p24: string;
        p32: string;
        p56: string;
      };
      borderRadius: {
        br1: string;
        br2: string;
        br3: string;
        br4: string;
        br5: string;
        br6: string;
      };
      fontSizes: {
        f1: string;
        f2: string;
        f3: string;
        f4: string;
        f5: string;
        f6: string;
        f7: string;
        f8: string;
        f9: string;
        f10: string;
        f11: string;
      };
      lineHeights: {
        lh1: string;
        lh2: string;
        lh3: string;
        lh4: string;
        lh5: string;
        lh6: string;
        lh7: string;
        lh8: string;
        lh9: string;
        lh10: string;
        lh11: string;
        lh12: string;
        lh13: string;
      };
      letterSpacings: {
        ls1: string;
        ls2: string;
        ls3: string;
        lsp1: string;
        lsp2: string;
      };
    };
    color: {
      black: string;
      white: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;
      purple100: string;
      purple300: string;
      purple500: string;
      purple700: string;
      purple800: string;
      purple900: string;
      red500: string;
      red600: string;
    };
    fonts: {
      MERRIWEATHER: string;
      CIRCULAR: string;
      SORAY: string;
      GEOMANIST: string;
      EB_GARAMOND: string;
      FAVORIT: string;
    };
  }
}
