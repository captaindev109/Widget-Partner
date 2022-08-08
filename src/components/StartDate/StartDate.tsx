import { FC } from 'react';

import Card from '@/generics/Card';
import { StartDateProps } from '@/types/types';
import Text from '@/generics/Text';
import Datepicker from '../Datepicker';
import styled from 'styled-components';
import Input from '@/generics/Input';
import Tooltip from '../Tooltip';

const Container = styled(Card)`
  & > :not(:last-child) {
    margin-bottom: ${(props) => props.theme.size.margin.m16};
  }
`;

const StartDate: FC<StartDateProps> = ({ currentInsurance, quotes, onChangeDate }) => {
  return (
    <Container padding="16px" shadow={1} borderRadius="8px" background="white">
      {currentInsurance && (
        <Card display="flex" flexDirection="column">
          <Card marginBottom="8px">
            <Text variant="Body3">{currentInsurance.insuranceSubType}</Text>
          </Card>
          <Card marginBottom="8px">
            <Datepicker
              selected={new Date()}
              disabled
              disableTitle="När din nuvarande försäkring går ut"
              onChange={() => null}
            />
          </Card>
          <Card display="flex" flexDirection="row" alignItems="center">
            <Card marginRight="10px">
              <Input
                type="checkbox"
                label={`Säg upp min nuvarande ${currentInsurance.insuranceSubType} hos ${currentInsurance.insuranceCompany}`}
              />
            </Card>
            <Tooltip
              direction="left"
              text={`Vi kommer att avsluta din gamla försäkring åt dig. Vi kommer påbörja din nya försäkring hos Hedvig så fort din nuvarande avslutas. Du kommer få mer information via email.`}
            />
          </Card>
        </Card>
      )}

      {quotes.map((quote) => (
        <Card display="flex" flexDirection="column" key={quote.name}>
          <Card marginBottom="8px">
            <Text variant="Body3">{quote.displayName}</Text>
          </Card>
          <Datepicker selected={quote.startDate} onChange={(date) => onChangeDate(date, quote.id)} />
        </Card>
      ))}
    </Container>
  );
};

export default StartDate;
