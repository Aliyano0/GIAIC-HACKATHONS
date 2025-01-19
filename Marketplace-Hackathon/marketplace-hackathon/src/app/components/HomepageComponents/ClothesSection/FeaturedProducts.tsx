// import Link from "next/link";
import ClothesCard from "./Utils/ClothesCard";
import ViewAllButton from "./Utils/ViewAllButton";
import { client } from "@/sanity/lib/client";
import { IProduct } from "@/app/types/product";

const getFeaturedProducts = async () => {
  const featuredProducts = await client.fetch(`
      *[_type == "product" && isFeaturedProduct][0..3] {
  _id,
    name,
    imagePath,
      price,
    description,
    category,
    stockLevel,
    isFeaturedProduct,
    discountPercentage,
}
`);
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
        <div className="clothes-row w-full lg:w-auto md:gap-4 xl:gap-7 flex gap-[14px] lg:gap-5 no-scrollbar overflow-scroll lg:overflow-visible pl-4 lg:mx-auto lg:pl-0">
          {featuredProducts.map((elem: IProduct) => {
            return (
              // <Link href={`/ProductDetail/${elem._id}`}>

              <ClothesCard
                key={elem._id}
                productPicture={elem.imagePath}
                productName={elem.name}
                productPrice={elem.price}
                productCategory={elem.category}
                discountPercentage={elem.discountPercentage}
              ></ClothesCard>
              // </Link>
            );
          })}
        </div>
        <div className="viewAllBtn w-full mt-12  flex justify-center items-center">
          <ViewAllButton />
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
