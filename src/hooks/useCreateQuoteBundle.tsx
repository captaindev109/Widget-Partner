import { Locale } from '@/types/schemaTypes';
import { parseData } from '@/utils/dataFormatters';
import { useCreateQuoteBundleMutation } from './apolloHooks';
import useStore from './useStore';

const useCreateQuoteBundle = () => {
  // TODO - Add Locale hook
  // const { locale } = useCurrentLocale();
  const locale = Locale.SvSe;

  const { cartIdSelector: quoteCartId, userSelector, formDataSelector, partnerSelector } = useStore();
  const userInformation = userSelector;
  const { name: quotingPartner } = partnerSelector;

  const formData = formDataSelector;

  const apartmentData = parseData({ data_to_parse: formData, type_of_parsing: 'form_data_to_swedish_apartment' });
  const swedishAccidentData = parseData({ data_to_parse: formData, type_of_parsing: 'form_data_to_swedish_accident' });

  const apartmentQuote = {
    ...userInformation,
    data: { ...apartmentData, quotingPartner },
  };

  const accidentQuote = {
    ...userInformation,
    data: { ...swedishAccidentData, quotingPartner },
  };

  const quotes = [apartmentQuote, accidentQuote];

  const [createQuoteBundle, result] = useCreateQuoteBundleMutation({
    variables: { quoteCartId, quotes, locale },
  });

  return [createQuoteBundle, result] as const;
};

export default useCreateQuoteBundle;
