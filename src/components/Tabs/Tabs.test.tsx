import { render, RenderResult } from '@testing-library/react';
import queries from '@testing-library/dom/types/queries';
import renderer from 'react-test-renderer';
import { Tab, Tabs } from '.';
import { GlobalStateProvider } from '@/providers/GlobalStateProvider';
import ApplicationThemeProvider from '@/providers/ApplicationThemeProvider';
import defaultTheme from '@/theme/theme';

/** Render tests */
const MockComponent: React.FC = () => {
  return (
    <GlobalStateProvider>
      <ApplicationThemeProvider theme={defaultTheme}>
        <Tab label="Apple">Apple</Tab>
      </ApplicationThemeProvider>
    </GlobalStateProvider>
  );
};

// describe function is a better way to organize our test cases and describe which component we are testing
describe('<Tab /> Test Cases', () => {
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
    expect(getByText('Apple')).toBeInTheDocument();

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
        <Tabs>
          <Tab label="Apple">Apple</Tab>
          <Tab label="Guava">Guava</Tab>
          <Tab label="Pear">Pear</Tab>
        </Tabs>
      </ApplicationThemeProvider>
    </GlobalStateProvider>
  );
};

// describe function is a better way to organize our test cases and describe which component we are testing
describe('<Tabs /> Test Cases', () => {
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
