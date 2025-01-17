import Image, { StaticImageData } from "next/image";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";

export interface IProductsCart {
  productName: string;
  price: number;
  size: string;
  color: string;
  image: StaticImageData;
}
const ProductsCart = ({
  productName,
  price,
  size,
  color,
  image,
}: IProductsCart) => {
  return (
    <>
      <div className="w-full md:max-w-[667px] lg:h-[124px] flex gap-2 xs:gap-[14px] lg:gap-4">
        <div className="product-image overflow-hidden h-[99px] min-w-[94px] xs:min-w-[105px] xs:h-[105px] sm:min-w-[120px] sm:h-[120px] lg:w-[124px] lg:h-[124px] rounded-[8.66px] relative">
          <Image
            src={image}
            alt="Product-image"
            className=" h-[149px] w-full xs:h-[160px] absolute top-[-25px] sm:w-full sm:min-w-max-[125px] sm:min-h-[187px] sm:top-[-30.5px] sm:left-[-1px]"
          ></Image>
        </div>
        <div className="product-info-container w-full h-[99px] flex flex-col  md:min-w-0 md:max-w-[527px] lg:h-[124px] lg:flex-row">
          <div className="product-text w-full lg:h-[118px] flex flex-col justify-between">
            <div className="product-info w-full h-[71px] flex flex-col gap-1 xs:gap-[10px] md:gap-1">
              <div className="HeadingAndTrashIcon xs:w-[98%] flex justify-between">
                <h6 className="inline-block sm:max-w-auto truncate xs:overflow-visible h-[22px] xs:w-full lg:max-w-[230px] lg:h-[27px] font-bold text-base xs:text-lg sm:text-xl md:text-base leading-[21.6px] lg:text-xl lg:leading-[27px] ">
                  {productName}
                </h6>
                <div className="trash cursor-pointer xs:w-auto relative z-20">
                  <RiDeleteBin6Fill className="text-[#FF3333] text-[16px] xs:text-[20px] md:text-[20px]" />
                </div>
              </div>
              <div className="product-size lg:max-w-[78px] md:h-[42px] flex flex-col gap-1 text-xs leading-[16.2px] lg:text-sm lg:leading-[18.9px]">
                <p className="flex gap-[2px]">
                  Size:{" "}
                  <span className="text-[#00000099] inline-block">{size}</span>
                </p>
                <p className="flex gap-[2px]">
                  Color:{" "}
                  <span className="text-[#00000099] inline-block">{color}</span>
                </p>
              </div>
            </div>
            <div className="PriceAndQuantity w-full flex items-center justify-between">
              <div className="product-price font-bold text-base xs:text-xl leading-[27px] lg:text-2xl lg:leading-[32.4px]">
                ${price}
              </div>
              <div className="quantity md:max-w-[126px] xs:py-[14px] md:py-3 xs:px-5 gap-5 flex items-center justify-end">
                <CgMathMinus className="cursor-pointer text-[20px] font-bold" />
                <p className="text-sm leading-[18.9px] font-medium">1</p>
                <CgMathPlus className="cursor-pointer text-[20px] font-bold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductsCart;
