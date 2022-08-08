import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { FC, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@/theme/theme';
import Dropdown, { DropdownOption } from '@/components/Dropdown';

const DROPDOWN_MOCK = [
  {
    label: 'Option 1',
    value: 'option-1',
  },
  {
    label: 'Option 2',
    value: 'option-2',
  },
  {
    label: 'Option 3',
    value: 'option-3',
  },
];

const labelText = "I'm a label";

const DropdownComponent: FC = () => {
  const [option, selectOption] = useState<DropdownOption>({ label: '', value: '' });
  return (
    <ThemeProvider theme={defaultTheme}>
      <Dropdown label={labelText} onChange={(opt) => selectOption(opt)} options={DROPDOWN_MOCK} />
      <span data-testid="test-value">{option.value}</span>
    </ThemeProvider>
  );
};

/** Render tests */
describe('Dropdown render tests', () => {
  test('to see if the component render without crashing', () => {
    render(<DropdownComponent />);
  });
});

/** Snapshot test */
describe('Dropdown snapshot test', () => {
  it('Snapshot test should pass', () => {
    const snap = renderer.create(<DropdownComponent />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
