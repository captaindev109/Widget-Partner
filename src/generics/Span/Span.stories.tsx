import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { decorators } from '@/../.storybook/preview';
import Wrapper from '@/generics/Wrapper';
import Span from '.';
import { SpanProps } from '@/types/types';

// A wrapper to position the component
const StoryWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Generics/Span',
  component: Span,
  decorators,
};

export default meta;

// Showcasing the component
const Template: Story<SpanProps> = (args) => (
  <StoryWrapper>
    <Span {...args} />
  </StoryWrapper>
);

export const DefaultSpan = Template.bind({});

DefaultSpan.args = {
  children: 'span',
};
