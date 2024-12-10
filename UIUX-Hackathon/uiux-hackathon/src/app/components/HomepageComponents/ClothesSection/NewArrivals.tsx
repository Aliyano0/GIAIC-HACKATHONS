import ClothesCard from "./Utils/ClothesCard";
import blackT from "@/app/images/HomePageImages/ClothesImages/BlackTShirt.png";
import blueJeans from "@/app/images/HomePageImages/ClothesImages/BlueJeans.png";
import checkeredShirt from "@/app/images/HomePageImages/ClothesImages/RedCheckedShirt.png";
import orangeStripedT from "@/app/images/HomePageImages/ClothesImages/OrangeStripedTShirt.png";
import blackTRating from "@/app/images/HomePageImages/ClothesImages/BlackTRating.png";
import rating35 from "@/app/images/HomePageImages/ClothesImages/3.5rating.png";

const productsCardData = [
  {
    id: 1,
    productPicture: blackT,
    productName: "T-shirt with Tape Details",
    productRating: blackTRating,
    productPrice: "120",
  },
  {
    id: 2,
    productPicture: blueJeans,
    productName: "Skinny Fit Jeans",
    productRating: rating35,
    productPrice: "240",
    discountedPrice: "260",
    discountPercentage: "-20%",
  },
  {
    id: 3,
    productPicture: checkeredShirt,
    productName: "Checkered Shirt",
    productRating: blackTRating,
    productPrice: "180",
  },
  {
    id: 4,
    productPicture: orangeStripedT,
    productName: "Sleeve Striped T-shirt",
    productRating: blackTRating,
    productPrice: "130",
    discountedPrice: "160",
    discountPercentage: "-30%",
  },
];
const NewArrivals = () => {
  return (
    <>
      <div className="section w-[390px] lg:px-[100px] lg:w-[1240px] bg-white relative z-20 mb-10">
        <div className="heading w-[390px] h-[38px] integralCF font-bold text-[32px] leading-[38.4px] lg:text-5xl lg:leading-[57.6px] lg:w-[1440px] lg:h-[58px] flex items-center justify-center relative z-20 mb-8 lg:mb-[55px]">
          <h1 className="w-[269px] h-[38px] lg:w-[403px] lg:h-[58px]">
            NEW ARRIVALS
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

export default NewArrivals;
