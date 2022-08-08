import { ReactNode, FC } from 'react';
import styled from 'styled-components';

export interface ListProps {
  children: ReactNode;
  display?: 'flex' | 'block' | 'inline';
  direction?: 'row' | 'column';
  spaceBetween?: string;
  wrap?: 'wrap' | 'nowrap';
  className?: string;
}

export interface ListItemProps {
  children: ReactNode;
  className?: string;
}

const StyledList = styled.ul<ListProps>`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.direction};
  flex-wrap: ${(props) => props.wrap};
  list-style: none;

  & > * {
    ${(props) =>
      props.direction === 'row' && props.spaceBetween
        ? `margin-left: ${props.spaceBetween};`
        : `margin-top: ${props.spaceBetween};`}
  }

  & > *:first-child {
    ${(props) => (props.direction === 'row' && props.spaceBetween ? 'margin-left: 0px;' : 'margin-top: 0px;')}
  }
`;

export const StyledListItem = styled.li<ListItemProps>``;

export const List: FC<ListProps> = ({ children, display, direction, spaceBetween, wrap, className }): JSX.Element => {
  return (
    <StyledList className={className} wrap={wrap} spaceBetween={spaceBetween} display={display} direction={direction}>
      {children}
    </StyledList>
  );
};

export const ListItem: FC<ListItemProps> = ({ children, className }): JSX.Element => {
  return <StyledListItem className={className}>{children}</StyledListItem>;
};
