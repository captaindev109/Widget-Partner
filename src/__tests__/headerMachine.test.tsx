import { render, RenderResult, fireEvent } from '@testing-library/react';
import queries from '@testing-library/dom/types/queries';
import renderer from 'react-test-renderer';
import { GlobalStateProvider } from '@/providers/GlobalStateProvider';
import { FC } from 'react';
import useHeader from '@/hooks/useHeader';
import { HEADER_STATES } from '@/machines/headerMachine';

const GlobalStateComponent: FC = () => (
  <GlobalStateProvider>
    <GlobalStateComponentWithButtons />
  </GlobalStateProvider>
);

const GlobalStateComponentWithButtons: FC = () => {
  const { header_state, goPrimary, goSecondary, goTeritiary } = useHeader();
  return (
    <>
      <div data-testid="state">{header_state.value}</div>
      <button data-testid="primary" onClick={goPrimary}>
        PRIMARY
      </button>
      <button data-testid="secondary" onClick={goSecondary}>
        SECONDARY
      </button>
      <button data-testid="teritiary" onClick={goTeritiary}>
        TERITIARY
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
describe('headerMachine test cases', () => {
  let renderedComponent: RenderResult<typeof queries, HTMLElement>;

  beforeEach(() => {
    renderedComponent = render(<GlobalStateComponent />);
  });

  test('to see if initial state is set to primary', () => {
    const { getByTestId } = renderedComponent;

    const state = getByTestId('state');
    expect(state).toHaveTextContent(HEADER_STATES.PRIMARY);
  });

  test('to see if we can change the state to secondary', () => {
    const { getByTestId } = renderedComponent;
    const state = getByTestId('state');
    const secondary = getByTestId('secondary');

    // Initial state is PRIMARY
    expect(state).toHaveTextContent(HEADER_STATES.PRIMARY);
    fireEvent.click(secondary);

    // next state is SECONDARY
    expect(state).toHaveTextContent(HEADER_STATES.SECONDARY);
  });

  test('to see if we can change the state to teritiary', () => {
    const { getByTestId } = renderedComponent;
    const state = getByTestId('state');
    const teritiary = getByTestId('teritiary');

    // Initial state is PRIMARY
    expect(state).toHaveTextContent(HEADER_STATES.PRIMARY);
    fireEvent.click(teritiary);

    // next state is TERTIARY
    expect(state).toHaveTextContent(HEADER_STATES.TERTIARY);
  });
});

// Snapshot test
describe('Snapshots', () => {
  it('Snapshot test should pass', () => {
    const snap = renderer.create(<GlobalStateComponent />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
