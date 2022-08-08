/**
 *
 *  ********** Unit & Snapshot Testing *********
 *
 * Unit test is specifiic for each functionliaty of the component
 * Snapshot test is to track Over All changes in the code since the first snap
 **/

import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import View from '@/generics/View';
import viewRenderer from '@/utils/renderer';

export const data = [
  {
    id: '1',
    component: 'Card',
    padding: 10,
    background: 'grey',
    children: [
      {
        id: '2',
        component: 'Image',
        src: 'https://picsum.photos/800/400',
        width: '800px',
        height: '400px',
      },
    ],
  },
];

// describe function is a better way to organize our test cases and describe which component we are testing
describe('<HelloWorld /> Test Cases', () => {
  // this test is a must for each component, any rendering issues with the component can be found
  test('it renders without crashing, all is well', () => {
    // render basically prints and exposes the component in nodejs environemt, it returns an object...
    render(<View components={data}>{(children) => viewRenderer(children, children.id)}</View>);
  });

  it('Snapshot test should pass', () => {
    const snap = renderer
      .create(<View components={data}>{(children) => viewRenderer(children, children.id)}</View>)
      .toJSON();
    expect(snap).toMatchSnapshot();
  });
});
