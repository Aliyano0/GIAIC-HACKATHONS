import ClothesCard from "./Utils/ClothesCard";
import ViewAllButton from "./Utils/ViewAllButton";
import greenShirt from "@/app/images/HomePageImages/ClothesImages/GreenShirt.png";
import orangeT from "@/app/images/HomePageImages/ClothesImages/OrangeTShirt.png";
import jeansShorts from "@/app/images/HomePageImages/ClothesImages/JeansShort.png";
import blackJeans from "@/app/images/HomePageImages/ClothesImages/BlackJeans.png";

const productsCardData = [
  {
    id: 1,
    productPicture: greenShirt,
    productName: "Vertical Striped Shirt",
    productRating: 5,
    productPrice: "212",
    discountedPrice: "232",
    discountPercentage: "-20%",
  },
  {
    id: 2,
    productPicture: orangeT,
    productName: "Courage Graphic T-shirt",
    productRating: 4,
    productPrice: "145",
  },
  {
    id: 3,
    productPicture: jeansShorts,
    productName: "Loose Fit Bermuda Shorts",
    productRating: 3,
    productPrice: "80",
  },
  {
    id: 4,
    productPicture: blackJeans,
    productName: "Faded Skinny Jeans",
    productRating:4.5,
    productPrice: "210",
  },
];
const TopSelling = () => {
  return (
    <>
      <div className="Section w-full flex flex-col items-center justify-center bg-white mt-16 mb-20">
        <div className="heading integralCF font-bold text-[32px] leading-[38.4px] lg:mt-0 lg:text-5xl lg:leading-[57.6px] flex items-center justify-center relative z-20 mb-[55px]">
          <h1>TOP SELLING</h1>
        </div>
        <div className="clothes-row w-full lg:w-auto flex gap-[14px] md:gap-4 xl:gap-5 no-scrollbar overflow-scroll lg:overflow-visible pl-4 lg:pl-0">
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
        <div className="viewAllBtn w-full mt-12  flex justify-center items-center">
          <ViewAllButton />
        </div>
      </div>
    </>
  );
};

export default TopSelling;
