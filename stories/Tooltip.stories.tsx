import { Meta, Story } from '@storybook/react';
import { decorators } from '../.storybook/preview';

import styled from 'styled-components';
import Tooltip, { TooltipProps } from '@/components/Tooltip';
import Title from '@/generics/Title';

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
  title: 'Components/Tooltip',
  component: Tooltip,
  decorators,
};

export default meta;

const TooltipTemplate: Story<TooltipProps> = () => {
  return (
    <Column>
      <Title>Small</Title>
      <Row>
        <Tooltip size="small" direction="left" text="Left tooltip example" />
        <Tooltip size="small" direction="top" text="Top tooltip example" />
        <Tooltip size="small" direction="right" text="Right tooltip example" />
        <Tooltip size="small" direction="bottom" text="Bottom tooltip example" />
      </Row>
      <Title>Medium</Title>
      <Row>
        <Tooltip size="medium" direction="left" />
        <Tooltip size="medium" direction="top" text="Top tooltip example" />
        <Tooltip size="medium" direction="right" text="Right tooltip example" />
        <Tooltip size="medium" direction="bottom" text="Bottom tooltip example" />
      </Row>
      <Title>Large</Title>
      <Row>
        <Tooltip size="large" direction="left" text="Left tooltip example" />
        <Tooltip size="large" direction="top" text="Top tooltip example" />
        <Tooltip size="large" direction="right" text="Right tooltip example" />
        <Tooltip size="large" direction="bottom" text="Bottom tooltip example" />
      </Row>
    </Column>
  );
};

export const DefaultTooltip = TooltipTemplate.bind({});

DefaultTooltip.args = {};
