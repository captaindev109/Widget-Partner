import { render, RenderResult, fireEvent } from '@testing-library/react';
import queries from '@testing-library/dom/types/queries';
import renderer from 'react-test-renderer';
import Input from '../generics/Input';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@/theme/theme';

const testHelper = 'tester';

const TextInput: React.FC = () => {
  const [value, setValue] = useState<string>('');
  return (
    <ThemeProvider theme={defaultTheme}>
      <Input type="text" helperText={testHelper} value={value} onChange={(e) => setValue(e.target.value)} />
    </ThemeProvider>
  );
};

/** Render tests */
describe('TextInput render tests', () => {
  let renderedComponent: RenderResult<typeof queries, HTMLElement>;

  beforeEach(() => {
    renderedComponent = render(<TextInput />);
  });

  test('to see if the Input renders correctly', () => {
    const { getByTestId } = renderedComponent;
    const field = getByTestId('text-input');
    const helper = getByTestId('text-helper');

    expect(field).toBeTruthy();
    expect(helper.textContent).toBe(testHelper);
  });

  it('Snapshot test should pass', () => {
    const snap = renderer.create(<TextInput />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});

/** Interaction tests */
describe('Input interaction test', () => {
  const setup = () => {
    const utils = render(<TextInput />);
    const input = utils.getByTestId('text-input') as HTMLInputElement;
    return {
      input,
      ...utils,
    };
  };

  test('It should be able to change the value', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'Hejsan' } });
    expect(input.value).toBe('Hejsan');
  });
});

/** ------------------ RADIO BUTTON ------------------ */

const radioText = 'tester';
const testValue1 = 'test-value1';
const testValue2 = 'test-value1';

const RadioButton: React.FC = () => {
  const [value, setValue] = useState<string>(testValue1);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Input type="radio" value={value} onChange={(e) => setValue(e.target.value)}>
        {radioText}
      </Input>
    </ThemeProvider>
  );
};

/** Render tests */
describe('RadioButton render tests', () => {
  let renderedComponent: RenderResult<typeof queries, HTMLElement>;

  beforeEach(() => {
    renderedComponent = render(<RadioButton />);
  });

  test('to see if the RadioButton renders correctly', () => {
    const { getByText } = renderedComponent;
    const button = getByText(radioText);

    expect(button).toBeTruthy();
    expect(button.children).toBeTruthy();
  });

  it('Snapshot test should pass', () => {
    const snap = renderer.create(<RadioButton />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});

/** Interaction tests */
describe('RadioButton click test', () => {
  const setup = () => {
    const utils = render(<RadioButton />);
    const radio = utils.getByTestId('radio-input') as HTMLInputElement;
    return {
      radio,
      ...utils,
    };
  };

  test('It should be able to change the value', () => {
    const { radio } = setup();
    expect(radio.value).toBe(testValue1);
    fireEvent.change(radio, { target: { value: testValue2 } });
    expect(radio.value).toBe(testValue2);
  });
});
