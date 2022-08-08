import React from 'react';
import { Meta, Story } from '@storybook/react';
import Label, { LabelProps } from '@/generics/Label';

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Generics/Label',
  component: Label,
};

export default meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const DefaultPage = Template.bind({});

DefaultPage.args = {
  children: 'this is the label',
};
