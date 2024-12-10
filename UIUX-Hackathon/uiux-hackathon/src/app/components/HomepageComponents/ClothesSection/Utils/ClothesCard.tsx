import Image, { StaticImageData } from "next/image";

export interface IClothesCard {
  productPicture: StaticImageData;
  productName: string;
  productRating: StaticImageData;
  productPrice: string;
  discountedPrice?: string | null;
  discountPercentage?: string | null;
}

const ClothesCard = ({
  productPicture,
  productName,
  productRating,
  productPrice,
  discountedPrice = null,
  discountPercentage = null,
}: IClothesCard) => {
  return (
    <>
      <div className="card w-[198px] lg:h-[376px] lg:w-[295px]">
        <div className="clothes-image w-[198px] h-[200.1px] lg:w-[295px] lg:h-[298px] relative z-10 bg-white overflow-hidden">
          <Image
            src={productPicture}
            alt={productName}
            className="w-[198.67px] h-[298.01px] top-[-49px] left-[-0.67px] lg:w-[296px] lg:h-[444px] absolute z-0 lg:top-[-73px] lg:left-[-1px]"
          ></Image>
        </div>
        <div className="text-ratings relative z-10 flex flex-col gap-2">
          <p className="h-[22px] text-base leading-[21.6px] lg:h-[27px] font-bold lg:text-xl lg:leading-[27px]">
            {productName}
          </p>
          <Image
            src={productRating}
            alt="Stars Rating"
            className="w-[127px] h-4 lg:w-[150px] lg:h-[19px]"
          ></Image>
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
