import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import Card from '@/generics/Card';
import { BasicString } from '@/types/types';
// A basic Interface or type is required for every each component
export interface SpinnerProps {
  size?: BasicString;
}
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const StyledSpinner = styled(Card)<SpinnerProps>`
  display: inline-block;
  width: ${(props) => (props.size ? props.size : '32px')};
  height: ${(props) => (props.size ? props.size : '32px')};
  border: 3px solid grey;
  border-top-color: transparent;
  border-radius: 1em;
  animation: ${rotate} 1s linear infinite;
`;

//The main component with dynamic rendering and state
export const Spinner: FC<SpinnerProps> = (props) => {
  return <StyledSpinner data-testid="Spinner" size={props.size} />;
};
export default Spinner;
