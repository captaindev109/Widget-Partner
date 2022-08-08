import { ContextType } from '@/machines/storeMachine';
import { GlobalStateContext } from '@/providers/GlobalStateProvider';
import { InsurableLimit, InsuranceTerm, MonetaryAmountV2 } from '@/types/schemaTypes';
import {
  BasicAny,
  ExoticBundleVariation,
  ExoticQuote,
  ExoticCartTerms,
  FormData,
  StoreCartItem,
  StoreCartItemDetails,
  StoreCheckout,
  StoreUser,
  StoreUserInput,
  StorePartner,
} from '@/types/types';

import { useActor, useSelector } from '@xstate/react';
import { useCallback, useContext } from 'react';

export interface useStore_types {
  state: { context: ContextType };
  update_routes: (config: { type: 'UPDATE_ROUTES'; routes: object | undefined }) => void;
  update_current_route: (config: { type: 'UPDATE_CURRENT_ROUTE'; current_route: string | undefined }) => void;
  updateBundleVariations: (newBundleVariations: ExoticBundleVariation[]) => void;
  updateBundleQuotes: (newBundleQuotes: ExoticQuote[]) => void;
  updateFormData: (formData: FormData) => void;
  updateSelectedBundleTab: (newBundleId: BasicAny) => void;
  createStoreCart: (cartId: string) => void;
  updateStoreCartItems: (cartItems: StoreCartItem[]) => void;
  updateQuoteStartDate: (date: Date, id: string) => void;
  updateStoreUser: (user: StoreUserInput) => void;
  updateStoreCheckout: (checkout: StoreCheckout) => void;
  createStorePartner: (partner: StorePartner) => void;

  formDataSelector: FormData;
  bundleQuotesSelector: ExoticQuote[];
  bundleVariationsSelector: ExoticBundleVariation[];
  limitsSelector: InsurableLimit[];
  offerTermsSelector: InsuranceTerm[];
  checkoutTermsSelector: BasicAny[];
  cartIdSelector: string;
  cartItemsSelector: StoreCartItem[];
  cartCostSelector: MonetaryAmountV2;
  userSelector: StoreUser;
  checkoutSelector: StoreCheckout;
  cartItemsDetailsSelector: StoreCartItemDetails[];
  partnerSelector: StorePartner;
}

const selectFormData = ({ context }: { context: ContextType }) => {
  if (context?._formData) {
    return context?._formData;
  }
  return {};
};

const selectBundleVariations = ({ context }: { context: ContextType }): ExoticBundleVariation[] => {
  return context?._bundleVariations ?? [];
};

const selectQuotes = ({ context }: { context: ContextType }): ExoticQuote[] => {
  const cartItems = context?._cart?.items ?? [];
  return context?._quotes?.filter((quote) => cartItems.includes(quote.id)) ?? [];
};

const selectTabTerms = ({ context }: { context: ContextType }): InsuranceTerm[] => {
  const selectedBundle = context?._quotes?.find((bundle: ExoticQuote) => bundle.id === context._selectedBundleTab);
  return selectedBundle?.insuranceTerms ?? [];
};

const selectCartTerms = ({ context }: { context: ContextType }): ExoticCartTerms[] => {
  const cartItems = context?._cart?.items ?? [];
  const quotesInCart = context?._quotes?.filter((quote) => cartItems.includes(quote.id)) ?? [];
  return quotesInCart.map((quote) => ({
    displayName: quote.displayName,
    insuranceTerms: quote.insuranceTerms,
  }));
};

const selectQuoteLimits = ({ context }: { context: ContextType }): InsurableLimit[] => {
  const selectedBundle = context?._quotes?.find((bundle: ExoticQuote) => bundle.id === context._selectedBundleTab);
  return selectedBundle?.insurableLimits ?? [];
};

const selectCartId = ({ context }: { context: ContextType }): string => {
  return context?._cart?.id ?? '';
};

const selectCartItems = ({ context }: { context: ContextType }): StoreCartItem[] => {
  return context?._cart?.items ?? [];
};

const selectCartCost = ({ context }: { context: ContextType }): MonetaryAmountV2 => {
  const { _cart, _quotes } = context;

  const cost = _cart.items.reduce(
    (acc: MonetaryAmountV2, item: string): MonetaryAmountV2 => {
      const quote = _quotes.find((quote) => quote.id === item);
      if (!quote) return acc;

      const quoteAmount = Number(quote.cost.amount) + Number(acc.amount);
      const quoteCurrency = quote.cost.currency;
      const newCost = { amount: String(quoteAmount), currency: quoteCurrency };

      return newCost;
    },
    { amount: '0', currency: 'SEK' }
  );

  return cost;
};

