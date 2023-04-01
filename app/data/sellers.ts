export type SellerType = {
  id: number;
  name: 'Google' | 'Amazon' | 'Allegro';
  url: string;
};

export const sellers: SellerType[] = [
  { id: 1, name: 'Google', url: 'http://shopping.google.pl' },
  { id: 2, name: 'Allegro', url: 'http://allegro.pl' },
  { id: 3, name: 'Amazon', url: 'http://amazon.pl' },
];
