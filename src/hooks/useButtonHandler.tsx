/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonEventConfigType } from '@/types/types';
import { useRouter } from 'next/router';
import { BUTTON_EVENTS } from '@/utils/constants';
import { directEventToCorrectRoute } from '@/utils/routing';
import useHeader from './useHeader';
import useStore from './useStore';
import useDynamicForm from '@/components/DynamicForm/useDynamicForm';

const useButtonClickHandler = (ButtonEventConfig: ButtonEventConfigType) => {
  //see what type of event to map the correct function
  const { submitForm } = useDynamicForm();
  const router = useRouter();
  const store = useStore();
  const header = useHeader();

  const handleFormSubmit = async () => {
    try {
      const formData = await submitForm();
      directEventToCorrectRoute(ButtonEventConfig, router, store, header, formData);
    } catch (error) {
      console.log('error', error);
    }
  };

  const buttonClickHandler = async () => {
    const { event_type } = ButtonEventConfig;
    switch (event_type) {
      case BUTTON_EVENTS.routing:
        return directEventToCorrectRoute(ButtonEventConfig, router, store, header, null);

      case BUTTON_EVENTS.form:
        return handleFormSubmit();

      case BUTTON_EVENTS.add:
        undefined;

      case BUTTON_EVENTS.delete:
        undefined;

      case BUTTON_EVENTS.edit:
        undefined;

      case BUTTON_EVENTS.delete:
        undefined;

      default:
        undefined;
    }
  };
  return { buttonClickHandler };
};

export default useButtonClickHandler;
