import React from 'react';
import { Meta, Story } from '@storybook/react';

import IconButton, { IconButtonProps } from '@/components/IconButton';

const meta: Meta = {
  title: 'Components/IconButton',
  component: IconButton,
};

export default meta;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const DefaultIconButton = Template.bind({});

DefaultIconButton.args = {
  icon: 'Close',
};
