import { BasicAny } from './types';

export type Exact<T extends { [key: string]: string }> = {
  [K in keyof T]: T[K];
};

export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  LocalDate: BasicAny;
  JSON: BasicAny;
};

/** An enum representing explicitly endorsed Locales supported by our system. */
export enum Locale {
  SvSe = 'sv_SE',
  EnSe = 'en_SE',
  NbNo = 'nb_NO',
  EnNo = 'en_NO',
  DaDk = 'da_DK',
  EnDk = 'en_DK',
}

export enum Market {
  Sweden = 'SWEDEN',
  Norway = 'NORWAY',
  Denmark = 'DENMARK',
}

export type Mutation = {
  __typename?: 'Mutation';
  QuoteCart_create: Scalars['ID'];
};

export type MonetaryAmountV2 = {
  __typename?: 'MonetaryAmountV2';
  amount: Scalars['String'];
  currency: Scalars['String'];
};

export type CurrentInsurer = {
  __typename?: 'CurrentInsurer';
  id?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  switchable?: Maybe<Scalars['Boolean']>;
};

export enum SwedishApartmentType {
  StudentRent = 'STUDENT_RENT',
  Rent = 'RENT',
  StudentBrf = 'STUDENT_BRF',
  Brf = 'BRF',
}

export type SwedishApartmentQuoteDetails = {
  __typename?: 'SwedishApartmentQuoteDetails';
  street: Scalars['String'];
  zipCode: Scalars['String'];
  householdSize: Scalars['Int'];
  livingSpace: Scalars['Int'];
  type: SwedishApartmentType;
};

export type SwedishAccidentDetails = {
  __typename?: 'SwedishAccidentDetails';
  street: Scalars['String'];
  zipCode: Scalars['String'];
  householdSize: Scalars['Int'];
  livingSpace: Scalars['Int'];
  isStudent: Scalars['Boolean'];
};

export type QuoteDetails = SwedishApartmentQuoteDetails | SwedishAccidentDetails;

export enum TypeOfContract {
  SeHouse = 'SE_HOUSE',
  SeApartmentBrf = 'SE_APARTMENT_BRF',
  SeApartmentRent = 'SE_APARTMENT_RENT',
  SeApartmentStudentBrf = 'SE_APARTMENT_STUDENT_BRF',
  SeApartmentStudentRent = 'SE_APARTMENT_STUDENT_RENT',
  SeAccident = 'SE_ACCIDENT',
  SeAccidentStudent = 'SE_ACCIDENT_STUDENT',
}

export type PerilV2 = {
  __typename?: 'PerilV2';
  title: Scalars['String'];
  description: Scalars['String'];
  info: Scalars['String'];
  covered: Array<Scalars['String']>;
  exceptions: Array<Scalars['String']>;
  icon: Icon;
};

export type Icon = {
  __typename?: 'Icon';
  variants: IconVariants;
};

export type IconVariants = {
  __typename?: 'IconVariants';
  light: IconVariant;
};

export type IconVariant = {
  __typename?: 'IconVariant';
  svgUrl: Scalars['String'];
};

export type InsurableLimit = {
  __typename?: 'InsurableLimit';
  label: Scalars['String'];
  limit: Scalars['String'];
  description: Scalars['String'];
  type: InsurableLimitType;
};

export enum InsurableLimitType {
  Deductible = 'DEDUCTIBLE',
  DeductibleNatureDamage = 'DEDUCTIBLE_NATURE_DAMAGE',
  DeductibleAllRisk = 'DEDUCTIBLE_ALL_RISK',
  InsuredAmount = 'INSURED_AMOUNT',
  GoodsIndividual = 'GOODS_INDIVIDUAL',
  GoodsFamily = 'GOODS_FAMILY',
  TravelDays = 'TRAVEL_DAYS',
  MedicalExpenses = 'MEDICAL_EXPENSES',
  LostLuggage = 'LOST_LUGGAGE',
  Bike = 'BIKE',
  PermanentInjury = 'PERMANENT_INJURY',
  Treatment = 'TREATMENT',
  DentalTreatment = 'DENTAL_TREATMENT',
  TravelIllnessInjuryTransportationHome = 'TRAVEL_ILLNESS_INJURY_TRANSPORTATION_HOME',
  TravelDelayedOnTrip = 'TRAVEL_DELAYED_ON_TRIP',
  TravelDelayedLuggage = 'TRAVEL_DELAYED_LUGGAGE',
  TravelCancellation = 'TRAVEL_CANCELLATION',
}

