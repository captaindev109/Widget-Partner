import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Page from '@/generics/Page';
import Header from '@/containers/Header';
import HeaderContainer from '@/containers/HeaderContainer/HeaderContainer';
import Main from '@/containers/Main';
import MainTopContainer from '@/containers/MainTopContainer';
import View from '@/generics/View';
import { BasicAny, EachComponentDataSchema } from '@/types/types';
import viewRenderer from '@/utils/renderer';
import MainBottomContainer from '@/containers/MainBottomContainer';
import CheckoutFooter from './components/CheckoutFooter';
import HeaderWithNavigation from '@/components/HeaderWithNavigation';

const CheckoutMainComponent: React.FC = (): JSX.Element => {
  const [ComponentsDataSchema, setComponentsDataSchema] = useState<BasicAny>(null);

  useEffect(() => {
    const fetch_schema_for_current_route = async () => {
      const fetch_schema_request = await fetch(`${process.env.NEXT_PUBLIC_WIDGET_URL}/api/checkout`);
      const fetched_schema_response = await fetch_schema_request.json();
      setComponentsDataSchema(fetched_schema_response.data[0].ui_data);
    };

    fetch_schema_for_current_route();
  }, []);

  return (
    ComponentsDataSchema && (
      <Page>
        <Header>
          <HeaderContainer>
            <HeaderWithNavigation />
          </HeaderContainer>
        </Header>
        <Main>
          <MainTopContainer>
            <View components={ComponentsDataSchema}>
              {(component: EachComponentDataSchema) => viewRenderer(component, null)}
            </View>
          </MainTopContainer>
          <MainBottomContainer>
            <CheckoutFooter />
          </MainBottomContainer>
        </Main>
      </Page>
    )
  );
};

// This page will be rendered in server, some vars and funcs wont work same as react
const index: NextPage = () => {
  return <CheckoutMainComponent />;
};

export default index;
