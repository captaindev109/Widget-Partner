import { gql } from '@apollo/client';

export const BundleCostDataFragmentDocument = gql`
  fragment BundleCostData on InsuranceCost {
    freeUntil
    monthlyDiscount {
      amount
      currency
    }
    monthlyGross {
      amount
      currency
    }
    monthlyNet {
      amount
      currency
    }
  }
`;

export const QuoteDataFragmentDocument = gql`
  fragment QuoteData on BundledQuote {
    price {
      amount
      currency
    }
    id
    startDate
    typeOfContract
    displayName(locale: $locale)
    contractPerils(locale: $locale) {
      title
      description
      covered
      exceptions
      info
      icon {
        variants {
          light {
            svgUrl
          }
        }
      }
    }
    insurableLimits(locale: $locale) {
      label
      limit
      description
      type
    }
    insuranceTerms(locale: $locale) {
      displayName
      url
      type
    }
    quoteDetails {
      ... on SwedishApartmentQuoteDetails {
        street
        zipCode
        householdSize
        livingSpace
        type
      }
      ... on SwedishAccidentDetails {
        isStudent
      }
    }
  }
`;

export const GetQuoteCartDocument = gql`
  query QuoteCart($id: ID!, $locale: Locale!) {
    quoteCart(id: $id) {
      id
      bundle {
        possibleVariations {
          id
          tag(locale: $locale)
          bundle {
            displayName(locale: $locale)
            bundleCost {
              monthlyGross {
                amount
                currency
              }
            }
          }
        }
        bundleCost {
          monthlyGross {
            amount
            currency
          }
        }
        quotes {
          ...QuoteData
        }
      }
      campaign {
        incentive {
          ... on MonthlyCostDeduction {
            amount {
              amount
              currency
            }
          }
          ... on PercentageDiscountMonths {
            percentageDiscount
            quantity
          }
        }
        code
        expiresAt
      }
      checkout {
        status
      }
    }
  }
  ${QuoteDataFragmentDocument}
`;

export const CreateQuoteBundleDocument = gql`
  mutation CreateQuoteBundle($quoteCartId: ID!, $quotes: [JSON!]!) {
    quoteCart_createQuoteBundle(id: $quoteCartId, input: { payload: $quotes }) {
      ... on QuoteCart {
        id
        bundle {
          quotes {
            id
          }
        }
      }
      ... on QuoteBundleError {
        message
        type
        limits {
          code
        }
      }
    }
  }
`;

export const EditQuoteDocument = gql`
  mutation EditBundledQuote($quoteCartId: ID!, $quoteId: ID!, $payload: JSON!) {
    quoteCart_editQuote(id: $quoteCartId, quoteId: $quoteId, payload: $payload) {
      ... on QuoteCart {
        id
        bundle {
          quotes {
            id
            price {
              amount
              currency
            }
          }
        }
      }
      ... on QuoteBundleError {
        message
        type
        limits {
          code
        }
      }
    }
  }
`;

export const StartCheckoutDocument = gql`
  mutation StartCheckout($quoteCartId: ID!, $quoteIds: [ID!]!) {
    quoteCart_startCheckout(id: $quoteCartId, quoteIds: $quoteIds) {
      ... on QuoteCart {
        checkout {
          status
          statusText
        }
      }
      ... on Error {
        message
      }
    }
  }
`;

export const SignStatusDocument = gql`
  query SignStatus {
    signStatus {
      collectStatus {
        status
        code
      }
      signState
    }
  }
`;

export const CreateAccessTokenDocument = gql`
  mutation CreateAccessToken($quoteCartId: ID!) {
    quoteCart_createAccessToken(id: $quoteCartId) {
      accessToken
    }
  }
`;

export const CheckoutStatusDocument = gql`
  query CheckoutStatus($quoteCartId: ID!) {
    quoteCart(id: $quoteCartId) {
      id
      checkout {
        status
        statusText
      }
    }
  }
`;

export const InitWidgetDocument = gql`
  mutation InitWidget($market: Market!, $locale: String!, $requestId: String!, $partnerId: String!) {
    quoteCart_initWidget(input: { market: $market, locale: $locale, requestId: $requestId, partnerId: $partnerId }) {
      id
    }
  }
`;

export const RegisterDirectDebitMutation = gql`
  mutation RegisterDirectDebit($clientContext: RegisterDirectDebitClientContext!) {
    registerDirectDebit(clientContext: $clientContext) {
      url
      orderId
    }
  }
`;
