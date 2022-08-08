import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { decorators } from '@/../.storybook/preview';
import Wrapper from '@/generics/Wrapper';
import ToggleSwitch from '.';
import { InputProps } from '@/types/types';

// A wrapper to position the component
const StoryWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Generics/ToggleSwitch',
  component: ToggleSwitch,
  decorators,
};

export default meta;

// Showcasing the component
const Template: Story<InputProps> = (args) => (
  <StoryWrapper>
    <ToggleSwitch {...args} />
    <ToggleSwitch disabled defaultChecked />
  </StoryWrapper>
);

export const DefaultToggleSwitch = Template.bind({});

DefaultToggleSwitch.args = {
  checked: true,
};

const ToggleSwitchTemplate: Story<InputProps> = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return <ToggleSwitch checked={checked} onChange={handleChange} />;
};

export const ToggleSwitchWithChange = ToggleSwitchTemplate.bind({});
