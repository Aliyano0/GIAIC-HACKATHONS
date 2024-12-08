import ProductsCart from "../components/CartComponents/ProductsCart";
import whiteT from "@/app/images/CartImages/whiteTshirt.png";
import checkeredShirt from "@/app/images/HomePageImages/ClothesImages/RedCheckedShirt.png";
import jeans from "@/app/images/HomePageImages/ClothesImages/BlueJeans.png";
import { MdOutlineDiscount } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

const ProductsCartItems = [
  {
    id: 1,
    productName: "Gradient Graphic T-shirt",
    price: 145,
    size: "Large",
    color: "White",
    image: whiteT,
  },
  {
    id: 2,
    productName: "CHECKERED SHIRT",
    price: 180,
    size: "Medium",
    color: "Red",
    image: checkeredShirt,
  },
  {
    id: 3,
    productName: "SKINNY FIT JEANS",
    price: 240,
    size: "Large",
    color: "Blue",
    image: jeans,
  },
];

const Cart = () => {
  return (
    <>
      <div className="page-pathname mt-10 px-4 w-[358px] h-[19px] text-sm leading-[18.9] lg:text-base lg:leading-[21.6px] lg:mt-12  flex items-center gap-1 lg:w-[1440px] lg:px-[100px]">
        <p>
          <span className="text-[#00000099]">Home</span> <span>&gt;</span>
        </p>
        <p>Cart</p>
      </div>
      <div className="px-4 w-[358px] mt-2 lg:w-[1440px] lg:my-6 lg:px-[100px]">
        <div className="heading w-[207px] h-[38px] lg:w-[259px] lg:h-[48px] ">
          <h1 className="font-bold text-[32px] leading-[38.4px] lg:text-[40px] lg:leading-[48px] integralCF">
            YOUR CART
          </h1>
        </div>
        <div className="cart-container w-[358px] h-[800px] lg:w-[1240px] lg:h-[588px] flex flex-col gap-5 mt-5 lg:flex-row lg:mt-6">
          {/* PRODUCTS LIST */}
          <div className="products-cart-list w-[358px] h-[389px] p-[14px] flex flex-col gap-4 rounded-[20px] border-[1px] border-[#0000001A] lg:w-[715px] lg:h-[508px] lg:py-5 lg:px-6 lg:gap-12">
            {ProductsCartItems.map((elem) => {
              return (
                <ProductsCart
                  key={elem.id}
                  image={elem.image}
                  productName={elem.productName}
                  price={elem.price}
                  size={elem.size}
                  color={elem.color}
                />
              );
            })}
          </div>
          {/* ORDER SUMMARY */}
          <div className="order-summary w-[358px] h-[390px] flex flex-col p-5 gap-4 rounded-[20px] border-[1px] border[#0000001A] lg:w-[505px] lg:h-[458px]  lg:py-5 lg:px-6  lg:gap-6">
            <h4 className="font-bold w-[149px] h-[27px] text-xl leading-[27px] lg:text-2xl lg:leading-[32.4px] lg:w-[179px] lg:h-[32px]">
              Order Summary
            </h4>
            <div className="total-conatiner w-[318px] h-[173px] lg:w-[457px] lg:h-[193px] flex flex-col gap-5">
              <div className="subtotal text-base leading-[21.6px] lg:text-xl lg:leading-[27px] flex justify-between">
                <p className="text-[#00000099]">Subtotal</p>
                <p className="font-bold text-right ">$565</p>
              </div>
              <div className="subtotal text-base leading-[21.6px] lg:text-xl lg:leading-[27px] flex justify-between">
                <p className="text-[#00000099]">
                  Discount &#10088;-20%&#10089;
                </p>
                <p className="font-bold text-right text-[#FF3333]">-$113</p>
              </div>
              <div className="subtotal  text-base leading-[21.6px] lg:text-xl lg:leading-[27px] flex justify-between">
                <p className="text-[#00000099]">Delivery Fee</p>
                <p className="font-bold text-right ">$15</p>
              </div>
              <div className="total text-base leading-[21.6px] lg:text-xl lg:leading-[27px] flex justify-between mt-5">
                <p>Total</p>
                <p className="font-bold text-xl leading-[27px] text-right lg:text-2xl lg:leading-[32.4px]">
                  $467
                </p>
              </div>
            </div>
            <div className="promo w-[318px] lg:w-[457px] h-12 flex gap-3">
              <div className="input-box w-[318px] lg:w-[326px] h-12 rounded-[62px] py-3 px-4 flex gap-[10px] lg:gap-3 items-center">
                <div className="discount-icon text-[#00000066] text-lg lg:text-xl">
                  <MdOutlineDiscount />
                </div>
                <input type="text" placeholder="Add promo code" />
              </div>
              <div className="apply-btn">
                <button className="w-[88px] lg:w-[119px] h-12 bg-black rounded-[62px] py-3 px-4 text-sm leading-[18.9px] text-white font-medium lg:text-base lg:leading-[21.6px]">
                  Apply
                </button>
              </div>
            </div>
            <div className="checkout-btn">
              <button className="w-[318px] h-[54px] lg:w-[457px] lg:h-[60px] text-sm leading-[18.9px] bg-black rounded-[62px] py-4 px-[54px] text-white font-medium lg:text-base lg:leading-[21.6px] flex gap-3 items-center justify-center">
                Go to Checkout <FaArrowRight className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
