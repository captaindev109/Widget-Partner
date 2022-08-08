import { GlobalStateContext } from '@/providers/GlobalStateProvider';
import { useActor, useSelector } from '@xstate/react';
import { useCallback, useContext } from 'react';
import { FooterServiceStates } from '@/machines/footerMachine';
import { BasicNumber } from '@/types/types';

const selectHeight = ({ context }: FooterServiceStates) => {
  return context?.height;
};

const useFooter: () => {
  height: BasicNumber;
  state: FooterServiceStates;
  goPrimary: () => void;
  goSecondary: () => void;
  setHeight: (value: BasicNumber) => void;
} = () => {
  const { footerService } = useContext(GlobalStateContext);

  // TODO fix types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [state, send] = useActor<any, any>(footerService);

  const height = useSelector(footerService, selectHeight);

  const goPrimary = useCallback(() => {
    send('PRIMARY');
  }, [send]);

  const goSecondary = useCallback(() => {
    send('SECONDARY');
  }, [send]);

  const setHeight = useCallback(
    (value) => {
      send({ type: 'HEIGHT', value: value });
    },
    [send]
  );

  return { state, height, goPrimary, goSecondary, setHeight };
};

export default useFooter;
