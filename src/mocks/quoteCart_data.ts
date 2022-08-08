import { PerilV2 } from '@/types/schemaTypes';

export const GET_QUOTE = {
  data: {
    quoteCart: {
      id: 'ce9e8fd3-bc0c-4475-a140-5119194f74b2',
      bundle: {
        possibleVariations: [
          {
            id: '22172c2a-f2b4-4060-9f1f-f98d7c7646b9+a9cd291b-1f76-4a69-b791-f56cf085964a',
            tag: 'Mest populär',
            bundle: {
              displayName: 'Hemförsäkring & Olycksfallsförsäkring',
              bundleCost: {
                monthlyGross: {
                  amount: '188.00',
                  currency: 'SEK',
                  __typename: 'MonetaryAmountV2',
                },
                __typename: 'InsuranceCost',
              },
              __typename: 'QuoteBundle',
            },
            __typename: 'QuoteBundleVariant',
          },
          {
            id: '22172c2a-f2b4-4060-9f1f-f98d7c7646b9',
            tag: null,
            bundle: {
              displayName: 'Hemförsäkring Bostadsrätt',
              bundleCost: {
                monthlyGross: {
                  amount: '99.00',
                  currency: 'SEK',
                  __typename: 'MonetaryAmountV2',
                },
                __typename: 'InsuranceCost',
              },
              __typename: 'QuoteBundle',
            },
            __typename: 'QuoteBundleVariant',
          },
        ],
        bundleCost: {
          monthlyGross: {
            amount: '188.00',
            currency: 'SEK',
            __typename: 'MonetaryAmountV2',
          },
          __typename: 'InsuranceCost',
        },
        quotes: [
          {
            id: '22172c2a-f2b4-4060-9f1f-f98d7c7646b9',
            typeOfContract: 'SE_APARTMENT_BRF',
            displayName: 'Hemförsäkring Bostadsrätt',
            contractPerils: [
              {
                title: 'Eldsvåda',
                description:
                  'En överhettad mobilladdare eller ett misslyckat försök att fritera pommes frites, bränder uppstår på de mest vardagliga vis. Om det börjar brinna i din lägenhet får du ersättning för brand- och rökskador.',
                covered: [
                  'Eld som har brunnit med öppen låga (inte enbart glöd- eller svedskada)',
                  'Explosion',
                  'Plötslig skada av sot',
                  'Blixt',
                  'Frätande gas som bildats vid oavsiktlig upphettning av plast',
                  'Sanering av sot orsakad av öppen låga',
                ],
                exceptions: ['Sprängningsarbete', 'Sot efter levande ljus'],
                info: 'Var försiktig med levande ljus eller eld.',
                icon: {
                  variants: {
                    light: {
                      svgUrl: 'https://promise.hedvig.com/media/fire_97796e0790.svg',
                      __typename: 'IconVariant',
                    },
                    __typename: 'IconVariants',
                  },
                  __typename: 'Icon',
                },
                __typename: 'PerilV2',
              },
              {
                title: 'Vattenläcka',
                description:
                  'Skyddet kan ge ersättning vid olika typer av vattenskador t.ex. om en tvättmaskin läckt okontrollerat eller ett badrum svämmat över. Du kan få ersättning både för att åtgärda skadorna på lägenheten samt för andra merkostnader under reparationen.',
                covered: [
                  'Oberäknat vatten/ånga från vattenledningssytem',
                  'Oberäknat vatten/ånga från badrum, kök eller tvättstuga',
                  'Oberäknat vatten/ånga från värmepanna',
                  'Läckage från kyl/frys',
                  'Läckage från brandsläckare',
                  'Läckage från tvättställ',
                  'Läckage från akvarie',
                ],
                exceptions: [
                  'Yt-och tätskikt installerats utan behörig installatör',
                  'Skada på det föremål som har läckt',
                  'Skada orsakat av takränna eller utvändigt stuprör',
                ],
                info: 'Se till att kranar är täta och stängda när de inte används. Lägg underlägg under kyl/frys/ diskmaskin som samlar upp vatten. Se till att ledningssystem och anslutna anordningar inte fryser sönder. Och lämnar du lägenheten i mer än 7 dagar så måste vattnet stängas av helt.',
                icon: {
                  variants: {
                    light: {
                      svgUrl: 'https://promise.hedvig.com/media/water_damage_e25b83cd0b.svg',
                      __typename: 'IconVariant',
                    },
                    __typename: 'IconVariants',
                  },
                  __typename: 'Icon',
                },
                __typename: 'PerilV2',
              },
              {
                title: 'Inbrott',
                description:
                  'Skyddet gäller när någon utan lov gjort inbrott eller förstört din bostadsrätt. Skyddet gäller självklart också för vinden och källaren.',
                covered: [
                  'Allt du äger i din lägenhet till ett värde upp till 1 miljon kronor',
                  'Inbrott och skadegörelse i din bostadsrätt inklusive. vind/källare',
                ],
                exceptions: [
                  'Stöld av pengar, värdehandlingar och stöldbegärlig egendom (smycken, mobiltelefoner, datorer och allt annat dyrt) ifrån vind eller källarförråd eller ur bil',
                ],
                info: 'Lås ytterdörrar och regla fönster när ingen är hemma. Och märk inte dina nycklar så att folk förstår vart du bor eller vart de går.',
                icon: {
                  variants: {
                    light: {
                      svgUrl: 'https://promise.hedvig.com/media/burglary_946096433f.svg',
                      __typename: 'IconVariant',
                    },
                    __typename: 'IconVariants',
                  },
                  __typename: 'Icon',
                },
                __typename: 'PerilV2',
              },
              {
                title: 'Stöld',
                description:
                  'Vid stöld och skadegörelse av dina saker så täcks dem och ersätts av oss. Oavsett om du är hemma eller på flygande fot kan du alltid känna dig trygg med oss.',
                covered: [
                  'Stöld och skadegörelse i ditt hem',
                  'Stöld ur gemensamhetsutrymme, t.ex. cykel- eller barnvagnsförråd',
                  'Stöld och skadegörelse av saker du tar med dig till ditt arbete eller hotellrum',
                  'Stöld och skadegörelse vid förvaring hos t.ex. Shurguard',
                  'Stöld utanför bostaden',
                  'Stöld ur bil när du är på resa',
                ],
                exceptions: [
                  'För vissa typer av saker, t.ex. pengar, hemelektronik, mobiltelefoner, datorer, kameror, sprit och smycken gäller speciella regler beroende på var stölden inträffat.',
                ],
                info: 'Ha alltid uppsikt över dina saker. Lämna inte värdesaker på t.ex. ett bord på ett café. Lås alltid bilen om du förvarar saker där och stöldbegärlig egendom (smycke, dator) ska alltid döljas. Och lås alltid din cykel.',
                icon: {
                  variants: {
                    light: {
                      svgUrl: 'https://promise.hedvig.com/media/theft_701fa78317.svg',
                      __typename: 'IconVariant',
                    },
                    __typename: 'IconVariants',
                  },
                  __typename: 'Icon',
                },
                __typename: 'PerilV2',
              },
              {
                title: 'Skadegörelse',
                description:
                  'Skyddet gäller när någon utan lov gjort inbrott eller förstört din bostadsrätt. Skyddet gäller självklart också för vinden och källaren.',
                covered: [
                  'Sakerna i din lägenhet till ett värde upp till 1 miljon kronor',
                  'Inbrott och skadegörelse i t.ex. vind/källare',
                ],
                exceptions: [
                  'Stöld av pengar, värdehandlingar och stöldbegärlig egendom (smycken, mobiltelefoner, datorer och allt annat dyrt) ifrån biyta',
                ],
                info: 'Lås ytterdörrar och regla fönster när ingen är hemma. Och märk inte dina nycklar så att folk förstår vart du bor eller vart de går.',
                icon: {
                  variants: {
                    light: {
                      svgUrl: 'https://promise.hedvig.com/media/criminal_damage_9f725dc7cf.svg',
                      __typename: 'IconVariant',
                    },
                    __typename: 'IconVariants',
                  },
                  __typename: 'Icon',
                },
                __typename: 'PerilV2',
              },
              {
                title: 'Ansvarsskydd',
                description:
                  'Vårt ansvarsskydd gäller när någon kräver dig på skadestånd för att ha skadat honom eller henne eller dennes ägodelar. Vi hjälper dig med utredning och förhandling och vi betalar både rättegångskostnader och skadestånd om du vållat skadan.',
                covered: [
                  'T.ex. om ditt handfat gått sönder i en lägenhet',
                  'T.ex. vattenskada från din lägenhet som drabbar grannarna',
                  'T.ex. Hunden orsakar bitskador',
                  'Utredning och förhandling',
                  'Representation i domstol',
                  'Max 5 000 000 kr i ersättning per försäkringsår och person/sakskada',
                ],
                exceptions: [
                  'Skada i samband med arbete',
                  'Skada orsakat av när du kört bil/fordon',
                  'Uppsåtligt brott, t.ex. om du skadar någon/något med flit',
                ],
                info: 'Kontakta Hedvig direkt när någon kräver dig på skadestånd. Medge aldrig någon skyldighet utan ta ett djupt andetag och låt oss hjälpa dig istället.',
                icon: {
                  variants: {
                    light: {
                      svgUrl: 'https://promise.hedvig.com/media/liability_c331907aff.svg',
                      __typename: 'IconVariant',
                    },
                    __typename: 'IconVariants',
                  },
                  __typename: 'Icon',
                },
                __typename: 'PerilV2',
              },
              {
                title: 'Rättsskydd',
                description:
                  'Vårt rättsskydd kan ge dig ersättning för att t.ex. anlita advokat/ombud om du hamnar i en rättslig tvist. Skyddet gäller i tvister som prövas i tingsrätt, hovrätt eller Högsta domstolen.',
                covered: [
                  'Vårdnadstvist',
                  'Arvstvist',
                  'Fastighetstvist',
                  'Advokat och representation i domstol',
                  'Krav enligt skadeståndslagen',
                  'Mellan 1 500 - 250 000 kr i ersättning, självrisk 25% av totalbeloppet',
                ],
                exceptions: [
                  'Småmål enligt rättegångsbalken',
                  'Uppsåtligt brott, t.ex om du skadat någon/något med flit',
                ],
                info: 'Du måste välja vem som ska representera dig och personen måste vara medlem i Svenska advokatsamfundet. Sen måste ombudet skicka in en ansökan till oss innan du kan få besked om rättsskyddet täcker tvisten.',
                icon: {
                  variants: {
                    light: {
                      svgUrl: 'https://promise.hedvig.com/media/legal_protection_f6e65e1b13.svg',
                      __typename: 'IconVariant',
                    },
                    __typename: 'IconVariants',
                  },
                  __typename: 'Icon',
                },
                __typename: 'PerilV2',
              },
              {
                title: 'Resetrubbel',
                description:
                  'Du kan få ersättning om ditt bagage blir försenat på utresa. Och är du i ett land där det utbryter krig eller det sker en naturkatastrof, ja då flyger vi hem dig till Sverige och ersätter dig för de nödvändiga och skäliga kostnaderna.',
                covered: [
                  'Reseskydd i 45 dagar',
                  'Evakuering vid krig',
                  'Evakuering vid epidemi',
                  'Evakuering vid naturkatastrof, jordskalv, vulkanutbrott',
                  'Bagageförsening vid utresa',
                  'Max 5000 kr i ersättning vid försenat bagage',
                ],
                exceptions: ['Hemresa från land som UD avråder folk från att resa till', 'Förlorat bagage'],
                info: 'Anmäl försenat bagage direkt till flygbolaget och se alltid till att få en så kallad PIR-rapport, som kvitto på att ditt bagage är försenat/försvunnet.',
                icon: {
                  variants: {
                    light: {
                      svgUrl: 'https://promise.hedvig.com/media/travel_insurance_ed0fa95fdf.svg',
                      __typename: 'IconVariant',
                    },
                    __typename: 'IconVariants',
                  },
                  __typename: 'Icon',
                },
                __typename: 'PerilV2',
              },
              {
                title: 'Överfall',
                description:
                  'Vårt överfallsskydd kan ge dig ersättning om du blir utsatt för brott, t.ex. misshandel, rån, ofredande eller våldtäkt. Skyddet kan också ge dig ersättning om du skulle bli utsatt för försök till brott.',
                covered: [
                  'Misshandel (som inte är ringa) eller rån',
                  'Grov misshandel med livshotande skada',
                  'Grovt rån',
                  'Ofredande om du är under 18 år',
                  'Våldtäkt',
                  'Mellan 8000 kr - 200 000 kr i ersättning, ingen självrisk',
                ],
                exceptions: [
                  'Brott i samband med arbete eller när du medvetet blandar dig i bråk',
                  'Överfallsskada i samband med upplopp / huliganism / våld i hemmet',
                ],
                info: 'Hur du själv agerar i olika situationer kan påverka hur stor din ersättning blir. Om du är påverkad av alkohol eller droger, är provocerande eller aggressiv eller medvetet går in i konflikter kan din ersättning minskas eller helt utebli.',
                icon: {
                  variants: {
                    light: {
                      svgUrl: 'https://promise.hedvig.com/media/assault_d371c026ac.svg',
                      __typename: 'IconVariant',
                    },
                    __typename: 'IconVariants',
                  },
                  __typename: 'Icon',
                },
                __typename: 'PerilV2',
              },
              {
                title: 'Sjuk på resa',
                description:
                  'Vårt reseskydd gäller de första 45 dagarna på din resa och ersätter kostnader om du blir akut sjuk, skadar dig eller får akuta tandskador. Vi flyger även hem dig till Sverige för vidare vård om det bedöms nödvändigt.',
                covered: [
                  'Olycksfall, akut sjukdom, akuta tandbesvär',
                  'Avbruten resa p.g.a att närstående person avlidit/allvarligt sjuk/skadad',
                  'Läkarvård och logi',
                  'Ingen självrisk',
                  'Inget maxtak för ersättning',
                ],
                exceptions: [
                  'Sjukdomstillstånd som var kända innan avresan',
                  'Kampsport med kroppskontakt/Fallskärmshoppning/Skärmflygning',
                ],
                info: 'Kontakta alltid oss direkt via appen eller ring Hedvig Global Assistance på +45 38 48 94 61 som har öppet dygnet runt.',
                icon: {
                  variants: {
                    light: {
                      svgUrl: 'https://promise.hedvig.com/media/sick_on_holiday_17b3f1899c.svg',
                      __typename: 'IconVariant',
                    },
                    __typename: 'IconVariants',
                  },
                  __typename: 'Icon',
                },
                __typename: 'PerilV2',
              },
              {
                title: 'Vitvaror',
                description:
                  'Du kan få ersättning om tvättmaskinen säckar ihop eller om annan elektrisk maskin eller apparat går sönder p.g.a. kortslutning, överslag eller överspänning. Och går frysen sönder kan du få ersättning för eventuellt skadat innehåll.',
                covered: [
                  'Vitvaror/hushållsmaskiner p.g.a kortslutning, överslag eller överspänning',
                  'Installation för värme, vatten, avlopp, ventilation, gas, el',
                  'Glasrutor i fönster/dörrar i byggnaden',
                  'Tvätt i tvättmaskin/torktumlare vid fel på maskinen',
                  'Sanitetsgods',
                  'Livsmedel i frys vid strömavbrott',
                  'Egeninstallerad hiss (max 20.000 kr)',
                ],
                exceptions: [
                  'Ytliga skador och skönhetsfel ersätts inte',
                  'Värmeslingor i golv i badrum eller annat våtutrymme',
                ],
                info: 'Det finns inget speciellt att tänka på.',
                icon: {
                  variants: {
                    light: {
                      svgUrl: 'https://promise.hedvig.com/media/appliance_damage_2a23c61a09.svg',
                      __typename: 'IconVariant',
                    },
                    __typename: 'IconVariants',
                  },
                  __typename: 'Icon',
                },
                __typename: 'PerilV2',
              },
              {
                title: 'Drulle',
                description:
                  'Vår drulleförsäkring gäller när du har sönder saker som du äger genom en plötslig och oförutsedd händelse. Vi hjälper dig t.e.x när du spiller kaffe på datorn, tappar mobilen i marken eller sätter dig på glasögonen. Drulle ingår alltid utan extra kostnad.',
                covered: [
                  'Plötslig och oförutsedd skada',
                  'Plötslig och oförutsedd händelse',
                  'T.ex. om du skulle spilla kaffe på din dator',
                  'T.ex. om du tappar din mobiltelefon i marken',
                  'T.ex. om du sätter dig på dina glasögon',
                  'Max 50 000 kr i ersättning per förlorad eller skadad sak',
                ],
                exceptions: [
                  'Lånad egendom t.ex. lånedator från jobbet/skolan',
                  'Stöld av stöldbegärlig egendom (ex: kamera, smycke) i bil/lokal/biyta',
                  'Stöld av pengar eller värdehandlingar',
                ],
                info: 'Ta med mobilen (stöldbegärlig egendom) när du lämnar bilen. Lämna inte värdefulla ägodelar i källaren (biyta) och checka inte in smycken eller klockor när du reser.',
                icon: {
                  variants: {
                    light: {
                      svgUrl: 'https://promise.hedvig.com/media/all_risk_eba77dfb03.svg',
                      __typename: 'IconVariant',
                    },
                    __typename: 'IconVariants',
                  },
                  __typename: 'Icon',
                },
                __typename: 'PerilV2',
              },
              {
                title: 'Bostadsrättstillägg',
                description:
                  'Om man äger sin lägenhet är det skönt att ha en försäkring som täcker själva lägenheten också, inte bara prylarna som finns däri. På försäkringsspråk kallas det för bostadsrättstillägg. Hedvig ersätter kostnaden för att reparera skador på din lägenhet utan beloppsbegränsning - oavsett om du bor i studentlya eller paradvåning. Skönt!',
                covered: [
                  'Vatten- och brandskador på fast inredning (typ ditt nya kök)',
                  'Vatten- och brandskador på ytskikt (typ dina nyfixade golv, tak eller väggar)',
                ],
                exceptions: ['Inget särskilt!'],
                info: 'Inget särskilt.',
                icon: {
                  variants: {
                    light: {
                      svgUrl: 'https://promise.hedvig.com/media/brf_additional_51b2fb160a.svg',
                      __typename: 'IconVariant',
                    },
                    __typename: 'IconVariants',
                  },
                  __typename: 'Icon',
                },
                __typename: 'PerilV2',
              },
            ],
            insurableLimits: [
              {
                label: 'Din lägenhet är försäkrad till',
                limit: 'Fullvärde',
                description:
                  'Om din lägenhet blir skadad så betalar Hedvig för reparation eller återställande utan någon beloppsbegränsning',
                type: 'INSURED_AMOUNT',
                __typename: 'InsurableLimit',
              },
              {
                label: 'Dina saker är försäkrade till totalt',
                limit: '1 000 000',
                description: 'Alla dina ägodelar är sammanlagt försäkrade upp till 1 miljon kronor',
                type: 'INSURED_AMOUNT',
                __typename: 'InsurableLimit',
              },
              {
                label: 'Självrisken är',
                limit: '1 500 kr',
                description:
                  'Självrisk är den kostnad vid en skada du själv behöver stå för. För vissa skador gäller en högre självrisk, t.ex. översvämning och frysskador.',
                type: 'DEDUCTIBLE',
                __typename: 'InsurableLimit',
              },
              {
                label: 'Reseskydd',
                limit: '45 dagar',
                description:
                  'Reseskyddet täcker dig under de 45 första dagarna av din resa och gäller över hela världen',
                type: 'TRAVEL_DAYS',
                __typename: 'InsurableLimit',
              },
            ],
            insuranceTerms: [
              {
                displayName: 'Villkor',
                url: 'https://promise.hedvig.com/Bostadsratt_sv_b5416f58d4.pdf',
                type: 'TERMS_AND_CONDITIONS',
                __typename: 'InsuranceTerm',
              },
              {
                displayName: 'Produktfaktablad',
                url: 'https://www.hedvig.com/se/villkor',
                type: 'PRE_SALE_INFO_EU_STANDARD',
                __typename: 'InsuranceTerm',
              },
              {
                displayName: 'Personuppgifter',
                url: 'https://www.hedvig.com/se/personuppgifter',
                type: 'PRIVACY_POLICY',
                __typename: 'InsuranceTerm',
              },
              {
                displayName: 'Förköpsinformation',
                url: 'https://promise.hedvig.com/SV_1_0_Foerkoepsinformation_Bostadsratt_1_8bf85cf062.pdf',
                type: 'GENERAL_TERMS',
                __typename: 'InsuranceTerm',
              },
            ],
            quoteDetails: {
              street: 'Storgatan 1',
              zipCode: '12345',
              householdSize: 1,
              livingSpace: 45,
              type: 'BRF',
              __typename: 'SwedishApartmentQuoteDetails',
            },
            __typename: 'BundledQuote',
          },
          {
            id: 'a9cd291b-1f76-4a69-b791-f56cf085964a',
            price: {
              amount: '89',
              currency: 'SEK',
              __typename: 'MonetaryAmountV2',
            },
            typeOfContract: 'SE_ACCIDENT',
            displayName: 'Olycksfallsförsäkring',
            contractPerils: [
              {
                title: 'Vård & Behandling',
                description:
                  'Försäkringen ger ersättning för kostnader som uppstått till följd av ett olycksfall där skadan krävt läkarbehandling. ',
                covered: [
                  'Läkarvård och hjälpmedel',
                  'Resor till och från behandling ',
                  'Kläder, glasögon och hjälm som skadats vid olyckstillfället',
                  'Ersättning upp till 20.000 kr per skada',
                  'Kostnader inom Norden ersätts',
                ],
                exceptions: [],
                info: '',
                icon: {
                  variants: {
                    light: {
                      svgUrl: 'https://promise.hedvig.com/media/care_and_treatment_b1b89d3806.svg',
                      __typename: 'IconVariant',
                    },
                    __typename: 'IconVariants',
                  },
                  __typename: 'Icon',
                },
                __typename: 'PerilV2',
              },
              {
                title: 'Tandskada',
                description:
                  'Försäkringen ger ersättning för tandvårdskostnader som uppstått till följd av ett olycksfall som resulterat i skador som krävt tandläkarbehandling.',
                covered: [
                  'Läkarvård och hjälpmedel',
                  'Kostnader inom Norden ersätts',
                  'Ersättning upp till 20.000 kr per skada',
                ],
                exceptions: [],
                info: '',
                icon: {
                  variants: {
                    light: {
                      svgUrl: 'https://promise.hedvig.com/media/dental_injury_69b41db5fc.svg',
                      __typename: 'IconVariant',
                    },
                    __typename: 'IconVariants',
                  },
                  __typename: 'Icon',
                },
                __typename: 'PerilV2',
              },
              {
                title: 'Sjukhusvistelse',
                description: 'Ersättning om du behöver skrivas in på sjukhus för behandling.',
                covered: ['300 kr per påbörjat dygn', 'Upp till 200 dagar för en och samma skada'],
                exceptions: [],
                info: '',
                icon: {
                  variants: {
                    light: {
                      svgUrl: 'https://promise.hedvig.com/media/hospitalisation_3ae160b774.svg',
                      __typename: 'IconVariant',
                    },
                    __typename: 'IconVariants',
                  },
                  __typename: 'Icon',
                },
                __typename: 'PerilV2',
              },
              {
                title: 'Ärr',
                description:
                  'Ärr som uppstått till följd av olycksfallsskada som krävt läkarbehandling ersätts med ett engångsbelopp. ',
                covered: [
                  'Ärr eller annan utseendemässig förändring',
                  'Ersättning bestäms av din ålder samt ärrets placering och storlek',
                ],
                exceptions: [],
                info: '',
                icon: {
                  variants: {
                    light: {
                      svgUrl: 'https://promise.hedvig.com/media/scarring_58841347d1.svg',
                      __typename: 'IconVariant',
                    },
                    __typename: 'IconVariants',
                  },
                  __typename: 'Icon',
                },
                __typename: 'PerilV2',
              },
              {
                title: 'Krishjälp',
                description:
                  'Du har rätt till behandling hos leg. psykolog om du drabbas av en krisreaktion efter: ett olycksfall, nära anhörigs död, överfall, misshandel, rån, hot eller våldtäkt. ',
                covered: [
                  'Resor till och från behandling',
                  'Behandlingen ska påbörjas inom ett år från händelsen',
                  'Ersättning upp till 10.000 kr per skada',
                ],
                exceptions: [],
                info: '',
                icon: {
                  variants: {
                    light: {
                      svgUrl: 'https://promise.hedvig.com/media/crisis_help_3ecec627a9.svg',
                      __typename: 'IconVariant',
                    },
                    __typename: 'IconVariants',
                  },
                  __typename: 'Icon',
                },
                __typename: 'PerilV2',
              },
              {
                title: 'Bestående men',
                description:
                  'Även kallat medicinsk invaliditet. Om du skulle drabbas av bestående men efter en olycksfallsskada får du ersättning. Hur nedsatt kroppsfunktionen är bedöms i procent enligt det medicinska tabellverk som är framtaget för försäkringsbranschen. Den ersättning du får är den fastställda procentsatsen av försäkringsbeloppet. ',
                covered: ['Maximal ersättning (tillsammans med ekonomisk invaliditet) är 1 miljon kronor'],
                exceptions: [
                  'Försäkringsbeloppet avtrappas med 50 000 kr/år fr.o.m. det år den försäkrade fyller 46 år för att vid 65 år ålder vara helt borttaget',
                ],
                info: '',
                icon: {
                  variants: {
                    light: {
                      svgUrl: 'https://promise.hedvig.com/media/permanent_injury_8da6c71a90.svg',
                      __typename: 'IconVariant',
                    },
                    __typename: 'IconVariants',
                  },
                  __typename: 'Icon',
                },
                __typename: 'PerilV2',
              },
              {
                title: 'Förlorad arbetsförmåga',
                description:
                  'Även kallat ekonomisk invaliditet. Om du skulle drabbas av nedsatt arbetsförmåga med mer än 50% efter en olycksfallsskada kan försäkringen ge ersättning. En förutsättning är att olycksfallet också medfört minst 5% medicinsk invaliditet samt att försäkringskassan beviljat minst halv sjukersättning. Ersättning ges som en procentsats av försäkringsbeloppet motsvarande den förlorade arbetsförmågan. ',
                covered: ['Maximal ersättning (tillsammans med medicinsk  invaliditet) är 1 miljon kronor'],
                exceptions: [
                  'Försäkringsbeloppet avtrappas med 50 000 kr/år fr.o.m. det år den försäkrade fyller 46 år för att vid 65 år ålder vara helt borttaget',
                ],
                info: '',
                icon: {
                  variants: {
                    light: {
                      svgUrl: 'https://promise.hedvig.com/media/reduced_working_ability_8bff328528.svg',
                      __typename: 'IconVariant',
                    },
                    __typename: 'IconVariants',
                  },
                  __typename: 'Icon',
                },
                __typename: 'PerilV2',
              },
              {
                title: 'Dödsfall',
                description:
                  'Om du skulle avlida till följd av ett olycksfall betalas ersättning ut med 50.000 kr från försäkringen. ',
                covered: ['Ersättning betalas ut med 50.000 kr'],
                exceptions: [],
                info: '',
                icon: {
                  variants: {
                    light: {
                      svgUrl: 'https://promise.hedvig.com/media/death_bc66f3d2e1.svg',
                      __typename: 'IconVariant',
                    },
                    __typename: 'IconVariants',
                  },
                  __typename: 'Icon',
                },
                __typename: 'PerilV2',
              },
            ],
            insurableLimits: [
              {
                label: 'Ditt försäkringsbelopp är',
                limit: '1 000 000 kr',
                description:
                  'Beloppet gäller som maximal ersättning vid bestående skada och förlorad arbetsförmåga. Förutom försäkringsbeloppet styrs ersättning av den invaliditetsgrad i procent som läkaren fastställer för din skada. Exempel: Om den bestående skadan fastställs till 20% betalar vi ut 200.000 kr i ersättning.',
                type: 'INSURED_AMOUNT',
                __typename: 'InsurableLimit',
              },
              {
                label: 'Din självrisk är',
                limit: '0 kr',
                description: 'Försäkringen gäller utan självrisk',
                type: 'DEDUCTIBLE',
                __typename: 'InsurableLimit',
              },
            ],
            insuranceTerms: [
              {
                displayName: 'Villkor',
                url: 'https://promise.hedvig.com/swe_terms_conditions_accident_47228b7079.pdf',
                type: 'TERMS_AND_CONDITIONS',
                __typename: 'InsuranceTerm',
              },
              {
                displayName: 'Produktfaktablad',
                url: 'https://promise.hedvig.com/Hedvig_OLYCKSFALL_SE_IPID_1_7e7640efa2.pdf',
                type: 'PRE_SALE_INFO_EU_STANDARD',
                __typename: 'InsuranceTerm',
              },
              {
                displayName: 'Ärrtabell',
                url: 'https://promise.hedvig.com/se_arrtabell_olycksfall_66dbff4975.pdf',
                type: 'GENERAL_TERMS',
                __typename: 'InsuranceTerm',
              },
            ],
            quoteDetails: {
              isStudent: false,
              __typename: 'SwedishAccidentDetails',
            },
            __typename: 'BundledQuote',
          },
        ],
        __typename: 'QuoteBundle',
      },
      campaign: null,
      checkout: null,
      __typename: 'QuoteCart',
    },
  },
};

