import React from 'react';
import { Meta, Story } from '@storybook/react';
import Wrapper, { WrapperProps } from '../src/generics/Wrapper';

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Generics/Wrapper',
  component: Wrapper,
};

export default meta;

const Template: Story<WrapperProps> = (args) => <Wrapper {...args} />;

export const DefaultWrapper = Template.bind({});

DefaultWrapper.args = {
  children: (
    <>
      <span>Dummy page for the page</span>
      <span>Dummy page for the page</span>
      <span>Dummy page for the page</span>
    </>
  ),
};

const ColumnTemplate: Story<WrapperProps> = (args) => <Wrapper {...args} />;

export const ColumnWrapper = ColumnTemplate.bind({});

ColumnWrapper.args = {
  direction: 'column',
  children: (
    <>
      <span>Dummy page for the page</span>
      <span>Dummy page for the page</span>
      <span>Dummy page for the page</span>
    </>
  ),
};
