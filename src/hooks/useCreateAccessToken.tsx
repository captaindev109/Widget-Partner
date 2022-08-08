import { useCreateAccessTokenMutation } from './apolloHooks';
import useStore from './useStore';

const useCreateAccessToken = () => {
  const { cartIdSelector: quoteCartId } = useStore();
  const [createAccessToken] = useCreateAccessTokenMutation({ variables: { quoteCartId } });

  return [createAccessToken] as const;
};

export default useCreateAccessToken;
