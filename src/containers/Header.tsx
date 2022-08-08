import React, { FC } from 'react';
import styled from 'styled-components';
import Card from '@/generics/Card';
import { BasicAny } from '@/types/types';

// The styled component is using composition to inherit the base from Card component
const StyledHeader = styled(Card)``;

const Header: FC = ({ children }: BasicAny): JSX.Element => {
  return <StyledHeader data-testid="Header">{children}</StyledHeader>;
};

export default Header;
