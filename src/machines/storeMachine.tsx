import {
  BasicAny,
  BasicString,
  ExoticBundleVariation,
  ExoticQuote,
  StoreCart,
  StoreCartItem,
  StoreCheckout,
  StorePartner,
  StoreUser,
  StoreUserInput,
} from '@/types/types';

import { assign, createMachine } from 'xstate';

type StoreEvents = {
  value?: BasicAny;
  type:
    | 'UPDATE_ROUTES'
    | 'UPDATE_CURRENT_ROUTE'
    | 'UPDATE_BUNDLE_COST'
    | 'UPDATE_BUNDLE_VARIATIONS'
    | 'UPDATE_BUNDLE_QUOTES'
    | 'UPDATE_FORM_DATA'
    | 'UPDATE_SELECTED_BUNDLE_TAB'
    | 'CREATE_CART'
    | 'UPDATE_CART_ITEMS'
    | 'UPDATE_USER'
    | 'UPDATE_START_DATE'
    | 'UPDATE_CHECKOUT'
    | 'CREATE_PARTNER';
};

export interface ContextType {
  _routes: BasicAny[];
  _current_route: BasicString;
  _store: BasicAny;
  _bundleVariations: ExoticBundleVariation[];
  _quotes: ExoticQuote[];
  _formData: BasicAny;
  _selectedBundleTab: BasicString;
  _cart: StoreCart;
  _user: StoreUser;
  _checkout: StoreCheckout;
  _partner: StorePartner;
}

export interface StoreStates {
  states: {
    loading: object;
  };
  value: string;
  context: ContextType;
}

type StoreContext = BasicAny;

const update_routes = (context: ContextType, event: BasicAny) => {
  return event.routes;
};

const update_current_route = (context: ContextType, event: BasicAny) => {
  return event.current_route;
};

const update_bundle_variations = (context: ContextType, event: BasicAny) => {
  return event.value;
};

const update_bundle_quotes = (context: ContextType, event: BasicAny) => {
  return event.value;
};

const update_form_data = (context: ContextType, event: BasicAny) => {
  const { _formData } = context;
  const { value } = event;

  const newFormDataObject = { ..._formData, ...value };
  return newFormDataObject;
};

const update_selected_bundle = (context: ContextType, event: BasicAny) => {
  console.log('update_selected_bundle', event);
  return event.value;
};

const create_cart = (context: ContextType, event: { value: string }): BasicAny => {
  console.log('create_cart', event);
  const { _cart } = context;
  const { value } = event;
  const cart = { ..._cart, id: value };
  return cart;
};

const create_partner = (context: ContextType, event: { value: string }): BasicAny => {
  console.log('create_partner', event);
  return event.value;
};

const update_cart_items = (context: ContextType, event: { value: StoreCartItem[] }): BasicAny => {
  console.log('update_cart_items', event);
  const { _cart } = context;
  const { value } = event;

  const cart = { ..._cart, items: value };
  return cart;
};

const update_user = (context: ContextType, event: { value: StoreUserInput }): BasicAny => {
  console.log('update_user', event);
  const { _user } = context;
  const { value } = event;
  const newUser = { ..._user, ...value };
  return newUser;
};

const update_quote_start_date = (context: ContextType, event: { value: { id: string; date: Date } }): BasicAny => {
  console.log('update_quote_start_date', event);
  const { value } = event;
  const { id, date } = value;
  const { _quotes } = context;
  const newQuotes = _quotes.map((quote) => {
    if (quote.id === id) {
      return { ...quote, startDate: date };
    }
    return quote;
  });
  return newQuotes;
};

const update_checkout = (context: ContextType, event: { value: StoreCheckout }): BasicAny => {
  console.log('update_checkout', event);
  return event.value;
};

export const storeMachine = createMachine<StoreContext, StoreEvents, StoreStates>({
  // Machine identifier
  id: 'store',

  // Initial state
  initial: 'loading',

  // Context
  context: {
    _routes: [],
    _current_route: '',
    _bundleVariations: [],
    _quotes: [],
    _formData: {},
    _selectedBundleTab: '',
    _cart: {
      id: '',
      items: [],
      cost: {
        amount: '',
        currency: '',
      },
    },
    _user: {
      firstName: '',
      lastName: '',
      birthDate: '',
      ssn: '',
      email: '',
      phoneNumber: '',
    },
    _partner: {
      name: 'AVY',
    },
    _checkout: null,
  },

  // State definitions
  states: {
    loading: {
      on: {
        UPDATE_ROUTES: {
          actions: assign({ _routes: update_routes }),
        },
        UPDATE_CURRENT_ROUTE: {
          actions: assign({ _current_route: update_current_route }),
        },
        UPDATE_BUNDLE_VARIATIONS: {
          actions: assign({ _bundleVariations: update_bundle_variations }),
        },
        UPDATE_BUNDLE_QUOTES: {
          actions: assign({ _quotes: update_bundle_quotes }),
        },
        UPDATE_FORM_DATA: {
          actions: assign({ _formData: update_form_data }),
        },
        UPDATE_SELECTED_BUNDLE_TAB: {
          actions: assign({ _selectedBundleTab: update_selected_bundle }),
        },
        CREATE_CART: {
          actions: assign({ _cart: create_cart }),
        },
        UPDATE_CART_ITEMS: {
          actions: assign({ _cart: update_cart_items }),
        },
        UPDATE_USER: {
          actions: assign({ _user: update_user }),
        },
        UPDATE_START_DATE: {
          actions: assign({ _quotes: update_quote_start_date }),
        },
        UPDATE_CHECKOUT: {
          actions: assign({ _checkout: update_checkout }),
        },
        CREATE_PARTNER: {
          actions: assign({ _partner: create_partner }),
        },
      },
    },
  },
});
