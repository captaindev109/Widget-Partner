import { FC } from 'react';
import Card from '@/generics/Card';
import styled from 'styled-components';
import { BasicAny } from '@/types/types';

// A basic Interface or type is required for every each component
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderContainerProps {
  children?: BasicAny;
}

const StyledHeaderContainer = styled(Card)``;

//The main component with dynamic rendering and state
const HeaderContainer: FC<HeaderContainerProps> = ({ children }: BasicAny) => {
  return <StyledHeaderContainer data-testid="HeaderContainer">{children}</StyledHeaderContainer>;
};

const defaultProps: Partial<HeaderContainerProps> = {};

HeaderContainer.defaultProps = defaultProps;

export default HeaderContainer;
