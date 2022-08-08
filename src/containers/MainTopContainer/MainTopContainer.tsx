import { FC } from 'react';
import Card from '@/generics/Card';
import { BasicAny, BasicNumber } from '@/types/types';
import useFooter from '@/hooks/useFooter';
import styled from 'styled-components';
import { device } from '@/utils/constants';

// A basic Interface or type is required for every each component
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MainTopContainerProps {
  children?: BasicAny;
}

const StyledMainTopContainer = styled(Card)<{ footerHeight: BasicNumber }>`
  margin-bottom: ${(props) => `${props.footerHeight}px`};
  @media ${device.tablet} {
    margin-bottom: 0;
  }
`;

//The main component with dynamic rendering and state
const MainTopContainer: FC<MainTopContainerProps> = ({ children }: BasicAny) => {
  const { height } = useFooter();
  return (
    <StyledMainTopContainer data-testid="MainTopContainer" footerHeight={height}>
      {children}
    </StyledMainTopContainer>
  );
};

const defaultProps: Partial<MainTopContainerProps> = {};

MainTopContainer.defaultProps = defaultProps;

export default MainTopContainer;
