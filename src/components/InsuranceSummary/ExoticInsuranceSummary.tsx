import useEditQuote from '@/hooks/useEditQuote';
import useQuoteStore from '@/hooks/useQuoteStore';
import useStore from '@/hooks/useStore';
import { parseData } from '@/utils/dataFormatters';
import { FC } from 'react';
import InsuranceSummary from '.';
import useDynamicForm from '../DynamicForm/useDynamicForm';

const ExoticInsuranceSummary: FC = () => {
  const { userSelector, formDataSelector, updateStoreUser } = useStore();
  const { handleEditQuotes } = useEditQuote();
  const { rehydrateQuoteCart } = useQuoteStore();
  const { submitForm, resetForm } = useDynamicForm();

  const handleSave = async () => {
    const formData = await submitForm();
    if (formData) {
      await handleEditQuotes(formData);
      await rehydrateQuoteCart();

      // Update user with the form data
      const userData = parseData({ data_to_parse: formData, type_of_parsing: 'form_data_to_user' });
      updateStoreUser(userData);
    }
  };

  const handleClose = async () => {
    await resetForm();
  };

  return <InsuranceSummary user={userSelector} data={formDataSelector} onSave={handleSave} onClose={handleClose} />;
};

export default ExoticInsuranceSummary;
