import React from 'react';
import { Meta, Story } from '@storybook/react';

import Text from '../src/generics/Text';
import { TextProps } from '@/types/types';

const meta: Meta = {
  title: 'Generics/Text',
  component: Text,
};

export default meta;

const Template: Story<TextProps> = (args) => {
  return (
    <div>
      <Text variant="HeadlineXL" {...args}>
        HeadlineXL
      </Text>
      <Text variant="HeadlineL" {...args}>
        HeadlineL
      </Text>
      <Text variant="HeadlineM" {...args}>
        HeadlineM
      </Text>
      <Text variant="HeadlineS" {...args}>
        HeadlineS
      </Text>
      <Text variant="HeadlineXS" {...args}>
        HeadlineXS
      </Text>
      <Text variant="OVERLINE" {...args}>
        OVERLINE
      </Text>
      <Text variant="Body1" {...args}>
        Body1
      </Text>
      <Text variant="Body2" {...args}>
        Body2
      </Text>
      <Text variant="Body3" {...args}>
        Body3
      </Text>
      <Text variant="Pullquote" {...args}>
        Pullquote
      </Text>
      <Text variant="Caption" {...args}>
        Caption
      </Text>
    </div>
  );
};

export const DefaultText = Template.bind({});

DefaultText.args = {};
