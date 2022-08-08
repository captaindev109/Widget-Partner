import React from 'react';
import { Meta, Story } from '@storybook/react';

import Title, { TitleProps } from '../src/generics/Title';

const meta: Meta = {
  title: 'Generics/Title',
  component: Title,
};

export default meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const DefaultTitle = Template.bind({});

DefaultTitle.args = {
  children: 'Test Title',
};
