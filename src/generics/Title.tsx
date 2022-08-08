import styled, { DefaultTheme } from 'styled-components';

export interface TitleProps {
  children?: string;
  variant?: 'primary' | 'secondary';
}

export interface VariantProps {
  variant?: string;
  theme?: DefaultTheme;
}

function fontSize({ variant }: VariantProps) {
  switch (variant) {
    case 'secondary':
      return `font-size: 18px`;
    default:
      return `font-size: 24px`;
  }
}

function lineHeight({ variant }: VariantProps) {
  switch (variant) {
    case 'secondary':
      return `line-height: 26px`;
    default:
      return `line-height: 32px`;
  }
}

const Title = styled.div<TitleProps>`
  color: #121212;
  font-family: Favorit;
  ${fontSize};
  ${lineHeight};
`;

Title.defaultProps = {
  variant: 'primary',
};

export default Title;
