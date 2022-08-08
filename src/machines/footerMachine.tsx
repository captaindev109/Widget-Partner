import { createMachine, assign } from 'xstate';

export const FOOTER_COURSES = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
};

export type FooterServiceEvents = { type: 'PRIMARY' } | { type: 'SECONDARY' } | { type: 'HEIGHT'; value: number };

export interface FooterServiceStates {
  states: {
    PRIMARY: Record<string, string>;
    SECONDARY: Record<string, string>;
  };
  value: string;
  context: FooterServiceContext;
}

export interface FooterServiceContext {
  currentState?: string;
  height: number;
}
const update_height = (context: FooterServiceContext, event: FooterServiceEvents) => {
  return event.type === 'HEIGHT' ? event.value : 0;
};

const footerMachine = createMachine<FooterServiceContext, FooterServiceEvents, FooterServiceStates>({
  id: 'footer_machine',
  initial: FOOTER_COURSES.PRIMARY,
  context: {
    currentState: FOOTER_COURSES.PRIMARY,
    height: 0,
  },
  states: {
    PRIMARY: {
      on: {
        SECONDARY: FOOTER_COURSES.SECONDARY,
      },
    },
    SECONDARY: {
      on: {
        PRIMARY: FOOTER_COURSES.PRIMARY,
      },
    },
  },
  on: {
    HEIGHT: {
      actions: assign({ height: update_height }),
    },
  },
});

export default footerMachine;
