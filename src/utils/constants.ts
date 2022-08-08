import { BUTTON_EVENTS_TYPE } from '@/types/types';

export const BUTTON_EVENTS: BUTTON_EVENTS_TYPE = {
  routing: 'routing',
  add: 'add',
  edit: 'edit',
  delete: 'delete',
  form: 'form',
};

export const ROUTING_PAGES: RoutingPagesTypes = {
  landing: '/',
  information: '/information',
  offer: '/offer',
  checkout: '/checkout',
  confirmation: '/confirmation',
};

export const ROUTING_TEST_IDS: RoutingPagesTypes = {
  landing: 'landing-page',
  information: 'information-page',
  offer: 'offer-page',
  checkout: 'checkout-page',
  confirmation: 'confirmation-page',
};

export interface RoutingPagesTypes {
  landing: string;
  information: string;
  offer: string;
  checkout: string;
  confirmation: string;
}

export const DEVICE_SIZES: Record<string, number> = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const device = {
  mobileS: `(min-width: ${DEVICE_SIZES.mobileS}px)`,
  mobileM: `(min-width: ${DEVICE_SIZES.mobileM}px)`,
  mobileL: `(min-width: ${DEVICE_SIZES.mobileL}px)`,
  tablet: `(min-width: ${DEVICE_SIZES.tablet}px)`,
  laptop: `(min-width: ${DEVICE_SIZES.laptop}px)`,
  laptopL: `(min-width: ${DEVICE_SIZES.laptopL}px)`,
  desktop: `(min-width: ${DEVICE_SIZES.desktop}px)`,
  desktopL: `(min-width: ${DEVICE_SIZES.desktop}px)`,
};

export const HOME_INSURANCE_TYPES: Record<string, string> = {
  RENT: 'Hyresrätt',
  BRF: 'Bostadsrätt',
};
