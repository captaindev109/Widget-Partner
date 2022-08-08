import Button from '@/components/Button';
import Dropdown from '@/components/Dropdown';
import { List } from '@/components/List';
import Card from '@/generics/Card';
import Input from '@/generics/Input';
import Text from '@/generics/Text';
import { BasicAny } from '@/types/types';
import { device } from '@/utils/constants';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const StyledForm = styled.form``;

const MOCK_QUERY = {
  city: 'Stockholm',
  coInsured: '1',
  email: 'sven.svensson@hedvig.com',
  firstName: 'Sven',
  lastName: 'Svensson',
  livingSpace: '65',
  partnerId: '2ce2405b-aa3a-4e0b-81cf-ac4775d477d1',
  phoneNumber: '0701234567',
  requestId: uuidv4(),
  ssn: '199509291234',
  street: 'Storgatan 1',
  student: 'no',
  subType: 'RENT',
  zipCode: '12345',
};

const validation = {
  required: true,
  message: 'Required',
};

const FormWrapper = styled(Card)`
  @media ${device.tablet} {
    min-width: 500px;
    max-width: 700px;
    width: 45%;
    margin: auto;
  }
`;

// This page will be rendered in server, some vars and funcs wont work same as react
const Index: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: MOCK_QUERY });
  const router = useRouter();

  const onSubmit = (data: BasicAny) => {
    console.log('data', data);
    router.push({
      pathname: '/',
      query: data,
    });
  };

  return (
    <FormWrapper padding="16px">
      <Card marginBottom="16px">
        <Text variant="HeadlineS">Widget debugger</Text>
      </Card>
      <Card marginBottom="24px">
        <Text variant="Body2">Ange dina värden för att sedan bli vidarebefodrar till widgeten</Text>
      </Card>

      <StyledForm>
        <List spaceBetween="16px">
          <Input
            error={!!errors['firstName']}
            helperText={errors['firstName'] && 'Required'}
            label="Förnamn"
            type="text"
            placeholder="Sven"
            register={register('firstName', validation)}
          />
          <Input
            error={!!errors['lastName']}
            helperText={errors['lastName'] && 'Required'}
            label="Efternamn"
            type="text"
            placeholder="Svensson"
            register={register('lastName', validation)}
          />
          <Input
            error={!!errors['email']}
            helperText={errors['email'] && 'Required'}
            label="Email"
            type="text"
            placeholder="Sven.svensson@hedvig.com"
            register={register('email', validation)}
          />
          <Input
            error={!!errors['phoneNumber']}
            helperText={errors['phoneNumber'] && 'Required'}
            label="Telefonnummer"
            type="text"
            placeholder="0701234567"
            register={register('phoneNumber', validation)}
          />
          <Input
            error={!!errors['ssn']}
            helperText={errors['ssn'] && 'Required'}
            label="Personnummer"
            type="text"
            placeholder="199509291234"
            register={register('ssn', validation)}
          />
          <Input label="Gata" type="text" placeholder="Storgatan 1" register={register('street')} />
          <Input label="Postnummer" type="text" placeholder="12345" register={register('zipCode')} />
          <Input label="Stad" type="text" placeholder="Stockholm" register={register('city')} />
          <Input
            error={!!errors['partnerId']}
            helperText={errors['partnerId'] && 'Required'}
            label="Partner Id"
            type="text"
            placeholder="1234-5678-91011"
            register={register('partnerId', validation)}
          />
          <Input
            error={!!errors['requestId']}
            helperText={errors['requestId'] && 'Required'}
            label="Request Id"
            type="text"
            placeholder="1234-5678-91011"
            register={register('requestId', validation)}
          />
          <Input label="Boyta" type="text" placeholder="25" register={register('livingSpace')} />

          <Dropdown
            label="Är du student?"
            options={[
              { label: 'Nej', value: 'no' },
              { label: 'Ja', value: 'yes' },
            ]}
            placeholder="No"
            register={register('student')}
          />

          <Dropdown
            label="Antal personer att försäkra"
            options={[
              { label: '1', value: '1' },
              { label: '2', value: '2' },
              { label: '3', value: '3' },
              { label: '4', value: '4' },
              { label: '5', value: '5' },
              { label: '6', value: '6' },
            ]}
            placeholder="1"
            register={register('coInsured')}
          />

          <Dropdown
            error={!!errors['subType']}
            helperText={errors['subType'] && 'Required'}
            label="Typ av lägenhet"
            options={[
              { label: 'Bostadsrätt', value: 'BRF' },
              { label: 'Hyresrätt', value: 'RENT' },
            ]}
            placeholder="1"
            register={register('subType', validation)}
          />

          <Button onClick={handleSubmit(onSubmit)}>Gå till widget</Button>
        </List>
      </StyledForm>
    </FormWrapper>
  );
};

export default Index;
