import React from 'react';
import { RegisterOptions } from 'react-hook-form';
import { CheckoutStatus, MonetaryAmountV2, TypeOfContract } from './schemaTypes';

/**  
Platform Generic types.
Expand the types as much as possible
*/

/***************** 
Common
******************************************************/
export type VoidFunctionType = void;
export type StringFunctionType = string;
export type BooleanFunctionType = boolean;
export type NumberunctionType = number;
export type ObjectFunctionType = object;
export type ArrayFunctionType = Array;
export type BasicString = string;
export type BasicNumber = number;
export type BasicBool = boolean;
export type BasicObject = object;
export type BasicArray = Array;
export type BasicAny = Array;
export type BasicNull = null;
export type BasicUndefined = undefined;
export type BasicVoid = void;

// Probably a type or undefined
type Maybe<T> = T | BasicUndefined;
/***************** 
View
******************************************************/
export type Index = BasicString | BasicNumber | BasicNull;
export type EachComponentID = BasicString;
export type EachComponentName = BasicString;
export type EachComponentStringChildren = BasicString;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type EachComponentObjectChildren = Record<BasicString, BasicAny>;
export type EachComponentObjectList = EachComponentObjectChildren[];
export type ConfigProps = EachComponentDataSchema;
export type ChildrenReturnType = React.ReactNode;
export interface ViewProps {
  children: (component: EachComponentDataSchema) => ChildrenReturnType;
  components: ReuqestedDataToRenderUIList;
}
export interface EachComponentDataSchema<L = EachComponentObjectList, S = EachComponentStringChildren> {
  id: EachComponentID;
  component: EachComponentName;
  children?: L | S;
  padding?: Maybe<T>;
  height?: Maybe<T>;
  shadow?: Maybe<T>;
}
// The data type that type will fuel the UI and its structure
export type RequestedDataToRenderUIList = EachComponentDataSchema[];
/***************** 
Button
******************************************************/
export type EventType = 'routing' | 'add' | 'edit' | 'delete' | 'form';
export type EventDirection = Maybe<T>;
export type EventLocation = Maybe<T>;
export type CurrentRoute = Maybe<T>;
export type FormData = Record<string, BasicAny>;
export interface ButtonEventConfigType {
  event_id?: Maybe<T>;
  event_type?: EventType;
  event_location?: EventLocation;
  event_destination?: EventDirection;
  current_route?: CurrentRoute;
}
export interface directEventToCorrectRouteProps {
  ButtonEventConfig: ButtonEventConfigType;
  router?: NextRouter;
}
export interface BUTTON_EVENTS_TYPE {
  routing: BasicString;
  add: BasicString;
  edit: BasicString;
  delete: BasicString;
  form: BasicString;
}
export type ButtonVariant = 'primary' | 'outline' | 'transparent' | 'icon';
export type ButtonType = 'button' | 'submit' | 'reset';
export interface ButtonProps {
  icon?: SVGComponentProps;
  type?: ButtonType;
  onClick?: (event: BasicAny) => BasicAny;
  disabled?: BasicBool;
  variant?: ButtonVariant;
  children?: ChildrenReturnType;
  theme?: DefaultTheme;
  config?: ButtonEventConfigType;
  fluid?: BasicBool;
}

export interface SVGConfigProps {
  color?: string;
  height?: string;
  width?: string;
  size?: string;
}

export interface SVGComponentProps {
  iconName: string;
  config?: SVGConfigProps;
}

/***************** 
Card
******************************************************/
export interface CardProps {
  flex?: BasicString | BasicNumber;
  flexGrow?: BasicNumber;
  rowGap?: BasicString;
  columnGap?: BasicString;
  display?: BasicString;
  flexDirection?: BasicString;
  justifyContent?: BasicString;
  alignItems?: BasicString;
  textAlign?: BaseString;
  position?: BasicString;
  bottom?: BasicString;
  right?: BasicString;
  left?: BasicString;
  top?: BasicString;
  width?: BasicString;
  height?: BasicString;
  margin?: BasicString;
  marginRight?: BasicString;
  marginBottom?: BasicString;
  marginLeft?: BasicString;
  marginTop?: BasicString;
  padding?: BasicString;
  paddingBottom?: BasicString;
  paddingTop?: BasicString;
  paddingRight?: BasicString;
  paddingLeft?: BasicString;
  border?: BasicString;
  borderRadius?: BasicString;
  color?: BasicString;
  background?: BasicString;
  shadow?: BasicNumber | BasicString;
  ref?: BasicAny;
  onClick?: (event: BasicAny) => BasicAny;
}
/***************** 
Image
******************************************************/
type ImageFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
export interface ImageProps {
  src: BasicString;
  alt: BasicString;
  width?: BasicString;
  height?: BasicString;
  fit?: ImageFit;
}
/***************** 
Input
******************************************************/
export interface InputProps {
  children?: ChildrenReturnType;
  required?: BasicBool;
  disabled?: BasicBool;
  defaultChecked?: BasicBool;
  id?: BasicString;
  name?: BasicString;
  type?: HTMLInputTypeAttribute;
  label?: BasicString;
  value?: BasicString;
  placeholder?: BasicString;
  helperText?: BasicString;
  error?: BasicBool;
  icon?: BasicBool;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => VoidFunctionType;
  tooltip?: BasicString;
  checked?: BasicBool;
  readOnly?: BasicBool;
  labelPosition?: 'left' | 'right';
  register?: BasicAny;
}

