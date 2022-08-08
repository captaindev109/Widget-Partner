import useStore from '@/hooks/useStore';
import { BasicAny } from '@/types/types';
import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';

const useDynamicForm = () => {
  const { updateFormData, formDataSelector } = useStore();
  const { getValues, trigger, reset } = useFormContext();

  const resetForm = useCallback(
    (values?: BasicAny) => {
      if (values) reset(values);
      else reset(formDataSelector);
    },
    [formDataSelector, reset]
  );

  const submitForm = useCallback(async () => {
    const trigg = await trigger();

    if (!!trigg) {
      const formData = getValues();
      updateFormData(formData);
      return formData;
    }
    throw new Error('Det gick tyvärr inte att spara, se till att du fyllt i all information ovan.');
  }, [getValues, trigger, updateFormData]);

  return { submitForm, resetForm };
};

export default useDynamicForm;
