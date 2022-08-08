import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Text from '@/generics/Text';
import Card from '@/generics/Card';
import Tooltip from '@/components/Tooltip';
import { device } from '@/utils/constants';

// A basic Interface or type is required for every each component
export interface InformationItemProps {
  title: string;
  price: string;
  description: string;
}

// The styled component is using composition to inherit the base from Card component
const StyledInformationItem = styled(Card).attrs({ shadow: 1 })`
  display: grid;
  gap: 0.5rem;
  padding: 0.75rem 0.85rem 0.75rem 0.75rem;
  position: relative;
  background: white;
  border-radius: 8px;
`;
const StyledCard = styled(Card)`
  position: absolute;
  bottom: 0.875rem;
  right: 0.875rem;
  display: flex;
`;

//The main component with dynamic rendering and state
export const InformationItem: FC<InformationItemProps> = (props) => {
  const { title, price, description } = props;
  return (
    <StyledInformationItem data-testid="InformationItem">
      <Text variant="Body3" color="gray700">
        {title}
      </Text>
      <Text variant="HeadlineXS" color="gray900">
        {price}
      </Text>
      <StyledCard>
        <Tooltip size="medium" direction="left" text={description} />
      </StyledCard>
    </StyledInformationItem>
  );
};

// A basic Interface or type is required for every each component
export interface InformationListProps {
  children: ReactNode;
}

// The styled component is using composition to inherit the base from Card component
const StyledInformationList = styled(Card)<InformationListProps>`
  @media ${device.mobileS} {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  @media ${device.tablet} {
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }
`;

//The main component with dynamic rendering and state
export const InformationList: FC<InformationListProps> = (props) => {
  const { children, ...newProps } = props;
  return (
    <StyledInformationList data-testid="InformationList" {...newProps}>
      {children}
    </StyledInformationList>
  );
};
