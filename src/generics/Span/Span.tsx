import { FC } from 'react';
import styled from 'styled-components';
import { SpanProps } from '@/types/types';

const StyledSpan = styled.span<SpanProps>`
  font-size: ${(props) => props.theme.size.fontSizes.f2};
`;

const Span: FC<SpanProps> = ({ children, ...newProps }) => {
  return <StyledSpan {...newProps}>{children}</StyledSpan>;
};

export default Span;
