import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import RadioGroup from '@/components/RadioGroup';
import { RadioGroupProps } from '@/types/types';
import Card from '@/generics/Card';
import Text from '@/generics/Text';

const MOCK_OPTIONS = [
  {
    id: 'a',
    component: 'Input',
    type: 'radio',
    value: 'a',
    children: 'A',
  },
  {
    id: 'b',
    component: 'Input',
    type: 'radio',
    value: 'b',
    children: 'B',
  },
  {
    id: 'c',
    component: 'Input',
    type: 'radio',
    value: 'c',
    children: 'C',
  },
  {
    id: 'disabled',
    component: 'Input',
    type: 'radio',
    value: 'disabled',
    disabled: true,
    children: 'Disabled',
  },
];

const MOCK_OPTIONS_2 = [
  {
    id: 'a',
    component: 'Input',
    type: 'radio',
    value: 'a',
    children: 'A',
  },
  {
    id: 'b',
    component: 'Input',
    type: 'radio',
    value: 'b',
    children: 'B',
  },
  {
    id: 'c',
    component: 'Input',
    type: 'radio',
    value: 'c',
    children: 'C',
  },
  {
    id: 'disabled',
    component: 'Input',
    type: 'radio',
    value: 'disabled',
    disabled: true,
    children: 'Disabled',
  },
];

const Wrapper = styled(Card)`
  border: 1px solid #ccc;
  padding: 10px;
`;

const meta: Meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
};

export default meta;

const Template: Story<RadioGroupProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(target.value);
  };

  return (
    <Wrapper>
      <Wrapper>
        <RadioGroup
          direction="column"
          value={selectedValue}
          onChange={handleChange}
          {...args}
          options={MOCK_OPTIONS}
        ></RadioGroup>
      </Wrapper>
      <Text variant="HeadlineXS">Radio Group with label and tooltip</Text>
      <Wrapper>
        <RadioGroup
          direction="column"
          label="Radio group with label and tooltip"
          tooltip="Simple tooltip"
          value={selectedValue}
          onChange={handleChange}
          {...args}
          options={MOCK_OPTIONS_2}
        ></RadioGroup>
      </Wrapper>
    </Wrapper>
  );
};

export const DefaultRadioGroup = Template.bind({});

DefaultRadioGroup.args = {};

const RowRadioGroupTemplate: Story<RadioGroupProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(target.value);
  };

  return (
    <Wrapper>
      <Wrapper>
        <RadioGroup
          direction="row"
          value={selectedValue}
          onChange={handleChange}
          {...args}
          options={MOCK_OPTIONS}
        ></RadioGroup>
      </Wrapper>
      <Text variant="HeadlineXS">Radio Group with label and tooltip</Text>
      <Wrapper>
        <RadioGroup
          direction="row"
          label="Radio group with label and tooltip"
          tooltip="Simple tooltip"
          value={selectedValue}
          onChange={handleChange}
          {...args}
          options={MOCK_OPTIONS_2}
        ></RadioGroup>
      </Wrapper>
    </Wrapper>
  );
};

export const RowRadioGroup = RowRadioGroupTemplate.bind({});

RowRadioGroup.args = {
  direction: 'row',
};
