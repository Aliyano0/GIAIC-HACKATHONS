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
      <div className="card h-[376px] w-[295px]">
        <div className="clothes-image w-[295px] h-[298px] relative z-10 bg-white">
          <Image
            src={productPicture}
            alt="Black Tshirt"
            height={296}
            width={444}
            className="absolute z-0 top-[-73px] left-[-1px]"
          ></Image>
        </div>
        <div className="text-ratings relative z-10 flex flex-col gap-2">
          <p className="h-[27px] font-bold text-xl leading-[27px]">
            {productName}
          </p>
          <Image
            src={productRating}
            alt="4.5 Stars Rating"
            width={150}
            height={19}
          ></Image>
          <div className="flex font-bold text-2xl leading-[32.4px] gap-3">
            <p className="price">${productPrice}</p>

            {discountedPrice && (
              <div className="flex gap-[10px]">
                <p className="line-through text-[#00000066]">
                  ${discountedPrice}
                </p>
                <span className="w-[58px] h-7 rounded-[62px] py-[6px] px-[14px] bg-[#ff33331a] text-[#ff3333] text-xs leading-[16.2px] font-medium">
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

export default ClothesCard;
