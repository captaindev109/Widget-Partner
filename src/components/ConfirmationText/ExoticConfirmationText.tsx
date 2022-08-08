import { FC } from 'react';
import ConfirmationText from '.';

const ExoticConfirmationText: FC = () => {
  // TODO - get user from store
  // TODO - get form data from store
  // const { userSelector, formDataSelector} = useStore();

  const { userSelector, formDataSelector } = {
    userSelector: {
      email: 'Test@hedvig.se',
    },
    formDataSelector: {
      householdSize: 2,
      activationDate: '18/11/2022',
    },
  };

  return <ConfirmationText {...userSelector} {...formDataSelector} />;
};

export default ExoticConfirmationText;
