import { Locale, Market } from '@/types/schemaTypes';
import { useCallback } from 'react';
import { useInitWidgetMutation } from './apolloHooks';
import useStore from './useStore';

const useInitWidget = () => {
  // TODO - Add Locale hook
  // const { market, locale } = useCurrentLocale();
  const locale = Locale.SvSe;
  const market = Market.Sweden;

  const [initWidget] = useInitWidgetMutation();
  const { createStoreCart } = useStore();

  const handleInitWidget = useCallback(
    async (requestId, partnerId) => {
      // Create quote cart
      const { data } = await initWidget({ variables: { market, locale, requestId, partnerId } });
      const id = data?.quoteCart_initWidget.id;
      // const {id, partner} = data?.quoteCart_initWidget;

      // Add partner name to store
      // partner && createStorePartner(partner);

      // Add cart id to store
      id && createStoreCart(id);
    },
    [initWidget, createStoreCart, locale, market]
  );

  return [handleInitWidget] as const;
};

export default useInitWidget;
