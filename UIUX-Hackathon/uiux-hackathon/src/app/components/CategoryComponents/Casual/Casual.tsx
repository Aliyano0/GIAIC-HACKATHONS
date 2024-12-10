import { FaAngleDown } from "react-icons/fa6";
import CasualProductCard from "./Utils/CasualProductCard";
import { clothesPics, starRatings } from "./Utils/CasualCardImports";

const {
  whiteT,
  brownPolo,
  blackStripesT,
  blueJeans,
  checkeredShirt,
  orangeStripesT,
  greenShirt,
  orangeT,
  jeansShorts,
} = clothesPics;

const { rating3, rating35, rating4, rating45, rating5 } = starRatings;

const CasualCardData = [
  {
    id: 1,
    productPicture: whiteT,
    productName: "Gradient Graphic T-shirt",
    productRating: rating35,
    productPrice: "145",
  },
  {
    id: 2,
    productPicture: brownPolo,
    productName: "Polo with Tippin Details",
    productRating: rating45,
    productPrice: "180",
  },
  {
    id: 3,
    productPicture: blackStripesT,
    productName: "Black Striped T-Shirt",
    productRating: rating5,
    productPrice: "120",
    discountedPrice: "150",
    discountPercentage: "-30%",
  },
  {
    id: 4,
    productPicture: blueJeans,
    productName: "Skinny Fit Jeans",
    productRating: rating35,
    productPrice: "240",
    discountedPrice: "260",
    discountPercentage: "-20%",
  },
  {
    id: 46,
    productPicture: checkeredShirt,
    productName: "Checkered Shirt",
    productRating: rating45,
    productPrice: "180",
  },
  {
    id: 49,
    productPicture: orangeStripesT,
    productName: "Orange Striped T-shirt",
    productRating: rating45,
    productPrice: "130",
    discountedPrice: "160",
    discountPercentage: "-30%",
  },
  {
    id: 54,
    productPicture: greenShirt,
    productName: "Vertical Striped T-shirt",
    productRating: rating5,
    productPrice: "212",
    discountedPrice: "232",
    discountPercentage: "-20%",
  },
  {
    id: 64,
    productPicture: orangeT,
    productName: "Courage Graphic T-shirt",
    productRating: rating4,
    productPrice: "145",
  },
  {
    id: 84,
    productPicture: jeansShorts,
    productName: "Loose Fit Bermuda Shorts",
    productRating: rating3,
    productPrice: "80",
  },
];
const Casual = () => {
  return (
    <div className="lg:w-[925px] lg:h-[1500px]">
      <div className="header w-[925px] h-[43px] flex justify-between items-end">
        <h2 className="w-[101px] h-[43px] font-bold text-[32px] leading-[43.2px]">
          Casual
        </h2>
        <div className="w-[396px] flex gap-3 text-[#00000099] leading-[21.6px] mb-2">
          <div className="w-[209px] h-4">Showing 1-10 of 100 Products</div>

          <div className="w-[175px] h-4 flex gap-1 items-center mb-[-8px]">
            <p>
              Sort by:{" "}
              <span className="font-medium text-black">Most Popular</span>
            </p>
            <FaAngleDown />
          </div>
        </div>
      </div>
      <div className="cards-container grid grid-cols-2 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-9 mt-4">
        {CasualCardData.map((elem) => {
          return (
            <CasualProductCard
              key={elem.id}
              productPicture={elem.productPicture}
              productName={elem.productName}
              productRating={elem.productRating}
              productPrice={elem.productPrice}
              discountedPrice={elem.discountedPrice}
              discountPercentage={elem.discountPercentage}
            />
          );
        })}
      </div>
      <div className="line w-[925px] h-[1px] bg-[#0000001a] lg:my-8"></div>
      <div className="navigation w-[920px] h-10 gap-[216px]">
        <button className=""></button>
      </div>
    </div>
  );
};

export default Casual;
