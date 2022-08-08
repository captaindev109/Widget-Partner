import { render, RenderResult, fireEvent } from '@testing-library/react';
import queries from '@testing-library/dom/types/queries';
import renderer from 'react-test-renderer';
import { GlobalStateProvider } from '@/providers/GlobalStateProvider';
import { FC } from 'react';
import useFooter from '@/hooks/useFooter';
import { FOOTER_COURSES } from '@/machines/footerMachine';

const GlobalStateComponent: FC = () => (
  <GlobalStateProvider>
    <GlobalStateComponentWithButtons />
  </GlobalStateProvider>
);

const GlobalStateComponentWithButtons: FC = () => {
  const { state, goPrimary, goSecondary } = useFooter();
  return (
    <>
      <div data-testid="state">{state.value}</div>
      <button data-testid="primary" onClick={goPrimary}>
        PRIMARY
      </button>
      <button data-testid="secondary" onClick={goSecondary}>
        SECONDARY
      </button>
    </>
  );
};

// Render tests
describe('Render tests', () => {
  test('Global state provider renders', () => {
    render(<GlobalStateComponent />);
  });
});

// Routing tests
describe('footerMachine test cases', () => {
  let renderedComponent: RenderResult<typeof queries, HTMLElement>;

  beforeEach(() => {
    renderedComponent = render(<GlobalStateComponent />);
  });

  test('to see if initial state is set to primary', () => {
    const { getByTestId } = renderedComponent;

    const state = getByTestId('state');
    expect(state).toHaveTextContent(FOOTER_COURSES.PRIMARY);
  });

  test('to see if we can change the state to secondary', () => {
    const { getByTestId } = renderedComponent;
    const state = getByTestId('state');
    const secondary = getByTestId('secondary');

    // Initial state is PRIMARY
    expect(state).toHaveTextContent(FOOTER_COURSES.PRIMARY);
    fireEvent.click(secondary);

    // next state is SECONDARY
    expect(state).toHaveTextContent(FOOTER_COURSES.SECONDARY);
  });
});

// Snapshot test
describe('Snapshots', () => {
  it('Snapshot test should pass', () => {
    const snap = renderer.create(<GlobalStateComponent />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
