import { createMachine } from 'xstate';

export const MAIN = {
  TRY_HEDVIG: 'TRY_HEDVIG',
  ARE_YOU_INSURED: 'ARE_YOU_INSURED',
  YOUR_INFORMATION: 'YOUR_INFORMATION',
  GET_AN_OFFER: 'GET_AN_OFFER',
  CHECKOUT: 'CHECKOUT',
  CONFIRMATION: 'CONFIRMATION',
};

type MainServiceEvents = { type: 'PREVIOUS' } | { type: 'NEXT' };

interface MainServiceStates {
  states: {
    TRY_HEDVIG: Record<string, string>;
    ARE_YOU_INSURED: Record<string, string>;
    YOUR_INFORMATION: Record<string, string>;
    GET_AN_OFFER: Record<string, string>;
    CHECKOUT: Record<string, string>;
    CONFIRMATION: Record<string, string>;
  };
  value: string;
  context: Record<string, string>;
}

interface MainServiceContext {
  currentState?: string;
}

export const mainMachine = createMachine<MainServiceContext, MainServiceEvents, MainServiceStates>({
  // Machine identifier
  id: 'mainMachine',

  // Initial state
  initial: MAIN.TRY_HEDVIG,

  // Context
  context: {
    currentState: MAIN.TRY_HEDVIG,
  },

  // State definitions
  states: {
    TRY_HEDVIG: {
      on: {
        NEXT: MAIN.ARE_YOU_INSURED,
      },
    },
    ARE_YOU_INSURED: {
      on: {
        NEXT: MAIN.YOUR_INFORMATION,
        PREVIOUS: MAIN.TRY_HEDVIG,
      },
    },
    YOUR_INFORMATION: {
      on: {
        NEXT: MAIN.GET_AN_OFFER,
        PREVIOUS: MAIN.ARE_YOU_INSURED,
      },
    },
    GET_AN_OFFER: {
      on: {
        NEXT: MAIN.CHECKOUT,
        PREVIOUS: MAIN.YOUR_INFORMATION,
      },
    },
    CHECKOUT: {
      on: {
        NEXT: MAIN.CONFIRMATION,
        PREVIOUS: MAIN.GET_AN_OFFER,
      },
    },
    CONFIRMATION: {
      on: {
        PREVIOUS: MAIN.CHECKOUT,
      },
    },
  },
});
