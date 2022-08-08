import { render, RenderResult } from '@testing-library/react';
import queries from '@testing-library/dom/types/queries';
import renderer from 'react-test-renderer';
import ApplicationThemeProvider from '@/providers/ApplicationThemeProvider';
import defaultTheme from '@/theme/theme';
import PolicyText from '@/components/PolicyText';

const text = 'text';
const linkText = 'linkText';
const url = 'https://www.hedvig.com/se/personuppgifter';

describe('Test cases of the PolicyText component', () => {
  let renderedComponent: RenderResult<typeof queries, HTMLElement>;

  beforeEach(() => {
    renderedComponent = render(
      <ApplicationThemeProvider theme={defaultTheme}>
        <PolicyText text={text} linkText={linkText} linkUrl={url} />
      </ApplicationThemeProvider>
    );
  });

  test('to see if the component render without crashing', () => {
    render(
      <ApplicationThemeProvider theme={defaultTheme}>
        <PolicyText text={text} linkText={linkText} linkUrl={url} />
      </ApplicationThemeProvider>
    );
  });

  test('to see if the texts are correct', () => {
    const { getByTestId } = renderedComponent;
    const linkElement = getByTestId('policy-link-text');
    const textElement = getByTestId('policy-text');

    expect(linkElement.textContent).toContain(linkText);
    expect(textElement.textContent).toContain(text);
    expect(linkElement).toHaveAttribute('href', url);
  });

  it('Snapshot test should pass', () => {
    const snap = renderer
      .create(
        <ApplicationThemeProvider theme={defaultTheme}>
          <PolicyText text={text} linkText={linkText} linkUrl={url} />
        </ApplicationThemeProvider>
      )
      .toJSON();
    expect(snap).toMatchSnapshot();
  });
});
