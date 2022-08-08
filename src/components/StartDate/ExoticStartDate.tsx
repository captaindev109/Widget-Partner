import useEditQuote from '@/hooks/useEditQuote';
import useStore from '@/hooks/useStore';
import { FC } from 'react';
import StartDate from '.';

const ExoticStartDate: FC = () => {
  const { bundleQuotesSelector, updateQuoteStartDate } = useStore();
  const { handleEditStartDate } = useEditQuote();

  const handleChangeDate = async (date: Date, id: string) => {
    updateQuoteStartDate(date, id);
    try {
      await handleEditStartDate(id, date);
    } catch (error) {
      // Revert strategy?
      console.log(error);
    }
  };
  // currentInsurer object
  return <StartDate quotes={bundleQuotesSelector} onChangeDate={handleChangeDate} />;
};

export default ExoticStartDate;
