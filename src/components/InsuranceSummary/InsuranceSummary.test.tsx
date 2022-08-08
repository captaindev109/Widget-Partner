/**
 *
 *  ********** Unit & Snapshot Testing *********
 *
 * Unit test is specifiic for each functionliaty of the component
 * Snapshot test is to track Over All changes in the code since the first snap
 **/

import { render, RenderResult } from '@testing-library/react';
import queries from '@testing-library/dom/types/queries';
import renderer from 'react-test-renderer';
import InsuranceSummary from './InsuranceSummary';
import { GlobalStateProvider } from '@/providers/GlobalStateProvider';
import ApplicationThemeProvider from '@/providers/ApplicationThemeProvider';
import { DynamicFormProvider } from '@/providers/DynamicFormProvider';
import defaultTheme from '@/theme/theme';

const data = {
  user: {
    firstName: 'Magnus',
    lastName: 'Berg',
    birthDate: '12/24/1991',
    email: 'magnus.berg.66@gmail.com',
  },
  data: {
    street: 'Vagnvagen 4',
    numberOfPeople: 4,
    phoneNumber: '+46705309084',
    typeOfResidence: 'Rental',
    zipCode: '175 67',
  },
};

const MockComponent: React.FC = () => {
  return (
    <GlobalStateProvider>
      <ApplicationThemeProvider theme={defaultTheme}>
        <DynamicFormProvider>
          <InsuranceSummary {...data} />
        </DynamicFormProvider>
      </ApplicationThemeProvider>
    </GlobalStateProvider>
  );
};

// describe function is a better way to organize our test cases and describe which component we are testing
describe('<InsuranceSummary /> Test Cases', () => {
  let renderedComponent: RenderResult<typeof queries, HTMLElement>;
  beforeEach(() => {
    renderedComponent = render(<MockComponent />);
  });

  // this test is a must for each component, any rendering issues with the component can be found
  test('it renders without crashing, all is well', () => {
    // render basically prints and exposes the component in nodejs environemt, it returns an object...
    render(<MockComponent />);
  });

  test('check to see any specific string, element in dom, for example', () => {
    const { container } = renderedComponent;

    //using selectors
    expect(container.querySelector('ul')).toBeInTheDocument();
  });

  it('Snapshot test should pass', () => {
    const snap = renderer.create(<MockComponent />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
