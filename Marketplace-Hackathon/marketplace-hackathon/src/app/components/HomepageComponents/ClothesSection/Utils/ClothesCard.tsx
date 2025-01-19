import StarRating from "@/app/components/StarRatings";
import Image, { StaticImageData } from "next/image";

export interface IClothesCard {
  productPicture: string;
  productName: string;
  productCategory: string;
  productPrice: number;
  discountedPrice?: string | null;
  discountPercentage?: string | null;
}

const ClothesCard = ({
  productPicture,
  productName,
  productCategory,
  productPrice,
  discountedPrice = null,
  discountPercentage = null,
}: IClothesCard) => {
  return (
    <>
      <div className="Card min-w-[198px] overflow-clip lg:overflow-visible w-[30%] md:min-w-[220px] lg:w-[240px] xl:h-[376px] xl:w-[295px]">
        <div className="clothes-image w-full h-[200.1px] lg:h-[250px] xl:h-[298px] relative z-10 bg-white overflow-hidden">
          <Image
            src={productPicture}
            alt={productName}
            width={550}
            height={250}
            className="w-full top-[-45px] lg:top-[-20px] xl:top-[-71px] xl:left-[-0.67px] absolute z-0 lg:left-[-1px]"
          ></Image>
        </div>
        <div className="text-ratings relative z-10 flex flex-col gap-2">
          <p className="h-[22px] text-base md:text-lg leading-[21.6px] lg:h-[27px] font-bold lg:text-xl lg:leading-[27px]">
            {productName}
          </p>
          <StarRating rating={3} totalStars={5} />
          <div className="prices flex gap-2 font-bold text-xl leading-[27px] lg:text-2xl lg:leading-[32.4px] lg:gap-3">
            <p className="price">${productPrice}</p>

            {discountedPrice && (
              <div className="flex gap-2 lg:gap-[10px]">
                <p className="line-through text-[#00000066]">
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

export default ClothesCard;
