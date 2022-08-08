import React, { FC, useEffect, useRef } from 'react';
import Card from '@/generics/Card';
import styled from 'styled-components';
import Label from '@/generics/Label';
import Tooltip from './Tooltip';
import Input from '@/generics/Input';
import { CreateSVGComponent } from './SVGIcons/Index';
import { animateOpacity, ANIMATION_DURATION } from '@/utils/animationUtils';
import Text from '@/generics/Text';
import { RadioGroupProps } from '@/types/types';

const TopRow = styled(Card)`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 10px;
  }

  margin-bottom: 8px;
`;

const StyledIcon = styled(Card)<{ $animate: boolean; error?: boolean }>`
  color: ${(props) => (props.error ? props.theme.color.red600 : props.theme.color.gray700)};
  transition: all ${ANIMATION_DURATION} ease;

  ${(props) => props.$animate && animateOpacity()}
`;

const HelperText = styled(Text)<{ $animate: boolean; error?: boolean }>`
  color: ${(props) => (props.error ? props.theme.color.red600 : props.theme.color.gray700)};
  transition: color ${ANIMATION_DURATION} ease;

  ${(props) => props.$animate && animateOpacity()}
`;

const RadioGroupWrapper = styled(Card)<{ direction?: 'row' | 'column'; label?: string }>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  & > * {
    flex: 1;
    ${(props) =>
      props.direction === 'row'
        ? `margin-left: ${props.theme.size.margin.m10};`
        : `margin-top: ${props.theme.size.margin.m10};`}
  }

  & > *:first-child {
    ${(props) => (props.direction === 'row' ? 'margin-left: 0px;' : 'margin-top: 0px;')}
  }
`;

const RadioGroup: FC<RadioGroupProps> = (props) => {
  const { label, tooltip, options, register, error, helperText, icon, ...newProps } = props;
  const didMountRef = useRef<boolean>(false);

  useEffect(() => {
    didMountRef.current = true;
  }, []);

  return (
    <Card display="flex" width="100%" flexDirection="column">
      <TopRow>
        {!!label && <Label>{label}</Label>}
        {!!tooltip && <Tooltip direction="top" text={tooltip} size="small" />}
      </TopRow>
      <RadioGroupWrapper {...newProps}>
        {options?.map((optionProps, index) => {
          const props = optionProps?.props ?? optionProps;
          return <Input key={index} register={register} {...props} />;
        })}
      </RadioGroupWrapper>
      {!!helperText && (
        <Card display="flex" alignItems="center" marginRight="4px">
          {icon && (
            <StyledIcon error={error} $animate={didMountRef.current} marginRight="4px">
              {CreateSVGComponent(error ? 'Error' : 'HelperInfo')}
            </StyledIcon>
          )}
          <HelperText data-testid="text-helper" error={error} $animate={didMountRef.current}>
            {helperText}
          </HelperText>
        </Card>
      )}
    </Card>
  );
};

export default RadioGroup;
