import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { decorators } from '@/../.storybook/preview';
import InsuranceSummary from '.';
import { InsuranceSummaryProps } from '@/types/types';
import Wrapper from '@/generics/Wrapper';

// A wrapper to position the component
const StoryWrapper = styled(Wrapper)``;

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Components/InsuranceSummary',
  component: InsuranceSummary,
  decorators,
};

export default meta;

// Showcasing the component
const Template: Story<InsuranceSummaryProps> = (args) => (
  <StoryWrapper>
    <InsuranceSummary {...args} />
  </StoryWrapper>
);

export const DefaultInsuranceSummary = Template.bind({});

DefaultInsuranceSummary.args = {
  user: {
    firstName: 'Magnus',
    lastName: 'Berg',
    birthDate: '1996-05-17',
    email: 'magnus.berg.66@gmail.com',
  },
  data: {
    street: 'Vagnvagen 4',
    numberOfPeople: 4,
    phoneNumber: '+46705309084',
    typeOfResidence: 'Rental',
    zipCode: '175 67',
  },
};
