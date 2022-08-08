import { FC, ReactNode, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Card from '@/generics/Card';
import { BasicAny } from '@/types/types';
import { device } from '@/utils/constants';
import useFooter from '@/hooks/useFooter';

// A basic Interface or type is required for every each component
export interface MainBottomContainerProps {
  children?: ReactNode;
  padding?: boolean;
  shadow?: boolean;
}

// The styled component is using composition to inherit the base from Card component
const StyledMainBottomContainer = styled(Card)<MainBottomContainerProps>`
  width: 100%;
  position: absolute;
  bottom: 0;
  background: white;
  ${(props) => props.padding === true && 'padding: 16px'};
  ${(props) =>
    props.padding === true && 'box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.05), 0px -8px 16px rgba(0, 0, 0, 0.05)'};
  @media ${device.tablet} {
    position: relative;
    padding: 30px 16px;
    background: transparent;
    box-shadow: none;
  }
`;

//The main component with dynamic rendering and state
const MainBottomContainer: FC<MainBottomContainerProps> = ({ children, padding = true, shadow = true }: BasicAny) => {
  const { setHeight } = useFooter();

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current && ref.current.clientHeight) {
      setHeight(ref.current.clientHeight);
    } else {
      setHeight(0);
    }
  }, [children, ref, setHeight]);
  return (
    <StyledMainBottomContainer padding={padding} shadow={shadow} data-testid="MainBottomContainer" ref={ref}>
      {children}
    </StyledMainBottomContainer>
  );
};

export default MainBottomContainer;
