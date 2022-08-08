import { BasicAny, BasicBool, BasicNumber, BasicString, ButtonEventConfigType, VoidFunctionType } from '@/types/types';
import { NextRouter } from 'next/router';
import { BUTTON_EVENTS } from './constants';

let router_tracker_index: BasicNumber = 0;
const NEXT: BasicString = 'next';
const PREV: BasicString = 'prev';
const OFFER: BasicString = 'offer';
const CHECKOUT: BasicString = 'checkout';
const ROOT: BasicString = '/';
const YES: BasicString = 'yes';
export let step: BasicNumber = 0;

export const directEventToCorrectRoute = (
  ButtonEventConfig: ButtonEventConfigType,
  router: NextRouter,
  store: BasicAny,
  header: BasicAny,
  formData: BasicAny
): VoidFunctionType => {
  const {
    state: { context },
  } = store;
  let router_direction: BasicString;
  let construct_route_string: BasicString;
  const currentPath = router.asPath;
  const { event_type, current_route, event_destination } = ButtonEventConfig;

  if (current_route === ROOT) {
    const { goSecondary } = header;
    goSecondary();
    step++;
    router_tracker_index++;
    router_direction = context._routes[router_tracker_index].route;
    construct_route_string = `${router_direction}`;
    router.push(construct_route_string);
  }

  if ((event_type === BUTTON_EVENTS.routing || event_type === BUTTON_EVENTS.form) && event_destination === NEXT) {
    step++;
    // switch my insurance
    const switch_insurance: string = formData?.alreadyInsured as string;
    if (switch_insurance === YES) {
      router.push('switch');
      return;
    }

    if (currentPath === '/checkout') {
      router.push('payment/connect');
      return;
    }
    if (currentPath === '/payment/connect' || currentPath === '/payment/retry') {
      router.push('trustly_iframe');
      return;
    }

    //See if it is the last display
    const total_displays: BasicNumber = context._routes.length;
    const last_display_index: BasicNumber = total_displays - 1;
    const routes_last_item: BasicNumber = context._routes.indexOf(context._routes[router_tracker_index]);
    const it_is_last_display: BasicBool = last_display_index === routes_last_item;

    //if its the last display Take us to offer page
    if (it_is_last_display) {
      if (ButtonEventConfig?.current_route === CHECKOUT) return;
      construct_route_string = ButtonEventConfig?.current_route === OFFER ? 'checkout' : 'offer';
      router.push(construct_route_string);
    } else {
      //Or keep going next
      router_tracker_index++;
      router_direction = context._routes[router_tracker_index].route;
      construct_route_string = `${router_direction}`;
      router.push(construct_route_string);
    }
  }
  if ((event_type === BUTTON_EVENTS.routing || event_type === BUTTON_EVENTS.form) && event_destination === PREV) {
    step--;
    // switch my insurance
    if (currentPath.startsWith('/payment')) {
      router.push('../checkout');
    } else if (currentPath === '/checkout') {
      router.push('offer');
    } else {
      const { goPrimary } = header;
      if (currentPath !== '/offer' && currentPath !== '/switch_my_insurance') router_tracker_index--;
      if (router_tracker_index === 0) goPrimary();
      router_direction = context._routes[router_tracker_index].route;
      construct_route_string = `${router_direction}`;
      router.push(construct_route_string);
    }
  }
  if ((event_type === BUTTON_EVENTS.routing || event_type === BUTTON_EVENTS.form) && event_destination === ROOT) {
    if (currentPath === '/offer' && event_destination === ROOT) {
      router.push(ROOT);
    }
  }
};
