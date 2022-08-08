import React, { Fragment, useEffect } from 'react';
import { NextPage } from 'next';
import Card from '@/generics/Card';
import Head from 'next/head';
import Page from '@/generics/Page';
import Header from '@/containers/Header';
import HeaderContainer from '@/containers/HeaderContainer/HeaderContainer';
import Main from '@/containers/Main';
import MainTopContainer from '@/containers/MainTopContainer';
import MainBottomContainer from '@/containers/MainBottomContainer';
import NavigationButton from '@/components/NavigationButton';
import HeaderWithNavigation from '@/components/HeaderWithNavigation';

const SwitchMainComponent: React.FC = (): JSX.Element => {
  useEffect(() => {
    window.addEventListener('message', (event) => {
      const { data } = event;

      if (data.name === 'RESULTS') {
        console.log('Collected data:', data.value);
        // Handle the collected data
      }
    });
  }, []);

  return (
    <Page>
      <Header>
        <HeaderContainer>
          <HeaderWithNavigation />
        </HeaderContainer>
      </Header>
      <Main>
        <MainTopContainer>
          <Card>
            <iframe
              src="https://dc.insurely.se/v2/?clientId=34ef633f-bd4b-4d52-b5aa-798e95ea4f3f"
              sandbox="allow-scripts
    allow-same-origin
    allow-popups
    allow-forms
    allow-popups-to-escape-sandbox
    allow-top-navigation"
            />
          </Card>
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
};

// This page will be rendered in server, some vars and funcs wont work same as react
const index: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Hedvig</title>
        <meta name="description" content="Hedvig Partnet sale solution" />
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript" src="https://dc.insurely.se/v2/assets/js/dc-bootstrap.js"></script>
      </Head>
      <SwitchMainComponent></SwitchMainComponent>
    </Fragment>
  );
};

export default index;
