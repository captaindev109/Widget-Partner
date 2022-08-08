import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@/theme/theme';
import Tooltip from '@/components/Tooltip';

const ToolTipComponent: FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Tooltip size="small" direction="left" text="Left tooltip example" />
    </ThemeProvider>
  );
};

/** Render tests */

describe('Tooltip render tests', () => {
  test('to see if the component render without crashing', () => {
    render(<ToolTipComponent />);
  });
});

/** Snapshot tests */

describe('Snapshot test', () => {
  it('Snapshot test should pass', () => {
    const snap = renderer.create(<ToolTipComponent />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
