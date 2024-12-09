import ClothesCard from "./ClothesCard";
import greenShirt from "@/app/images/HomePageImages/ClothesImages/GreenShirt.png";
import orangeT from "@/app/images/HomePageImages/ClothesImages/OrangeTShirt.png";
import jeansShorts from "@/app/images/HomePageImages/ClothesImages/JeansShort.png";
import blackJeans from "@/app/images/HomePageImages/ClothesImages/BlackJeans.png";
import rating45 from "@/app/images/HomePageImages/ClothesImages/BlackTRating.png";
import rating5 from "@/app/images/HomePageImages/ClothesImages/rating5.png";
import rating3 from "@/app/images/HomePageImages/ClothesImages/rating3.png";
import rating4 from "@/app/images/HomePageImages/ClothesImages/rating4.png";

const productsCardData = [
  {
    id: 1,
    productPicture: greenShirt,
    productName: "Vertical Striped Shirt",
    productRating: rating5,
    productPrice: "212",
    discountedPrice: "232",
    discountPercentage: "-20%",
  },
  {
    id: 2,
    productPicture: orangeT,
    productName: "Courage Graphic T-shirt",
    productRating: rating4,
    productPrice: "145",
  },
  {
    id: 3,
    productPicture: jeansShorts,
    productName: "Loose Fit Bermuda Shorts",
    productRating: rating3,
    productPrice: "80",
  },
  {
    id: 4,
    productPicture: blackJeans,
    productName: "Faded Skinny Jeans",
    productRating: rating45,
    productPrice: "210",
  },
];
const TopSelling = () => {
  return (
    <>
      <div className="section w-[390px] lg:px-[100px] lg:w-[1240px] bg-white relative z-20">
        <div className="heading integralCF w-[390px] h-[38px] font-bold mt-20 text-[32px] leading-[38.4px] lg:mt-0 lg:text-5xl lg:leading-[57.6px] lg:w-[1440px] lg:h-[58px] flex items-center justify-center relative z-20 mb-[55px]">
          <h1 className="w-[231px] h-[38px] lg:w-[403px] lg:h-[58px]">
            TOP SELLING
          </h1>
        </div>
        <div className="clothes-row flex gap-[14px] lg:gap-5 overflow-hidden lg:overflow-visible pl-4 lg:pl-0">
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
        <div className="viewAllBtn w-[390px] lg:w-[1240px] mt-10 mb-32 flex justify-center items-center">
          <button className="w-[358px] h-[46px] lg:w-[218px] lg:h-[52px] rounded-[62px] border-[1px] border-[#0000001a] py-4 px-[54px] font-medium text-sm leading-[18.9px] lg:text-base lg:leading-[21.6px]">
            View All
          </button>
        </div>
      </div>
    </>
  );
};

export default TopSelling;
