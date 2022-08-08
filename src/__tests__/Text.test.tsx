import { render, RenderResult } from '@testing-library/react';
import queries from '@testing-library/dom/types/queries';
import renderer from 'react-test-renderer';
import Text from '@/generics/Text';
import ApplicationThemeProvider from '@/providers/ApplicationThemeProvider';
import defaultTheme from '@/theme/theme';

const children = 'We offer insurance';

const MockComponent: React.FC = () => {
  return (
    <ApplicationThemeProvider theme={defaultTheme}>
      <Text variant="HeadlineXL">{children}</Text>
    </ApplicationThemeProvider>
  );
};

describe('Test cases of the Text component', () => {
  let renderedComponent: RenderResult<typeof queries, HTMLElement>;

  beforeEach(() => {
    renderedComponent = render(<MockComponent />);
  });

  test('to see if the component render without crashing', () => {
    render(<MockComponent />);
  });

  test('to see if the description text is correct', () => {
    const { getByText } = renderedComponent;
    expect(getByText(children)).toBeInTheDocument();
  });

  it('Snapshot test should pass', () => {
    const snap = renderer.create(<MockComponent />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
