import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import View from '@/generics/View';
import { BasicAny, EachComponentDataSchema } from '@/types/types';
import viewRenderer from '@/utils/renderer';
import MetaComponent from '@/generics/Meta';
import { useRouter } from 'next/router';

// Data fetching and state changes shall happen below
const PaymentMainComponent: React.FC = (): JSX.Element => {
  const [ComponentsDataSchema, setComponentsDataSchema] = useState<BasicAny>();
  const router = useRouter();
  let { payment_status } = router.query;
  if (payment_status === 'success' || payment_status === 'fail') payment_status = 'spinner';

  useEffect(() => {
    const fetch_schema_for_current_route = async () => {
      const fetch_schema_request = await fetch(`${process.env.NEXT_PUBLIC_WIDGET_URL}/api/payment`);
      const fetched_schema_response = await fetch_schema_request.json();
      const currentComponent = fetched_schema_response.data[0].ui_data.filter(
        (display: BasicAny) => display.id === payment_status
      );
      if (currentComponent) {
        setComponentsDataSchema(currentComponent);
      }
    };

    fetch_schema_for_current_route();
  }, [payment_status]);

  if (ComponentsDataSchema) {
    return (
      <View components={ComponentsDataSchema}>
        {(component: EachComponentDataSchema) => viewRenderer(component, null)}
      </View>
    );
  } else return <MetaComponent>loading</MetaComponent>;
};

// This page will be rendered in server, some vars and funcs wont work same as react
const index: NextPage = () => {
  return <PaymentMainComponent></PaymentMainComponent>;
};

export default index;
