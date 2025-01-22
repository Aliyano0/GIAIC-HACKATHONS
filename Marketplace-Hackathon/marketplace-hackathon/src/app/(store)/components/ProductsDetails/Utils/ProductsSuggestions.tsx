import { IProduct } from "@/app/(store)/types/product";
import ProductCard from "../../ProductCard";
import { client } from "@/sanity/lib/client";

const getProductsCardData = async () => {
  const products = await client.fetch(`
    *[_type == "product"][7..10] {
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
  }`);
  return products || [];
};

const ProductsSuggestions = async () => {
  const productsCardData = await getProductsCardData();
  return (
    <>
      <div className="my-[50px] lg:mt-16 lg:mb-[78px] section w-full bg-white relative z-20">
        <div className="heading w-full integralCF font-bold text-[32px] leading-[36px] lg:text-5xl lg:leading-[57.6px] flex items-center justify-center relative z-20 mb-8 lg:mb-[55px]">
          <h1 className="text-center">You might also like</h1>
        </div>
        <div className="clothes-row w-full lg:w-auto md:gap-4 xl:gap-5 flex gap-[14px] lg:justify-center lg:gap-5 overflow-scroll no-scrollbar lg:overflow-visible pl-4 lg:mx-auto lg:pl-0">
          {productsCardData.map((elem: IProduct) => {
            return (
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
              ></ProductCard>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsSuggestions;
