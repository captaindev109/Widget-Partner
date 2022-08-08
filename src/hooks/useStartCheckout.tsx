import { useStartCheckoutMutation } from './apolloHooks';
import useStore from './useStore';

const useStartCheckout = () => {
  const { cartIdSelector: quoteCartId, cartItemsSelector: quoteIds } = useStore();

  const [startCheckout, result] = useStartCheckoutMutation({
    variables: { quoteCartId, quoteIds },
  });

  return [startCheckout, result] as const;
};

export default useStartCheckout;
