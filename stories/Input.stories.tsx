import { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { decorators } from '../.storybook/preview';

import styled from 'styled-components';
import Input from '@/generics/Input';
import { InputProps } from '@/types/types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  max-width: 300px;
  padding: 10px;

  & > * {
    margin-top: 30px;
  }

  & > *:first-child {
    margin-top: 0px;
  }
`;

const meta: Meta = {
  title: 'Generics/Input',
  component: Input,
  decorators,
};

export default meta;

const TextInputTemplate: Story<InputProps> = (args) => {
  const [, setValue] = useState('');

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  return (
    <Wrapper>
      <Input label="Default" onChange={handleChange} {...args} />
      <Input label="Disabled" disabled onChange={handleChange} {...args} />
      <Input helperText="Just some information!" label="Helper text" onChange={handleChange} {...args} />
      <Input error helperText="Error, something went wrong!" label="Error" onChange={handleChange} {...args} />
      <Input icon helperText="Just some information!" label="Helper text" onChange={handleChange} {...args} />
      <Input icon error helperText="Error, something went wrong!" label="Error" onChange={handleChange} {...args} />
      <Input label="With tooltip" onChange={handleChange} tooltip="Just a simple tooltip" {...args} />
    </Wrapper>
  );
};

export const TextInput = TextInputTemplate.bind({});

TextInput.args = {
  type: 'text',
  placeholder: 'Placeholder',
};

const NumberInputTemplate: Story<InputProps> = (args) => {
  const [, setValue] = useState('');

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  return (
    <Wrapper>
      <Input label="Default" onChange={handleChange} {...args} />
      <Input label="Disabled" disabled onChange={handleChange} {...args} />
      <Input helperText="Just some information!" label="Helper text" onChange={handleChange} {...args} />
      <Input error helperText="Error, something went wrong!" label="Error" onChange={handleChange} {...args} />
      <Input icon helperText="Just some information!" label="Helper text" onChange={handleChange} {...args} />
      <Input icon error helperText="Error, something went wrong!" label="Error" onChange={handleChange} {...args} />
      <Input label="With tooltip" onChange={handleChange} tooltip="Just a simple tooltip" {...args} />
    </Wrapper>
  );
};

export const NumberInput = NumberInputTemplate.bind({});

NumberInput.args = {
  type: 'number',
  placeholder: 'Placeholder',
};

const EmailInputTemplate: Story<InputProps> = (args) => {
  const [, setValue] = useState('');

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  return (
    <Wrapper>
      <Input label="Default" onChange={handleChange} {...args} />
      <Input label="Disabled" disabled onChange={handleChange} {...args} />
      <Input helperText="Just some information!" label="Helper text" onChange={handleChange} {...args} />
      <Input error helperText="Error, something went wrong!" label="Error" onChange={handleChange} {...args} />
      <Input icon helperText="Just some information!" label="Helper text" onChange={handleChange} {...args} />
      <Input icon error helperText="Error, something went wrong!" label="Error" onChange={handleChange} {...args} />
      <Input label="With tooltip" onChange={handleChange} tooltip="Just a simple tooltip" {...args} />
    </Wrapper>
  );
};

export const EmailInput = EmailInputTemplate.bind({});

EmailInput.args = {
  type: 'email',
  placeholder: 'Placeholder',
};

const RadioButtonTemplate: Story<InputProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(target.value);
  };

  return (
    <Wrapper>
      <Input {...args} value="a" onChange={handleChange} checked={selectedValue === 'a'}>
        first radio
      </Input>
      <Input {...args} value="b" onChange={handleChange} checked={selectedValue === 'b'}>
        second radio
      </Input>
      <Input {...args} value="c" onChange={handleChange} checked={selectedValue === 'c'}>
        third radio
      </Input>
      <Input {...args} value="d" disabled>
        disabled radiodisabled radiodisabled radiodisabled radiodisabled radiodisabled radiodisabled radiodisabled
        radiodisabled radiodisabled radiodisabled radio
      </Input>
    </Wrapper>
  );
};

export const RadioButton = RadioButtonTemplate.bind({});

RadioButton.args = {
  type: 'radio',
};

const CheckboxTemplate: Story<InputProps> = () => {
  const [selected, setSelected] = useState(true);

  const handleChange = () => {
    setSelected(!selected);
  };

  return (
    <Wrapper>
      <Input type="checkbox" onChange={handleChange} checked={selected} />
      <Input label="Checked" type="checkbox" onChange={handleChange} checked={true} />
      <Input label="Not checked" type="checkbox" onChange={handleChange} checked={false} />
      <Input label="Disabled" disabled type="checkbox" onChange={handleChange} checked={false} />
      <Input label="Label left" labelPosition="left" type="checkbox" onChange={handleChange} checked={false} />
    </Wrapper>
  );
};

export const Checkbox = CheckboxTemplate.bind({});
