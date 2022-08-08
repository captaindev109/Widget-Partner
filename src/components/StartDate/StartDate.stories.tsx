import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { decorators } from '@/../.storybook/preview';
import { StartDateProps } from '@/types/types';
import Wrapper from '@/generics/Wrapper';
import StartDate from '.';

// A wrapper to position the component
const StoryWrapper = styled(Wrapper)``;

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Components/StartDate',
  component: StartDate,
  decorators,
};

export default meta;

// Showcasing the component
const Template: Story<StartDateProps> = (args) => (
  <StoryWrapper>
    <StartDate {...args} />
  </StoryWrapper>
);

export const DefaultInsuranceSummary = Template.bind({});

DefaultInsuranceSummary.args = {
  currentInsurance: {
    insuranceName: 'Hemförsäkring hyresrätt',
    insuranceType: 'Hemförsäkring',
    insuranceSubType: 'Hemförsäkring',
    insuranceCompany: 'Trygg hansa',
  },
  onChangeDate: (date, id) => console.log('date, id', date, id),
  quotes: [
    { displayName: 'Bilförsäkring', id: '1', startDate: new Date() },
    { displayName: 'Olycksfallsförsäkring', id: '2', startDate: new Date() },
  ],
};
