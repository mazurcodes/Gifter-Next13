// sellers
export type SellerType = {
  id: number;
  name: 'Google' | 'Amazon' | 'Allegro' | 'Aliexpress';
  url: string;
};

// gifts
export enum Occasion {
  BITHDAY = 'Birthday',
  NAMEDAY = 'Nameday',
  HOLIDAYS = 'Holidays',
  THANKS = 'Thanks',
  OTHER = 'Other',
  NONE = 'None',
}

export enum Category {
  BOOKS = 'Books',
  ELECTRONICS = 'Electronics',
  CLOTHING = 'Clothing',
  HOME = 'Home',
  BEAUTY = 'Beauty',
  GADGETS = 'Gadgets',
  FOOD = 'Food',
  OTHER = 'Other',
  NONE = 'None',
}

export enum Priority {
  HIGH = 'High',
  MEDIUM = 'Medium',
  LOW = 'Low',
}

export enum Status {
  AVAILABLE = 'Available',
  RESERVED = 'Reserved',
  BOUGHT = 'Bought',
}

export type GiftsDataType = {
  id: number;
  ownerEmail: string;
  status: Status;
  name: string;
  priority: Priority;
  occasion: Occasion;
  category: Category;
  notes: string;
  price: string;
  date: string;
  links:
    | {
        id: number;
        seller: string;
        linkUrl: string;
      }[]
    | [];
};
