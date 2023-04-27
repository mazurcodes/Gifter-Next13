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
  linkOne?: string;
  linkTwo?: string;
  linkThree?: string;
  uid?: string;
};

export type FormDataType = {
  status: Status;
  name: string;
  priority: Priority;
  category: Category;
  occasion: Occasion;
  price: string;
  linkOne: string;
  linkTwo: string;
  linkThree: string;
  notes: string;
};
