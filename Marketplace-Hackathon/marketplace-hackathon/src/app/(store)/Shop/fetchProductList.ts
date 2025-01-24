import { client } from "@/sanity/lib/client";
import { IProduct } from "../types/product";

export const getProducts = async (category: string) => {
  try {
    if (category === "1") {
      const productsData: IProduct[] = await client.fetch(`*[_type == "product"][0..11]{
   _id,
    id,
    name,
    imagePath,
    price,
    slug,
    description,
    category,
    stockLevel,
    rating,
    isFeaturedProduct,
    discountPercentage,}`
      );
      return productsData || [];
    }
    else if (category === "2") {
      const product: IProduct[] = await client.fetch(`
      *[_type == "product"][12..20]{
   _id,
    id,
    name,
    imagePath,
    price,
    slug,
    description,
    category,
    stockLevel,
    rating,
    isFeaturedProduct,
    discountPercentage,
}`); return product || [];
    }
    else if (category === "Sofa" || category === "Table" || category === "Chair" || category === "Bed") {
      const products: IProduct[] = await client.fetch(`
          *[_type == "product" && category == "${category}"]{
      _id,
        id,
        name,
        imagePath,
        price,
        slug,
        description,
        category,
        stockLevel,
        rating,
        isFeaturedProduct,
        discountPercentage,
    }
    `); return products || [];
    }
    
    else {
      const products: IProduct[] = [];
      return products;
    }


  } catch (error) {
    console.error("Error fetching products", error);
    return [];
  }
}