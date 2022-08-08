import { device } from '@/utils/constants';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';

export interface LabelProps {
  children?: ReactNode;
  htmlFor?: string;
}

const StyledText = styled.label<LabelProps>`
  font-size: ${(props) => props.theme.size.fontSizes.f2};
  line-height: ${(props) => props.theme.size.lineHeights.lh2};
  letter-spacing: ${(props) => props.theme.size.letterSpacings.ls1};
  font-family: ${(props) => props.theme.fonts.FAVORIT};
  @media ${device.mobileS} {
    ${(props) =>
      `
      font-size: ${props.theme.size.fontSizes.f2};
      line-height: ${props.theme.size.lineHeights.lh2};
      letter-spacing: ${props.theme.size.letterSpacings.ls1};
       `}
  }
  @media ${device.laptop} {
    ${(props) =>
      `
      font-size: ${props.theme.size.fontSizes.f2};
      line-height: ${props.theme.size.lineHeights.lh2};
      letter-spacing: ${props.theme.size.letterSpacings.ls1};
       `}
  }
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Label: FC<LabelProps> = ({ children, htmlFor, ...newProps }) => {
  return (
    <StyledText htmlFor={htmlFor} {...newProps}>
      {children}
    </StyledText>
  );
};
export default Label;
