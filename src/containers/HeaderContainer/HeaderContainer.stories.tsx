import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { decorators } from '@/../.storybook/preview';
import { HeaderContainerProps } from '@/containers/HeaderContainer';
import Wrapper from '@/generics/Wrapper';
import HeaderContainer from './HeaderContainer';

// A wrapper to position the component
const StoryWrapper = styled(Wrapper)``;

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Components/HeaderContainer',
  component: HeaderContainer,
  decorators,
};

export default meta;

// Showcasing the component
const Template: Story<HeaderContainerProps> = (args) => (
  <StoryWrapper>
    <HeaderContainer {...args} />
    <HeaderContainer {...args} />
  </StoryWrapper>
);

export const DefaultHeaderContainer = Template.bind({});

DefaultHeaderContainer.args = {
  children: 'Badge',
};
