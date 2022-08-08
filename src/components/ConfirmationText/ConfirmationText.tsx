import { FC } from 'react';
import { ConfirmationTextProps } from '@/types/types';
import Card from '@/generics/Card';
import Text from '@/generics/Text';

//The main component with dynamic rendering and state
export const ConfirmationText: FC<ConfirmationTextProps> = ({ activationDate, householdSize, email }) => {
  const householdText = householdSize === 1 ? 'Du är nu skyddad' : `Du + ${householdSize - 1} är nu skyddade`;
  return (
    <Card>
      <Text
        variant="Body2"
        color="gray700"
      >{`${householdText}. Försäkringen aktiveras ${activationDate}. Ett bekräftelsemail har skickats till ${email}.`}</Text>
    </Card>
  );
};

export default ConfirmationText;
