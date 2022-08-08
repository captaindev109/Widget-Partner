import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { FC } from 'react';
import Wrapper from '@/generics/Wrapper';

const child_text = 'child';

const WrapperComponent: FC = () => <Wrapper>{child_text}</Wrapper>;

describe('Render tests', () => {
  test('to see if the render its children', () => {
    const { getByTestId } = render(<WrapperComponent />);
    const wrapper = getByTestId('wrapper');
    expect(wrapper).toHaveTextContent(child_text);
  });

  it('should match the sapshot', () => {
    const snap = renderer.create(<WrapperComponent />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});

describe('Prop tests', () => {
  test('to see if default props is row', () => {
    const { getByTestId } = render(<WrapperComponent />);
    const wrapper = getByTestId('wrapper');
    expect(wrapper).toHaveStyle(`flex-direction: row`);
  });

  it('to see if direction works is row', () => {
    const { getByTestId } = render(<Wrapper direction="column">{child_text}</Wrapper>);
    const wrapper = getByTestId('wrapper');
    expect(wrapper).toHaveStyle(`flex-direction: column`);
  });
});
