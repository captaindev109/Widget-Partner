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
import useQuoteStore from '@/hooks/useQuoteStore';
import ExoticFooterWithQuote from '@/components/FooterWithQuote/ExoticFooterWithQuote';
import useCreateQuoteBundle from '@/hooks/useCreateQuoteBundle';
import NavigationButton from '@/components/NavigationButton';
import useStore from '@/hooks/useStore';
import Card from '@/generics/Card';
import Spinner from '@/components/Spinner';
import { CreateSVGComponent } from '@/components/SVGIcons/Index';
import Text from '@/generics/Text';
import HeaderWithNavigation from '@/components/HeaderWithNavigation';

const OfferMainComponent: React.FC = (): JSX.Element => {
  const { bundleQuotesSelector } = useStore();
  const { fetchInitialQuoteCart } = useQuoteStore();
  const [createBundle] = useCreateQuoteBundle();
  const [ComponentsDataSchema, setComponentsDataSchema] = useState<BasicAny>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetch_offer = async () => {
      try {
        setError(false);
        setLoading(true);
        await createBundle();
        await fetchInitialQuoteCart();
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (bundleQuotesSelector.length === 0 && !isLoading && !error) {
      fetch_offer();
    }
  }, [bundleQuotesSelector, createBundle, error, fetchInitialQuoteCart, isLoading]);

  useEffect(() => {
    const fetch_schema_for_current_route = async () => {
      const fetch_schema_request = await fetch(`${process.env.NEXT_PUBLIC_WIDGET_URL}/api/offer`);
      const fetched_schema_response = await fetch_schema_request.json();
      setComponentsDataSchema(fetched_schema_response.data[0].ui_data);
    };

    fetch_schema_for_current_route();
  }, []);

  const getOfferRenderSchema = () => {
    if (isLoading) {
      return (
        <Card
          top="0"
          left="0"
          right="0"
          position="absolute"
          display="flex"
          flex="1"
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner />
        </Card>
      );
    } else if (error) {
      return (
        <Card
          top="0"
          left="0"
          right="0"
          position="absolute"
          display="flex"
          flex="1"
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Card padding="16px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Card marginBottom="12px">{CreateSVGComponent('WarningIcon')}</Card>
            <Card marginBottom="12px">
              <Text textAlign="center" variant="HeadlineS">
                Det gick inte att skapa försäkring
              </Text>
            </Card>
            <Card marginBottom="12px">
              <Text textAlign="center" variant="Body2">
                Försök igen. Om problemet kvarstår, ladda ner Hedvig-appen och skriv till oss i chatten.
              </Text>
            </Card>
            <Card>
              <NavigationButton config={{ event_type: 'routing', current_route: '/offer', event_destination: '/' }}>
                Försök igen
              </NavigationButton>
            </Card>
          </Card>
        </Card>
      );
    } else {
      return (
        <Main>
          <MainTopContainer>
            <View components={ComponentsDataSchema}>
              {(component: EachComponentDataSchema) => viewRenderer(component, null)}
            </View>
          </MainTopContainer>
          <MainBottomContainer>
            <ExoticFooterWithQuote>
              <NavigationButton config={{ event_type: 'routing', event_destination: 'next', current_route: 'offer' }}>
                Gå till översikt
              </NavigationButton>
            </ExoticFooterWithQuote>
          </MainBottomContainer>
        </Main>
      );
    }
  };

  return (
    ComponentsDataSchema && (
      <Page>
        <Header>
          <HeaderContainer>
            <HeaderWithNavigation />
          </HeaderContainer>
        </Header>
        {getOfferRenderSchema()}
      </Page>
    )
  );
};

// This page will be rendered in server, some vars and funcs wont work same as react
const index: NextPage = () => {
  return <OfferMainComponent></OfferMainComponent>;
};

export default index;
