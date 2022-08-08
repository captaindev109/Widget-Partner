import Card from '@/generics/Card';
import Label from '@/generics/Label';
import styled from 'styled-components';
import Tooltip from './Tooltip';

import { CreateSVGComponent } from '@/components/SVGIcons/Index';
import Text from '@/generics/Text';
import { animateOpacity, ANIMATION_DURATION } from '@/utils/animationUtils';
import { BasicString, BasicBool, BasicAny } from '@/types/types';
import { FC, useEffect, useRef } from 'react';

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  onChange?: (option: DropdownOption) => void;
  value?: BasicString;
  disabled?: BasicBool;
  placeholder?: BasicString;
  label?: BasicString;
  name?: BasicString;
  tooltip?: BasicString;
  helperText?: BasicString;
  error?: BasicBool;
  icon?: BasicBool;
  register?: BasicAny;
}

export interface DropdownOption {
  label: string;
  value: string;
}

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

const IconWrapper = styled(Card)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 24px;

  display: flex;
  align-items: center;
  pointer-events: none;
`;

const StyledSelect = styled.select<BasicAny>`
  outline: none;
  appearance: none;
  background: white;
  border: none;
  display: flex;

  width: 100%;
  margin: 0;
  height: 58px;
  padding: 16px 24px;
  border-radius: ${({ theme }) => theme.size.borderRadius.br4};
  font-family: ${(props) => props.theme.fonts.FAVORIT};
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color.gray900};
  border: 1px solid ${(props) => props.theme.color.gray300};

  transition: border-color 140ms ease-in;

  &:selected + ${IconWrapper} {
    border: 1px solid ${(props) => props.theme.color.gray900};
  }

  &:hover {
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.color.gray900};
  }

  &:disabled {
    cursor: default;
    background-color: ${(props) => props.theme.color.gray300};
    border: 1px solid ${(props) => props.theme.color.gray300};
    &:hover {
      cursor: default;
    }
  }
`;

const Dropdown: FC<DropdownProps> = ({
  tooltip,
  label,
  options,
  disabled,
  helperText,
  icon,
  register,
  error,
  ...rest
}) => {
  const didMountRef = useRef<boolean>(false);

  useEffect(() => {
    didMountRef.current = true;
  }, []);

  return (
    <Card>
      <TopRow>
        {label && <Label data-testid="dropdown-label">{label}</Label>}
        {!!tooltip && <Tooltip direction="top" text={tooltip} size="small"></Tooltip>}
      </TopRow>
      <Card position="relative">
        <StyledSelect disabled={disabled} {...register} {...rest}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <IconWrapper>{CreateSVGComponent('DownArrow')}</IconWrapper>
      </Card>

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

export default Dropdown;
