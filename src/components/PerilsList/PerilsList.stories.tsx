import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { decorators } from '@/../.storybook/preview';
import Wrapper from '@/generics/Wrapper';
import { PerilsList, PerilsListProps, Peril } from './PerilsList';
import { PERILS_MOCK } from '@/mocks/quoteCart_data';

// A wrapper to position the component
const StoryWrapper = styled(Wrapper)`
  width: 100%;
`;

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Components/PerilsList',
  component: PerilsList,
  decorators,
};

export default meta;

// Showcasing the component
const Template: Story<PerilsListProps> = () => {
  return (
    <StoryWrapper>
      <PerilsList perils={PERILS_MOCK} />
    </StoryWrapper>
  );
};

export const DefaultPerilsList = Template.bind({});

DefaultPerilsList.args = {};

// Showcasing the component
const PerilTemplate: Story<PerilsListProps> = () => {
  const peril = PERILS_MOCK[0];
  return (
    <StoryWrapper>
      <Peril index={0} onClick={() => null} peril={peril} />
    </StoryWrapper>
  );
};

export const DefaultPeril = PerilTemplate.bind({});

DefaultPeril.args = {};
