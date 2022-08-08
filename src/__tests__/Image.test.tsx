import { render, RenderResult } from '@testing-library/react';
import queries from '@testing-library/dom/types/queries';
import renderer from 'react-test-renderer';
import Image from '../generics/Image';

describe('Test cases of the Image component', () => {
  let renderedComponent: RenderResult<typeof queries, HTMLElement>;

  const url = 'https://picsum.photos/800/400/';
  const alt = 'test image';
  const child_text = 'child';

  beforeEach(() => {
    renderedComponent = render(
      <Image src={url} alt={alt}>
        <div>{child_text}</div>
      </Image>
    );
  });

  test('to see if the component render without crashing', () => {
    render(<Image src={url} alt={alt} />);
  });

  test('to see if the image src is correct', () => {
    const { getByAltText } = renderedComponent;
    const image = getByAltText(alt);

    expect(image).toHaveAttribute('src', url);
  });

  test('to see if the image alt is correct', () => {
    const { container } = renderedComponent;

    expect(container.querySelector('img')).toHaveAttribute('alt', alt);
  });

  test('to see if the Image can render children', () => {
    const { container } = renderedComponent;

    expect(container.querySelector('div')).toBeNull();
  });

  it('Snapshot test should pass', () => {
    const snap = renderer.create(<Image src={url} alt={alt} />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
