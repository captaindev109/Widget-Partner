import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { decorators } from '@/../.storybook/preview';
import Spinner from '.';
import { SpinnerProps } from './Spinner';
import Wrapper from '@/generics/Wrapper';

// A wrapper to position the component
const StoryWrapper = styled(Wrapper)``;

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Components/Spinner',
  component: Spinner,
  decorators,
};

export default meta;

// Showcasing the component
const Template: Story<SpinnerProps> = (args) => (
  <StoryWrapper>
    <Spinner {...args} />
  </StoryWrapper>
);

export const DefaultSpinner = Template.bind({});

DefaultSpinner.args = {};
