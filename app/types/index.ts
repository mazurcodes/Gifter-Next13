// sellers
export type SellerType = {
  id: number;
  name: 'Google' | 'Amazon' | 'Allegro' | 'Aliexpress';
  url: string;
};

// gifts
export enum Occasion {
  bithday = 'BIRTHDAY',
  nameday = 'NAMEDAY',
  holidays = 'HOLIDAYS',
  thanks = 'THANKS',
  other = 'OTHER',
  none = 'NONE',
}

export enum Category {
  books = 'BOOKS',
  electronics = 'ELECTRONICS',
  clothing = 'CLOTHING',
  home = 'HOME',
  beauty = 'BEAUTY',
  gadgets = 'GADGETS',
  food = 'FOOD',
  other = 'OTHER',
  none = 'NONE',
}

export enum Priority {
    high = 'HIGH',
    medium = 'MEDIUM',
    low = 'LOW',
}

export enum Status {
    available = 'AVAILABLE',
    reserved = 'RESERVED',
    bought = 'BOUGHT',
}

export type GiftsDataType = {
  id: number;
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
