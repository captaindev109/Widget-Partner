import { CreateSVGComponent } from '@/components/SVGIcons/Index';
import Tooltip from '@/components/Tooltip';
import { animateOpacity, ANIMATION_DURATION } from '@/utils/animationUtils';
import React, { FC, useEffect, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import Card from './Card';
import Label from './Label';
import Text from './Text';
import { InputProps, TextFieldProps, RadioButtonProps, BasicAny } from '@/types/types';

const BaseInput = styled.input`
  cursor: pointer;
  appearance: none;
`;

const StyledCheckbox = styled(BaseInput)`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  background: ${(props) => (props.checked ? props.theme.color.gray900 : props.theme.color.white)};

  transition: all 140ms ease-in;

  ${(props) =>
    !props.checked &&
    `
  border: 1px solid ${props.theme.color.gray500};
  &:hover {
    border: 2px solid ${props.theme.color.gray900};
  }
`}

  &:disabled {
    border: none;
    cursor: default;
    background: ${(props) => props.theme.color.gray300};
  }
`;

const IconWrapper = styled(Card)`
  position: absolute;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  transition: all 140ms ease-in;
`;

const CheckboxWrapper = styled(Card)`
  position: relative;
`;

const StyledLabel = styled(Label)<{ disabled?: boolean }>`
  ${(props) =>
    props.disabled &&
    `
  color: ${props.theme.color.gray500};
`}
`;

const Checkbox: FC<InputProps> = ({ label, labelPosition = 'right', ...props }) => {
  const theme = useTheme();
  return (
    <Card display="flex" flexDirection="row" alignItems="center">
      {label && labelPosition === 'left' && (
        <Card marginRight="10px">
          <StyledLabel disabled={props.disabled}>{label}</StyledLabel>
        </Card>
      )}
      <CheckboxWrapper display="flex" flexDirection="row" alignItems="center">
        <StyledCheckbox {...props} />
        <IconWrapper>
          {CreateSVGComponent(props.disabled ? 'CheckboxDisabled' : 'CheckboxSelected', {
            color: props.disabled ? theme.color.gray500 : theme.color.white,
          })}
        </IconWrapper>
      </CheckboxWrapper>

      {label && labelPosition === 'right' && (
        <Card marginLeft="10px">
          <StyledLabel disabled={props.disabled}>{label}</StyledLabel>
        </Card>
      )}
    </Card>
  );
};

const RadioButtonContainer = styled(Card)`
  background: ${(props) => props.theme.color.white};
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  min-height: 58px;
  min-width: 150px;
`;

const RadioCircle = styled(Card)`
  margin-right: ${(props) => props.theme.size.margin.m20};
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.color.gray300};
  pointer-events: none;
`;

const RadioIcon = styled(Card)`
  opacity: 0;
  width: 22px;
  height: 22px;
  transition: all 140ms ease-in;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;

  padding: 0px ${(props) => props.theme.size.padding.p20};
`;

const StyledRadioButton = styled(BaseInput)<BasicAny>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex: 1;
  z-index: 0;

  border-radius: ${(props) => props.theme.size.borderRadius.br4};

  border: ${(props) => `1px solid ${props.theme.color.gray300}`};

  transition: all 140ms ease-in;

  &:hover {
    border: ${(props) => !props.disabled && '1px solid grey'};
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  }

  &:checked {
    border: 1px solid ${(props) => props.theme.color.gray900};
  }

  &:disabled {
    border: 1px solid ${(props) => props.theme.color.gray300};
  }

  &:checked ~ div {
    // Accessing Radio circle
    & > * {
      // Accessing Radio Icon
      & > * {
        opacity: 1;
      }
    }
  }
`;

const TopRow = styled(Card)`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 10px;
  }

  margin-bottom: 8px;
`;

const ChildrenWrapper = styled(Card)`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.FAVORIT};
  line-height: 24px;
`;

const RadioButton: FC<RadioButtonProps> = (props) => {
  const { children, register, disabled, ...rest } = props;
  const theme = useTheme();

  return (
    <RadioButtonContainer>
      <StyledRadioButton data-testid="radio-input" disabled={disabled} type="radio" {...register} {...rest} />
      <ContentWrapper>
        <RadioCircle>
          <RadioIcon>
            {CreateSVGComponent('RadioSelected', {
              color: disabled ? theme.color.gray500 : theme.color.gray900,
              width: '22px',
              height: '22px',
            })}
          </RadioIcon>
        </RadioCircle>
        <ChildrenWrapper width="100%">{children}</ChildrenWrapper>
      </ContentWrapper>
    </RadioButtonContainer>
  );
};

const StyledTextField = styled(BaseInput)<BasicAny>`
  display: flex;
  width: 100%;
  outline: none;
  border: 1px solid ${(props) => (props.error ? props.theme.color.red600 : props.theme.color.gray300)};
  padding: 16px 24px;
  border-radius: ${(props) => props.theme.size.borderRadius.br4};
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.FAVORIT};
  line-height: 24px;
  color: ${(props) => props.theme.color.gray900};
  transition: border-color 140ms ease-in;

  &:focus {
    border-color: ${(props) => (props.error ? props.theme.color.red600 : props.theme.color.gray900)};
  }

  &:hover {
    border-color: ${(props) => (props.error ? props.theme.color.red600 : props.theme.color.gray700)};
  }

  &:disabled {
    cursor: default;
    border-color: ${(props) => props.theme.color.gray300};
    background-color: ${(props) => props.theme.color.gray300};
  }

  &::placeholder {
    color: ${(props) => props.theme.color.gray500};
  }

  &::-webkit-search-decoration {
    display: none;
  }

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

const StyledIcon = styled(Card)<{ $animate: boolean; error?: boolean }>`
  color: ${(props) => (props.error ? props.theme.color.red600 : props.theme.color.gray700)};
  transition: all ${ANIMATION_DURATION} ease;
  pointer-events: none;

  ${(props) => props.$animate && animateOpacity()}
`;

const HelperText = styled(Text)<{ $animate: boolean; error?: boolean }>`
  color: ${(props) => (props.error ? props.theme.color.red600 : props.theme.color.gray700)};
  transition: color ${ANIMATION_DURATION} ease;

  ${(props) => props.$animate && animateOpacity()}
`;

const TextField: FC<TextFieldProps> = (props) => {
  const { label, id, tooltip, helperText, icon, error, didMountRef, register, ...rest } = props;

  return (
    <Card>
      <TopRow>
        {!!label && <Label htmlFor={id}>{label}</Label>}
        {!!tooltip && <Tooltip direction="top" text={tooltip} size="small" />}
      </TopRow>
      <StyledTextField data-testid="text-input" {...register} {...rest} />
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

const Input: FC<InputProps> = (props) => {
  const didMountRef = useRef<boolean>(false);

  useEffect(() => {
    didMountRef.current = true;
  }, []);

  switch (props.type) {
    case 'radio':
      return <RadioButton didMountRef={didMountRef} {...props} />;
    case 'checkbox':
      return <Checkbox {...props} />;
    case 'number':
    case 'text':
    case 'email':
      return <TextField didMountRef={didMountRef} {...props} />;
    default:
      return null;
  }
};

export default Input;
