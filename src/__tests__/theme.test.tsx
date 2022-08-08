import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ApplicationThemeProvider from '@/providers/ApplicationThemeProvider';
import defaultTheme from '@/theme/theme';
import styled, { ThemeConsumer } from 'styled-components';

export interface MockedComponentProps {
  background?: string;
}

const MockedComponent = styled.div<MockedComponentProps>`
  background: ${(props) => props.theme.palette.common.black};
`;

const Text = 'The brown fox jumps over the lazy dog';

// describe function is a better way to organize our test cases and describe which component we are testing
describe('<HelloWorld /> Test Cases', () => {
  // this test is a must for each component, any rendering issues with the component can be found
  test('it renders without crashing, all is well', () => {
    // render basically prints and exposes the component in nodejs environemt, it returns an object...
    render(<ApplicationThemeProvider theme={defaultTheme} />);
  });

  test('check to see if we can access the color via the context provider', () => {
    const { container } = render(
      <ApplicationThemeProvider theme={defaultTheme}>
        <ThemeConsumer>{(theme) => <span className="color">{theme.palette.common.black}</span>}</ThemeConsumer>
      </ApplicationThemeProvider>
    );

    expect(container.querySelector('.color')).toHaveTextContent('#222831');
  });

  test('check to see if the componet is accessing black color via the context', () => {
    const { getByText } = render(
      <ApplicationThemeProvider theme={defaultTheme}>
        <MockedComponent>{Text}</MockedComponent>
      </ApplicationThemeProvider>
    );

    expect(getByText(Text)).toHaveStyle('background:#222831');
  });

  it('Snapshot test should pass', () => {
    const snap = renderer.create(<ApplicationThemeProvider theme={defaultTheme}></ApplicationThemeProvider>).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
