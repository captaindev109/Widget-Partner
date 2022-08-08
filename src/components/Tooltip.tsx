import Card from '@/generics/Card';
import Text from '@/generics/Text';
import { device } from '@/utils/constants';
import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { CreateSVGComponent } from './SVGIcons/Index';

export interface TooltipProps {
  size: 'small' | 'medium' | 'large';
  text: string;
  direction: 'top' | 'bottom' | 'left' | 'right';
}

interface TooltipStylingProps {
  theme: DefaultTheme;
  $direction: 'top' | 'bottom' | 'left' | 'right';
}

const SIZE = {
  small: '15px',
  medium: '20px',
  large: '25px',
};

const getArrowPosition = ({ $direction, theme }: TooltipStylingProps) => {
  switch ($direction) {
    case 'top':
      return `
        border-color: ${theme.color.gray900} transparent transparent transparent;
        top: 100%;
        left: 50%;
        margin-left: -${theme.size.margin.m5};
      `;
    case 'bottom':
      return `
        border-color: transparent transparent ${theme.color.gray900} transparent;
        bottom: 100%;
        left: 50%;
        margin-left: -${theme.size.margin.m5};
      `;
    case 'left':
      return `
        border-color: transparent transparent transparent ${theme.color.gray900};
        top: 50%;
        left: 100%;
        margin-top: -${theme.size.margin.m5};
      `;
    case 'right':
      return `
        border-color: transparent ${theme.color.gray900} transparent transparent;
        top: 50%;
        right: 100%;
        margin-top: -${theme.size.margin.m5};
      `;
  }
};

const getBoxPosition = ({ $direction }: TooltipStylingProps) => {
  switch ($direction) {
    case 'top':
      return `
        bottom: calc(100% + 10px);
        left: 50%;
        transform: translateX(-50%);
      `;
    case 'bottom':
      return `
        top: calc(100% + 10px);
        left: 50%;
        transform: translateX(-50%);
      `;
    case 'left':
      return `
        right: calc(100% + 10px);
        top: 50%;
        transform: translateY(-50%);
      `;
    case 'right':
      return `
        left: calc(100% + 10px);
        top: 50%;
        transform: translateY(-50%);
      `;
  }
};

const TooltipText = styled(Card)<TooltipStylingProps>`
  z-index: 1;
  position: absolute;
  visibility: hidden;
  width: max-content;

  max-width: 70vw;

  background-color: ${({ theme }) => theme.color.gray900};
  border-radius: ${({ theme }) => theme.size.borderRadius.br4};
  padding: 12px 16px;

  // Box position
  ${getBoxPosition};

  @media ${device.tablet} {
    max-width: 350px;
  }

  // Transition the opacity
  opacity: 0;
  transition: all 0.3s ease-in;

  // Arrow
  &:after {
    content: '';
    position: absolute;
    border-width: 5px;
    border-style: solid;
    ${getArrowPosition};
    transition: border 0.3s ease-in;
  }
`;

const TooltipIcon = styled(Card)`
  display: flex;

  // When hover over the icon, show the text
  &:hover + ${TooltipText} {
    visibility: visible;
    opacity: 1;
  }
`;

const TooltipCard = styled(Card)`
  position: relative;
  display: inline-block;
`;

function Tooltip({ size, text, direction }: TooltipProps) {
  const icon = CreateSVGComponent('Information', { width: SIZE[size], height: SIZE[size] });
  return (
    <TooltipCard>
      <TooltipIcon>{icon}</TooltipIcon>
      <TooltipText $direction={direction}>
        <Text variant="Body3" color="gray100">
          {text}
        </Text>
      </TooltipText>
    </TooltipCard>
  );
}

Tooltip.defaultProps = {
  size: 'medium',
  text: 'Tooltip',
  direction: 'top',
};

export default Tooltip;
