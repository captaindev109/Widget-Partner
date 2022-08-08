import { render, RenderResult } from '@testing-library/react';
import queries from '@testing-library/dom/types/queries';
import renderer from 'react-test-renderer';
import Page from '../generics/Page';
import ApplicationThemeProvider from '@/providers/ApplicationThemeProvider';
import defaultTheme from '@/theme/theme';
import { GlobalStateProvider } from '@/providers/GlobalStateProvider';

const child_text = 'child';

const MockComponent: React.FC = () => {
  return (
    <GlobalStateProvider>
      <ApplicationThemeProvider theme={defaultTheme}>
        <Page>
          <div className="child">{child_text}</div>
        </Page>
      </ApplicationThemeProvider>
    </GlobalStateProvider>
  );
};

describe('Test cases of the Page component', () => {
  let renderedComponent: RenderResult<typeof queries, HTMLElement>;

  beforeEach(() => {
    renderedComponent = render(<MockComponent />);
  });

  test('to see if the page component render without crashing', () => {
    render(<MockComponent />);
  });

  test('to see if the Paeg can render children', () => {
    const { getByText } = renderedComponent;

    expect(getByText(child_text)).toHaveClass('child');
  });

  it('Snapshot test should pass', () => {
    const snap = renderer.create(<MockComponent />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
