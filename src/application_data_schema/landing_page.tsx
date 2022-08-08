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
        children: [
          {
            id: 'header_0001',
            component: 'HeaderContainer',
            children: [],
          },
        ],
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
            children: [
              {
                id: 'try_hedvig_title_description_card',
                component: 'Card',
                padding: '16px',
                children: [
                  {
                    id: 'try_hedvig_title_card',
                    component: 'Card',
                    marginBottom: '12px',
                    children: [
                      {
                        id: 'try_hedvig_title',
                        component: 'Text',
                        variant: 'HeadlineS',
                        children: 'Prova hedvig gratis 1 månad',
                      },
                    ],
                  },
                  {
                    id: 'try_hedvig_description_card',
                    component: 'Card',
                    marginBottom: '24px',
                    children: [
                      {
                        id: 'try_hedvig_description',
                        component: 'Text',
                        variant: 'Body2',
                        color: 'gray700',
                        children:
                          'Med Hedvig får du hjälp från ditt alldeles egna serviceteam direkt i Hedvig-appen. 100% digital försäkring. Du är bara några steg bort från att försäkra dig med Hedvig.',
                      },
                    ],
                  },
                  {
                    id: 'try_hedvig_list_card',
                    component: 'Card',
                    marginBottom: '24px',
                    children: [
                      {
                        id: 'try_hedvig_list',
                        component: 'List',
                        spaceBetween: '16px',
                        children: [
                          {
                            id: 'try_hedvig_list_item_1',
                            component: 'ListItem',
                            children: [
                              {
                                id: 'try_hedvig_list_item_1_content',
                                component: 'IconWithLabel',
                                label: 'Digitalt, enkelt och krångelfritt',
                                iconName: 'CheckMark',
                                config: {
                                  color: '#505050',
                                },
                              },
                            ],
                          },
                          {
                            id: 'try_hedvig_list_item_2',
                            component: 'ListItem',
                            children: [
                              {
                                id: 'try_hedvig_list_item_2_content',
                                component: 'IconWithLabel',
                                label: 'Fullt försäkrad på 3 minuter',
                                iconName: 'CheckMark',
                                config: {
                                  color: '#505050',
                                },
                              },
                            ],
                          },
                          {
                            id: 'try_hedvig_list_item_3',
                            component: 'ListItem',
                            children: [
                              {
                                id: 'try_hedvig_list_item_3_content',
                                component: 'IconWithLabel',
                                label: 'Avsluta Hedvig när du vill',
                                iconName: 'CheckMark',
                                config: {
                                  color: '#505050',
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: 'try_hedvig_privacy_card',
                    component: 'Card',
                    children: [
                      {
                        id: 'try_hedvig_privacy_text',
                        component: 'PolicyText',
                        children:
                          'Med Hedvig får du hjälp från ditt alldeles egna serviceteam direkt i Hedvig-appen. 100% digital försäkring. Du är bara några steg bort från att försäkra dig med Hedvig.',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 'main_top_0001',
            // This is the container which will render the button which causes the state changes in the MainTopComponent
            component: 'MainBottomContainer',
            children: [
              {
                id: 'main_bottom_container_card',
                component: 'Card',
                shadow: 'footer',
                padding: '16px',
                children: [
                  {
                    id: 'main_bottom_container_card_button',
                    component: 'NavigationButton',
                    children: 'Få ett prisförslag',
                    variant: 'primary',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
