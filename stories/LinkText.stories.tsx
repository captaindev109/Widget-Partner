import React from 'react';
import { Meta, Story } from '@storybook/react';
import LinkText, { LinkTextProps } from '@/generics/LinkText';

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Generics/LinkText',
  component: LinkText,
};

export default meta;

const Template: Story<LinkTextProps> = (args) => <LinkText {...args} />;

export const DefaultPage = Template.bind({});

DefaultPage.args = {
  children: 'click here',
  href: 'https://www.hedvig.com/personuppgift/',
};
