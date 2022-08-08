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
import { InformationItem, InformationList } from '.';
import { GlobalStateProvider } from '@/providers/GlobalStateProvider';
import ApplicationThemeProvider from '@/providers/ApplicationThemeProvider';
import defaultTheme from '@/theme/theme';

const title = 'Title';
const price = '1 000 000 kr';
const description = 'This is a description';

const MockComponent: React.FC = () => {
  return (
    <GlobalStateProvider>
      <ApplicationThemeProvider theme={defaultTheme}>
        <InformationItem title={title} price={price} description={description} />
      </ApplicationThemeProvider>
    </GlobalStateProvider>
  );
};

// describe function is a better way to organize our test cases and describe which component we are testing
describe('<InformationItem /> Test Cases', () => {
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
    const { getByText } = renderedComponent;

    // YOU DO NOT NEED TO USE ALL OF THESE CASES FOR EVERY COMPONENT, JUST ONE OR MORE IS ENOUGH

    // using string value
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(price)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();

    //using selectors
  });

  it('Snapshot test should pass', () => {
    const snap = renderer.create(<MockComponent />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});

const MockListComponent: React.FC = () => {
  return (
    <GlobalStateProvider>
      <ApplicationThemeProvider theme={defaultTheme}>
        <InformationList>
          <InformationItem title={title} price={price} description={description} />
          <InformationItem title={title} price={price} description={description} />
          <InformationItem title={title} price={price} description={description} />
        </InformationList>
      </ApplicationThemeProvider>
    </GlobalStateProvider>
  );
};

// describe function is a better way to organize our test cases and describe which component we are testing
describe('<InformationList /> Test Cases', () => {
  let renderedComponent: RenderResult<typeof queries, HTMLElement>;
  beforeEach(() => {
    renderedComponent = render(<MockListComponent />);
  });

  // this test is a must for each component, any rendering issues with the component can be found
  test('it renders without crashing, all is well', () => {
    // render basically prints and exposes the component in nodejs environemt, it returns an object...
    render(<MockListComponent />);
  });

  test('check to see any specific string, element in dom, for example', () => {
    const { container } = renderedComponent;

    // YOU DO NOT NEED TO USE ALL OF THESE CASES FOR EVERY COMPONENT, JUST ONE OR MORE IS ENOUGH

    // using string value
    expect(container.firstChild).toBeInTheDocument();

    //using selectors
  });

  it('Snapshot test should pass', () => {
    const snap = renderer.create(<MockListComponent />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