export type InsuranceTerm = {
  __typename?: 'InsuranceTerm';
  displayName: Scalars['String'];
  url: Scalars['String'];
  type?: Maybe<InsuranceTermType>;
};

export enum InsuranceTermType {
  TermsAndConditions = 'TERMS_AND_CONDITIONS',
  PreSaleInfoEuStandard = 'PRE_SALE_INFO_EU_STANDARD',
  GeneralTerms = 'GENERAL_TERMS',
  PrivacyPolicy = 'PRIVACY_POLICY',
}

export type Table = {
  __typename?: 'Table';
  title: Scalars['String'];
  sections: Array<TableSection>;
};

export type TableRow = {
  __typename?: 'TableRow';
  title: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};

export type TableSection = {
  __typename?: 'TableSection';
  title: Scalars['String'];
  rows: Array<TableRow>;
};

export type BundledQuote = {
  __typename?: 'BundledQuote';
  id: Scalars['ID'];
  currentInsurer?: Maybe<CurrentInsurer>;
  price: MonetaryAmountV2;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  ssn?: Maybe<Scalars['String']>;
  birthDate: Scalars['LocalDate'];
  data: Scalars['JSON'];
  startDate?: Maybe<Scalars['LocalDate']>;
  expiresAt: Scalars['LocalDate'];
  email?: Maybe<Scalars['String']>;
  dataCollectionId?: Maybe<Scalars['ID']>;
  typeOfContract: TypeOfContract;
  initiatedFrom: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  perils: Array<PerilV2>;
  contractPerils: Array<PerilV2>;
  insurableLimits: Array<InsurableLimit>;
  termsAndConditions: InsuranceTerm;
  insuranceTerms: Array<InsuranceTerm>;
  detailsTable: Table;
  displayName: Scalars['String'];
};

export type InsuranceCost = {
  __typename?: 'InsuranceCost';
  monthlyGross: MonetaryAmountV2;
  monthlyDiscount: MonetaryAmountV2;
  monthlyNet: MonetaryAmountV2;
  freeUntil?: Maybe<Scalars['LocalDate']>;
};

/** A possible alternative bundling variant */
export type QuoteBundleVariant = {
  __typename?: 'QuoteBundleVariant';
  /** A describing tag of this variant, for example "Most popular" */
  tag?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  bundle: QuoteBundle;
};

export type CompleteQuote = {
  __typename?: 'CompleteQuote';
  id: Scalars['ID'];
  currentInsurer?: Maybe<CurrentInsurer>;
  insuranceCost: InsuranceCost;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  ssn?: Maybe<Scalars['String']>;
  birthDate: Scalars['LocalDate'];
  quoteDetails: QuoteDetails;
  startDate?: Maybe<Scalars['LocalDate']>;
  expiresAt: Scalars['LocalDate'];
  email?: Maybe<Scalars['String']>;
  dataCollectionId?: Maybe<Scalars['ID']>;
  typeOfContract: TypeOfContract;
  phoneNumber?: Maybe<Scalars['String']>;
  perils: Array<PerilV2>;
  contractPerils: Array<PerilV2>;
  insurableLimits: Array<InsurableLimit>;
  termsAndConditions: InsuranceTerm;
  insuranceTerms: Array<InsuranceTerm>;
  detailsTable: Table;
  displayName: Scalars['String'];
};

export type IncompleteApartmentQuoteDetails = {
  __typename?: 'IncompleteApartmentQuoteDetails';
  street?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  householdSize?: Maybe<Scalars['Int']>;
  livingSpace?: Maybe<Scalars['Int']>;
  type?: Maybe<SwedishApartmentType>;
};

export type IncompleteQuoteDetails = IncompleteApartmentQuoteDetails;

export type IncompleteQuote = {
  __typename?: 'IncompleteQuote';
  id: Scalars['ID'];
  currentInsurer?: Maybe<CurrentInsurer>;
  startDate?: Maybe<Scalars['LocalDate']>;
  details?: Maybe<IncompleteQuoteDetails>;
  email?: Maybe<Scalars['String']>;
  dataCollectionId?: Maybe<Scalars['ID']>;
};

