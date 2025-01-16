import { IClothesCard } from "@/app/components/HomepageComponents/ClothesSection/Utils/ClothesCard";
import StarRating from "@/app/components/StarRatings";
import Image from "next/image";

const CasualProductCard = ({
  productPicture,
  productName,
  productRating,
  productPrice,
  discountedPrice = null,
  discountPercentage = null,
}: IClothesCard) => {
  return (
    <>
      <div className="card w-[306px] xxs:min-w-[172px] h-auto xxs:w-auto lg:min-w-[225px] xl:w-[295px]">
        <div className="clothes-image w-full h-[280px] xxs:h-[174px] xs:h-[265px] sm:h-[190px] md:h-[200px] lg:h-[235px] xl:h-[298px] rounded-[20px] relative z-10 bg-white overflow-hidden">
          <Image
            src={productPicture}
            alt={productName}
            className="w-full h-[260px] top-3 xxs:top-[-43px] md:h-full xl:h-[441px] absolute z-0 object-cover sm:object-contain md:object-cover xs:top-0 sm:-top-7 md:top-0 xl:top-[-71px] left-[1px]"
          ></Image>
        </div>
        <div className="text-ratings mt-[10px] lg:mt-4 relative z-10 flex flex-col gap-1 lg:gap-2">
          <p className="h-[22px] truncate w-full text-lg xxs:text-base leading-[21.6px] lg:h-[27px] font-bold lg:text-xl lg:leading-[27px] cursor-pointer hover:underline hover:font-black">
            {productName}
          </p>
          <StarRating rating={productRating} totalStars={5} />
          <div className="prices flex gap-[5px] lg:gap-3">
            <p className="price font-bold text-xl leading-[27px] lg:text-2xl lg:leading-[32.4px]">
              ${productPrice}
            </p>

            {discountedPrice && (
              <div className="flex gap-[5px] lg:gap-[10px]">
                <p className="line-through text-[#00000066] font-bold text-xl leading-[27px] lg:text-2xl lg:leading-[32.4px]">
                  ${discountedPrice}
                </p>
                <p className="w-[42px] h-5 lg:w-[58px] lg:h-7 rounded-[62px] bg-[#ff33331a] text-[#ff3333] text-[10px] leading-[13.5px] lg:text-xs lg:leading-[16.2px] font-medium flex justify-center items-center">
                  {discountPercentage}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CasualProductCard;
