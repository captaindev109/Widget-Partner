import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import RadioGroup from '@/components/RadioGroup';
import ApplicationThemeProvider from '@/providers/ApplicationThemeProvider';
import defaultTheme from '@/theme/theme';

/** Render tests */

const options = [
  {
    id: 'a',
    component: 'Input',
    type: 'radio',
    value: 'a',
    children: 'A',
  },
  {
    id: 'b',
    component: 'Input',
    type: 'radio',
    value: 'b',
    children: 'B',
  },
];

describe('RadioGroup render tests', () => {
  test('to see if the component render without crashing', () => {
    render(
      <ApplicationThemeProvider theme={defaultTheme}>
        <RadioGroup options={options} />
      </ApplicationThemeProvider>
    );
  });

  it('Snapshot test should pass', () => {
    const snap = renderer
      .create(
        <ApplicationThemeProvider theme={defaultTheme}>
          <RadioGroup options={options} />
        </ApplicationThemeProvider>
      )
      .toJSON();

    expect(snap).toMatchSnapshot();
  });
});
