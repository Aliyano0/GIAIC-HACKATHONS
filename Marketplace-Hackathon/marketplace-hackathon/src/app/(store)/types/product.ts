export interface IProduct {
  _id: string;
  id: string;
  name: string;
  imagePath: string;
  price: number;
  description: string;
  rating: number;
  discountPercentage: string;
  category: string;
  slug: { current: string, type: string };
  stockLevel: number;
  quantity?: number;
}


export interface IProductCard {
  productPicture: string;
  productName: string;
  productCategory: string;
  description: string;
  stock: number;
  productRating: number;
  productPrice: number;
  discountPercentage?: string;
  suggestionSection?: boolean;

}