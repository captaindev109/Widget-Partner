import { RequestedDataToRenderUIList } from '@/types/types';

/**
 * JSON SCHEMA STRUCTURE FOR THE PLATFORM, API FETCHING AND DATA RENDERING
 * The is the basic and primary structure how the view engine render the main two containers
 * and all the children inside each container.
 *
 * This is the alpha verions 1.0,it will be improved and upgraded as we build the platform
 */

// The raw data that will fuel the UI and its structure
export const ReuqestedDataToRenderUIComponents: RequestedDataToRenderUIList = [
  {
    id: 'page_0001',
    component: 'Page',
    children: [
      {
        id: 'header_0001',
        component: 'Header',
        // Break the children of Header to as many as smaller pieces as possbile in order to build it modular
        children: [],
      },
      {
        id: 'main_0001',
        component: 'Main',
        // Break the children of Main to as many as smaller pieces as possbile in order to build it modular
        children: [
          {
            id: 'main_top_0001',
            // This is the main container that will change the component depending on state
            component: 'MainTopContainer',
            children: [],
          },
          {
            id: 'main_top_0001',
            // This is the container which will render the button which causes the state changes in the MainTopComponent
            component: 'MainBottomContainer',
            children: [],
          },
        ],
      },
    ],
  },
];
