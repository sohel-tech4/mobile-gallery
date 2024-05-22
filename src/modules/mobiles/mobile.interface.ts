export type TVarients = {
  type: string;
  value: string;
};

export type Tinventory = {
  quantity: number;
  inStock: boolean;
};

export type TMobile = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVarients[];
  inventory: Tinventory;
};
