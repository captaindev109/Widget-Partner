import { ReactNode } from 'react';
import styled from 'styled-components';

export interface LinkTextProps {
  children?: ReactNode;
  fontSize?: string;
  target?: string;
  href?: string;
  color?: 'purple800' | 'gray900';
}

const LinkText = styled.a<LinkTextProps>`
  color: ${(props) => props.theme.color[props.color || 'purple800']};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.theme.fonts.FAVORIT};
`;

LinkText.defaultProps = {
  fontSize: '12px',
  target: '_blank',
};

export default LinkText;
