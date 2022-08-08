import { setAccessToken } from '@/apollo/accessToken';
import Button from '@/components/Button';
import ExoticFooterWithQuote from '@/components/FooterWithQuote/ExoticFooterWithQuote';
import useCheckoutStatusPolling from '@/hooks/useCheckoutStatusPolling';
import useCreateAccessToken from '@/hooks/useCreateAccessToken';
import useStartCheckout from '@/hooks/useStartCheckout';
import useStore from '@/hooks/useStore';
import { CheckoutStatus } from '@/types/schemaTypes';
import { BasicAny } from '@/types/types';
import { useRouter } from 'next/router';
import { FC, useState, useEffect } from 'react';

const POLLING_LENGTH = 1000;

const CheckoutFooter: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [startCheckout] = useStartCheckout();
  const { updateStoreCheckout, checkoutSelector } = useStore();
  const [createAccessToken] = useCreateAccessToken();

  const signStatus = useCheckoutStatusPolling(POLLING_LENGTH);

  // Handle the polling status changes
  useEffect(() => {
    if (signStatus === 'SIGNED') {
      updateStoreCheckout({ status: CheckoutStatus.Signed });
    } else if (signStatus === 'FAILED') {
      updateStoreCheckout({ status: CheckoutStatus.Failed });
    }
  }, [signStatus, updateStoreCheckout]);

  useEffect(() => {
    const handleCreateAccessToken = async () => {
      try {
        const { data } = await createAccessToken();
        setAccessToken(data?.quoteCart_createAccessToken.accessToken ?? '');
        updateStoreCheckout({ status: CheckoutStatus.Completed });
      } catch (error) {
        // Handle this error
      }
    };

    // Handle the checkout status changes
    const handleCheckoutStatusChange = async (status: CheckoutStatus) => {
      switch (status) {
        case CheckoutStatus.Signed:
          {
            // Create token
            await handleCreateAccessToken();
            setLoading(false);
          }
          break;
        case CheckoutStatus.Failed:
          {
            // Error messages
            setLoading(false);
          }
          break;
        case CheckoutStatus.Completed:
          {
            router.push('/payment/connect');
            setLoading(false);
          }
          break;
        default:
          break;
      }
    };
    handleCheckoutStatusChange(checkoutSelector?.status);
  }, [checkoutSelector?.status, createAccessToken, router, updateStoreCheckout]);

  const handleStartCheckout = async () => {
    try {
      setLoading(true);
      const { data }: BasicAny = await startCheckout();
      const checkout = data?.quoteCart_startCheckout?.checkout;
      updateStoreCheckout(checkout);
    } catch (error) {
      setLoading(false);
      console.log('error', error);
    }
  };

  return (
    <ExoticFooterWithQuote>
      <Button icon={{ iconName: 'BankIdIcon' }} disabled={loading} onClick={handleStartCheckout}>
        Slutför köp
      </Button>
    </ExoticFooterWithQuote>
  );
};

export default CheckoutFooter;
