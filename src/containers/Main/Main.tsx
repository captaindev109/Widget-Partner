import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Card from '@/generics/Card';
import { device } from '@/utils/constants';
import useHeader from '@/hooks/useHeader';
import { HEADER_STATES } from '@/machines/headerMachine';

// A basic Interface or type is required for every each component
export interface MainProps {
  children?: ReactNode;
  isLanding?: boolean;
}

// The styled component is using composition to inherit the base from Card component
const StyledMain = styled(Card)<MainProps>`
  @media ${device.tablet} {
    min-width: 500px;
    max-width: 700px;
    width: 45%;
    margin: auto;
  }
`;

//The main component with dynamic rendering and state
const Main: FC<MainProps> = ({ children }) => {
  const { header_state } = useHeader();
  return (
    <StyledMain data-testid="Main" isLanding={header_state.value === HEADER_STATES.PRIMARY}>
      {children}
    </StyledMain>
  );
};

export default Main;
