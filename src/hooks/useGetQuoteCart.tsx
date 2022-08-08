import { GetQuoteCartDocument } from '@/graphql/documents';
import { Locale } from '@/types/schemaTypes';
import { useQuery } from '@apollo/client';
import useStore from './useStore';

const useGetQuoteCart = () => {
  const { cartIdSelector } = useStore();
  const id = cartIdSelector;

  // TODO - Add Locale hook
  // const { locale } = useCurrentLocale();
  const locale = Locale.SvSe;

  const query = useQuery(GetQuoteCartDocument, {
    variables: { id, locale },
  });

  return query;
};

export default useGetQuoteCart;
