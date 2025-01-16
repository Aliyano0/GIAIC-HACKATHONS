import bluePolo from "@/app/images/HomePageImages/ClothesImages/bluePoloShirt.png";
import whiteTshirt from "@/app/images/HomePageImages/ClothesImages/whiteTshirt.png";
import brownPolo from "@/app/images/HomePageImages/ClothesImages/brownPoloShirt.png";
import blackStipesTshirt from "@/app/images/HomePageImages/ClothesImages/blackStripesTshirt.png";
import rating35 from "@/app/images/HomePageImages/ClothesImages/3.5rating.png";
import rating4 from "@/app/images/HomePageImages/ClothesImages/rating4.png";
import rating45 from "@/app/images/HomePageImages/ClothesImages/BlackTRating.png";
import rating5 from "@/app/images/HomePageImages/ClothesImages/rating5.png";
import ClothesCard from "../../HomepageComponents/ClothesSection/Utils/ClothesCard";

const productsCardData = [
  {
    id: 1,
    productPicture: bluePolo,
    productName: "Polo with Contrast Trims",
    productRating: rating4,
    productPrice: "212",
    discountedPrice: "242",
    discountPercentage: "-20%",
  },
  {
    id: 2,
    productPicture: whiteTshirt,
    productName: "Gradient Graphic T-shirt",
    productRating: rating35,
    productPrice: "145",
  },
  {
    id: 3,
    productPicture: brownPolo,
    productName: "Polo with Tipping Details",
    productRating: rating45,
    productPrice: "180",
  },
  {
    id: 4,
    productPicture: blackStipesTshirt,
    productName: "Black Striped T-shirt",
    productRating: rating5,
    productPrice: "120",
    discountedPrice: "150",
    discountPercentage: "-30%",
  },
];

const ProductsSuggestions = () => {
  return (
    <>
      <div className="my-[50px] lg:mt-16 lg:mb-[78px] section w-full bg-white relative z-20">
        <div className="heading w-full integralCF font-bold text-[32px] leading-[36px] lg:text-5xl lg:leading-[57.6px] flex items-center justify-center relative z-20 mb-8 lg:mb-[55px]">
          <h1 className="text-center">You might also like</h1>
        </div>
        <div className="clothes-row w-full lg:w-auto md:gap-4 xl:gap-5 flex gap-[14px] lg:justify-center lg:gap-5 overflow-scroll no-scrollbar lg:overflow-visible pl-4 lg:mx-auto lg:pl-0">
          {productsCardData.map((elem) => {
            return (
              <ClothesCard
                key={elem.id}
                productPicture={elem.productPicture}
                productName={elem.productName}
                productPrice={elem.productPrice}
                productRating={elem.productRating}
                discountedPrice={elem.discountedPrice}
                discountPercentage={elem.discountPercentage}
              ></ClothesCard>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsSuggestions;
