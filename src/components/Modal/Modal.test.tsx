/**
 *
 *  ********** Unit & Snapshot Testing *********
 *
 * Unit test is specifiic for each functionliaty of the component
 * Snapshot test is to track Over All changes in the code since the first snap
 **/

import { render, fireEvent } from '@testing-library/react';
import Modal from '.';
import { GlobalStateProvider } from '@/providers/GlobalStateProvider';
import defaultTheme from '@/theme/theme';
import ApplicationThemeProvider from '@/providers/ApplicationThemeProvider';
import Button from '../Button';
import { useRef } from 'react';
import { ModalRef } from './Modal';

const MockComponent: React.FC = () => {
  const modalRef = useRef<ModalRef>(null);
  const handleOpenModal = () => {
    modalRef.current?.toggle?.();
  };
  return (
    <div id="modal-portal">
      <GlobalStateProvider>
        <ApplicationThemeProvider theme={defaultTheme}>
          <Button onClick={handleOpenModal}>Open Modal</Button>
          <Modal ref={modalRef}>This is a modal</Modal>
        </ApplicationThemeProvider>
      </GlobalStateProvider>
    </div>
  );
};

// describe function is a better way to organize our test cases and describe which component we are testing
describe('<Modal /> Test Cases', () => {
  // this test is a must for each component, any rendering issues with the component can be found
  test('it renders without crashing, all is well', () => {
    // render basically prints and exposes the component in nodejs environemt, it returns an object...
    render(<MockComponent />);
  });
});

/** Peril click tests */
describe('Modal click test', () => {
  it('Test the Modal flow', async () => {
    const { getByTestId, getByText } = render(<MockComponent />);

    const openButton = getByText('Open Modal');

    fireEvent.click(openButton);
    const closeButton = getByTestId('Modal-close-button');
    const container = getByTestId('Modal-container');
    const backdrop = getByTestId('Modal-backdrop');
    const wrapper = getByTestId('Modal-wrapper');

    expect(wrapper).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
    expect(container).toBeInTheDocument();
    expect(backdrop).toBeInTheDocument();
  });
});
