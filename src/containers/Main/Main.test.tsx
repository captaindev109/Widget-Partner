/**
 *
 *  ********** Unit & Snapshot Testing *********
 *
 * Unit test is specifiic for each functionliaty of the component
 * Snapshot test is to track Over All changes in the code since the first snap
 **/

import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ApplicationThemeProvider from '@/providers/ApplicationThemeProvider';
import defaultTheme from '@/theme/theme';
import Main from '.';
import { GlobalStateProvider } from '@/providers/GlobalStateProvider';

const MockComponent: React.FC = () => {
  return (
    <GlobalStateProvider>
      <ApplicationThemeProvider theme={defaultTheme}>
        <Main />
      </ApplicationThemeProvider>
    </GlobalStateProvider>
  );
};

// describe function is a better way to organize our test cases and describe which component we are testing
describe('<Main /> Test Cases', () => {
  // this test is a must for each component, any rendering issues with the component can be found
  test('it renders without crashing, all is well', () => {
    // render basically prints and exposes the component in nodejs environemt, it returns an object...
    render(<MockComponent />);
  });

  it('Snapshot test should pass', () => {
    const snap = renderer.create(<MockComponent />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