export const USER_INFORMATION = {
  firstName: 'Sven',
  lastName: 'Svensson',
  birthDate: '1995-09-29',
  ssn: '199509291234',
  email: 'sven.svensson@hedvig.com',
};

export const APARTMENT_INFO = {
  type: 'apartment',
  street: 'Storgatan 1',
  zipCode: '12345',
  city: 'Säffle',
  householdSize: 1,
  livingSpace: 45,
  subType: 'BRF',
};

export const ACCIDENT_INFO = {
  type: 'swedishAccident',
  street: 'Storgatan 1',
  zipCode: '12345',
  city: 'Säffle',
  householdSize: 1,
  student: false,
  livingSpace: '20',
};

export const APARTMENT_QUOTE = {
  ...USER_INFORMATION,
  data: APARTMENT_INFO,
};

export const ACCIDENT_QUOTE = {
  ...USER_INFORMATION,
  data: ACCIDENT_INFO,
};

export const PERILS_MOCK: PerilV2[] = [
  {
    title: 'Eldsvåda',
    description:
      'En överhettad mobilladdare eller ett misslyckat försök att fritera pommes frites, bränder uppstår på de mest vardagliga vis. Om det börjar brinna i din lägenhet får du ersättning för brand- och rökskador.',
    covered: [
      'Eld som har brunnit med öppen låga (inte enbart glöd- eller svedskada)',
      'Explosion',
      'Plötslig skada av sot',
      'Blixt',
      'Frätande gas som bildats vid oavsiktlig upphettning av plast',
      'Sanering av sot orsakad av öppen låga',
    ],
    exceptions: ['Sprängningsarbete', 'Sot efter levande ljus'],
    info: 'Var försiktig med levande ljus eller eld.',
    icon: {
      variants: {
        light: {
          svgUrl: 'https://promise.hedvig.com/media/fire_97796e0790.svg',
          __typename: 'IconVariant',
        },
        __typename: 'IconVariants',
      },
      __typename: 'Icon',
    },
    __typename: 'PerilV2',
  },
  {
    title: 'Vattenläcka',
    description:
      'Skyddet kan ge ersättning vid olika typer av vattenskador t.ex. om en tvättmaskin läckt okontrollerat eller ett badrum svämmat över. Du kan få ersättning både för att åtgärda skadorna på lägenheten samt för andra merkostnader under reparationen.',
    covered: [
      'Oberäknat vatten/ånga från vattenledningssytem',
      'Oberäknat vatten/ånga från badrum, kök eller tvättstuga',
      'Oberäknat vatten/ånga från värmepanna',
      'Läckage från kyl/frys',
      'Läckage från brandsläckare',
      'Läckage från tvättställ',
      'Läckage från akvarie',
    ],
    exceptions: [
      'Yt-och tätskikt installerats utan behörig installatör',
      'Skada på det föremål som har läckt',
      'Skada orsakat av takränna eller utvändigt stuprör',
    ],
    info: 'Se till att kranar är täta och stängda när de inte används. Lägg underlägg under kyl/frys/ diskmaskin som samlar upp vatten. Se till att ledningssystem och anslutna anordningar inte fryser sönder. Och lämnar du lägenheten i mer än 7 dagar så måste vattnet stängas av helt.',
    icon: {
      variants: {
        light: {
          svgUrl: 'https://promise.hedvig.com/media/water_damage_e25b83cd0b.svg',
          __typename: 'IconVariant',
        },
        __typename: 'IconVariants',
      },
      __typename: 'Icon',
    },
    __typename: 'PerilV2',
  },
  {
    title: 'Inbrott',
    description:
      'Skyddet gäller när någon utan lov gjort inbrott eller förstört din bostadsrätt. Skyddet gäller självklart också för vinden och källaren.',
    covered: [
      'Allt du äger i din lägenhet till ett värde upp till 1 miljon kronor',
      'Inbrott och skadegörelse i din bostadsrätt inklusive. vind/källare',
    ],
    exceptions: [
      'Stöld av pengar, värdehandlingar och stöldbegärlig egendom (smycken, mobiltelefoner, datorer och allt annat dyrt) ifrån vind eller källarförråd eller ur bil',
    ],
    info: 'Lås ytterdörrar och regla fönster när ingen är hemma. Och märk inte dina nycklar så att folk förstår vart du bor eller vart de går.',
    icon: {
      variants: {
        light: {
          svgUrl: 'https://promise.hedvig.com/media/burglary_946096433f.svg',
          __typename: 'IconVariant',
        },
        __typename: 'IconVariants',
      },
      __typename: 'Icon',
    },
    __typename: 'PerilV2',
  },
  {
    title: 'Stöld',
    description:
      'Vid stöld och skadegörelse av dina saker så täcks dem och ersätts av oss. Oavsett om du är hemma eller på flygande fot kan du alltid känna dig trygg med oss.',
    covered: [
      'Stöld och skadegörelse i ditt hem',
      'Stöld ur gemensamhetsutrymme, t.ex. cykel- eller barnvagnsförråd',
      'Stöld och skadegörelse av saker du tar med dig till ditt arbete eller hotellrum',
      'Stöld och skadegörelse vid förvaring hos t.ex. Shurguard',
      'Stöld utanför bostaden',
      'Stöld ur bil när du är på resa',
    ],
    exceptions: [
      'För vissa typer av saker, t.ex. pengar, hemelektronik, mobiltelefoner, datorer, kameror, sprit och smycken gäller speciella regler beroende på var stölden inträffat.',
    ],
    info: 'Ha alltid uppsikt över dina saker. Lämna inte värdesaker på t.ex. ett bord på ett café. Lås alltid bilen om du förvarar saker där och stöldbegärlig egendom (smycke, dator) ska alltid döljas. Och lås alltid din cykel.',
    icon: {
      variants: {
        light: {
          svgUrl: 'https://promise.hedvig.com/media/theft_701fa78317.svg',
          __typename: 'IconVariant',
        },
        __typename: 'IconVariants',
      },
      __typename: 'Icon',
    },
    __typename: 'PerilV2',
  },
  {
    title: 'Skadegörelse',
    description:
      'Skyddet gäller när någon utan lov gjort inbrott eller förstört din bostadsrätt. Skyddet gäller självklart också för vinden och källaren.',
    covered: [
      'Sakerna i din lägenhet till ett värde upp till 1 miljon kronor',
      'Inbrott och skadegörelse i t.ex. vind/källare',
    ],
    exceptions: [
      'Stöld av pengar, värdehandlingar och stöldbegärlig egendom (smycken, mobiltelefoner, datorer och allt annat dyrt) ifrån biyta',
    ],
    info: 'Lås ytterdörrar och regla fönster när ingen är hemma. Och märk inte dina nycklar så att folk förstår vart du bor eller vart de går.',
    icon: {
      variants: {
        light: {
          svgUrl: 'https://promise.hedvig.com/media/criminal_damage_9f725dc7cf.svg',
          __typename: 'IconVariant',
        },
        __typename: 'IconVariants',
      },
      __typename: 'Icon',
    },
    __typename: 'PerilV2',
  },
  {
    title: 'Ansvarsskydd',
    description:
      'Vårt ansvarsskydd gäller när någon kräver dig på skadestånd för att ha skadat honom eller henne eller dennes ägodelar. Vi hjälper dig med utredning och förhandling och vi betalar både rättegångskostnader och skadestånd om du vållat skadan.',
    covered: [
      'T.ex. om ditt handfat gått sönder i en lägenhet',
      'T.ex. vattenskada från din lägenhet som drabbar grannarna',
      'T.ex. Hunden orsakar bitskador',
      'Utredning och förhandling',
      'Representation i domstol',
      'Max 5 000 000 kr i ersättning per försäkringsår och person/sakskada',
    ],
    exceptions: [
      'Skada i samband med arbete',
      'Skada orsakat av när du kört bil/fordon',
      'Uppsåtligt brott, t.ex. om du skadar någon/något med flit',
    ],
    info: 'Kontakta Hedvig direkt när någon kräver dig på skadestånd. Medge aldrig någon skyldighet utan ta ett djupt andetag och låt oss hjälpa dig istället.',
    icon: {
      variants: {
        light: {
          svgUrl: 'https://promise.hedvig.com/media/liability_c331907aff.svg',
          __typename: 'IconVariant',
        },
        __typename: 'IconVariants',
      },
      __typename: 'Icon',
    },
    __typename: 'PerilV2',
  },
  {
    title: 'Rättsskydd',
    description:
      'Vårt rättsskydd kan ge dig ersättning för att t.ex. anlita advokat/ombud om du hamnar i en rättslig tvist. Skyddet gäller i tvister som prövas i tingsrätt, hovrätt eller Högsta domstolen.',
    covered: [
      'Vårdnadstvist',
      'Arvstvist',
      'Fastighetstvist',
      'Advokat och representation i domstol',
      'Krav enligt skadeståndslagen',
      'Mellan 1 500 - 250 000 kr i ersättning, självrisk 25% av totalbeloppet',
    ],
    exceptions: ['Småmål enligt rättegångsbalken', 'Uppsåtligt brott, t.ex om du skadat någon/något med flit'],
    info: 'Du måste välja vem som ska representera dig och personen måste vara medlem i Svenska advokatsamfundet. Sen måste ombudet skicka in en ansökan till oss innan du kan få besked om rättsskyddet täcker tvisten.',
    icon: {
      variants: {
        light: {
          svgUrl: 'https://promise.hedvig.com/media/legal_protection_f6e65e1b13.svg',
          __typename: 'IconVariant',
        },
        __typename: 'IconVariants',
      },
      __typename: 'Icon',
    },
    __typename: 'PerilV2',
  },
  {
    title: 'Resetrubbel',
    description:
      'Du kan få ersättning om ditt bagage blir försenat på utresa. Och är du i ett land där det utbryter krig eller det sker en naturkatastrof, ja då flyger vi hem dig till Sverige och ersätter dig för de nödvändiga och skäliga kostnaderna.',
    covered: [
      'Reseskydd i 45 dagar',
      'Evakuering vid krig',
      'Evakuering vid epidemi',
      'Evakuering vid naturkatastrof, jordskalv, vulkanutbrott',
      'Bagageförsening vid utresa',
      'Max 5000 kr i ersättning vid försenat bagage',
    ],
    exceptions: ['Hemresa från land som UD avråder folk från att resa till', 'Förlorat bagage'],
    info: 'Anmäl försenat bagage direkt till flygbolaget och se alltid till att få en så kallad PIR-rapport, som kvitto på att ditt bagage är försenat/försvunnet.',
    icon: {
      variants: {
        light: {
          svgUrl: 'https://promise.hedvig.com/media/travel_insurance_ed0fa95fdf.svg',
          __typename: 'IconVariant',
        },
        __typename: 'IconVariants',
      },
      __typename: 'Icon',
    },
    __typename: 'PerilV2',
  },
  {
    title: 'Överfall',
    description:
      'Vårt överfallsskydd kan ge dig ersättning om du blir utsatt för brott, t.ex. misshandel, rån, ofredande eller våldtäkt. Skyddet kan också ge dig ersättning om du skulle bli utsatt för försök till brott.',
    covered: [
      'Misshandel (som inte är ringa) eller rån',
      'Grov misshandel med livshotande skada',
      'Grovt rån',
      'Ofredande om du är under 18 år',
      'Våldtäkt',
      'Mellan 8000 kr - 200 000 kr i ersättning, ingen självrisk',
    ],
    exceptions: [
      'Brott i samband med arbete eller när du medvetet blandar dig i bråk',
      'Överfallsskada i samband med upplopp / huliganism / våld i hemmet',
    ],
    info: 'Hur du själv agerar i olika situationer kan påverka hur stor din ersättning blir. Om du är påverkad av alkohol eller droger, är provocerande eller aggressiv eller medvetet går in i konflikter kan din ersättning minskas eller helt utebli.',
    icon: {
      variants: {
        light: {
          svgUrl: 'https://promise.hedvig.com/media/assault_d371c026ac.svg',
          __typename: 'IconVariant',
        },
        __typename: 'IconVariants',
      },
      __typename: 'Icon',
    },
    __typename: 'PerilV2',
  },
  {
    title: 'Sjuk på resa',
    description:
      'Vårt reseskydd gäller de första 45 dagarna på din resa och ersätter kostnader om du blir akut sjuk, skadar dig eller får akuta tandskador. Vi flyger även hem dig till Sverige för vidare vård om det bedöms nödvändigt.',
    covered: [
      'Olycksfall, akut sjukdom, akuta tandbesvär',
      'Avbruten resa p.g.a att närstående person avlidit/allvarligt sjuk/skadad',
      'Läkarvård och logi',
      'Ingen självrisk',
      'Inget maxtak för ersättning',
    ],
    exceptions: [
      'Sjukdomstillstånd som var kända innan avresan',
      'Kampsport med kroppskontakt/Fallskärmshoppning/Skärmflygning',
    ],
    info: 'Kontakta alltid oss direkt via appen eller ring Hedvig Global Assistance på +45 38 48 94 61 som har öppet dygnet runt.',
    icon: {
      variants: {
        light: {
          svgUrl: 'https://promise.hedvig.com/media/sick_on_holiday_17b3f1899c.svg',
          __typename: 'IconVariant',
        },
        __typename: 'IconVariants',
      },
      __typename: 'Icon',
    },
    __typename: 'PerilV2',
  },
  {
    title: 'Vitvaror',
    description:
      'Du kan få ersättning om tvättmaskinen säckar ihop eller om annan elektrisk maskin eller apparat går sönder p.g.a. kortslutning, överslag eller överspänning. Och går frysen sönder kan du få ersättning för eventuellt skadat innehåll.',
    covered: [
      'Vitvaror/hushållsmaskiner p.g.a kortslutning, överslag eller överspänning',
      'Installation för värme, vatten, avlopp, ventilation, gas, el',
      'Glasrutor i fönster/dörrar i byggnaden',
      'Tvätt i tvättmaskin/torktumlare vid fel på maskinen',
      'Sanitetsgods',
      'Livsmedel i frys vid strömavbrott',
      'Egeninstallerad hiss (max 20.000 kr)',
    ],
    exceptions: ['Ytliga skador och skönhetsfel ersätts inte', 'Värmeslingor i golv i badrum eller annat våtutrymme'],
    info: 'Det finns inget speciellt att tänka på.',
    icon: {
      variants: {
        light: {
          svgUrl: 'https://promise.hedvig.com/media/appliance_damage_2a23c61a09.svg',
          __typename: 'IconVariant',
        },
        __typename: 'IconVariants',
      },
      __typename: 'Icon',
    },
    __typename: 'PerilV2',
  },
  {
    title: 'Drulle',
    description:
      'Vår drulleförsäkring gäller när du har sönder saker som du äger genom en plötslig och oförutsedd händelse. Vi hjälper dig t.e.x när du spiller kaffe på datorn, tappar mobilen i marken eller sätter dig på glasögonen. Drulle ingår alltid utan extra kostnad.',
    covered: [
      'Plötslig och oförutsedd skada',
      'Plötslig och oförutsedd händelse',
      'T.ex. om du skulle spilla kaffe på din dator',
      'T.ex. om du tappar din mobiltelefon i marken',
      'T.ex. om du sätter dig på dina glasögon',
      'Max 50 000 kr i ersättning per förlorad eller skadad sak',
    ],
    exceptions: [
      'Lånad egendom t.ex. lånedator från jobbet/skolan',
      'Stöld av stöldbegärlig egendom (ex: kamera, smycke) i bil/lokal/biyta',
      'Stöld av pengar eller värdehandlingar',
    ],
    info: 'Ta med mobilen (stöldbegärlig egendom) när du lämnar bilen. Lämna inte värdefulla ägodelar i källaren (biyta) och checka inte in smycken eller klockor när du reser.',
    icon: {
      variants: {
        light: {
          svgUrl: 'https://promise.hedvig.com/media/all_risk_eba77dfb03.svg',
          __typename: 'IconVariant',
        },
        __typename: 'IconVariants',
      },
      __typename: 'Icon',
    },
    __typename: 'PerilV2',
  },
  {
    title: 'Bostadsrättstillägg',
    description:
      'Om man äger sin lägenhet är det skönt att ha en försäkring som täcker själva lägenheten också, inte bara prylarna som finns däri. På försäkringsspråk kallas det för bostadsrättstillägg. Hedvig ersätter kostnaden för att reparera skador på din lägenhet utan beloppsbegränsning - oavsett om du bor i studentlya eller paradvåning. Skönt!',
    covered: [
      'Vatten- och brandskador på fast inredning (typ ditt nya kök)',
      'Vatten- och brandskador på ytskikt (typ dina nyfixade golv, tak eller väggar)',
    ],
    exceptions: ['Inget särskilt!'],
    info: 'Inget särskilt.',
    icon: {
      variants: {
        light: {
          svgUrl: 'https://promise.hedvig.com/media/brf_additional_51b2fb160a.svg',
          __typename: 'IconVariant',
        },
        __typename: 'IconVariants',
      },
      __typename: 'Icon',
    },
    __typename: 'PerilV2',
  },
];

export const CART_ID = 'ce9e8fd3-bc0c-4475-a140-5119194f74b2';
