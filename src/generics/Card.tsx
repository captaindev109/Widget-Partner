import styled from 'styled-components';
import { CardProps, BasicNumber, BasicString, BasicUndefined } from '@/types/types';

function boxShadow(shadow: BasicNumber | BasicString | BasicUndefined) {
  switch (shadow) {
    case 1:
      return `0px 1px 2px rgba(0, 0, 0, 0.1)`;
    case 2:
      return `0px 4px 12px rgba(0, 0, 0, 0.05)`;
    case 3:
      return `0px 8px 16px rgba(0, 0, 0, 0.1)`;
    case 4:
      return `0px 16px 24px rgba(0, 0, 0, 0.12)`;
    case 5:
      return `0px 16px 40px rgba(0, 0, 0, 0.15)`;
    case 'footer':
      return `0px -4px 8px rgba(0, 0, 0, 0.05), 0px -8px 16px rgba(0, 0, 0, 0.05)`;
    default:
      return shadow;
  }
}

const Card = styled.div<CardProps>`
  flex: ${(props) => props.flex};
  flex-grow: ${(props) => props.flexGrow};
  row-gap: ${(props) => props.rowGap};
  column-gap: ${(props) => props.columnGap};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  margin-right: ${(props) => props.marginRight};
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  margin-bottom: ${(props) => props.marginBottom};
  padding: ${(props) => props.padding};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-right: ${(props) => props.paddingRight};
  padding-left: ${(props) => props.paddingLeft};
  position: ${(props) => props.position};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  text-align: ${(props) => props.textAlign};
  box-shadow: ${(props) => boxShadow(props.shadow)};
`;

export default Card;
