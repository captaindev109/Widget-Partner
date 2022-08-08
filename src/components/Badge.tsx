import { FC } from 'react';
import styled from 'styled-components';
import Card from '@/generics/Card';

export interface BadgeProps {
  children: string;
}

const StyledBadge = styled(Card)<BadgeProps>`
  background-color: ${(props) => props.theme.color.purple300};
  font-family: ${(props) => props.theme.fonts.FAVORIT};
  border-radius: 4px;
  padding: 5px 8px 3px;
  line-height: 16px;
  font-size: 12px;
  color: ${(props) => props.theme.color.gray900};
`;

const Badge: FC<BadgeProps> = ({ children }) => {
  return <StyledBadge data-testid="badge">{children.toUpperCase()}</StyledBadge>;
};

const defaultProps: Partial<BadgeProps> = {};

Badge.defaultProps = defaultProps;

export default Badge;
