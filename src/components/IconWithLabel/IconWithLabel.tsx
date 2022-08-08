import { FC } from 'react';
import styled, { useTheme } from 'styled-components';
import Text from '@/generics/Text';
import Card from '@/generics/Card';
import { SVGConfigProps, TextVariantTypes } from '@/types/types';
import { SVGComponent } from '../SVGIcons/Index';

// A basic Interface or type is required for every each component
export interface IconWithLabelProps {
  iconName: string;
  position?: 'left' | 'right';
  config?: SVGConfigProps;
  label?: string;
  variant?: TextVariantTypes;
}

const StyledText = styled(Text)<{ color: string }>`
  color: ${(props) => props.color};
`;

//The main component with dynamic rendering and state
const IconWithLabel: FC<IconWithLabelProps> = ({ iconName, label, config, variant = 'Body2', position = 'left' }) => {
  const theme = useTheme();

  return (
    <Card display="flex" alignItems="center" data-testid="IconWithLabel">
      {position === 'left' && (
        <Card display="flex" alignItems="center">
          <SVGComponent iconName={iconName} config={config} />
        </Card>
      )}
      {label && (
        <Card
          display="flex"
          alignItems="center"
          paddingLeft={position === 'left' ? theme.size.padding.p16 : '0px'}
          paddingRight={position === 'right' ? theme.size.padding.p16 : '0px'}
        >
          <StyledText color={config?.color} variant={variant}>
            {label}
          </StyledText>
        </Card>
      )}
      {position === 'right' && (
        <Card display="flex" alignItems="center">
          <SVGComponent iconName={iconName} config={config} />
        </Card>
      )}
    </Card>
  );
};

export default IconWithLabel;
