import { render, RenderResult, fireEvent } from '@testing-library/react';
import queries from '@testing-library/dom/types/queries';
import renderer from 'react-test-renderer';
import { GlobalStateProvider } from '@/providers/GlobalStateProvider';
import { FC } from 'react';
import useMain from '@/hooks/useMain';
import { MAIN } from '@/machines/courseMachine';

const GlobalStateComponent: FC = () => (
  <GlobalStateProvider>
    <GlobalStateComponentWithButtons />
  </GlobalStateProvider>
);

const GlobalStateComponentWithButtons: FC = () => {
  const { state, nextCourse, previousCourse } = useMain();
  return (
    <>
      <div data-testid="state">{state}</div>
      <button data-testid="forward" onClick={nextCourse}>
        forward
      </button>
      <button data-testid="backward" onClick={previousCourse}>
        backward
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
describe('Routing tests', () => {
  let renderedComponent: RenderResult<typeof queries, HTMLElement>;

  beforeEach(() => {
    renderedComponent = render(<GlobalStateComponent />);
  });

  test('State exists', () => {
    const { getByTestId } = renderedComponent;

    const state = getByTestId('state');
    expect(state).toBeInTheDocument();
  });

  test('Navigate forward', () => {
    const { getByTestId } = renderedComponent;
    const state = getByTestId('state');
    const forward = getByTestId('forward');

    // Base case is TRY_HEDVIG
    expect(state).toHaveTextContent(MAIN.TRY_HEDVIG);
    fireEvent.click(forward);

    // Second case is ARE_YOU_INSURED
    expect(state).toHaveTextContent(MAIN.ARE_YOU_INSURED);

    // See so CONFIRMATION is the absolute last case
    fireEvent.click(forward);
    fireEvent.click(forward);
    fireEvent.click(forward);
    fireEvent.click(forward);
    fireEvent.click(forward);
    fireEvent.click(forward);
    expect(state).toHaveTextContent(MAIN.CONFIRMATION);
  });

  test('Navigate backward', () => {
    const { getByTestId } = renderedComponent;
    const state = getByTestId('state');
    const forward = getByTestId('forward');
    const backward = getByTestId('backward');

    // Base case is TRY_HEDVIG
    expect(state).toHaveTextContent(MAIN.TRY_HEDVIG);

    // Second case is ARE_YOU_INSURED
    fireEvent.click(forward);
    expect(state).toHaveTextContent(MAIN.ARE_YOU_INSURED);

    // Try to go back
    fireEvent.click(backward);
    expect(state).toHaveTextContent(MAIN.TRY_HEDVIG);

    // See so TRY_HEDVIG is the absolute first
    fireEvent.click(backward);
    fireEvent.click(backward);
    fireEvent.click(backward);
    expect(state).toHaveTextContent(MAIN.TRY_HEDVIG);
  });
});

// Snapshot test
describe('Snapshots', () => {
  it('Snapshot test should pass', () => {
    const snap = renderer.create(<GlobalStateComponent />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
