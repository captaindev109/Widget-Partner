import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { decorators } from '@/../.storybook/preview';
import Wrapper from '@/generics/Wrapper';
import FooterWithQuote from '.';
import { FooterWithQuoteProps } from './FooterWithQuote';
import Button from '../Button';

// A wrapper to position the component
const StoryWrapper = styled(Wrapper)``;

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Components/FooterWithQuote',
  component: FooterWithQuote,
  decorators,
};

export default meta;

// Showcasing the component
const Template: Story<FooterWithQuoteProps> = (args) => (
  <StoryWrapper>
    <FooterWithQuote {...args}>
      <Button icon={{ iconName: 'BankIdIcon' }}>Button</Button>
    </FooterWithQuote>
    <FooterWithQuote {...args}>
      <Button icon={{ iconName: 'BankIdIcon' }}>Button with icon</Button>
    </FooterWithQuote>
  </StoryWrapper>
);

export const DefaultFooterWithQuote = Template.bind({});

DefaultFooterWithQuote.args = {
  price: { amount: '189', currency: 'kr' },
};
