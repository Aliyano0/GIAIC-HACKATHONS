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
      <div className="section lg:px-[100px] lg:w-[1240px] bg-white relative z-20">
        <div className="heading integralCF font-bold text-5xl leading-[57.6px] w-[1440px] h-[58px] flex items-center justify-center relative z-20 mb-[55px]">
          <h1 className="w-[403px] h-[58px]">TOP SELLING</h1>
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

export default TopSelling;
