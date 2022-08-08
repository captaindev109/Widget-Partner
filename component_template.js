// This is the source template for the components

exports.component = (name) => `
import { FC } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Wrapper from '@/generics/Wrapper';


// A basic Interface or type is required for every each component
export interface ${name}Props {
  children?: string;
}


// The styled component is using composition to inherit the base from Card component
const Styled${name} = styled(Wrapper)<${name}Props>\`
\`;


//The main component with dynamic rendering and state
export const ${name}: FC<${name}Props> = ({ children }) => {
  const [state, setState] = useState(null)
  return <Styled${name} data-testid="${name}">{children}</Styled${name}>;
};

const defaultProps: Partial<${name}Props> = {};

${name}.defaultProps = defaultProps;

export default ${name};

`;

// component.stories.jsx
 exports.story = (name) => `
import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { decorators } from '@/../.storybook/preview';
import { ${name} } from '.';
import { ${name}Props } from './${name}';
import Wrapper from '@/generics/Wrapper';


// A wrapper to position the component
const StoryWrapper = styled(Wrapper)\`
  \`;


// Name the folder to either generics or components
const meta: Meta = {
  title: 'Components/${name}',
  component: ${name},
  decorators,
};

export default meta;


// Showcasing the component
const Template: Story<${name}Props> = (args) => (
  <StoryWrapper>
    <${name} {...args} />
    <${name} {...args} />
  </StoryWrapper>
);


export const Default${name} = Template.bind({});


Default${name}.args = {
  children: 'Child',
};

`;


exports.mytest = name => `
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
import ${name} from '.';
import { GlobalStateProvider } from '@/providers/GlobalStateProvider';
import defaultTheme from '@/theme/theme';

const MockComponent: React.FC = () => {
  return (
    <GlobalStateProvider>
      <ApplicationThemeProvider theme={defaultTheme}>
        <${name} />
      </ApplicationThemeProvider>
    </GlobalStateProvider>
  );
};

// describe function is a better way to organize our test cases and describe which component we are testing
describe('<${name} /> Test Cases', () => {
  let renderedComponent: RenderResult<typeof queries, HTMLElement>;
  beforeEach(() => {
    renderedComponent = render(<MockComponent />);
  });

  // this test is a must for each component, any rendering issues with the component can be found
  test('it renders without crashing, all is well', () => {
    // render basically prints and exposes the component in nodejs environemt, it returns an object...
    render(<MockComponent />);
  });

  test('check to see any specific string, element in dom, for example', () => {
    const { container, getByText } = renderedComponent;

    // YOU DO NOT NEED TO USE ALL OF THESE CASES FOR EVERY COMPONENT, JUST ONE OR MORE IS ENOUGH

    // using string value
    expect(getByText('Hello World')).toBeInTheDocument();

    //using selectors
    expect(container.querySelector('.text')).toHaveAttribute('class');
  });

  it('Snapshot test should pass', () => {
    const snap = renderer.create(<MockComponent />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});

`;

// index.ts
exports.barrel = name => `export { default } from './${name}';
`;

