import Card from '@/generics/Card';
import Text from '@/generics/Text';
import Title from '@/generics/Title';
import Wrapper from '@/generics/Wrapper';
import Dropdown from './Dropdown';
import { List, ListItem } from './List';
import PolicyText from './PolicyText';
import Tooltip from './Tooltip';

const DROPDOWN_MOCK = [
  {
    label: 'Option 1',
    value: 'option-1',
  },
  {
    label: 'Option 2',
    value: 'option-2',
  },
  {
    label: 'Option 3',
    value: 'option-3',
  },
];

const GetStarted = () => {
  return (
    <Card padding="32px 16px 40px 16px">
      <Card paddingBottom="12px">
        <Title>Prova Hedvig gratis 1 månad</Title>
      </Card>
      <Wrapper>
        <Tooltip size="medium" direction="left" text="TEST tool tip left" />
        <Tooltip size="large" direction="top" text="TEST tool tip right asd qsdasd asd asdasd asd asdasd asd asd asd" />
        <Tooltip size="large" direction="bottom" text="TEST tool tip bottom" />
        <Tooltip direction="right" text="TEST tool tip right asd qsdasd asd asdasd asd asdasd asd asd asd" />
      </Wrapper>
      <Card paddingBottom="24px">
        <Text variant="Body2">
          Med Hedvig får du hjälp från ditt alldeles egna serviceteam direkt i Hedvig-appen. 100% digital försäkring. Du
          är bara några steg bort från att försäkra dig med Hedvig.
        </Text>
      </Card>
      <List>
        <ListItem>
          <Text>Digitalt, enkelt och krångelfritt</Text>
        </ListItem>
        <ListItem>
          <Text>Fullt försäkrad på 3 minuter</Text>
        </ListItem>
        <ListItem>
          <Text>Avsluta Hedvig när du vill</Text>
        </ListItem>
      </List>
      <Card paddingTop="10px">
        <PolicyText />
      </Card>
      <Card paddingTop="10px">
        <Dropdown options={DROPDOWN_MOCK} onChange={() => null} />
      </Card>
    </Card>
  );
};

export default GetStarted;
