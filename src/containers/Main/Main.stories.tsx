import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { decorators } from '@/../.storybook/preview';
import Wrapper from '@/generics/Wrapper';
import { MainProps } from './Main';
import Main from '.';

// A wrapper to position the component
const StoryWrapper = styled(Wrapper)``;

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Components/Main',
  component: Main,
  decorators,
};

export default meta;

// Showcasing the component
const Template: Story<MainProps> = (args) => (
  <StoryWrapper>
    <Main {...args} />
    <Main {...args} />
  </StoryWrapper>
);

export const DefaultMain = Template.bind({});

DefaultMain.args = {
  children: 'Badge',
};