export type Quote = CompleteQuote | IncompleteQuote;

export type QuoteBundle = {
  __typename?: 'QuoteBundle';
  bundleCost: InsuranceCost;
  /** All possible other variations of the current set of bundle ids */
  possibleVariations: Array<QuoteBundleVariant>;
  quotes: Array<BundledQuote>;
  displayName: Scalars['String'];
};

export type MonthlyCostDeduction = {
  __typename?: 'MonthlyCostDeduction';
  amount?: Maybe<MonetaryAmountV2>;
};

export type PercentageDiscountMonths = {
  __typename?: 'PercentageDiscountMonths';
  percentageDiscount: Scalars['Float'];
  quantity: Scalars['Int'];
};

export type Incentive = MonthlyCostDeduction | PercentageDiscountMonths;

export type Campaign = {
  __typename?: 'Campaign';
  incentive?: Maybe<Incentive>;
  code: Scalars['String'];
  expiresAt?: Maybe<Scalars['LocalDate']>;
};

/** The signing of an onboarding session, that contains information about the current signing status. */
export type Checkout = {
  __typename?: 'Checkout';
  /**  Current signing status of the session  */
  status: CheckoutStatus;
  /**  A user-visible text that explains the current status. Useful for async signing like SE BankID.  */
  statusText?: Maybe<Scalars['String']>;
};

export enum CheckoutStatus {
  /**  This signing session is ongoing. Only for async signing like SE BankID.  */
  Pending = 'PENDING',
  /**
   * This signing session is signed, and can be completed (producing an access token).
   *
   * Synchronous signing methods, like simple sign, immediately produce this state.
   */
  Signed = 'SIGNED',
  /** This signing is completed, which means the onboarding session has reached its terminal state. */
  Completed = 'COMPLETED',
  /** The signing has failed - which means it also can be retried. */
  Failed = 'FAILED',
}

export type QuoteCart = {
  __typename?: 'QuoteCart';
  id: Scalars['ID'];
  market: Market;
  /**  Campaign, if one has been attached by a code  */
  campaign?: Maybe<Campaign>;
  /**  The quote bundle "view" of the quotes created as part of this onboarding  */
  bundle: QuoteBundle;
  /**  The ongoing signing state, if it has been initiated - or null if it has not.  */
  checkout?: Maybe<Checkout>;
};

export type EditQuoteMutationVariables = Exact<{
  quoteCartId: Scalars['ID'];
  quoteId: Scalars['ID'];
  payload: Scalars['JSON'];
}>;

export type BundleCostDataFragment = {
  __typename?: 'InsuranceCost';
} & Pick<InsuranceCost, 'freeUntil'> & {
    monthlyDiscount: { __typename?: 'MonetaryAmountV2' } & Pick<MonetaryAmountV2, 'amount' | 'currency'>;
    monthlyGross: { __typename?: 'MonetaryAmountV2' } & Pick<MonetaryAmountV2, 'amount' | 'currency'>;
    monthlyNet: { __typename?: 'MonetaryAmountV2' } & Pick<MonetaryAmountV2, 'amount' | 'currency'>;
  };

export type CampaignDataFragment = { __typename?: 'Campaign' } & Pick<Campaign, 'code' | 'expiresAt'> & {
    incentive?: Maybe<
      | ({ __typename?: 'MonthlyCostDeduction' } & {
          amount?: Maybe<{ __typename?: 'MonetaryAmountV2' } & Pick<MonetaryAmountV2, 'amount' | 'currency'>>;
        })
      | ({ __typename?: 'PercentageDiscountMonths' } & Pick<PercentageDiscountMonths, 'percentageDiscount'> & {
            quantityMonths: PercentageDiscountMonths['quantity'];
          })
    >;
  };

export type BundleDataFragment = { __typename?: 'QuoteBundle' } & {
  possibleVariations: Array<
    { __typename?: 'QuoteBundleVariant' } & Pick<QuoteBundleVariant, 'id' | 'tag'> & {
        bundle: { __typename?: 'QuoteBundle' } & Pick<QuoteBundle, 'displayName'> & {
            bundleCost: {
              __typename?: 'InsuranceCost';
            } & BundleCostDataFragment;
            quotes: Array<{ __typename?: 'BundledQuote' } & QuoteDataFragment>;
          };
      }
  >;
};

