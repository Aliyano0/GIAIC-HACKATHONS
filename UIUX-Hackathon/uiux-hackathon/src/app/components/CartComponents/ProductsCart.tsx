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
      <div className="w-[330px] h-[99px] lg:w-[667px] lg:h-[124px] flex gap-[14px] lg:gap-4">
        <div className="product-image overflow-hidden h-[99px] w-[99px] lg:w-[124px] lg:h-[124px] rounded-[8.66px] relative">
          <Image
            src={image}
            alt="Product-image"
            className="w-[99px] h-[149px] absolute top-[-25px] lg:w-[125px] lg:h-[187px] lg:top-[-30.5px] lg:left-[-1px]"
          ></Image>
        </div>
        <div className="product-info-container w-[217px] h-[99px] flex flex-col justify-between lg:w-[527px] lg:h-[124px] lg:flex-row">
          <div className="product-text lg:w-[227px] lg:h-[118px] flex flex-col justify-between">
            <div className="product-info w-[227px] h-[71px] flex flex-col gap-[2px]">
              <div className="heading w-[217px] flex justify-between lg:w-auto">
                <h6 className="w-[181px] h-[22px] lg:w-[227px] lg:h-[27px] font-bold text-base leading-[21.6px] lg:text-xl lg:leading-[27px] ">
                  {productName}
                </h6>
                <div className="trash cursor-pointer lg:hidden">
                  <RiDeleteBin6Fill className="text-[#FF3333] text-[16px]" />
                </div>
              </div>
              <div className="product-size lg:w-[78px] lg:h-[42px] flex flex-col gap-1 text-xs leading-[16.2px] lg:text-sm lg:leading-[18.9px]">
                <p className="flex gap-[2px]">
                  Size: <span className="text-[#00000099]">{size}</span>
                </p>
                <p className="flex gap-[2px]">
                  Color: <span className="text-[#00000099]">{color}</span>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="product-price w-[45px] h-[27px] lg:w-16 lg:h-8 font-bold text-xl leading-[27px] lg:text-2xl lg:leading-[32.4px]">
                ${price}
              </div>
              <div className="quantity w-[105px] h-[31px] py-[14px] px-5 gap-5 flex items-center lg:hidden ">
                <CgMathMinus className="cursor-pointer text-[20px] font-bold" />
                <p className="text-sm leading-[18.9px] font-medium">1</p>
                <CgMathPlus className="cursor-pointer text-[20px] font-bold" />
              </div>
            </div>
          </div>
          <div className="product-quantity hidden lg:flex w-[225px] h-[124px] flex-col justify-between items-end">
            <div className="trash-icon cursor-pointer">
              <RiDeleteBin6Fill className="text-[#FF3333] text-[20px] " />
            </div>
            <div className="items w-[126px] h-[44px] rounded-[62px] px-5 py-3 flex gap-5 items-center font-black text-[20px]">
              <CgMathMinus className="cursor-pointer" />
              <p className="text-sm leading-[18.9px] font-medium">1</p>
              <CgMathPlus className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductsCart;
