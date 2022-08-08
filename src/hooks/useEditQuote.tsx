import { TypeOfContract } from '@/types/schemaTypes';
import { parseData } from '@/utils/dataFormatters';
import { useCallback } from 'react';
import { useEditBundledQuoteMutation } from './apolloHooks';
import useStore from './useStore';

const useEditQuote = () => {
  const { cartIdSelector, cartItemsDetailsSelector } = useStore();
  const quoteCartId = cartIdSelector;

  const [editBundle] = useEditBundledQuoteMutation();

  const handleEditStartDate = useCallback(
    async (quoteId, startDate) => {
      const quote = cartItemsDetailsSelector.find((quote) => quote.id === quoteId);

      const quoteWithNewStartDate = {
        ...quote,
        startDate: startDate,
      };

      return await editBundle({
        variables: {
          quoteCartId,
          quoteId,
          payload: quoteWithNewStartDate,
        },
      });
    },
    [cartItemsDetailsSelector, editBundle, quoteCartId]
  );

  const handleEditQuotes = useCallback(
    async (newFormData) => {
      const promises = cartItemsDetailsSelector.map(async (item) => {
        let formattedDataBasedOnType = () => {
          switch (item.typeOfContract) {
            case TypeOfContract.SeAccident:
            case TypeOfContract.SeAccidentStudent:
              return (formattedDataBasedOnType = parseData({
                data_to_parse: newFormData,
                type_of_parsing: 'form_data_to_swedish_accident',
              }));
            case TypeOfContract.SeApartmentBrf:
            case TypeOfContract.SeApartmentRent:
            case TypeOfContract.SeApartmentStudentBrf:
            case TypeOfContract.SeApartmentStudentRent:
              return (formattedDataBasedOnType = parseData({
                data_to_parse: newFormData,
                type_of_parsing: 'form_data_to_swedish_apartment',
              }));
            default:
              return null;
          }
        };

        const { data } = await editBundle({
          variables: { quoteId: item.id, quoteCartId, payload: { data: formattedDataBasedOnType } },
        });

        return data?.quoteCart_editQuote;
      });

      await Promise.all(promises);
    },
    [cartItemsDetailsSelector, editBundle, quoteCartId]
  );

  return { handleEditQuotes, handleEditStartDate } as const;
};

export default useEditQuote;
