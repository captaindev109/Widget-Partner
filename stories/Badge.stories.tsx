import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { decorators } from '../.storybook/preview';
import Badge, { BadgeProps } from '@/components/Badge';

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
  title: 'Components/Badge',
  component: Badge,
  decorators,
};

export default meta;

const Template: Story<BadgeProps> = (args) => (
  <StoryWrapper>
    <Badge {...args} />
    <Badge {...args} />
  </StoryWrapper>
);

export const DefaultBadge = Template.bind({});

DefaultBadge.args = {
  children: 'Badge',
};
