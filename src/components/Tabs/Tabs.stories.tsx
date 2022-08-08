import React from 'react';
import { Meta, Story } from '@storybook/react';
import { decorators } from '@/../.storybook/preview';
import { Tab, Tabs } from '.';
import { TabsProps } from '@/types/types';

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Components/Tabs',
  component: Tabs,
  decorators,
};

export default meta;

// Showcasing the component
const Template: Story<TabsProps> = (args) => (
  <Tabs {...args}>
    <Tab label="Apple">Apple is delicious.</Tab>
    <Tab label="Guava">Guava is a common tropical fruit cultivated in many tropical and subtropical regions.</Tab>
    <Tab label="Pear">Pears are fruits produced and consumed around the world.</Tab>
  </Tabs>
);

export const DefaultTabs = Template.bind({});

DefaultTabs.args = {
  activeIndex: 1,
};
