import { ButtonEventConfigType, BasicAny } from '@/types/types';
import { FC } from 'react';
import Button from './Button';

export interface IconButtonProps {
  onClick?: (event: BasicAny) => BasicAny;
  disabled?: boolean;
  icon: string;
  width?: string;
  height?: string;
  config: ButtonEventConfigType;
}

const IconButton: FC<IconButtonProps> = ({ icon, width, height, ...rest }) => {
  const iconProps = { iconName: icon, config: { width, height } };
  return <Button icon={iconProps} variant="icon" disabled={!icon} data-testid="icon-button" {...rest} />;
};

export default IconButton;
