import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { decorators } from '@/../.storybook/preview';
import Wrapper from '@/generics/Wrapper';
import IconWithLabel from '.';
import { IconWithLabelProps } from './IconWithLabel';

// A wrapper to position the component
const StoryWrapper = styled(Wrapper)``;

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Components/IconWithLabel',
  component: IconWithLabel,
  decorators,
};

export default meta;

// Showcasing the component
const Template: Story<IconWithLabelProps> = (args) => (
  <StoryWrapper>
    <IconWithLabel {...args} />
    <IconWithLabel {...args} />
  </StoryWrapper>
);

export const DefaultIconWithLabel = Template.bind({});

DefaultIconWithLabel.args = {};
