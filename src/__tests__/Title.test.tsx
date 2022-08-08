import { render, RenderResult } from '@testing-library/react';
import queries from '@testing-library/dom/types/queries';
import renderer from 'react-test-renderer';
import Title from '../generics/Title';

const children = 'Welcome to Hedvig!';

describe('Test cases of the Title component', () => {
  let renderedComponent: RenderResult<typeof queries, HTMLElement>;

  beforeEach(() => {
    renderedComponent = render(<Title variant="primary">{children}</Title>);
  });

  test('to see if the component render without crashing', () => {
    render(<Title />);
  });

  test('to see if the title src is correct', () => {
    const { container } = renderedComponent;
    expect(container.textContent).toBe(children);
  });

  it('Snapshot test should pass', () => {
    const snap = renderer.create(<Title />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
