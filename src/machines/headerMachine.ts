import { createMachine } from 'xstate';

export const HEADER_STATES = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  TERTIARY: 'TERTIARY',
};

export type HeaderServiceEvents = { type: 'PRIMARY' } | { type: 'SECONDARY' } | { type: 'TERTIARY' };

export interface HeaderServiceStates {
  states: {
    PRIMARY: Record<string, string>;
    SECONDARY: Record<string, string>;
    TERTIARY: Record<string, string>;
  };
  value: string;
  context: Record<string, string>;
}

export interface HeaderServiceContext {
  currentState?: string;
}

const headerMachine = createMachine<HeaderServiceContext, HeaderServiceEvents, HeaderServiceStates>({
  id: 'header_machine',
  initial: HEADER_STATES.PRIMARY,
  context: {
    currentState: HEADER_STATES.PRIMARY,
  },
  states: {
    PRIMARY: {
      on: {
        SECONDARY: HEADER_STATES.SECONDARY,
        TERTIARY: HEADER_STATES.TERTIARY,
      },
    },
    SECONDARY: {
      on: {
        PRIMARY: HEADER_STATES.PRIMARY,
        TERTIARY: HEADER_STATES.TERTIARY,
      },
    },
    TERTIARY: {
      on: {
        PRIMARY: HEADER_STATES.PRIMARY,
        SECONDARY: HEADER_STATES.SECONDARY,
        TERTIARY: HEADER_STATES.TERTIARY,
      },
    },
  },
});

export default headerMachine;