export interface TextFieldProps extends InputProps {
  didMountRef: React.MutableRefObject<BasicBool>;
  register?: RegisterOptions;
}

export interface RadioButtonProps extends InputProps {
  didMountRef: React.MutableRefObject<BasicBool>;
  register?: RegisterOptions;
}

export interface RadioGroupProps {
  options: BasicAny[];
  onChange?: (event: BasicAny) => void;
  value?: string;
  direction?: 'row' | 'column';
  label?: string;
  tooltip?: string;
  helperText?: BasicString;
  error?: BasicBool;
  icon?: BasicBool;
  register?: RegisterOptions;
}

/***************** 
Text
******************************************************/
export type TextVariantTypes =
  | 'HeadlineXL'
  | 'HeadlineL'
  | 'HeadlineM'
  | 'HeadlineS'
  | 'HeadlineXS'
  | 'OVERLINE'
  | 'Body1'
  | 'Body2'
  | 'Body3'
  | 'Pullquote'
  | 'Caption';

export type TextColorTypes = 'gray100' | 'gray500' | 'gray700' | 'gray900' | 'black';

export interface TextProps {
  children: ChildrenReturnType;
  variant?: TextVariantTypes;
  color?: TextColorTypes;
  weight?: 'thin' | 'normal' | 'bold';
  textAlign?: 'left' | 'center' | 'right';
}

export interface TabsProps {
  children: ChildrenReturnType;
  activeIndex?: BasicNumber;
  onChange?: (event: BasicAny) => void;
}

export interface TabProps {
  children: ChildrenReturnType;
  selected?: BasicBool;
  label: BasicString;
  onClick?: (event: BasicAny) => BasicAny;
}

export interface SpanProps {
  children?: ReactNode;
}

export interface PriceOfferProps {
  id: BasicString;
  displayName: BasicString;
  cost: MonetaryAmountV2;
}

export interface ProductListProps {
  data: PriceOfferProps[];
}

export interface InsuranceSummaryProps {
  user: StoreUser;
  data: BasicAny;
  onSave?: () => Promise<void>;
  onClose?: () => Promise<void>;
}

export interface StartDateProps {
  quotes: PartOf<
    ExoticQuote,
    {
      startDate: BasicString;
      id: BasicString;
      displayName: BasicString;
    }
  >[];
  currentInsurance?: BasicAny;
  onChangeDate: (date: Date, id: string) => void;
}

export interface ConfirmationTextProps {
  activationDate: string;
  householdSize: number;
  email: string;
}
/** Store types */

export type StoreCartItem = string;

export interface StoreCartItemDetails {
  id: string;
  displayName: string;
  cost: MonetaryAmountV2;
  typeOfContract: TypeOfContract;
}

export interface StoreCart {
  id: string;
  items: StoreCartItem[];
}

export interface StoreUser {
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  ssn?: string;
  email?: string;
  phoneNumber?: string;
}

export interface StoreCheckout {
  status: CheckoutStatus;
  statusText?: string;
}

export interface StorePartner {
  name: string;
}

export interface StoreUserInput {
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  ssn?: string;
  email?: string;
}

/** Insurance types */
export type InsuranceType = 'apartment' | 'swedishAccident';

export interface FormattedQuoteData {
  type: InsuranceType;
  street: string;
  zipCode: string;
  city: string;
  numberCoInsured: number;
  livingSpace: number;
  student?: boolean;
  subType?: SwedishApartmentType;
}

export interface InitialQueryData {
  firstName?: string;
  lastName?: string;
  email?: string;
  street?: string;
  zipCode?: string;
  city?: string;
  livingSpace?: string;
  coInsured?: string;
  student?: string;
  subType?: string;
  ssn?: string;
  birthDate?: string;
  phoneNumber?: string;
}

/** Exotic types */

export interface ExoticCartTerms {
  displayName: string;
  insuranceTerms: InsuranceTerm[];
}

export type ExoticQuote = {
  displayName: string;
  startDate: Date;
  id: Scalars['ID'];
  name: Scalars['String'];
  perils: Array<PerilV2>;
  insurableLimits: Array<InsurableLimit>;
  insuranceTerms: Array<InsuranceTerm>;
  details: Scalars['JSON'];
  cost: MonetaryAmountV2;
  typeOfContract: TypeOfContract;
};

export type ExoticBundleVariation = {
  id: Scalars['ID'];
  tag?: Scalars['String'];
  name: Scalars['String'];
  cost: MonetaryAmountV2;
};

export type FormattedQuoteCart = {
  bundleVariations: ExoticBundleVariation[];
  bundleQuotes: ExoticQuote[];
};
export type LocalStorageTypes = 'accessToken';
