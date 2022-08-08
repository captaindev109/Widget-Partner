import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { decorators } from '@/../.storybook/preview';
import { ConfirmationTextProps } from '@/types/types';
import Wrapper from '@/generics/Wrapper';
import ConfirmationText from '.';

// A wrapper to position the component
const StoryWrapper = styled(Wrapper)``;

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Components/ConfirmationText',
  component: ConfirmationText,
  decorators,
};

export default meta;

// Showcasing the component
const Template: Story<ConfirmationTextProps> = (args) => (
  <StoryWrapper>
    <ConfirmationText {...args} />
    <ConfirmationText {...args} householdSize={4} />
  </StoryWrapper>
);

export const DefaultProductList = Template.bind({});

DefaultProductList.args = {
  householdSize: 1,
  email: 'test@hedvig.com',
  activationDate: '18/11/2022',
};
