import { render, RenderResult } from '@testing-library/react';
import queries from '@testing-library/dom/types/queries';
import renderer from 'react-test-renderer';
import Footer from '@/components/Footer';

const children = 'footer';

const STYLE_PROPS: Record<string, string> = {
  padding: '10px',
  background: '#121212',
};

/** Render tests */

describe('Footer render tests', () => {
  let renderedComponent: RenderResult<typeof queries, HTMLElement>;

  beforeEach(() => {
    renderedComponent = render(<Footer>{children}</Footer>);
  });

  test('to see if the component render without crashing', () => {
    render(<Footer>{children}</Footer>);
  });

  test('to see if the footer renders correctly', () => {
    const { getByTestId } = renderedComponent;
    const footer = getByTestId('footer');

    expect(footer).toBeTruthy();
    expect(footer.textContent).toBe(children);
  });
});

/** Props tests */

describe('Footer props test', () => {
  let renderedComponent: RenderResult<typeof queries, HTMLElement>;

  beforeEach(() => {
    const props = { ...STYLE_PROPS };
    renderedComponent = render(<Footer {...props}>{children}</Footer>);
  });

  test('to see if the footer has all the necessary styling', () => {
    const { getByTestId } = renderedComponent;
    const footer = getByTestId('footer');

    // Mapping through the object to check if the style props are applied
    Object.entries(STYLE_PROPS).forEach(([key, value]) => {
      expect(footer).toHaveStyle(`${key}: ${value}`);
    });
    expect(footer).toHaveStyle(`bottom: 0`);
    expect(footer).toHaveStyle(`position: absolute`);
  });

  it('Snapshot test should pass', () => {
    const snap = renderer.create(<Footer>{children}</Footer>).toJSON();

    expect(snap).toMatchSnapshot();
  });
});