export type QuoteCartQuery = { __typename?: 'Query' } & {
  quoteCart: { __typename?: 'QuoteCart' } & Pick<QuoteCart, 'id'> & {
      bundle?: Maybe<{ __typename?: 'QuoteBundle' } & BundleDataFragment>;
      campaign?: Maybe<{ __typename?: 'Campaign' } & CampaignDataFragment>;
      checkout?: Maybe<{ __typename?: 'Checkout' } & Pick<Checkout, 'status'>>;
    };
};

export type CreateQuoteBundleMutationVariables = Exact<{
  quoteCartId: Scalars['ID'];
  quotes: Array<Scalars['JSON']> | Scalars['JSON'];
  locale: Locale;
}>;

export type UnderwritingLimit = {
  __typename?: 'UnderwritingLimit';
  code: Scalars['String'];
};

export type QuoteBundleError = Error & {
  __typename?: 'QuoteBundleError';
  message: Scalars['String'];
  /**  The type of the quote that could not be created.  */
  type: Scalars['String'];
  limits?: Maybe<Array<UnderwritingLimit>>;
};

export type QuoteDataFragment = { __typename?: 'BundledQuote' } & Pick<
  BundledQuote,
  | 'id'
  | 'firstName'
  | 'lastName'
  | 'ssn'
  | 'phoneNumber'
  | 'birthDate'
  | 'startDate'
  | 'expiresAt'
  | 'email'
  | 'typeOfContract'
  | 'displayName'
  | 'data'
> & {
    currentInsurer?: Maybe<
      { __typename?: 'CurrentInsurer' } & Pick<CurrentInsurer, 'id' | 'displayName' | 'switchable'>
    >;
    price: { __typename?: 'MonetaryAmountV2' } & Pick<MonetaryAmountV2, 'amount' | 'currency'>;
    contractPerils: Array<
      { __typename?: 'PerilV2' } & Pick<PerilV2, 'title' | 'description' | 'covered' | 'exceptions' | 'info'> & {
          icon: { __typename?: 'Icon' } & {
            variants: { __typename?: 'IconVariants' } & {
              light: { __typename?: 'IconVariant' } & Pick<IconVariant, 'svgUrl'>;
            };
          };
        }
    >;
    insurableLimits: Array<
      { __typename?: 'InsurableLimit' } & Pick<InsurableLimit, 'label' | 'limit' | 'description' | 'type'>
    >;
    insuranceTerms: Array<{ __typename?: 'InsuranceTerm' } & Pick<InsuranceTerm, 'displayName' | 'url' | 'type'>>;
    quoteDetails:
      | ({ __typename?: 'SwedishApartmentQuoteDetails' } & Pick<
          SwedishApartmentQuoteDetails,
          'street' | 'zipCode' | 'householdSize' | 'livingSpace' | 'type'
        >)
      | ({ __typename?: 'SwedishAccidentDetails' } & Pick<SwedishAccidentDetails, 'isStudent'>);
  };

export type CreateQuoteBundleMutation = { __typename?: 'Mutation' } & {
  quoteCart_createQuoteBundle:
    | ({ __typename?: 'QuoteCart' } & Pick<QuoteCart, 'id'> & {
          bundle?: Maybe<
            { __typename?: 'QuoteBundle' } & {
              possibleVariations: Array<
                { __typename?: 'QuoteBundleVariant' } & Pick<QuoteBundleVariant, 'id' | 'tag'> & {
                    bundle: { __typename?: 'QuoteBundle' } & Pick<QuoteBundle, 'displayName'> & {
                        bundleCost: {
                          __typename?: 'InsuranceCost';
                        } & BundleCostDataFragment;
                        quotes: Array<
                          {
                            __typename?: 'BundledQuote';
                          } & QuoteDataFragment
                        >;
                      };
                  }
              >;
            }
          >;
          campaign?: Maybe<{ __typename?: 'Campaign' } & CampaignDataFragment>;
          checkout?: Maybe<{ __typename?: 'Checkout' } & Pick<Checkout, 'status'>>;
        })
    | ({ __typename?: 'QuoteBundleError' } & Pick<QuoteBundleError, 'message' | 'type'> & {
          limits?: Maybe<Array<{ __typename?: 'UnderwritingLimit' } & Pick<UnderwritingLimit, 'code'>>>;
        });
};

