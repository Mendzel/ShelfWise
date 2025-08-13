interface BaseProduct {
  name: string;
  price: number;
  description?: string;
  imageUrl: string;
  category: string; // TO CHANGE: use enum for categories
  stock: number;
  updatedAt: Date;
}

export interface ProductListItem extends BaseProduct {
    id: string;
}