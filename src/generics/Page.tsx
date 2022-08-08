import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { device } from '@/utils/constants';
import Card from './Card';
import useHeader from '@/hooks/useHeader';
import { HEADER_STATES } from '@/machines/headerMachine';

export interface PageProps {
  children: ReactNode;
  testId?: string;
  isLanding?: boolean;
}

const StyledPage = styled(Card)<PageProps>`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background: ${(props) => props.theme.color.gray100};
  @media ${device.tablet} {
    display: grid;
    grid-template-rows: min-content;
  }
  @media ${device.laptop} {
    grid-template-columns: ${(props) => props.isLanding && '1fr 1fr'};
  }
`;

const Page: FC<PageProps> = ({ children, testId }: PageProps) => {
  const { header_state } = useHeader();
  return (
    <StyledPage data-testid={testId} isLanding={header_state.value === HEADER_STATES.PRIMARY}>
      {children}
    </StyledPage>
  );
};

export default Page;
