import React from 'react';
import { Meta, Story } from '@storybook/react';
import Page, { PageProps } from '../src/generics/Page';

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Generics/Page',
  component: Page,
};

export default meta;

const Template: Story<PageProps> = (args) => <Page {...args} />;

export const DefaultPage = Template.bind({});

DefaultPage.args = {
  children: <span>Dummy page for the page</span>,
};
