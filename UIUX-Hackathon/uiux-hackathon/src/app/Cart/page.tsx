import ProductsCart from "../components/CartComponents/ProductsCart";
import whiteT from "@/app/images/CartImages/whiteTshirt.png";
import checkeredShirt from "@/app/images/HomePageImages/ClothesImages/RedCheckedShirt.png";
import jeans from "@/app/images/HomePageImages/ClothesImages/BlueJeans.png";
import { MdOutlineDiscount } from "react-icons/md";
import Button from "../components/Buttons/Button";

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
    <div className="w-full xs:px-4 xl:px-10 2xl:px-[100px] flex flex-col justify-center items-center">
      <div className="page-pathname  mt-10 w-[90%] mx-auto xs:mx-0 xs:w-full h-[19px] text-sm leading-[18.9] md:text-base md:leading-[21.6px] md:mt-12 flex items-center gap-1">
        <p>
          <span className="text-[#00000099] inline-block">Home</span>{" "}
          <span className="inline-block">&gt;</span>
        </p>
        <p>Cart</p>
      </div>
      <div className="max-w-[1240px] w-full mt-2 md:my-6">
        <div className="heading w-[90%] mx-auto xs:mx-0 xs:w-full">
          <h1 className="font-bold text-[32px] leading-[38.4px] lg:text-[40px] lg:leading-[48px] integralCF">
            YOUR CART
          </h1>
        </div>
        <div className="cart-container sm:max-w-full xs:w-full xs:h-auto md:mx-0 w-full md:max-w-[1024px] lg:max-w-[1240px] md:h-[500px] lg:h-[588px] flex flex-col gap-5 items-center justify-center xs:justify-normal xs:items-start mt-5 md:flex-row md:mt-6">
          {/* PRODUCTS LIST */}
          <div className="products-cart-list w-[90%] mx-auto xs:mx-0 min-w-[310px] xs:w-[90%] xs:min-w-[440px] sm:min-w-0 sm:w-full py-3 px-2 xs:p-[14px] md:px-[8px] flex flex-col rounded-[20px] border-[1px] border-[#0000001A] sm:h-auto md:max-w-[48%] md:min-w-[370px] lg:max-w-[715px] md:max-h-[470px] lg:min-w-[580px] lg:max-h-[508px] lg:py-5 lg:px-6 gap-7 sm:gap-10 lg:gap-12">
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
          <div className="order-summary w-[90%] mx-auto xs:mx-0 min-w-[310px] xs:w-[90%] h-full max-w-[98%] sm:max-w-[60%] flex flex-col p-5 gap-4 sm:h-auto rounded-[20px] border-[1px] border[#0000001A] sm:w-full md:max-w-[48%] xs:min-w-[440px] md:min-w-[340px] lg:min-w-[400px] lg:max-w-[505px] lg:max-h-[458px] md:px-4 lg:py-5 lg:px-6 lg:gap-6">
            <h4 className="font-bold text-xl leading-[27px] lg:text-2xl lg:leading-[32.4px]">
              Order Summary
            </h4>
            <div className="total-conatiner w-full max-h-[173px] max-w-[457px] h-full lg:max-h-[193px] flex flex-col gap-5">
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
            <div className="promo w-full h-auto xs:h-12 flex flex-col items-end xs:items-baseline xs:flex-row gap-3">
              <div className="input-box w-full bg-[#f0f0f0] lg:max-w-[326px] h-12 rounded-[62px] py-3 pl-4 xs:px-4 flex gap-[10px] lg:gap-3 items-center">
                <div className="discount-icon text-[#00000066] text-base xs:text-lg lg:text-xl">
                  <MdOutlineDiscount />
                </div>
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="bg-[#f0f0f0]"
                />
              </div>
              <div className="apply-btn">
                <Button
                  btnText="Apply"
                  arrowIcon={false}
                  large={false}
                  small={true}
                  width="w-[90px] md:[100px] lg:w-[119px]"
                  height="h-12"
                  fontWeight="font-medium"
                />
              </div>
            </div>
            <div className="checkout-btn">
              <Button
                btnText="Go to Checkout"
                arrowIcon={true}
                large={true}
                small={false}
                width="w-full"
                height="h-[60px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
