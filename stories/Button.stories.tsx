import { Meta, Story } from '@storybook/react';
import { decorators } from '../.storybook/preview';

import styled from 'styled-components';
import Button from '@/components/Button';
import { ButtonProps } from '@/types/types';

const Column = styled.div`
  border: 1px solid #ccc;
  max-width: 1000px;
  padding: 10px;

  & > * {
    display: block;
    margin-top: 30px;
  }

  & > *:first-child {
    margin-top: 0px;
  }
`;

const Row = styled.div`
  display: flex;
  border: 1px solid #ccc;
  max-width: 1000px;
  padding: 10px;

  & > * {
    display: block;
    margin-left: 30px;
  }

  & > *:first-child {
    margin-left: 0px;
  }
`;

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  decorators,
};

export default meta;

const ButtonTemplate: Story<ButtonProps> = (args) => {
  return (
    <Column>
      <Row>
        <Button {...args}>Primary button</Button>
        <Button disabled {...args}>
          Primary button
        </Button>
      </Row>
      <Row>
        <Button variant="outline" {...args}>
          Outlined button
        </Button>
        <Button disabled variant="outline" {...args}>
          Outlined button
        </Button>
      </Row>
      <Row>
        <Button variant="transparent" {...args}>
          Transparent button
        </Button>
        <Button disabled variant="transparent" {...args}>
          Transparent button
        </Button>
      </Row>
    </Column>
  );
};

export const DefaultButton = ButtonTemplate.bind({});

DefaultButton.args = {
  onClick: () => null,
};

const IconButtonTemplate: Story<ButtonProps> = (args) => {
  return (
    <Column>
      <Row>
        <Button {...args}>Primary button</Button>
        <Button disabled {...args}>
          Primary button
        </Button>
      </Row>
      <Row>
        <Button variant="outline" {...args}>
          Outlined button
        </Button>
        <Button disabled variant="outline" {...args}>
          Outlined button
        </Button>
      </Row>
      <Row>
        <Button variant="transparent" {...args}>
          Transparent button
        </Button>
        <Button disabled variant="transparent" {...args}>
          Transparent button
        </Button>
      </Row>
    </Column>
  );
};

export const IconButton = IconButtonTemplate.bind({});

IconButton.args = {
  icon: { iconName: 'Information', config: { width: '16px', height: '16px' } },
  onClick: () => null,
};
