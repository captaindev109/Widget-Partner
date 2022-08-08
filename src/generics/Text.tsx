import { device } from '@/utils/constants';
import styled from 'styled-components';
import { BasicAny, TextProps } from '@/types/types';

const StyledText = styled.p<TextProps>`
  text-align: ${({ textAlign }) => textAlign};
  color: ${(props) => props.color && props.theme.color[props.color]};
  font-family: ${(props) => props.theme.fonts.FAVORIT};
  font-weight: ${(props) => props.weight};
  @media ${device.mobileS} {
    ${(props) => {
      switch (props.variant) {
        case 'HeadlineXL':
          return `
            font-size: ${props.theme.size.fontSizes.f10};
            line-height: ${props.theme.size.lineHeights.lh12};
            letter-spacing: ${props.theme.size.letterSpacings.lsp2};
          `;
        case 'HeadlineL':
          return `
            font-size: ${props.theme.size.fontSizes.f8};
            line-height: ${props.theme.size.lineHeights.lh10};
            letter-spacing: ${props.theme.size.letterSpacings.lsp2};
          `;
        case 'HeadlineM':
          return `
            font-size: ${props.theme.size.fontSizes.f7};
            line-height: ${props.theme.size.lineHeights.lh9};
            letter-spacing: ${props.theme.size.letterSpacings.lsp2};
          `;
        case 'HeadlineS':
          return `
            font-size: ${props.theme.size.fontSizes.f6};
            line-height: ${props.theme.size.lineHeights.lh8};
            letter-spacing: ${props.theme.size.letterSpacings.lsp1};
          `;
        case 'HeadlineXS':
          return `
            font-size: ${props.theme.size.fontSizes.f5};
            line-height: ${props.theme.size.lineHeights.lh6};
            letter-spacing: ${props.theme.size.letterSpacings.ls1};
          `;
        case 'OVERLINE':
          return `
            font-size: ${props.theme.size.fontSizes.f2};
            line-height: ${props.theme.size.lineHeights.lh3};
            letter-spacing: ${props.theme.size.letterSpacings.ls3};
          `;
        case 'Body1':
          return `
            font-size: ${props.theme.size.fontSizes.f4};
            line-height: ${props.theme.size.lineHeights.lh5};
            letter-spacing: ${props.theme.size.letterSpacings.ls1};
          `;
        case 'Body2':
          return `
            font-size: ${props.theme.size.fontSizes.f3};
            line-height: ${props.theme.size.lineHeights.lh4};
            letter-spacing: ${props.theme.size.letterSpacings.ls1};
          `;
        case 'Body3':
          return `
            font-size: ${props.theme.size.fontSizes.f2};
            line-height: ${props.theme.size.lineHeights.lh2};
            letter-spacing: ${props.theme.size.letterSpacings.ls1};
          `;
        case 'Pullquote':
          return `
            font-family: ${props.theme.fonts.EB_GARAMOND};
            font-size: ${props.theme.size.fontSizes.f7};
            line-height: ${props.theme.size.lineHeights.lh9};
            letter-spacing: ${props.theme.size.letterSpacings.ls2};
          `;
        case 'Caption':
        default:
          return `
            font-size: ${props.theme.size.fontSizes.f1};
            line-height: ${props.theme.size.lineHeights.lh1};
            letter-spacing: ${props.theme.size.letterSpacings.ls1};
          `;
      }
    }}
  }
  @media ${device.laptop} {
    ${(props) => {
      switch (props.variant) {
        case 'HeadlineXL':
          return `
            font-size: ${props.theme.size.fontSizes.f11};
            line-height: ${props.theme.size.lineHeights.lh13};
            letter-spacing: ${props.theme.size.letterSpacings.lsp2};
          `;
        case 'HeadlineL':
          return `
            font-size: ${props.theme.size.fontSizes.f10};
            line-height: ${props.theme.size.lineHeights.lh12};
            letter-spacing: ${props.theme.size.letterSpacings.lsp2};
          `;
        case 'HeadlineM':
          return `
            font-size: ${props.theme.size.fontSizes.f9};
            line-height: ${props.theme.size.lineHeights.lh11};
            letter-spacing: ${props.theme.size.letterSpacings.lsp2};
          `;
        case 'HeadlineS':
          return `
            font-size: ${props.theme.size.fontSizes.f7};
            line-height: ${props.theme.size.lineHeights.lh9};
            letter-spacing: ${props.theme.size.letterSpacings.lsp2};
          `;
        case 'HeadlineXS':
          return `
            font-size: ${props.theme.size.fontSizes.f6};
            line-height: ${props.theme.size.lineHeights.lh8};
            letter-spacing: ${props.theme.size.letterSpacings.lsp2};
          `;
        case 'OVERLINE':
          return `
            font-size: ${props.theme.size.fontSizes.f3};
            line-height: ${props.theme.size.lineHeights.lh4};
            letter-spacing: ${props.theme.size.letterSpacings.ls1};
          `;
        case 'Body1':
          return `
            font-size: ${props.theme.size.fontSizes.f4};
            line-height: ${props.theme.size.lineHeights.lh5};
            letter-spacing: ${props.theme.size.letterSpacings.ls1};
          `;
        case 'Body2':
          return `
            font-size: ${props.theme.size.fontSizes.f3};
            line-height: ${props.theme.size.lineHeights.lh4};
            letter-spacing: ${props.theme.size.letterSpacings.ls1};
          `;
        case 'Body3':
          return `
            font-size: ${props.theme.size.fontSizes.f2};
            line-height: ${props.theme.size.lineHeights.lh2};
            letter-spacing: ${props.theme.size.letterSpacings.ls1};
          `;
        case 'Pullquote':
          return `
            font-family: ${props.theme.fonts.EB_GARAMOND};
            font-size: ${props.theme.size.fontSizes.f9};
            line-height: ${props.theme.size.lineHeights.lh11};
            letter-spacing: ${props.theme.size.letterSpacings.ls2};
          `;
        case 'Caption':
        default:
          return `
            font-size: ${props.theme.size.fontSizes.f1};
            line-height: ${props.theme.size.lineHeights.lh1};
            letter-spacing: ${props.theme.size.letterSpacings.ls1};
          `;
      }
    }}
  }
`;

const Text = ({ children, ...newProps }: BasicAny) => {
  return <StyledText {...newProps}>{children}</StyledText>;
};

Text.defaultProps = {
  textAling: 'left',
  color: 'gray900',
  weight: 'normal',
};

export default Text;
