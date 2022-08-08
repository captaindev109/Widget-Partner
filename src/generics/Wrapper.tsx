import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Card from './Card';

export interface WrapperProps {
  children: ReactNode;
  direction?: 'row' | 'column';
  display?: string;
  className?: string;
}

const StyledWrapper = styled(Card)<WrapperProps>`
  display: ${({ display }) => display || 'block'};
  flex-direction: ${({ direction }) => direction || 'row'};
`;

const Wrapper: FC<WrapperProps> = (props) => {
  const { children, className, ...newProps } = props;
  return (
    <StyledWrapper className={className} {...newProps} data-testid="wrapper">
      {children}
    </StyledWrapper>
  );
};

Wrapper.defaultProps = { direction: 'row' };

export default Wrapper;
