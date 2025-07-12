"use client";
import { IProduct } from "@/app/(store)/types/product";
import { useCartStore } from "@/app/store";

const AddToCartButton = ({ cartProduct }: { cartProduct: IProduct }) => {
  const quantity = useCartStore((state) => state.quantity);

  const { resetQuantity, decrementQuantity, incrementQuantity } = useCartStore();

  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    addToCart({ ...cartProduct, quantity: quantity });
    resetQuantity();
  };

  // const handleAddToCart = (product: IProduct) => {
  //   const cart = JSON.parse(localStorage.getItem("cart") || "{}");
  //   if (cart[product.name]) {
  //     cart[product.name] = {
  //       ...cart[product.name],
  //       quantity: cart[product.name].quantity + quantity,
  //     };
  //   } else {
  //     cart[product.name] = { ...product, quantity: quantity };
  //   }

  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   setQuantity(1);
  // };
  return (
    <div className="flex w-full">
      <div className="mt-[10px] w-full lg:mt-0 h-[44px] flex items-center lg:h-[52px] gap-4 lg:gap-0 xl:gap-4">
        <div className="h-[44px] min-w-[105px] lg:min-w-[120px]  w-[25%] flex items-center justify-between py-3 px-4 lg:h-[52px] rounded-[62px] text-[28px] lg:text-[32px]">
          <button
            onClick={decrementQuantity}
            className="w-5 h-5 lg:w-8 lg:h-8 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200"
          >
            -
          </button>
          <span className="text-sm leading-[18.9px] lg:text-base lg:leading-[21.6px] font-medium">
            {quantity}
          </span>
          <button
            onClick={incrementQuantity}
            className="w-5 h-5 lg:w-8 lg:h-8 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200"
          >
            +
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-[65%] h-[52px] bg-black text-sm leading-[18.9px] lg:text-base lg:leading-[21.6px] text-white py-4 px-[54px] rounded-[62px] hover:bg-gray-800 text-center"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AddToCartButton;
