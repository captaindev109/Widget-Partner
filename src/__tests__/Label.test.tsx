import { render, RenderResult } from '@testing-library/react';
import queries from '@testing-library/dom/types/queries';
import renderer from 'react-test-renderer';
import ApplicationThemeProvider from '@/providers/ApplicationThemeProvider';
import defaultTheme from '@/theme/theme';
import Label from '@/generics/Label';

const children = 'We offer insurance';

describe('Test cases of the Label component', () => {
  let renderedComponent: RenderResult<typeof queries, HTMLElement>;

  beforeEach(() => {
    renderedComponent = render(
      <ApplicationThemeProvider theme={defaultTheme}>
        <Label>{children}</Label>
      </ApplicationThemeProvider>
    );
  });

  test('to see if the component render without crashing', () => {
    render(
      <ApplicationThemeProvider theme={defaultTheme}>
        <Label />
      </ApplicationThemeProvider>
    );
  });

  test('to see if the Label children is correct', () => {
    const { getByText } = renderedComponent;
    expect(getByText(children)).toBeTruthy();
  });

  it('Snapshot test should pass', () => {
    const snap = renderer
      .create(
        <ApplicationThemeProvider theme={defaultTheme}>
          <Label />
        </ApplicationThemeProvider>
      )
      .toJSON();
    expect(snap).toMatchSnapshot();
  });
});
