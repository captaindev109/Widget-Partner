import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { decorators } from '../.storybook/preview';
import Header from '@/containers/Header';

const StoryWrapper = styled.div`
  & > * {
    margin: 0 5px;
  }

  & > *:first-child {
    margin-left: 0px;
  }
  display: flex;
`;

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Components/Header',
  component: Header,
  decorators,
};

export default meta;

const Template: Story = (args) => (
  <StoryWrapper>
    <Header {...args} />
  </StoryWrapper>
);

export const DefaultHeader = Template.bind({});

DefaultHeader.args = {};
