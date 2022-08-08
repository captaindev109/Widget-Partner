import React from 'react';
import { Meta, Story } from '@storybook/react';
import { decorators } from '@/../.storybook/preview';
import { InformationItem, InformationList } from '.';
import { InformationItemProps } from './InformationList';

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Components/InformationItem',
  component: InformationItem,
  decorators,
};

export default meta;

// Showcasing the component
const Template: Story<InformationItemProps> = (args) => (
  <InformationList>
    <InformationItem {...args} />
    <InformationItem {...args} />
    <InformationItem {...args} />
  </InformationList>
);

export const DefaultInformationItem = Template.bind({});

DefaultInformationItem.args = {
  title: 'Dina saker forsakras till',
  price: '1 000 000 kr',
  description: 'Självrisk är den kostnad vid en skada du själv behöver stå för',
};
