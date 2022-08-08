import { CheckoutStatus } from '@/types/schemaTypes';
import { useEffect, useState } from 'react';
import { useCheckoutStatusQuery } from './apolloHooks';
import useStore from './useStore';

const useCheckoutStatusPolling = (pollInterval: number) => {
  const { cartIdSelector: quoteCartId, checkoutSelector } = useStore();
  const [initiated, setIntiated] = useState<boolean>(false);
  const [polledStatus, setPolledStatus] = useState<CheckoutStatus | undefined>(undefined);
  const { data, startPolling, stopPolling } = useCheckoutStatusQuery({
    variables: {
      quoteCartId,
    },
  });

  useEffect(() => {
    if (data?.quoteCart?.checkout !== polledStatus) {
      setPolledStatus(data?.quoteCart?.checkout?.status);
    }
  }, [data?.quoteCart.checkout, polledStatus]);

  useEffect(() => {
    if (checkoutSelector?.status === CheckoutStatus.Pending && !initiated) {
      startPolling(pollInterval);
      setIntiated(true);
    } else if (checkoutSelector?.status !== CheckoutStatus.Pending && initiated) {
      stopPolling();
      setIntiated(false);
    }
  }, [checkoutSelector?.status, initiated, pollInterval, startPolling, stopPolling]);

  return polledStatus;
};

export default useCheckoutStatusPolling;
