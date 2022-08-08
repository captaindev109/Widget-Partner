import View from '@/generics/View';
import Head from 'next/head';
import viewRenderer from '@/utils/renderer';
import { BasicAny, BasicArray, EachComponentDataSchema } from '@/types/types';
import useStore from '@/hooks/useStore';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { parseData } from '@/utils/dataFormatters';
import useDynamicForm from '@/components/DynamicForm/useDynamicForm';
import useInitWidget from '@/hooks/useInitWidget';
import { v4 as uuidv4 } from 'uuid';

interface InitializeAppSettingsProps<T> {
  initialize_page_data_schema: T;
}
interface initialize_page_data_schemaType<T> {
  initialize_page_data_schema: Array<T>;
  error: Error;
}

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

// collect the configuration from the customer
// A Basic object could start to look like this
// There are more information needs to be address for more customization
// this a model only, Please do not remove it.
// const _app_config_settings: Record<BasicAny, BasicAny> = {
//   data: {
//     partner: {
//       identity_management: {
//         id: 'avy_ab_home_insurance_schema',
//         partner_name: 'avy ab',
//         insurance_type: 'home_insurance',
//         flow_name: 'default',
//         AuthKey: 'jhsjgf7824ifd9732d234230894khsdffbkfd',
//       },
//       design: {
//         fonts: {
//           urls: '',
//         },
//       },
//     },
//     customer: {
//       id: 'johan_doe_tf#8hshos7hg',
//       first_name: 'johan',
//       last_name: 'doe',
//       email: 'johan_doe@universe.com',
//     },
//     other: {},
//   },
// };

const InitializeAppSettings: React.FC<InitializeAppSettingsProps<BasicAny>> = ({
  initialize_page_data_schema,
}): JSX.Element => {
  // init the app setting to send the request for the json schema
  const [fetched_schema_for_dynamic_flow, setfetched_schema_for_dynamic_flow] = useState<BasicAny>();
  const [initializing, setInitializing] = useState<boolean>(false);
  const [error, setError] = useState<BasicAny>(false);
  const { update_routes, update_current_route, updateStoreUser, cartIdSelector } = useStore();
  const initial_app_routes_structure: BasicAny[] = [];
  const router = useRouter();

  const query = process.env.NODE_ENV === 'development' ? MOCK_QUERY : router.query;

  const [initWidget] = useInitWidget();
  const { resetForm } = useDynamicForm();

  useEffect(() => {
    // Format the query parameters and add to the store
    const initiateStores = () => {
      const formattedQueryData = parseData({ data_to_parse: query, type_of_parsing: 'url_query_data' });
      const userData = parseData({ data_to_parse: formattedQueryData, type_of_parsing: 'form_data_to_user' });
      // Initialize the store with query data
      updateStoreUser(userData);
      // Initialize the form with query data
      resetForm(formattedQueryData);
    };
    if (Object.keys(query).length) {
      initiateStores();
    }
  }, [resetForm, query, updateStoreUser]);

  useEffect(() => {
    // Initialize the quote cart on app init
    const { partnerId, requestId } = query;
    const initializeApp = async () => {
      try {
        setInitializing(true);
        await initWidget(requestId, partnerId);
      } catch (err) {
        setError(err);
        console.log('err', err);
      } finally {
        setInitializing(false);
      }
    };

    const sendRequestToBackendForSchema = async () => {
      try {
        const Fetch_Dynamic_Flow = await fetch(`${process.env.NEXT_PUBLIC_WIDGET_URL}/api/insurance`);
        const Response_For_Dynamic_Flow = await Fetch_Dynamic_Flow.json();
        setfetched_schema_for_dynamic_flow(Response_For_Dynamic_Flow);
      } catch (err) {
        setError(err);
        console.log('error', error);
      }
    };

    if (!cartIdSelector && !initializing && partnerId && requestId && !error) {
      initializeApp();
      sendRequestToBackendForSchema();
    }
  }, [cartIdSelector, error, initWidget, initializing, query]);

  useEffect(() => {
    const initializeCurrentRoute = () => {
      // init the current route with root "/" since we are in the first loading of the app
      // for the current alpha it's okay, however we should consider where will be a better place
      // to init the current path to /
      let is_it_root = false;
      if (router.pathname === '/') {
        const _root_path = {
          id: 'root',
          route: router.pathname as string,
        };
        is_it_root = true;
        initial_app_routes_structure.push(_root_path);
      }

      if (fetched_schema_for_dynamic_flow) {
        //TODOS:

        //arrange to see the data strcuture
        const app_ui_schema: BasicAny[] = fetched_schema_for_dynamic_flow.data[0].ui_data;

        // update the global state for raw data?
        // parse the raw data and format it
        const parse_routes_from_app_ui_schema: BasicAny = parseData({
          data_to_parse: app_ui_schema,
          type_of_parsing: 'routing',
        });

        // start building the dynamic routes
        const _routes = [...initial_app_routes_structure, ...parse_routes_from_app_ui_schema];
        const _current_route = is_it_root ? _routes[0].route : '404';

        //update the store
        update_routes({ type: 'UPDATE_ROUTES', routes: _routes });
        update_current_route({ type: 'UPDATE_CURRENT_ROUTE', current_route: _current_route });
      }
    };
    if (!initializing) {
      initializeCurrentRoute();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetched_schema_for_dynamic_flow, initializing]);

  const ComponentsDataSchema = initialize_page_data_schema && initialize_page_data_schema.data;

  return (
    ComponentsDataSchema && (
      <View components={ComponentsDataSchema}>
        {(component: EachComponentDataSchema) => viewRenderer(component, null)}
      </View>
    )
  );
};
// data fetching and state won't work with next pages, do it in the main component
export default function index({ initialize_page_data_schema, error }: initialize_page_data_schemaType<BasicArray>) {
  return (
    <Fragment>
      <Head>
        <title>Hedvig</title>
        <meta name="description" content="Hedvig Partnet sale solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!error && <InitializeAppSettings initialize_page_data_schema={initialize_page_data_schema} />}
    </Fragment>
  );
}
// Server side render the landing page, the api fetch happens while building
export async function getStaticProps(): Promise<BasicAny> {
  try {
    const fetch_Initialize_Page_Schema = await fetch(`${process.env.NEXT_PUBLIC_WIDGET_URL}/api/landing_page`);
    const response_For_Initialize_Page = await fetch_Initialize_Page_Schema.json();
    return {
      props: {
        initialize_page_data_schema: response_For_Initialize_Page,
      },
    };
  } catch (error: BasicAny) {
    return {
      props: {
        error: true,
      },
    };
  }
}
