import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { decorators } from '@/../.storybook/preview';
import Datepicker from '.';
import { DatepickerProps } from './Datepicker';
import Wrapper from '@/generics/Wrapper';

// A wrapper to position the component
const StoryWrapper = styled(Wrapper)`
  & > * {
    margin-bottom: 16px;
  }
`;

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Components/Datepicker',
  component: Datepicker,
  decorators,
};

export default meta;

// Showcasing the component
const Template: Story<DatepickerProps> = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <StoryWrapper>
      <Datepicker
        selected={selected}
        onChange={(date) => {
          setSelected(date);
        }}
      />
      <Datepicker
        selected={selected}
        onChange={(date) => {
          setSelected(date);
        }}
        disabled
      />
      <Datepicker
        selected={selected}
        onChange={(date) => {
          setSelected(date);
        }}
        disabled
        disableTitle="Datepicker is disabled"
      />
      <Datepicker
        selected={selected}
        onChange={(date) => {
          setSelected(date);
        }}
      />
    </StoryWrapper>
  );
};

export const DefaultDatepicker = Template.bind({});
