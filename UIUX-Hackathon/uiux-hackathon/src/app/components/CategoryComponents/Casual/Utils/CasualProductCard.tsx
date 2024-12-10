import { IClothesCard } from "@/app/components/HomepageComponents/ClothesSection/Utils/ClothesCard";
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
      <div className="card w-[172px] lg:h-auto lg:w-[295px]">
        <div className="clothes-image w-[172px] h-[174px] lg:w-[295px] lg:h-[298px] rounded-[20px] relative z-10 bg-white overflow-hidden">
          <Image
            src={productPicture}
            alt={productName}
            className="w-[173px] h-[260px] top-[-43px] lg:w-[294px] lg:h-[441px] absolute z-0 lg:top-[-71px] left-[1px]"
          ></Image>
        </div>
        <div className="text-ratings mt-[10px] lg:mt-4 relative z-10 flex flex-col gap-1 lg:gap-2">
          <p className="h-[22px] w-[165px] truncate lg:w-full text-base leading-[21.6px] lg:h-[27px] font-bold lg:text-xl lg:leading-[27px] cursor-pointer hover:underline hover:font-black">
            {productName}
          </p>
          <Image
            src={productRating}
            alt="Stars Rating"
            className="w-[127px] h-4 lg:w-[135px] lg:h-[19px]"
          ></Image>
          <div className="prices flex gap-[5px] font-bold text-xl leading-[27px] lg:text-2xl lg:leading-[32.4px] lg:gap-3">
            <p className="price ">${productPrice}</p>

            {discountedPrice && (
              <div className="flex gap-[5px] lg:gap-[10px]">
                <p className="line-through text-[#00000066]">
                  ${discountedPrice}
                </p>
                <span className="w-[42px] h-5 lg:w-[58px] lg:h-7 rounded-[62px] py-[6px] px-[14px] bg-[#ff33331a] text-[#ff3333] text-[10px] leading-[13.5px] lg:text-xs lg:leading-[16.2px] font-medium">
                  {discountPercentage}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CasualProductCard;
