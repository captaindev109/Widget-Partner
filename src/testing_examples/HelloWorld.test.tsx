/**
 *
 *  ********** Unit & Snapshot Testing *********
 *
 * Unit test is specifiic for each functionliaty of the component
 * Snapshot test is to track Over All changes in the code since the first snap
 **/

import { render, RenderResult } from '@testing-library/react';
import queries from '@testing-library/dom/types/queries';
import renderer from 'react-test-renderer';
import HelloWorld from './hellowWorld';

// describe function is a better way to organize our test cases and describe which component we are testing
describe('<HelloWorld /> Test Cases', () => {
  let renderedComponent: RenderResult<typeof queries, HTMLElement>;
  beforeEach(() => {
    renderedComponent = render(<HelloWorld />);
  });

  // this test is a must for each component, any rendering issues with the component can be found
  test('it renders without crashing, all is well', () => {
    // render basically prints and exposes the component in nodejs environemt, it returns an object...
    render(<HelloWorld />);
  });

  test('check to see any specific string, element in dom, for example', () => {
    const { container, getByText } = renderedComponent;

    // YOU DO NOT NEED TO USE ALL OF THESE CASES FOR EVERY COMPONENT, JUST ONE OR MORE IS ENOUGH

    // using string value
    expect(getByText('Hello World')).toBeInTheDocument();
    expect(getByText('Hello World')).toHaveClass('text');
    expect(getByText('Hello World')).toHaveAttribute('class');

    //using selectors
    expect(container.querySelector('.text')).toHaveAttribute('class');
    expect(container.querySelector('.text')?.firstChild).toHaveTextContent('Hello World');
    expect(container.querySelector('.text')?.nextElementSibling).toHaveTextContent('life Is');
    /* expect(container.firsChild).toMatchSnapshot('<p>Hello World</p><div>life is</div>'); */
  });

  it('Snapshot test should pass', () => {
    const snap = renderer.create(<HelloWorld></HelloWorld>).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
