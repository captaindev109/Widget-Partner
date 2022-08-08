import React from 'react';
import Card from '../src/generics/Card';
import { Meta, Story } from '@storybook/react';
import { CardProps } from '@/types/types';

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Generics/Card',
  component: Card,
};

export default meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
