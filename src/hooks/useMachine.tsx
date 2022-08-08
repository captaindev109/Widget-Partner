import { GlobalStateContext } from '@/providers/GlobalStateProvider';
import { BasicAny } from '@/types/types';
import { useActor } from '@xstate/react';
import { useContext } from 'react';

interface useStore_types {
  state: { context: { _routes: BasicAny[] } };
  update_routes: (config: { type: 'UPDATE_ROUTES'; routes: object | undefined }) => void;
  update_current_route: (config: { type: 'UPDATE_CURRENT_ROUTE'; current_route: string | undefined }) => void;
}

const useStore: () => useStore_types = (): useStore_types => {
  const { storeService } = useContext(GlobalStateContext);
  const [state, send] = useActor(storeService);

  const update_routes = (config: { type: 'UPDATE_ROUTES' }) => {
    send(config);
  };

  // example:
  // update_routes({type: 'UPDATE_ROUTES', _routes: {key: some_data}})

  const update_current_route = (config: { type: 'UPDATE_CURRENT_ROUTE' }) => {
    send(config);
  };
  return { state: state, update_routes, update_current_route };
};

export default useStore;
