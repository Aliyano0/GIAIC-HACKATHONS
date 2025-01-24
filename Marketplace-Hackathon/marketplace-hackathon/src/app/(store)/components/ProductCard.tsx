import { IProductCard } from "@/app/(store)/types/product";
import StarRating from "@/app/(store)/components/StarRatings";
import Image from "next/image";

const ProductCard = ({
  productPicture,
  productName,
  productRating,
  productPrice,
  description,
  stock = 0,
  discountPercentage = "0",
  suggestionSection = false,
}: IProductCard) => {
  return (
    <>
      <div
        className={` ${suggestionSection ? "w-[306px] min-w-[306px]" : "xxs:min-w-[172px] xxs:w-auto w-full lg:min-w-[306px] min-w-[306px]"} card border  p-4 rounded-lg h-auto shadow-md `}
      >
        <div className="clothes-image w-full h-[280px] sm:h-[190px] md:h-[200px] lg:h-[235px] xl:h-[298px] rounded-[20px] relative z-10 bg-white overflow-hidden">
          {productPicture && (
            <Image
              src={productPicture}
              alt={productName}
              width={298}
              height={250}
              className="w-full h-[260px] bottom-0 sm:bottom-auto xs:top-0 sm:-top-7 md:top-0 top-3 xxs:top-[-43px] xl:top-[-71px] absolute md:h-full xl:h-[441px] z-0 object-contain left-[1px] lg840:hover:scale-110 duration-500 transition-transform rounded-md"
            ></Image>
          )}
          {stock === 0 && (
            <div className="opacity-50 bg-black top-0 left-0 absolute z-50 w-full h-full flex justify-center items-center text-white text-lg">
              Out of stock.
            </div>
          )}
        </div>
        <div className="text-ratings mt-[10px] lg:mt-4 relative z-10 flex flex-col gap-1 lg:gap-2">
          <div>
            <p className="h-[22px] truncate w-full text-lg xxs:text-base leading-[21.6px] lg:h-[27px] font-bold lg:text-xl lg:leading-[27px] cursor-pointer ">
              {productName}
            </p>
            <p className="w-full mt-[2px] sm:w-[97%] lg:w-[90%] text-xs">
              {description}
            </p>
          </div>
          <div>
            <StarRating rating={productRating} totalStars={5} />
            <p className="w-full mt-1 sm:w-[97%] lg:w-[90%] text-xs">
              In Stock: {stock}
            </p>
          </div>
          <div className="prices flex gap-[5px] lg:gap-3">
            <p className="price font-bold text-xl leading-[27px] lg:text-2xl lg:leading-[32.4px]">
              $
              {parseFloat(discountPercentage) !== 0
                ? Math.floor(
                    productPrice -
                      productPrice * (parseFloat(discountPercentage) / 100)
                  )
                : productPrice}
            </p>

            {parseFloat(discountPercentage) !== 0 ? (
              <div className="flex gap-[5px] lg:gap-[10px]">
                <p className="line-through text-[#00000066] font-bold text-xl leading-[27px] lg:text-2xl lg:leading-[32.4px]">
                  ${productPrice}
                </p>
                <p className="w-[42px] h-5 lg:w-[58px] lg:h-7 rounded-[62px] bg-[#ff33331a] text-[#ff3333] text-[10px] leading-[13.5px] lg:text-xs lg:leading-[16.2px] font-medium flex justify-center items-center">
                  {discountPercentage}%
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
