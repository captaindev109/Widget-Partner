import React from 'react';
import { Meta, Story } from '@storybook/react';
import Footer, { FooterProps } from '@/components/Footer';

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Generics/Footer',
  component: Footer,
};

export default meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const DefaultFooter = Template.bind({});

DefaultFooter.args = {
  children: <span>Dummy page for the page</span>,
};
