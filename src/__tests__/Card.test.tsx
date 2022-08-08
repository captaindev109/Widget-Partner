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
import Card from '@/generics/Card';

// describe function is a better way to organize our test cases and describe which component we are testing
describe('<HelloWorld /> Test Cases', () => {
  let renderedComponent: RenderResult<typeof queries, HTMLElement>;

  beforeEach(() => {
    renderedComponent = render(
      <Card>
        <p>hedvig is a great company</p>
      </Card>
    );
  });

  // this test is a must for each component, any rendering issues with the component can be found
  test('it renders without crashing, all is well', () => {
    // render basically prints and exposes the component in nodejs environemt, it returns an object...
    render(<Card />);
  });

  test('check to see any specific string, element in dom, for example', () => {
    const { getByText } = renderedComponent;

    // YOU DO NOT NEED TO USE ALL OF THESE CASES FOR EVERY COMPONENT, JUST ONE OR MORE IS ENOUGH

    // using string value
    expect(getByText('hedvig is a great company')).toBeInTheDocument();
  });

  it('Snapshot test should pass', () => {
    const snap = renderer.create(<Card></Card>).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
