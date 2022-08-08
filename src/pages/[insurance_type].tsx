import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import View from '@/generics/View';
import { BasicAny, EachComponentDataSchema } from '@/types/types';
import viewRenderer from '@/utils/renderer';
import MetaComponent from '@/generics/Meta';
import Header from '@/containers/Header';
import HeaderContainer from '@/containers/HeaderContainer/HeaderContainer';
import Main from '@/containers/Main';
import MainTopContainer from '@/containers/MainTopContainer';
import MainBottomContainer from '@/containers/MainBottomContainer';
import Page from '@/generics/Page';
import { useRouter } from 'next/router';
import NavigationButton from '@/components/NavigationButton';
import HeaderWithNavigation from '@/components/HeaderWithNavigation';

// Data fetching and state changes shall happen below
const InsuranceTypeMainComponent: React.FC = (): JSX.Element => {
  const [ComponentsDataSchema, setComponentsDataSchema] = useState<BasicAny>();
  const router = useRouter();
  const insurance_type = router.query.insurance_type;

  useEffect(() => {
    const fetch_schema_for_current_route = async () => {
      const fetch_schema_request = await fetch(`${process.env.NEXT_PUBLIC_WIDGET_URL}/api/insurance`);
      const fetched_schema_response = await fetch_schema_request.json();
      // const data = fetched_schema_response.data[0].ui_data[0].children[0];
      const currentComponent = fetched_schema_response.data[0].ui_data.filter(
        (display: BasicAny) => display.id === insurance_type
      );
      if (currentComponent) {
        setComponentsDataSchema(currentComponent);
      }
    };

    fetch_schema_for_current_route();
  }, [insurance_type]);

  if (ComponentsDataSchema) {
    return (
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
            <NavigationButton
              config={{ event_type: 'form', event_destination: 'next' }}
              children="Next"
            ></NavigationButton>
          </MainBottomContainer>
        </Main>
      </Page>
    );
  } else return <MetaComponent>loading</MetaComponent>;
};

// This page will be rendered in server, some vars and funcs wont work same as react
const index: NextPage = () => {
  return <InsuranceTypeMainComponent></InsuranceTypeMainComponent>;
};

export default index;
