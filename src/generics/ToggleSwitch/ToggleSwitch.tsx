import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import Label from '../Label';
import Span from '../Span';
import { InputProps } from '@/types/types';

// A basic Interface or type is required for every each component

const StyledCard = styled(Label)<InputProps>`
  position: relative;
  display: inline-block;
  width: 51px;
  height: 31px;
`;

const StyledLabelItem = styled(Span)`
  position: absolute;
  cursor: pointer;
  background-color: black;
  border-radius: 17px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;

  &::before {
    position: absolute;
    content: '';
    left: 2px;
    top: 2px;
    width: 27px;
    height: 27px;
    background-color: #aaa;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
`;

const StyledInput = styled(Input)`
  &:checked + ${StyledLabelItem}::before {
    transform: translateX(19px);
    background-color: white;
  }
  &:checked + ${StyledLabelItem} {
    background-color: black;
  }
  &:disabled + ${StyledLabelItem} {
    background-color: gray;
  }
`;

//The main component with dynamic rendering and state
const ToggleSwitch: FC<InputProps> = ({ checked, defaultChecked, onChange, ...newProps }) => {
  const [isToggled, setIsToggled] = useState(defaultChecked);

  useEffect(() => {
    if (checked != undefined) {
      setIsToggled(checked);
    }
  }, [checked]);

  const onToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <StyledCard>
      <StyledInput type="checkbox" checked={isToggled} onChange={onChange ? onChange : onToggle} {...newProps} />
      <StyledLabelItem />
    </StyledCard>
  );
};

export default ToggleSwitch;
