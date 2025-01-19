export interface IProduct {
  _id: string;
  name: string;
  imagePath: string;
  price: number;
  description: string;
  productRating?: string;
  discountPercentage: string;
  category: string;
  stock: number;
}