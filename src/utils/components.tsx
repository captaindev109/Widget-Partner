import Page from '@/generics/Page';
import Card from '@/generics/Card';
import Image from '@/generics/Image';
import Title from '@/generics/Title';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import RadioGroup from '@/components/RadioGroup';
import IconButton from '@/components/IconButton';
import RedirectButton from '@/components/RedirectButton';
import PolicyText from '@/components/PolicyText';
import GetStarted from '@/components/GetStarted';
import Main from '@/containers/Main';
import Header from '@/containers/Header';
import MainTopContainer from '@/containers/MainTopContainer';
import LinkText from '@/generics/LinkText';
import Text from '@/generics/Text';
import Input from '@/generics/Input';
import Wrapper from '@/generics/Wrapper';
import { List, ListItem } from '@/components/List';
import IconWithLabel from '@/components/IconWithLabel';
import MainBottomContainer from '@/containers/MainBottomContainer';
import HeaderContainer from '@/containers/HeaderContainer/HeaderContainer';
import { DocumentLink, DocumentList } from '@/components/DocumentList';
import { InformationList, InformationItem } from '@/components/InformationList';
import { Tab, Tabs } from '@/components/Tabs';
import ToggleSwitch from '@/generics/ToggleSwitch';
import Span from '@/generics/Span';
import FooterWithQuote from '@/components/FooterWithQuote';
import DynamicForm from '@/components/DynamicForm';
import Dropdown from '@/components/Dropdown';
import HeaderWithImage from '@/components/HeaderWithImage';
import HeaderWithNavigation from '@/components/HeaderWithNavigation';
import NavigationButton from '@/components/NavigationButton';
import ExoticOfferDocuments from '@/components/DocumentList/ExoticOfferDocuments';
import ExoticCheckoutDocuments from '@/components/DocumentList/ExoticCheckoutDocuments';

import { BasicAny, BasicString } from '@/types/types';
import ExoticTabs from '@/components/Tabs/ExoticTabs';
import ExoticPriceOffer from '@/components/PriceOffer/ExoticPriceOffer';
import ExoticInformationList from '@/components/InformationList/ExoticInformationList';
import ExoticProductList from '@/components/ProductList/ExoticProductList';
import ExoticInsuranceSummary from '@/components/InsuranceSummary/ExoticInsuranceSummary';
import ExoticConfirmationText from '@/components/ConfirmationText/ExoticConfirmationText';
import InsuranceSummary from '@/components/InsuranceSummary';
import ExoticStartDate from '@/components/StartDate/ExoticStartDate';
import TrustlyIframe from '@/components/TrustlyIframe';
import ExoticTrustlyIframe from '@/components/TrustlyIframe/ExoticTrustlyIframe';
import Spinner from '@/components/Spinner';

export const UIComponents: Record<BasicString, BasicAny> = {
  Page: Page,
  Card: Card,
  Image: Image,
  Title: Title,
  Text: Text,
  LinkText: LinkText,
  Header: Header,
  Main: Main,
  Footer: Footer,
  Button: Button,
  Input: Input,
  RadioGroup: RadioGroup,
  RedirectButton: RedirectButton,
  IconButton: IconButton,
  PolicyText: PolicyText,
  GetStarted: GetStarted,
  Wrapper: Wrapper,
  List: List,
  ListItem: ListItem,
  IconWithLabel: IconWithLabel,
  MainTopContainer: MainTopContainer,
  MainBottomContainer: MainBottomContainer,
  HeaderContainer: HeaderContainer,
  DocumentLink: DocumentLink,
  DocumentList: DocumentList,
  FooterWithQuote: FooterWithQuote,
  InformationList: InformationList,
  InformationItem: InformationItem,
  Tab: Tab,
  Tabs: Tabs,
  ToggleSwitch: ToggleSwitch,
  Span: Span,
  DynamicForm: DynamicForm,
  Dropdown: Dropdown,
  HeaderWithImage: HeaderWithImage,
  HeaderWithNavigation: HeaderWithNavigation,
  NavigationButton: NavigationButton,
  ExoticOfferDocuments: ExoticOfferDocuments,
  ExoticCheckoutDocuments: ExoticCheckoutDocuments,
  ExoticTabs: ExoticTabs,
  ExoticPriceOffer: ExoticPriceOffer,
  ExoticInformationList: ExoticInformationList,
  ExoticProductList: ExoticProductList,
  ExoticInsuranceSummary: ExoticInsuranceSummary,
  ExoticStartDate: ExoticStartDate,
  ExoticConfirmationText: ExoticConfirmationText,
  InsuranceSummary: InsuranceSummary,
  TrustlyIframe: TrustlyIframe,
  ExoticTrustlyIframe: ExoticTrustlyIframe,
  Spinner: Spinner,
};
