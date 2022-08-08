import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import View from '@/generics/View';
import { BasicAny, EachComponentDataSchema } from '@/types/types';
import viewRenderer from '@/utils/renderer';

const ConfirmationComponent: React.FC = (): JSX.Element => {
  const [ComponentsDataSchema, setComponentsDataSchema] = useState<BasicAny>(null);

  useEffect(() => {
    const fetch_schema_for_current_route = async () => {
      const fetch_schema_request = await fetch(`${process.env.NEXT_PUBLIC_WIDGET_URL}/api/confirmation`);
      const fetched_schema_response = await fetch_schema_request.json();
      setComponentsDataSchema(fetched_schema_response.data);
    };

    fetch_schema_for_current_route();
  }, []);

  return (
    ComponentsDataSchema && (
      <View components={ComponentsDataSchema}>
        {(component: EachComponentDataSchema) => viewRenderer(component, null)}
      </View>
    )
  );
};

// This page will be rendered in server, some vars and funcs wont work same as react
const index: NextPage = () => {
  return <ConfirmationComponent />;
};

export default index;
