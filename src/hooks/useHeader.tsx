import { GlobalStateContext } from '@/providers/GlobalStateProvider';
import { BasicString, BasicVoid } from '@/types/types';
import { useActor } from '@xstate/react';
import { useCallback, useContext } from 'react';

interface StateProps {
  value: BasicString;
}

export interface useHeader_types {
  header_state: StateProps;
  goPrimary: () => BasicVoid;
  goSecondary: () => BasicVoid;
  goTeritiary: () => BasicVoid;
}

const useHeader: () => useHeader_types = () => {
  const { headerService } = useContext(GlobalStateContext);
  // TODO: fix type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [header_state, send] = useActor<any, any>(headerService);

  const goPrimary: () => BasicVoid = useCallback(() => {
    send('PRIMARY');
  }, [send]);

  const goSecondary: () => BasicVoid = useCallback(() => {
    send('SECONDARY');
  }, [send]);

  const goTeritiary: () => BasicVoid = useCallback(() => {
    send('TERTIARY');
  }, [send]);

  return { header_state, goPrimary, goSecondary, goTeritiary };
};

export default useHeader;
