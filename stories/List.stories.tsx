import React from 'react';
import { Meta, Story } from '@storybook/react';
import { List, ListItem, ListProps } from '../src/components/List';
import Button from '@/components/Button';

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Components/List',
  component: List,
};

export default meta;

const Template: Story<ListProps> = (args) => {
  return (
    <List {...args}>
      <ListItem>
        <Button>Primary button</Button>
      </ListItem>
      <ListItem>
        <Button>Primary button</Button>
      </ListItem>
      <ListItem>
        <Button>Primary button</Button>
      </ListItem>
      <ListItem>
        <Button>Primary button</Button>
      </ListItem>
      <ListItem>
        <Button>Primary button</Button>
      </ListItem>
    </List>
  );
};

export const DefaultPage = Template.bind({});

DefaultPage.args = {};
