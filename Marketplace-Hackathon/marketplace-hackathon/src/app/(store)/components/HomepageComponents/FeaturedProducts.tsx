// import Link from "next/link";
import ViewAllButton from "./ViewAllButton";
import { client } from "@/sanity/lib/client";
import { IProduct } from "@/app/(store)/types/product";
import Link from "next/link";
import ProductCard from "../ProductCard";

const getFeaturedProducts = async () => {
  const featuredProducts = await client.fetch(`
      *[_type == "product" && isFeaturedProduct] {
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
  return featuredProducts;
};

const FeaturedProducts = async () => {
  const featuredProducts = await getFeaturedProducts();
  return (
    <>
      <div className="section w-full flex flex-col items-center justify-center bg-white mb-16">
        <div className="heading integralCF font-bold text-[32px] leading-[38.4px] lg:mt-0 lg:text-5xl lg:leading-[57.6px] flex items-center justify-center relative z-20 mb-[55px]">
          <h1 className=" h-[38px]  lg:h-[58px] uppercase">
            featured Products
          </h1>
        </div>
        <div
          id="featured-products"
          className="clothes-row w-full lg:w-auto md:gap-4 xl:gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[14px] lg:gap-5 no-scrollbar overflow-scroll lg:overflow-visible pl-4 lg:mx-auto lg:pl-0 transition-all duration-300"
        >
          {featuredProducts.map((elem: IProduct) => {
            return (
              <Link key={elem._id} href={`/ProductDetail/${elem.slug.current}`}>
                <ProductCard
                  productPicture={elem.imagePath}
                  productName={elem.name}
                  stock={elem.stockLevel}
                  productCategory={elem.category}
                  description={elem.description}
                  productRating={elem.rating}
                  productPrice={elem.price}
                  discountPercentage={elem.discountPercentage}
                />
              </Link>
            );
          })}
        </div>
        <div className="viewAllBtn w-full mt-12  flex justify-center items-center">
          <Link href="/Shop">
            <ViewAllButton />
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
