import { Meta, Story } from '@storybook/react';

import { decorators } from '../.storybook/preview';

import styled from 'styled-components';
import Dropdown, { DropdownProps } from '@/components/Dropdown';

const Wrapper = styled.div`
  border: 1px solid #ccc;
  max-width: 300px;
  padding: 10px;

  & > * {
    display: block;
    margin-top: 30px;
  }

  & > *:first-child {
    margin-top: 0px;
  }
`;

const meta: Meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  decorators,
};

export default meta;

const DropdownNormalTemplate: Story<DropdownProps> = (args) => {
  return (
    <Wrapper>
      <Dropdown {...args} />
      <Dropdown {...args} label="With label" />
      <Dropdown {...args} label="Disabled with label" disabled />
      <Dropdown {...args} label="With tooltip and label" tooltip="Dummy tooltip" />
    </Wrapper>
  );
};

export const DropdownNormal = DropdownNormalTemplate.bind({});

DropdownNormal.args = {
  options: [
    { label: 'Option 1', value: 'option-1' },
    { label: 'Option 2', value: 'option-2' },
    { label: 'Option 3', value: 'option-3' },
  ],
  placeholder: 'Placeholder',
};
