import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { decorators } from '@/../.storybook/preview';
import Card from '@/generics/Card';
import MainTopContainer from '.';
import { MainTopContainerProps } from './MainTopContainer';

// A wrapper to position the component
const StoryWrapper = styled(Card)``;

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Components/MainTopContainer',
  component: MainTopContainer,
  decorators,
};

export default meta;

// Showcasing the component
const Template: Story<MainTopContainerProps> = (args) => (
  <StoryWrapper>
    <MainTopContainer {...args} />
    <MainTopContainer {...args} />
  </StoryWrapper>
);

export const DefaultMainTopContainer = Template.bind({});

DefaultMainTopContainer.args = {
  children: 'Badge',
};