export type EditQuoteMutation = { __typename?: 'Mutation' } & {
  quoteCart_editQuote:
    | ({ __typename?: 'QuoteCart' } & Pick<QuoteCart, 'id'> & {
          id: Scalars['ID'];
          bundle?: Maybe<{ __typename?: 'QuoteBundle' } & BundleDataFragment>;
        })
    | ({ __typename?: 'QuoteBundleError' } & Pick<QuoteBundleError, 'message' | 'type'> & {
          limits?: Maybe<Array<{ __typename?: 'UnderwritingLimit' } & Pick<UnderwritingLimit, 'code'>>>;
        });
};

export type StartCheckoutMutationVariables = {
  quoteCartId: Scalars['ID'];
  quoteIds: Array<Scalars['ID']> | Scalars['ID'];
};

export type BasicError = Error & {
  __typename?: 'BasicError';
  message: Scalars['String'];
};

export type StartCheckoutMutation = { __typename?: 'Mutation' } & {
  quoteCart_startCheckout:
    | ({ __typename?: 'QuoteCart' } & {
        checkout?: Maybe<{ __typename?: 'Checkout' } & Pick<Checkout, 'status' | 'statusText'>>;
      })
    | ({ __typename?: 'BasicError' } & Pick<BasicError, 'message'>);
};

export enum BankIdStatus {
  Pending = 'pending',
  Failed = 'failed',
  Complete = 'complete',
}

export type CollectStatus = {
  __typename?: 'CollectStatus';
  status?: Maybe<BankIdStatus>;
  code?: Maybe<Scalars['String']>;
};

export enum SignState {
  Initiated = 'INITIATED',
  InProgress = 'IN_PROGRESS',
  Failed = 'FAILED',
  Completed = 'COMPLETED',
}

export type SignStatus = {
  __typename?: 'SignStatus';
  collectStatus?: Maybe<CollectStatus>;
  signState?: Maybe<SignState>;
};

export type SignStatusQueryVariables = Exact<{ [key: string]: never }>;

export type SignStatusQuery = { __typename?: 'Query' } & {
  signStatus?: Maybe<
    { __typename?: 'SignStatus' } & Pick<SignStatus, 'signState'> & {
        collectStatus?: Maybe<{ __typename?: 'CollectStatus' } & Pick<CollectStatus, 'status' | 'code'>>;
      }
  >;
};

export type CreateQuoteCartAccessTokenResult = {
  __typename?: 'CreateQuoteCartAccessTokenResult';
  accessToken: Scalars['String'];
};

export type CreateAccessTokenMutationVariables = Exact<{
  quoteCartId: Scalars['ID'];
}>;

export type CreateAccessTokenMutation = { __typename?: 'Mutation' } & {
  quoteCart_createAccessToken: {
    __typename?: 'CreateQuoteCartAccessTokenResult';
  } & Pick<CreateQuoteCartAccessTokenResult, 'accessToken'>;
};

export type CheckoutStatusQueryVariables = Exact<{
  quoteCartId: Scalars['ID'];
}>;

export type CheckoutStatusQuery = { __typename?: 'Query' } & {
  quoteCart: { __typename?: 'QuoteCart' } & Pick<QuoteCart, 'id'> & {
      checkout?: Maybe<{ __typename?: 'Checkout' } & Pick<Checkout, 'status' | 'statusText'>>;
    };
};

export type InitWidgetMutationVariables = Exact<{
  market: Market;
  locale: Scalars['String'];
  partnerId: Scalars['String'];
  requestId: Scalars['String'];
}>;

export type InitWidgetResult = {
  __typename?: 'InitWidgetResult';
  id: Scalars['ID'];
};

export type InitWidgetMutation = { __typename?: 'Mutation' } & {
  quoteCart_initWidget: { __typename?: 'InitWidgetResult' } & Pick<InitWidgetResult, 'id'>;
};

export type RegisterDirectDebitData = {
  registerDirectDebit: {
    url: Scalars['String'];
    orderId: Scalars['String'];
  };
};

export type RegisterDirectDebitVariables = {
  clientContext?: {
    successUrl: Scalars['String'];
    failureUrl: Scalars['String'];
  };
};
