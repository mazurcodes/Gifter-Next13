import { Category, GiftsDataType, Occasion, Priority, Status } from '@/types';

export const giftsData: GiftsDataType[] = [
  {
    id: 1,
    ownerEmail: 'some@example.com',
    status: Status.AVAILABLE,
    name: 'OstroVit Erytrytol 1 kg ERYTROL NATURALNY SŁODZIK',
    priority: Priority.HIGH,
    occasion: Occasion.NONE,
    category: Category.FOOD,
    notes: 'This is a long comment to piss me off',
    price: '1690',
    date: '01.01.2023',
    links: [
      {
        id: 1,
        seller: 'Google',
        linkUrl:
          'https://www.google.com/search?q=ostrovit+erytrytol&sxsrf=APwXEdcyXoigtvHD4J15bMcHnRSgtqpK5w:1680281706785&source=lnms&tbm=shop&sa=X&ved=2ahUKEwinooWS0Yb-AhUx_CoKHSBhD48Q_AUoAXoECAEQAw&biw=2560&bih=1304&dpr=1',
      },
      {
        id: 2,
        seller: 'Amazon',
        linkUrl:
          'https://www.amazon.pl/dp/B081H643L8?ref_=cm_sw_r_cp_ud_dp_HFEQ8GQKMJYNZCHR3GK0',
      },
      {
        id: 3,
        seller: 'Allegro',
        linkUrl:
          'https://allegro.pl/oferta/ostrovit-erytrytol-1-kg-erytrol-naturalny-slodzik-12310882890',
      },
    ],
  },
  {
    id: 2,
    ownerEmail: 'some@example.com',
    status: Status.RESERVED,
    name: 'ROGELLI EXPLORE koszulka rowerowa męska M',
    priority: Priority.MEDIUM,
    occasion: Occasion.BITHDAY,
    category: Category.CLOTHING,
    notes: 'Red color',
    price: '15900',
    date: '03.02.2023',
    links: [
      { id: 1, seller: 'Google', linkUrl: 'https://www.google.com' },
      { id: 2, seller: 'Amazon', linkUrl: 'https://amazon.pl' },
      {
        id: 3,
        seller: 'Allegro',
        linkUrl:
          'https://allegro.pl/oferta/termoaktywny-bezrekawnik-brubeck-base-layer-13400986818',
      },
    ],
  },
  {
    id: 3,
    ownerEmail: 'some@example.com',
    status: Status.BOUGHT,
    name: 'Termoaktywny bezrękawnik Brubeck Base Layer',
    priority: Priority.LOW,
    occasion: Occasion.BITHDAY,
    category: Category.CLOTHING,
    notes: 'size M',
    price: '7499',
    date: '04.04.2023',
    links: [],
  },
  {
    id: 4,
    ownerEmail: 'some@example.com',
    status: Status.AVAILABLE,
    name: 'OstroVit Erytrytol 1 kg ERYTROL NATURALNY SŁODZIK',
    priority: Priority.HIGH,
    occasion: Occasion.NONE,
    category: Category.FOOD,
    notes: '',
    price: '1690',
    date: '01.01.2023',
    links: [],
  },
  {
    id: 5,
    ownerEmail: 'some@example.com',
    status: Status.AVAILABLE,
    name: 'OstroVit Erytrytol 1 kg ERYTROL NATURALNY SŁODZIK',
    priority: Priority.LOW,
    occasion: Occasion.NONE,
    category: Category.FOOD,
    notes: '',
    price: '1690',
    date: '01.01.2023',
    links: [],
  },
  {
    id: 6,
    ownerEmail: 'some@example.com',
    status: Status.AVAILABLE,
    name: 'OstroVit Erytrytol 1 kg ERYTROL NATURALNY SŁODZIK',
    priority: Priority.MEDIUM,
    occasion: Occasion.NONE,
    category: Category.FOOD,
    notes: '',
    price: '1690',
    date: '01.01.2023',
    links: [],
  },
];