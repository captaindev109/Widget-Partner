import { mainMachine } from '@/machines/courseMachine';
import headerMachine from '@/machines/headerMachine';
import footerMachine from '@/machines/footerMachine';
import React, { createContext } from 'react';
import { useInterpret } from '@xstate/react';
import { ActorRefFrom } from 'xstate';
import { storeMachine } from '@/machines/storeMachine';

interface GlobalStateContextProps {
  mainService: ActorRefFrom<typeof mainMachine>;
  headerService: ActorRefFrom<typeof headerMachine>;
  footerService: ActorRefFrom<typeof footerMachine>;
  storeService: ActorRefFrom<typeof storeMachine>;
}

export const GlobalStateContext = createContext({} as GlobalStateContextProps);

interface GlobalStateProviderProps {
  children?: React.ReactNode;
}

const useDevTool = process.env.NODE_ENV === 'development';

export const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  const services = {
    mainService: useInterpret(mainMachine, {
      devTools: useDevTool,
    }),
    headerService: useInterpret(headerMachine, {
      devTools: useDevTool,
    }),
    footerService: useInterpret(footerMachine, {
      devTools: useDevTool,
    }),
    storeService: useInterpret(storeMachine, {
      devTools: useDevTool,
    }),
  };

  return <GlobalStateContext.Provider value={services}>{children}</GlobalStateContext.Provider>;
};
