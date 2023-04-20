import { Category, Occasion, Priority, Status } from '@/constants';

// sellers
export type SellerType = {
  id: number;
  name: 'Google' | 'Amazon' | 'Allegro' | 'Aliexpress';
  url: string;
};

export type GiftDataType = {
  ownerEmail: string;
  status: Status;
  name: string;
  priority: Priority;
  occasion: Occasion;
  category: Category;
  notes: string;
  price: string;
  date: string;
  linkOne?: string | undefined;
  linkTwo?: string | undefined;
  linkThree?: string | undefined;
  uid?: string;
};
