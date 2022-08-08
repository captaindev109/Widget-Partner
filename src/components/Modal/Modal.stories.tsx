import React, { useRef } from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { decorators } from '@/../.storybook/preview';
import { ModalProps, ModalRef } from './Modal';
import Wrapper from '@/generics/Wrapper';
import Modal from '.';
import Button from '../Button';

// A wrapper to position the component
const StoryWrapper = styled(Wrapper)``;

// Name the folder to either generics or components
const meta: Meta = {
  title: 'Components/Modal',
  component: Modal,
  decorators,
};

export default meta;

// Showcasing the component
const Template: Story<ModalProps> = () => {
  const modalRef = useRef<ModalRef>(null);

  const handleOpenModal = () => {
    modalRef.current?.toggle?.();
  };
  return (
    <StoryWrapper>
      <Button onClick={handleOpenModal}>Open Modal</Button>
      <Modal ref={modalRef}>This is a modal</Modal>
    </StoryWrapper>
  );
};

export const DefaultModal = Template.bind({});

DefaultModal.args = {
  children: 'Child',
};
