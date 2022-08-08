import React from 'react';
import { Meta, Story } from '@storybook/react';
import { decorators } from '../.storybook/preview';
import PolicyText, { PolicyTextProps } from '@/components/PolicyText';

const meta: Meta = {
  title: 'Components/PolicyText',
  component: PolicyText,
  decorators,
};

export default meta;

const Template: Story<PolicyTextProps> = (args) => <PolicyText {...args} />;

export const DefaultPolicyText = Template.bind({});

DefaultPolicyText.args = {
  text: 'Genom att klicka “Få ett prisförslag” accepterar du att du har tagit del av information om.',
  linkText: 'Hedvigs personuppgiftpolicy',
  linkUrl: 'https://www.hedvig.com/personuppgift/',
};
