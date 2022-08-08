import { GlobalStateContext } from '@/providers/GlobalStateProvider';
import { useActor } from '@xstate/react';
import { useCallback, useContext } from 'react';
import { step } from '@/utils/routing';

const useMain = () => {
  const { mainService } = useContext(GlobalStateContext);
  const [state, send] = useActor(mainService);

  const previousCourse = useCallback(() => {
    send('PREVIOUS');
  }, [send]);

  const nextCourse = useCallback(() => {
    send('NEXT');
  }, [send]);

  return { state: state.value, nextCourse, previousCourse, step };
};

export default useMain;
