import { FC } from 'react';
import useButtonClickHandler from '@/hooks/useButtonHandler';
import type { ButtonEventConfigType, ButtonProps } from '@/types/types';
import Button from './Button';

interface NavigationButtonProps extends ButtonProps {
  children: string;
  config: ButtonEventConfigType;
}

const NavigationButton: FC<NavigationButtonProps> = ({ children, config, ...restProps }) => {
  const { buttonClickHandler } = useButtonClickHandler(config);
  return (
    <Button {...restProps} onClick={buttonClickHandler}>
      {children}
    </Button>
  );
};

export default NavigationButton;
