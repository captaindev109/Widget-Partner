import React from 'react';
import { Meta, Story } from '@storybook/react';
import Image from '../src/generics/Image';
import { ImageProps } from '@/types/types';

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Generics/Image',
  component: Image,
};
export default meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const DefaultImage = Template.bind({});

DefaultImage.args = {
  src: 'https://picsum.photos/800/400',
};
