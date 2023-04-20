import { GiftDataType } from '@/types';
import { Category, Occasion, Priority, Status } from '@/constants';

export const giftsData: GiftDataType[] = [
  {
    ownerEmail: 'some@example.com',
    status: Status.AVAILABLE,
    name: 'OstroVit Erytrytol 1 kg ERYTROL NATURALNY SŁODZIK',
    priority: Priority.HIGH,
    occasion: Occasion.NONE,
    category: Category.FOOD,
    notes: 'This is a long comment to piss me off',
    price: '1690',
    date: '01.01.2023',
    linkOne:
      'https://www.google.com/search?q=ostrovit+erytrytol&sxsrf=APwXEdcyXoigtvHD4J15bMcHnRSgtqpK5w:1680281706785&source=lnms&tbm=shop&sa=X&ved=2ahUKEwinooWS0Yb-AhUx_CoKHSBhD48Q_AUoAXoECAEQAw&biw=2560&bih=1304&dpr=1',
    linkTwo:
      'https://www.amazon.pl/dp/B081H643L8?ref_=cm_sw_r_cp_ud_dp_HFEQ8GQKMJYNZCHR3GK0',
    linkThree:
      'https://allegro.pl/oferta/ostrovit-erytrytol-1-kg-erytrol-naturalny-slodzik-12310882890',
  },
  {
    ownerEmail: 'some@example.com',
    status: Status.RESERVED,
    name: 'ROGELLI EXPLORE koszulka rowerowa męska M',
    priority: Priority.MEDIUM,
    occasion: Occasion.BITHDAY,
    category: Category.CLOTHING,
    notes: 'Red color',
    price: '159,00zł',
    date: '03.01.2023',
    linkOne: '',
    linkTwo: '',
    linkThree: '',
  },
  {
    ownerEmail: 'some@example.com',
    status: Status.BOUGHT,
    name: 'Termoaktywny bezrękawnik Brubeck Base Layer',
    priority: Priority.LOW,
    occasion: Occasion.BITHDAY,
    category: Category.CLOTHING,
    notes: 'size M',
    price: '74,99zł',
    date: '04.04.2023',
    links: [],
  },
  {
    ownerEmail: 'some@example.com',
    status: Status.AVAILABLE,
    name: 'OstroVit Erytrytol 1 kg ERYTROL NATURALNY SŁODZIK',
    priority: Priority.HIGH,
    occasion: Occasion.NONE,
    category: Category.FOOD,
    notes: '',
    price: '16,90 eur',
    date: '01.01.2023',
    links: [],
  },
  {
    ownerEmail: 'some@example.com',
    status: Status.AVAILABLE,
    name: 'OstroVit Erytrytol 1 kg ERYTROL NATURALNY SŁODZIK',
    priority: Priority.LOW,
    occasion: Occasion.NONE,
    category: Category.FOOD,
    notes: '',
    price: '16,90zł',
    date: '01.01.2023',
    links: [],
  },
  {
    ownerEmail: 'some@example.com',
    status: Status.AVAILABLE,
    name: 'OstroVit Erytrytol 1 kg ERYTROL NATURALNY SŁODZIK',
    priority: Priority.MEDIUM,
    occasion: Occasion.NONE,
    category: Category.FOOD,
    notes: '',
    price: '16.90 euro',
    date: '01.01.2023',
    links: [],
  },
];
