import { render, RenderResult } from '@testing-library/react';
import queries from '@testing-library/dom/types/queries';
import renderer from 'react-test-renderer';
import ApplicationThemeProvider from '@/providers/ApplicationThemeProvider';
import defaultTheme from '@/theme/theme';
import LinkText from '@/generics/LinkText';

const children = 'We offer insurance';

describe('Test cases of the LinkText component', () => {
  let renderedComponent: RenderResult<typeof queries, HTMLElement>;

  beforeEach(() => {
    renderedComponent = render(
      <ApplicationThemeProvider theme={defaultTheme}>
        <LinkText>{children}</LinkText>
      </ApplicationThemeProvider>
    );
  });

  test('to see if the component render without crashing', () => {
    render(
      <ApplicationThemeProvider theme={defaultTheme}>
        <LinkText />
      </ApplicationThemeProvider>
    );
  });

  test('to see if the link text is correct', () => {
    const { getByText } = renderedComponent;
    expect(getByText(children)).toBeTruthy();
  });

  it('Snapshot test should pass', () => {
    const snap = renderer
      .create(
        <ApplicationThemeProvider theme={defaultTheme}>
          <LinkText />
        </ApplicationThemeProvider>
      )
      .toJSON();
    expect(snap).toMatchSnapshot();
  });
});
