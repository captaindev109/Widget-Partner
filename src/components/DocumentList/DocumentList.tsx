import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import LinkText from '@/generics/LinkText';
import Card from '@/generics/Card';
import { device } from '@/utils/constants';

// A basic Interface or type is required for every each component
export interface DocumentLinkProps {
  children?: string;
  href?: string;
}

// The styled component is using composition to inherit the base from Card component
const StyledDocumentLink = styled(LinkText)<DocumentLinkProps>`
  border-radius: 8px;
  border: 1px solid #121212;
  text-align: center;
  font-size: 1rem;
  text-decoration: none;
  text-overflow: ellipsis;
  padding: 0.75rem 1rem;
`;

//The main component with dynamic rendering and state
export const DocumentLink: FC<DocumentLinkProps> = (props) => {
  const { children, ...newProps } = props;
  return (
    <StyledDocumentLink data-testid="DocumentLink" target="_blank" color="gray900" {...newProps}>
      {children}
    </StyledDocumentLink>
  );
};

// A basic Interface or type is required for every each component
export interface DocumentListProps {
  children: ReactNode;
}

// The styled component is using composition to inherit the base from Card component
const StyledDocumentList = styled(Card)<DocumentListProps>`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 0.5rem;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    align-items: flex-start;
    & > * {
      margin-right: 1rem;
      margin-bottom: 1rem;
      background: rgb(234, 234, 234);
      border: 0;
    }
    & > *:last-child {
      margin-right: 0;
      margin-bottom: 0;
    }
  }
`;

//The main component with dynamic rendering and state
export const DocumentList: FC<DocumentListProps> = (props) => {
  const { children, ...newProps } = props;
  return (
    <StyledDocumentList data-testid="DocumentList" {...newProps}>
      {children}
    </StyledDocumentList>
  );
};
