"use client";
import { IProduct } from "@/app/(store)/types/product";
import { useState } from "react";

const AddToCartButton = ({ cartProduct }: { cartProduct: IProduct }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = (product: IProduct) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    if (cart[product.name]) {
      cart[product.name] = {
        ...cart[product.name],
        quantity: cart[product.name].quantity + quantity,
      };
    } else {
      cart[product.name] = { ...product, quantity: quantity };
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setQuantity(1);
  };
  return (
    <div className="flex">
      <div className="mt-[10px] lg:mt-0 h-[44px] flex items-center lg:h-[52px] gap-4 lg:gap-5">
        <div className="h-[44px] w-[110px] flex items-center justify-between py-3 px-4 lg:px-5 lg:py-4 lg:w-[170px] lg:h-[52px] rounded-[62px] text-[28px] lg:text-[32px]">
          <button
            onClick={handleDecreaseQuantity}
            className="w-5 h-5 lg:w-8 lg:h-8 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200"
          >
            -
          </button>
          <span className="text-sm leading-[18.9px] lg:text-base lg:leading-[21.6px] font-medium">
            {quantity}
          </span>
          <button
            onClick={handleIncreaseQuantity}
            className="w-5 h-5 lg:w-8 lg:h-8 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200"
          >
            +
          </button>
        </div>
        <button
          onClick={() => handleAddToCart(cartProduct)}
          className="w-[236px] xs:w-[71%] sm:w-[210px] md:w-[236px]  lg:w-[400px] h-[52px] bg-black text-sm leading-[18.9px] lg:text-base lg:leading-[21.6px] text-white py-4 px-[54px] rounded-[62px] hover:bg-gray-800 text-center"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AddToCartButton;
