import { FontsProps } from '@/types/styled';

const fonts: FontsProps = {
  MERRIWEATHER: 'Merriweather',
  CIRCULAR: 'CircularStd',
  SORAY: 'SoRay',
  GEOMANIST: 'Geomanist',
  EB_GARAMOND: 'EB Garamond',
  FAVORIT: 'FavoritStd',
};

interface Flavor {
  flavorName: string;
  weight: number;
  style: string;
}

const fontFlavors: { [fontName: string]: Flavor[] } = {
  SoRay: [{ flavorName: 'ExtraBold', weight: 800, style: 'normal' }],
  CircularStd: [
    { flavorName: 'Bold', weight: 600, style: 'normal' },
    { flavorName: 'BoldItalic', weight: 600, style: 'italic' },
    { flavorName: 'Book', weight: 400, style: 'normal' },
    { flavorName: 'BookItalic', weight: 400, style: 'italic' },
  ],
  Merriweather: [
    { flavorName: 'Light', weight: 300, style: 'normal' },
    { flavorName: 'LightItalic', weight: 300, style: 'italic' },
    { flavorName: 'Regular', weight: 400, style: 'normal' },
    { flavorName: 'RegularItalic', weight: 400, style: 'italic' },
    { flavorName: 'BoldItalic', weight: 600, style: 'italic' },
    { flavorName: 'Bold', weight: 600, style: 'normal' },
  ],
  Geomanist: [
    { flavorName: 'Black', weight: 900, style: 'normal' },
    { flavorName: 'Bold', weight: 600, style: 'normal' },
    { flavorName: 'Medium', weight: 500, style: 'normal' },
  ],
  FavoritStd: [
    { flavorName: 'Bold', weight: 600, style: 'normal' },
    { flavorName: 'Book', weight: 400, style: 'normal' },
    { flavorName: 'BookItalic', weight: 400, style: 'italic' },
  ],
};

const getCdnFontFaces = () =>
  Object.keys(fontFlavors)
    .map((fontName) =>
      fontFlavors[fontName]
        .map(
          (flavour) => `
  @font-face {
    font-family: "${fontName}";
    font-style: ${flavour.style};
    font-weight: ${flavour.weight};
    src:
      url("https://cdn.hedvig.com/identity/fonts/${fontName}-${flavour.flavorName}.woff2") format("woff2"),
      url("https://cdn.hedvig.com/identity/fonts/${fontName}-${flavour.flavorName}.woff") format("woff")
    ;
  }
`
        )
        .join('\n')
    )
    .join('\n');

export { fonts, getCdnFontFaces };
