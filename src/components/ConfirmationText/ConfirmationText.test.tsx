import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ApplicationThemeProvider from '@/providers/ApplicationThemeProvider';
import defaultTheme from '@/theme/theme';
import ConfirmationText from '.';

const MockComponent: React.FC = () => {
  return (
    <ApplicationThemeProvider theme={defaultTheme}>
      <ConfirmationText householdSize={1} email="test@hedvig.com" activationDate="18/11/2022" />
    </ApplicationThemeProvider>
  );
};

// describe function is a better way to organize our test cases and describe which component we are testing
describe('<ConfirmationText /> Test Cases', () => {
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