const selectUser = ({ context }: { context: ContextType }): StoreUser => {
  return context?._user;
};

const selectCheckout = ({ context }: { context: ContextType }): StoreCheckout => {
  return context?._checkout;
};

const selectCartItemsDetails = ({ context }: { context: ContextType }): StoreCartItemDetails[] => {
  const { _cart, _quotes } = context;
  return _quotes
    ?.filter((quote) => _cart.items.includes(quote.id))
    ?.map((quote) => ({
      id: quote.id,
      displayName: quote.name,
      cost: quote.cost,
      typeOfContract: quote.typeOfContract,
    }));
};

const selectPartner = ({ context }: { context: ContextType }): StorePartner => {
  return context?._partner;
};

const useStore: () => useStore_types = (): useStore_types => {
  const { storeService } = useContext(GlobalStateContext);

  const [state, send] = useActor(storeService);

  const formDataSelector = useSelector(storeService, selectFormData);
  const bundleVariationsSelector = useSelector(storeService, selectBundleVariations);
  const bundleQuotesSelector = useSelector(storeService, selectQuotes);
  const offerTermsSelector = useSelector(storeService, selectTabTerms);
  const checkoutTermsSelector = useSelector(storeService, selectCartTerms);
  const limitsSelector = useSelector(storeService, selectQuoteLimits);
  const cartIdSelector = useSelector(storeService, selectCartId);
  const cartItemsSelector = useSelector(storeService, selectCartItems);
  const cartCostSelector = useSelector(storeService, selectCartCost);
  const userSelector = useSelector(storeService, selectUser);
  const checkoutSelector = useSelector(storeService, selectCheckout);
  const cartItemsDetailsSelector = useSelector(storeService, selectCartItemsDetails);
  const partnerSelector = useSelector(storeService, selectPartner);

  // Cart id selector

  const update_routes = (config: { type: 'UPDATE_ROUTES' }) => {
    send(config);
  };

  const update_current_route = (config: { type: 'UPDATE_CURRENT_ROUTE' }) => {
    send(config);
  };

  const updateBundleVariations = useCallback(
    (newBundleVariations) => {
      send({ type: 'UPDATE_BUNDLE_VARIATIONS', value: newBundleVariations });
    },
    [send]
  );

  const updateBundleQuotes = useCallback(
    (newBundleQuotes) => {
      send({ type: 'UPDATE_BUNDLE_QUOTES', value: newBundleQuotes });
    },
    [send]
  );

  const updateFormData = useCallback(
    (newFormData) => {
      send({ type: 'UPDATE_FORM_DATA', value: newFormData });
    },
    [send]
  );

  const updateSelectedBundleTab = useCallback(
    (newBundleId) => {
      send({ type: 'UPDATE_SELECTED_BUNDLE_TAB', value: newBundleId });
    },
    [send]
  );

  const createStoreCart = useCallback(
    (cartId) => {
      send({ type: 'CREATE_CART', value: cartId });
    },
    [send]
  );

  const updateStoreCartItems = useCallback(
    (cartItems) => {
      send({ type: 'UPDATE_CART_ITEMS', value: cartItems });
    },
    [send]
  );

  const updateQuoteStartDate = useCallback(
    (date: Date, id: string) => {
      send({ type: 'UPDATE_START_DATE', value: { date, id } });
    },
    [send]
  );

  const updateStoreUser = useCallback(
    (user) => {
      send({ type: 'UPDATE_USER', value: user });
    },
    [send]
  );

  const updateStoreCheckout = useCallback(
    (checkout) => {
      send({ type: 'UPDATE_CHECKOUT', value: checkout });
    },
    [send]
  );

  const createStorePartner = useCallback(
    (partner) => {
      send({ type: 'CREATE_PARTNER', value: partner });
    },
    [send]
  );

  return {
    state,
    update_routes,
    update_current_route,
    updateBundleVariations,
    updateBundleQuotes,
    updateFormData,
    updateSelectedBundleTab,
    formDataSelector,
    bundleVariationsSelector,
    bundleQuotesSelector,
    limitsSelector,
    offerTermsSelector,
    checkoutTermsSelector,
    createStoreCart,
    cartIdSelector,
    updateStoreCartItems,
    cartItemsSelector,
    cartCostSelector,
    userSelector,
    checkoutSelector,
    cartItemsDetailsSelector,
    updateQuoteStartDate,
    updateStoreUser,
    updateStoreCheckout,
    createStorePartner,
    partnerSelector,
  };
};

export default useStore;
