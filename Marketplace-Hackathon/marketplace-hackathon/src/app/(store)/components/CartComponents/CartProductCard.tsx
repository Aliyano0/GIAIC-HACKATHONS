import Image from "next/image";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import { useCartStore } from "@/app/store";
import { IProduct } from "../../types/product";

export interface ICartProductCard {
  product: IProduct;
}

const CartProductCard = ({ product }: ICartProductCard) => {
  const deleteItem = useCartStore((state) => state.deleteItem);
  const incrementQuantityOfItemInCart = useCartStore(
    (state) => state.incrementQuantityOfItemInCart
  );
  const decrementQuantityOfItemInCart = useCartStore(
    (state) => state.decrementQuantityOfItemInCart
  );
  return (
    <>
      <div className="w-full md:max-w-[667px] py-3 flex gap-2 xs:gap-[14px] lg:gap-4">
        <div className="product-image overflow-hidden h-[99px] min-w-[94px] xs:min-w-[105px] xs:h-[105px] sm:min-w-[120px] sm:h-[120px] lg:w-[124px] lg:h-[124px] rounded-[8.66px] relative">
          <Image
            src={product.imagePath}
            width={124}
            height={124}
            alt="Product-image"
            className=" h-[149px] w-full xs:h-[160px] absolute top-[-25px] sm:w-full sm:min-w-max-[125px] sm:min-h-[187px] sm:top-[-30.5px] sm:left-[-1px]"
          ></Image>
          ) : (
        </div>
        <div className="product-info-container w-full flex flex-col md:min-w-0 md:max-w-[527px] lg:flex-row">
          <div className="product-text w-full lg:h-[118px] flex flex-col justify-between">
            <div className="product-info w-full h-[71px] flex flex-col gap-1 xs:gap-[10px] md:gap-1">
              <div className="HeadingAndTrashIcon xs:w-[98%] flex justify-between">
                <h6 className="inline-block sm:max-w-auto truncate xs:overflow-visible h-[22px] xs:w-full lg:max-w-[230px] lg:h-[27px] font-bold text-base xs:text-lg sm:text-xl md:text-base leading-[21.6px] lg:text-xl lg:leading-[27px] ">
                  {product.name}
                </h6>
                <div className="trash cursor-pointer xs:w-auto relative z-20">
                  <RiDeleteBin6Fill
                    onClick={() => deleteItem(product)}
                    className="text-[#FF3333] text-[16px] xs:text-[20px] md:text-[20px]"
                  />
                </div>
              </div>
              <div className="product-size flex flex-col gap-1 text-xs leading-[16.2px] lg:text-sm lg:leading-[18.9px]">
                <p>Description: {product.description}</p>
                <p className="flex gap-[2px]">
                  Category:{" "}
                  <span className="text-[#00000099] inline-block">
                    {product.category}
                  </span>
                </p>
              </div>
            </div>
            <div className="PriceAndQuantity w-full flex items-center justify-between">
              {product.discountPercentage === "0" ? (
                <div className="product-price font-bold text-base xs:text-xl leading-[27px] lg:text-2xl lg:leading-[32.4px]">
                  ${product.price}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="product-price font-bold text-base xs:text-xl leading-[27px] lg:text-2xl lg:leading-[32.4px]">
                    $
                    {Math.floor(
                        product.price - product.price * (parseFloat(product.discountPercentage) / 100)
                    )}
                    
                  </div>
                  <div className="product-price font-bold text-base xs:text-xl leading-[27px] text-[#0000004d] line-through lg:text-xl lg:leading-[32.4px]">
                    ${product.price}
                  </div>
                  <div className="product-price rounded-[62px] py-[6px] px-3 bg-[#ff33331a] text-[#ff3333] text-[14px] leading-[18.9px] lg:text-base lg:leading-[21.6px] font-medium text-center">
                    Saved {product.discountPercentage}% per item
                  </div>
                </div>
              )}
              <div className="quantity md:max-w-[126px] xs:py-[14px] md:py-3 xs:px-5 gap-5 flex items-center justify-end">
                <CgMathMinus
                  onClick={() => decrementQuantityOfItemInCart(product)}
                  className="cursor-pointer text-[20px] font-bold"
                />
                <p className="text-base font-medium">
                  {product.quantity ? `${product.quantity}` : 0}
                </p>
                <CgMathPlus
                  onClick={() => incrementQuantityOfItemInCart(product)}
                  className="cursor-pointer text-[20px] font-bold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartProductCard;
