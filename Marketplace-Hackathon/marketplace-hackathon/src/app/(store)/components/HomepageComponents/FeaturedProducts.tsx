"use client";
// import Link from "next/link";
import ViewAllButton from "./ViewAllButton";
import { client } from "@/sanity/lib/client";
import { IProduct } from "@/app/(store)/types/product";
import Link from "next/link";
import ProductCard from "../ProductCard";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const FeaturedProducts = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [featuredProducts, setFeaturedProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const getFeaturedProducts = async () => {
      try {
        const featuredProducts = await client.fetch(`
          *[_type == "product" && isFeaturedProduct][0..3] {
    _id,
    id,
    name,
      slug,
      imagePath,
      price,
      description,
      category,
      stockLevel,
      rating,
      isFeaturedProduct,
      discountPercentage,
      }`);
        setFeaturedProducts(featuredProducts);
      } catch (error) {
        console.log(`Error 404: Products Fetching Failed. ${error}`);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getFeaturedProducts();
  }, []);
  return (
    <>
      <div className="section w-full flex flex-col items-center justify-center bg-white mb-16">
        <div className="heading integralCF font-bold text-[32px] leading-[38.4px] lg:mt-0 lg:text-5xl lg:leading-[57.6px] flex items-center justify-center relative z-20 mb-[55px]">
          <h1 className="text-center uppercase">featured Products</h1>
        </div>
        {loading ? (
          <div className="w-[50vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-4">
            <Skeleton className="w-full h-[300px]"></Skeleton>
            <Skeleton className="w-full h-[300px]"></Skeleton>
            <Skeleton className="w-full h-[300px]"></Skeleton>
          </div>
        ) : error ? (
          <div className="w-[50vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-4">
            <div className="w-full h-[300px] bg-red-500 text-white flex justify-center items-center">
              <h1>Error Fetching the product. Try again later.</h1>
            </div>
          </div>
        ) : (
          <div
            id="featured-products"
            className="clothes-row pl-5 xl:pl-0 w-full md:gap-4 xl:gap-6 flex gap-[14px] lg:gap-5 xl:justify-center overflow-scroll no-scrollbar lg:mx-auto"
          >
            {featuredProducts.length < 1 ? (
              <p className="text-2xl font-medium">No Products Found.</p>
            ) : (
              featuredProducts.map((elem: IProduct) => {
                return (
                  <Link
                    key={elem._id}
                    href={`/ProductDetail/${elem.slug.current}`}
                  >
                    <ProductCard
                      key={elem._id}
                      productPicture={elem.imagePath}
                      productName={elem.name}
                      productCategory={elem.category}
                      description={elem.description}
                      stock={elem.stockLevel}
                      productPrice={elem.price}
                      productRating={elem.rating}
                      discountPercentage={elem.discountPercentage}
                      suggestionSection={true}
                    ></ProductCard>
                  </Link>
                );
              })
            )}
          </div>
        )}

        <div className="viewAllBtn w-full mt-12  flex justify-center items-center">
          <Link href="/Shop/1">
            <ViewAllButton />
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
