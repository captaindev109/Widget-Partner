import { FC, useRef, useState } from 'react';
import styled from 'styled-components';
import { InsuranceSummaryProps, EachComponentDataSchema } from '@/types/types';
import { List } from '../List';
import Card from '@/generics/Card';
import Text from '@/generics/Text';
import { ModalRef } from '../Modal/Modal';
import Modal from '../Modal';
import Button from '../Button';
import View from '@/generics/View';
import viewRenderer from '@/utils/renderer';
import { device, HOME_INSURANCE_TYPES } from '@/utils/constants';

const ModalContentWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 0px 16px 16px;

  width: 90vw;
  height: 90vh;

  @media ${device.tablet} {
    padding: 0px 32px 32px;
    width: 70vw;
    height: 70vh;
  }
`;

const Divider = styled(Card)`
  border-bottom: 1px solid #eaeaea;
`;

//Information Modal Json Data
const ComponentsDataSchema = [
  {
    id: 'information_modal_checkout',
    type: 'display',
    component: 'Card',
    children: [
      {
        id: 'title_card_0001',
        component: 'Card',
        marginBottom: '24px',
        children: [
          {
            id: 'card_0001',
            component: 'Text',
            variant: 'HeadlineS',
            children: 'Ändra uppgifter',
          },
        ],
      },
      {
        id: 'about_you_form',
        component: 'DynamicForm',
        children: [
          {
            id: 'birthDate',
            component: 'Input',
            validationRules: {
              required: {
                value: true,
                message: 'Du måste ange födelsedatum',
              },
              pattern: {
                value: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
                message: 'Ange ett giltigt födelsedatum (YYYY-MM-DD)',
              },
            },
            label: 'Födelsedatum',
            name: 'birthDate',
            type: 'text',
            placeholder: '1994-11-15',
          },
          {
            id: 'numberOfPeople',
            component: 'Dropdown',
            label: 'Välj antal personer att försäkra',
            name: 'householdSize',
            placeholder: '1',
            validationRules: {
              required: {
                value: true,
                message: 'Du måste ange storlek',
              },
            },
            tooltip: 'Välj antal personer att försäkra, om du vill försäkra fler än en person, välj fler personer.',
            options: [
              { label: '1', value: 1 },
              { label: '2', value: 2 },
              { label: '3', value: 3 },
              { label: '4', value: 4 },
              { label: '5', value: 5 },
              { label: '6', value: 6 },
            ],
          },
          {
            id: 'student',
            component: 'Dropdown',
            label: 'Är du student?',
            name: 'student',
            placeholder: 'No',
            validationRules: {
              required: {
                value: true,
                message: 'Du måste ange om du är student',
              },
            },
            options: [
              { label: 'No', value: 'no' },
              { label: 'Yes', value: 'yes' },
            ],
          },
          {
            id: 'address',
            component: 'Input',
            validationRules: {
              required: {
                value: true,
                message: 'Du måste ange gatuadress',
              },
              pattern: {
                value: '^(.+),([^,]+),([^,]+)$',
                message: 'Fel format (Gata, Postnummer, Stad)',
              },
            },
            label: 'Gatuadress',
            name: 'address',
            type: 'text',
            placeholder: 'Vagnvägen 4, 12345 Västerås',
          },
          {
            id: 'size',
            component: 'Input',
            validationRules: {
              required: {
                value: true,
                message: 'Du måste ange storlek',
              },
            },
            label: 'Boarea',
            name: 'livingSpace',
            type: 'number',
            placeholder: '34 m2',
          },
          {
            id: 'subType',
            component: 'Dropdown',
            label: 'Typ av bostad',
            name: 'subType',
            placeholder: 'RENT',
            validationRules: {
              required: {
                value: true,
                message: 'Du måste ange typ av bostad',
              },
            },
            options: [
              { label: 'Hyresrätt', value: 'RENT' },
              { label: 'Bostadsrätt', value: 'BRF' },
            ],
          },
        ],
      },
    ],
  },
];

//The main component with dynamic rendering and state
const InsuranceSummary: FC<InsuranceSummaryProps> = ({ onSave, onClose, user, data }) => {
  const modalRef = useRef<ModalRef>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { firstName, lastName, birthDate, email, phoneNumber } = user;

  const handleOpenModal = () => {
    modalRef.current?.toggle?.();
  };

  const handleSave = async () => {
    try {
      setError(false);
      setLoading(true);
      await onSave?.();
      modalRef.current?.toggle?.();
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = async () => {
    await onClose?.();
  };

  return (
    <Card shadow={1} borderRadius="8px" padding="16px 18px" background="white">
      <List data-testid="InsuranceSummary" display="flex" direction="column" spaceBetween="16px">
        <Card display="flex" justifyContent="space-between">
          <Text variant="Body3" color="gray900">
            Försäkringstagare
          </Text>
          <Text variant="Body3" color="gray700">
            {firstName} {lastName}
          </Text>
        </Card>
        <Card display="flex" justifyContent="space-between">
          <Text variant="Body3" color="gray900">
            Antal försäkrade
          </Text>
          <Text variant="Body3" color="gray700">
            {data.householdSize > 1 ? ` Du + ${data.householdSize - 1} personer` : '1 person'}
          </Text>
        </Card>
        <Card display="flex" justifyContent="space-between">
          <Text variant="Body3" color="gray900">
            Födelsedag
          </Text>
          <Text variant="Body3" color="gray700">
            {birthDate}
          </Text>
        </Card>
        <Divider />
        <Card display="flex" justifyContent="space-between">
          <Text variant="Body3" color="gray900">
            Gatuadress
          </Text>
          <Text variant="Body3" color="gray700">
            {data.address}
          </Text>
        </Card>
        {/* <Card display="flex" justifyContent="space-between">
          <Text variant="Body3" color="gray900">
            Postkod
          </Text>
          <Text variant="Body3" color="gray700">
            {data.zipCode}
          </Text>
        </Card> */}
        <Card display="flex" justifyContent="space-between">
          <Text variant="Body3" color="gray900">
            Typ av bostad
          </Text>
          <Text variant="Body3" color="gray700">
            {data?.subType && HOME_INSURANCE_TYPES[data?.subType]}
          </Text>
        </Card>
        <Divider />
        <Card display="flex" justifyContent="space-between">
          <Text variant="Body3" color="gray900">
            Telefon
          </Text>
          <Text variant="Body3" color="gray700">
            {phoneNumber}
          </Text>
        </Card>
        <Card display="flex" justifyContent="space-between">
          <Text variant="Body3" color="gray900">
            Epost
          </Text>
          <Text variant="Body3" color="gray700">
            {email}
          </Text>
        </Card>
        <Divider />
      </List>
      <Button variant="transparent" onClick={handleOpenModal}>
        <Text variant="Body3" color="purple900">
          Ändra uppgifter
        </Text>
      </Button>
      <Modal ref={modalRef} customCloseMethod={handleClose}>
        <ModalContentWrapper>
          <View components={ComponentsDataSchema}>
            {(component: EachComponentDataSchema) => viewRenderer(component, null)}
          </View>
          <Card width="107px" margin="auto" padding="32px 0px 16px 0px">
            <Button disabled={loading} variant="primary" onClick={handleSave}>
              Spara
            </Button>
          </Card>
          <Card textAlign="center" paddingBottom="32px">
            {error ? (
              <Text color="red500">Det gick tyvärr inte att spara, se till att all information är korrekt.</Text>
            ) : (
              <Text>Ditt pris kan komma att ändras</Text>
            )}
          </Card>
        </ModalContentWrapper>
      </Modal>
    </Card>
  );
};

export default InsuranceSummary;
