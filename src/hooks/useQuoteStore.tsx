import { parseData } from '@/utils/dataFormatters';
import { useCallback } from 'react';
import useGetQuoteCart from './useGetQuoteCart';
import useStore from './useStore';

const useQuoteStore = () => {
  const { updateBundleVariations, updateBundleQuotes, updateSelectedBundleTab, updateStoreCartItems } = useStore();
  const { refetch } = useGetQuoteCart();

  const fetchInitialQuoteCart = useCallback(async () => {
    const { data } = await refetch();
    const { bundleVariations, bundleQuotes } = parseData({
      data_to_parse: data.quoteCart,
      type_of_parsing: 'quote_cart_response',
    });

    updateBundleVariations(bundleVariations);
    updateBundleQuotes(bundleQuotes);
    updateStoreCartItems([bundleQuotes[0]?.id]);
    updateSelectedBundleTab(bundleQuotes[0]?.id);
  }, [refetch, updateBundleQuotes, updateBundleVariations, updateSelectedBundleTab, updateStoreCartItems]);

  const rehydrateQuoteCart = useCallback(async () => {
    const { data } = await refetch();
    const { bundleVariations, bundleQuotes } = parseData({
      data_to_parse: data.quoteCart,
      type_of_parsing: 'quote_cart_response',
    });

    updateBundleVariations(bundleVariations);
    updateBundleQuotes(bundleQuotes);
  }, [refetch, updateBundleQuotes, updateBundleVariations]);

  return { fetchInitialQuoteCart, rehydrateQuoteCart };
};

export default useQuoteStore;
