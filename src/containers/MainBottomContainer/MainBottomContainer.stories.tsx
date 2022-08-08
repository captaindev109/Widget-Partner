import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { decorators } from '@/../.storybook/preview';
import Wrapper from '@/generics/Wrapper';
import MainBottomContainer, { MainBottomContainerProps } from './MainBottomContainer';

// A wrapper to position the component
const StoryWrapper = styled(Wrapper)``;

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Components/MainBottomContainer',
  component: MainBottomContainer,
  decorators,
};

export default meta;

// Showcasing the component
const Template: Story<MainBottomContainerProps> = (args) => (
  <StoryWrapper>
    <MainBottomContainer {...args} />
    <MainBottomContainer {...args} />
  </StoryWrapper>
);

export const DefaultMainBottomContainer = Template.bind({});

DefaultMainBottomContainer.args = {
  children: 'Badge',
};
