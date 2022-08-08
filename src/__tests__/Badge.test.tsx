import { render, RenderResult } from '@testing-library/react';
import queries from '@testing-library/dom/types/queries';
import renderer from 'react-test-renderer';
import Badge from '../components/Badge';

import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@/theme/theme';

const child_text = 'child';

const BadgeComponent: FC = () => (
  <>
    <ThemeProvider theme={defaultTheme}>
      <Badge>{child_text}</Badge>
    </ThemeProvider>
  </>
);

const STYLE_PROPS: Record<string, string> = {
  'border-radius': '4px',
  padding: '5px 8px 3px',
  'line-height': '16px',
  'font-size': '12px',
};

describe('Test cases of the Badge component', () => {
  let renderedComponent: RenderResult<typeof queries, HTMLElement>;

  beforeEach(() => {
    renderedComponent = render(<BadgeComponent />);
  });

  test('to see if the badge component render without crashing', () => {
    render(<BadgeComponent />);
  });

  test('to see if the Badge text render uppercase', () => {
    const { getByTestId } = renderedComponent;
    const badge = getByTestId('badge');

    expect(badge).toHaveTextContent(child_text.toUpperCase());
  });

  test('to see if the Badge styling is correct', () => {
    const { getByTestId } = renderedComponent;
    const badge = getByTestId('badge');

    // Mapping through the object to check if the style props are applied
    Object.entries(STYLE_PROPS).forEach(([key, value]) => {
      expect(badge).toHaveStyle(`${key}: ${value}`);
    });
  });

  it('should match the sapshot', () => {
    const snap = renderer.create(<BadgeComponent />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
