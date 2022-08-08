import styled, { DefaultTheme } from 'styled-components';
import { FC } from 'react';
import type { BasicBool, ButtonProps, ButtonVariant } from '@/types/types';
import Card from '@/generics/Card';
import { CreateSVGComponent } from './SVGIcons/Index';

interface VariantSpecificStyling {
  variant?: 'primary' | 'outline' | 'transparent' | 'icon';
  fluid?: boolean;
  theme: DefaultTheme;
}

const getVariantSpecificStyling = ({ theme, variant }: VariantSpecificStyling) => {
  switch (variant) {
    case 'primary':
      return `
        cursor: pointer;
        background-color: ${theme.color.gray900};
        color: ${theme.color.gray100};
        border:none
        cursor: pointer;
        &:hover {
          cursor: pointer;
          background-color: ${theme.color.gray800};
        }
        &:disabled {
          cursor: default;
          background-color: ${theme.color.gray300};
          color: ${theme.color.gray500};
        }
      `;
    case 'outline':
      return `
        background-color: ${theme.palette.common.transparent};
        color: ${theme.color.gray900};
        border: 1px solid ${theme.color.gray900};
        &:hover {
          cursor: pointer;
          border: 1px solid ${theme.color.gray700};
        }
        &:disabled {
          cursor: default;
          background-color: ${theme.palette.common.transparent};
          border: 1px solid ${theme.color.gray500};
          color: ${theme.color.gray500};
        }
      `;
    case 'transparent':
      return `
        background-color: ${theme.palette.common.transparent};
        color: ${theme.color.gray900};
        &:hover {
          cursor: pointer;
          background-color: ${theme.color.gray300};
        }
        &:disabled {
          cursor: default;
          background-color: ${theme.palette.common.transparent};
          color: ${theme.color.gray500};
          & > div > div > svg {
            color: ${theme.color.gray500};
            fill: ${theme.color.gray500};
          }
        }
      `;
    case 'icon':
      return `
        background: none;
        cursor: pointer;
        padding: 0;
        height: 32px;
        width: 32px;
        z-index: 1;
      `;
    default:
      return ``;
  }
};

const getIconColor = ({
  variant,
  disabled,
  theme,
}: {
  variant?: ButtonVariant;
  disabled?: BasicBool;
  theme: DefaultTheme;
}) => {
  if (disabled) return theme.color.gray500;
  if (variant === 'primary') return theme.color.gray100;
  return theme.color.gray900;
};

const StyledButton = styled.button<VariantSpecificStyling>`
  display: flex;
  flex: 1;
  width: ${(props) => (props.fluid ? 'auto' : '100%')};
  align-items: center;
  justify-content: center;
  padding: 0px 32px;
  margin: 0;
  height: 48px;
  border-radius: 8px;
  border: none;
  pointer: cursor;
  font-family: ${(props) => props.theme.fonts.FAVORIT};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;

  ${getVariantSpecificStyling}
`;

const ContentWrapper = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled(Card)<{ disabled?: BasicBool; variant?: ButtonVariant }>`
  ${(props) => props.variant !== 'icon' && `padding-left: 16px;`}
  display: flex;
  align-items: center;
  justify-content: center;
  & > svg > * {
    fill: ${getIconColor};
  }
`;

const Button: FC<ButtonProps> = ({ children, onClick, icon, ...rest }) => {
  return (
    <StyledButton onClick={onClick} {...rest}>
      <ContentWrapper>
        {children}
        {icon && (
          <IconWrapper variant={rest.variant} disabled={rest.disabled}>
            {CreateSVGComponent(icon.iconName, icon.config)}
          </IconWrapper>
        )}
      </ContentWrapper>
    </StyledButton>
  );
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  variant: 'primary',
};

export default Button;
