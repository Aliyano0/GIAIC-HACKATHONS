import ClothesCard from "./ClothesCard";
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
      <div className="section lg:px-[100px] lg:w-[1240px] bg-white relative z-20">
        <div className="heading integralCF font-bold text-5xl leading-[57.6px] w-[1440px] h-[58px] flex items-center justify-center relative z-20 mb-[55px]">
          <h1 className="w-[403px] h-[58px]">NEW ARRIVALS</h1>
        </div>
        <div className="clothes-row flex gap-5">
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
        <div className="viewAllBtn w-[1240px] mt-10 mb-32 flex justify-center items-center">
          <button className="w-[218px] h-[52px] rounded-[62px] border-[1px] border-[#0000001a] py-4 px-[54px] font-medium leading-[21.6px]">
            View All
          </button>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
