import Image from "next/image";
import { IProduct } from "@/app/(store)/types/product";
import { client } from "@/sanity/lib/client";
import StarRating from "../StarRatings";
import AddToCartButton from "./AddToCartButton";

const getProductData = async (slug: string) => {
  const productData: [] = await client.fetch(`
    *[_type=="product" && slug.current=="${slug}"]{
  _id,
    id,
    discountPercentage,
    name,
    price,
    imagePath,
    description,
    rating,
    stockLevel,
    category
}`);
  return productData;
};
const ProductDetail = async ({ productSlug }: { productSlug: string }) => {
  const rawProductData = await getProductData(productSlug);
  const productData: IProduct[] = rawProductData.map((elem: IProduct) => elem);

  return (
    <div className="Container mb-5 md:mt-5 w-full xs:px-5 2xl:mx-auto 2xl:max-w-[1440px] md:my-9 flex flex-col md:flex-row gap-5 lg:gap-0">
      {/* Image Section */}
      <div className="min-w-[320px] w-[90%] xs:min-w-0 mt-5 md:mt-0 xs:w-[440px] mx-auto xs:mx-0 sm:min-w-[600px] sm:w-[600px] md:min-w-[420px] md:w-[500px] lg:w-auto flex lg:flex-row flex-col  lg:mr-8 xl:mr-10">
        <div className="thumbnails lg:pt-4 lg:mr-3 mt-2 xl:mt-0 mb-5 lg:mb-0 w-full lg:w-[152px] flex lg:flex-col gap-[14px] lg:order-0">
          <Image
            src={productData[0].imagePath}
            alt="T-Shirt Thumbnail 1"
            width={150}
            height={120}
            className="w-[100px] xxs:w-[111px] xxs:h-[106px] sm:h-[90px] md:h-[100px] md:w-1/3 lg:w-[152px] rounded-[20px] object-cover border-[1px] border-[#000000] cursor-pointer"
          />
          <Image
            src={productData[0].imagePath}
            alt="T-Shirt Thumbnail 2"
            width={150}
            height={120}
            className="w-[100px]  xxs:w-[112px] xxs:h-[106px] sm:h-[90px] md:h-[100px] md:w-1/3 lg:w-[152px]  rounded-[20px] object-cover border-[1px] border-[#00000018] cursor-pointer"
          />
          <Image
            src={productData[0].imagePath}
            alt="T-Shirt Thumbnail 3"
            width={150}
            height={120}
            className="w-[100px] xxs:w-[111px] xxs:h-[106px] sm:h-[90px] md:h-[100px] md:w-1/3 lg:w-[152px] rounded-[20px]  border-[1px] object-cover border-[#00000018] cursor-pointer"
          />
        </div>
        <div className="main-image w-full h-[310px] xs:h-[390px] mx-auto sm:mx-0 md:h-[300px] sm:h-[400px] sm:w-[500px] md:w-full lg:w-[600px] xl:w-[700px] lg:h-[400px] xl:h-[470px] relative rounded-[20px] mb-3 overflow-hidden lg:mb-0 order-[-1] lg:order-1 xl:ml-[14px]">
          <Image
            src={productData[0].imagePath}
            width={900}
            height={530}
            alt={productData[0].name}
            className="w-full h-full object-contain absolute top-0 rounded-[15px]"
          />
        </div>
      </div>
      {/* Product Details Section */}
      <div className="product-details min-w-[320px] w-[90%] sm:mt-5 md:mt-0 xs:min-w-0 xs:w-[440px] mx-auto xs:mx-0  sm:w-[56%]  sm:min-w-0 lg:order-2 md:h-[530px] md:w-auto flex flex-col gap-3 lg:gap-[14px] h-[300px]">
        <h1 className="sm:w-auto leading-[28px] text-2xl xs:text-[28px] md:text-[32px] lg:text-[40px] lg:leading-[48px] font-bold integralCF">
          {productData[0].name}
        </h1>
        <StarRating rating={productData[0].rating} />
        <div className="prices flex items-center font-bold text-xl leading-[27px] text-[24px] xs:text-[26px] sm:text-[24px] leading-3-[32.4px] gap-[10px] lg:text-[32px] lg:leading-[43.2px] lg:gap-3">
          <p className="price">
            $
            {parseFloat(productData[0].discountPercentage) !== 0
              ? Math.floor(
                  productData[0].price -
                    productData[0].price *
                      (parseFloat(productData[0].discountPercentage) / 100)
                )
              : productData[0].price}
          </p>
          {parseFloat(productData[0].discountPercentage) !== 0 ? (
            <div className="flex gap-[10px] lg:gap-3 items-center">
              <p className="line-through text-[#0000004d]">
                ${productData[0].price}
              </p>
              <span className="w-[62px] h-[31px] lg:w-[72px] lg:h-[34px] rounded-[62px] py-[6px] px-3 bg-[#ff33331a] text-[#ff3333] text-[14px] leading-[18.9px] lg:text-base lg:leading-[21.6px] font-medium text-center">
                {productData[0].discountPercentage}%
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
        <p className="text-[#00000099] w-[90%] text-[13px] xs:text-sm md:text-base lg:leading-[22px]">
          {productData[0].description}
        </p>
        <div className="line w-[98%] mx-auto h-[1px] bg-[#0000001a]"></div>

        {/* Color Options */}
        <div className="Colors mt-[10px] lg:mt-0">
          <h3 className="text-sm leading-[18.9px] lg:text-base lg:leading-[21.6px] text-[#00000099]">
            In Stock: {productData[0].stockLevel}
          </h3>
        </div>
        <div className="line w-[98%] mx-auto h-[1px] bg-[#0000001a]"></div>

        {/* Add to Cart Button */}
        <div className="self-end w-full md:mt-[11rem]">
          <AddToCartButton cartProduct={productData[0]} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
