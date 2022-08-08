import { BundledQuote, QuoteBundleVariant, QuoteCart, TypeOfContract } from '@/types/schemaTypes';
import {
  BasicAny,
  ExoticBundleVariation,
  ExoticQuote,
  FormattedQuoteCart,
  FormattedQuoteData,
  FormData,
  InitialQueryData,
  StoreUser,
} from '@/types/types';

const formatBundleVariations = (variationsResponse: Array<QuoteBundleVariant>): ExoticBundleVariation[] => {
  return variationsResponse?.map((variation) => ({
    id: variation?.id,
    tag: variation?.tag ?? undefined,
    name: variation.bundle?.displayName,
    cost: variation.bundle?.bundleCost?.monthlyGross,
  }));
};

const formatBundleQuotes = (quotesResponse: Array<BundledQuote>): ExoticQuote[] => {
  return quotesResponse?.map((quote) => ({
    displayName: quote.displayName,
    id: quote.id,
    name: quote.displayName,
    startDate: quote?.startDate ?? new Date(),
    perils: quote.contractPerils,
    insurableLimits: quote.insurableLimits,
    insuranceTerms: quote.insuranceTerms,
    details: quote.data,
    typeOfContract: quote.typeOfContract,
    cost: quote.price,
  }));
};

const formatQuoteCartData = (config: data_parser_config_type<QuoteCart>): FormattedQuoteCart => {
  const quoteCart = config.data_to_parse;
  const bundleVariations = formatBundleVariations(quoteCart?.bundle?.possibleVariations);
  const bundleQuotes = formatBundleQuotes(quoteCart?.bundle?.quotes);
  return { bundleVariations, bundleQuotes };
};

interface data_parser_config_type<T> {
  data_to_parse: T;
  type_of_parsing:
    | 'routing'
    | 'ui_component'
    | 'form_data_to_swedish_apartment'
    | 'form_data_to_swedish_accident'
    | 'form_data_to_user'
    | 'url_query_data'
    | 'quote_cart_response'
    | undefined;
}

const route_generator = (config: data_parser_config_type<BasicAny>) => {
  return config.data_to_parse.map((display: BasicAny) => ({
    id: display.id,
    route: display.id,
  }));
};

const ui_components_generator = (config: data_parser_config_type<BasicAny>) => {
  return config && config.data_to_parse;
};

export const parseData = (config: data_parser_config_type<BasicAny>) => {
  switch (config.type_of_parsing) {
    case 'routing':
      return route_generator(config);

    case 'ui_component':
      return ui_components_generator(config);

    case 'form_data_to_swedish_apartment':
      return formatFormDataToQuoteData(config, TypeOfContract.SeApartmentBrf);

    case 'form_data_to_swedish_accident':
      return formatFormDataToQuoteData(config, TypeOfContract.SeAccident);

    case 'form_data_to_user':
      return extractUserDataFromFormData(config);

    case 'url_query_data':
      return formatInitialQueryData(config);

    case 'quote_cart_response':
      return formatQuoteCartData(config);

    default:
      return undefined;
  }
};

const formatFormDataToQuoteData = (
  config: data_parser_config_type<BasicAny>,
  typeOfContract: TypeOfContract
): FormattedQuoteData => {
  const { householdSize, livingSpace, student, subType, address } = config.data_to_parse;
  const [street, zipCode, city] = (address || '').split(', ');

  if (typeOfContract.includes('SE_APARTMENT')) {
    return {
      type: 'apartment',
      street,
      zipCode,
      city,
      numberCoInsured: Number(householdSize) - 1,
      livingSpace: Number(livingSpace),
      subType,
    };
  }
  return {
    type: 'swedishAccident',
    street,
    zipCode,
    city,
    numberCoInsured: Number(householdSize) - 1,
    livingSpace: Number(livingSpace),
    student: student === 'true',
  };
};

const formatBirthDateFromSsn = (ssn?: string): string => {
  if (!ssn) return '';

  if (ssn.length === 12) {
    const birthDate = ssn.substring(0, 8);
    const year = birthDate.substring(0, 4);
    const month = birthDate.substring(4, 6);
    const day = birthDate.substring(6, 8);
    return `${year}-${month}-${day}`;
  } else {
    const birthDate = ssn.substring(0, 6);
    let year = birthDate.substring(0, 2);

    // if the year is less than today's year, it is 20xx, otherwise it is 19xx
    const thisYear = new Date().getFullYear().toString().substring(2, 4);
    year = year < thisYear ? `20${year}` : `19${year}`;

    const month = birthDate.substring(2, 4);
    const day = birthDate.substring(4, 6);
    return `${year}-${month}-${day}`;
  }
};

const formatAddressFromStreetCityZip = (street?: string, city?: string, zipCode?: string): string => {
  if (!street || !city || !zipCode) return '';
  return `${street}, ${zipCode}, ${city}`;
};

const formatInitialQueryData = (config: data_parser_config_type<InitialQueryData>): FormData => {
  const { subType, city, zipCode, street, coInsured = 0, ssn } = config.data_to_parse;

  const address = formatAddressFromStreetCityZip(street, city, zipCode);
  const birthDate = formatBirthDateFromSsn(ssn);

  return {
    ...config.data_to_parse,
    address,
    ssn,
    birthDate,
    subType,
    householdSize: Number(coInsured) + 1,
  };
};

const extractUserDataFromFormData = (config: data_parser_config_type<FormData>): StoreUser => {
  const values = {} as StoreUser;
  Object.entries(config.data_to_parse).forEach(([key, value]) => {
    if (
      key === 'firstName' ||
      key === 'lastName' ||
      key === 'birthDate' ||
      key === 'ssn' ||
      key === 'email' ||
      key === 'phoneNumber'
    ) {
      values[key] = value;
    }
  });

  return values;
};
