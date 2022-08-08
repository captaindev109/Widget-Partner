/**
 *
 *  ********** Unit & Snapshot Testing *********
 *
 * Unit test is specifiic for each functionliaty of the component
 * Snapshot test is to track Over All changes in the code since the first snap
 **/

import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { GlobalStateProvider } from '@/providers/GlobalStateProvider';
import defaultTheme from '@/theme/theme';
import ApplicationThemeProvider from '@/providers/ApplicationThemeProvider';
import PerilsList from '.';
import { PERILS_MOCK } from '@/mocks/quoteCart_data';
import { Peril } from './PerilsList';

const MockComponent: React.FC = () => {
  return (
    <GlobalStateProvider>
      <ApplicationThemeProvider theme={defaultTheme}>
        <PerilsList perils={PERILS_MOCK} />
      </ApplicationThemeProvider>
    </GlobalStateProvider>
  );
};

/** Render tests */
describe('Peril render tests', () => {
  test('to see if the component render without crashing', () => {
    render(<MockComponent />);
  });
});

/** Snapshot test */
describe('Peril snapshot test', () => {
  it('Snapshot test should pass', () => {
    const snap = renderer.create(<MockComponent />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});

/** Peril click tests */
describe('Peril click test', () => {
  it('Test the Peril flow', () => {
    const peril = PERILS_MOCK[0];
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <GlobalStateProvider>
        <ApplicationThemeProvider theme={defaultTheme}>
          <Peril index={0} onClick={handleClick} peril={peril} />
        </ApplicationThemeProvider>
      </GlobalStateProvider>
    );
    const button = getByTestId('Peril');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
