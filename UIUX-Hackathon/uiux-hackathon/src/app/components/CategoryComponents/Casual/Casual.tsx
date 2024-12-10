import { FaAngleDown } from "react-icons/fa6";
import CasualProductCard from "./Utils/CasualProductCard";
import { clothesPics, starRatings } from "./Utils/CasualCardImports";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RxMixerVertical } from "react-icons/rx";
import NavNumbers from "./Utils/NavNumbers";

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
    <div className="lg:w-[925px] w-[358px] mx-4 lg:mx-0 lg:h-[1500px]">
      <div className="header w-[358px] h-8 lg:w-[925px] lg:h-[43px] flex gap-2 lg:gap-0 lg:justify-between items-end">
        <h2 className="w-[76px] h-8 lg:w-[101px] lg:h-[43px] font-bold text-2xl leading-[32.4px] lg:text-[32px] lg:leading-[43.2px]">
          Casual
        </h2>
        <div className="w-[274px] lg:w-[396px] flex justify-between lg:justify-normal lg:gap-3 text-[#00000099] lg:leading-[21.6px] leading-[18.9px] mb-[2px]">
          <div className="text-sm lg:text-base w-[183px] h-[10xp] lg:w-[209px] lg:h-4 flex justify-center items-center">
            Showing 1-10 of 100 Products
          </div>
          <div className="filter-icon flex items-center justify-center lg:hidden text-xl font-black cursor-pointer">
            <RxMixerVertical />
          </div>
          <div className="hidden lg:flex w-[175px] h-4 gap-1 items-center lg:mb-[-8px]">
            <p>
              Sort by:{" "}
              <span className="font-medium text-black cursor-pointer">
                Most Popular
              </span>
            </p>
            <FaAngleDown className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="cards-container w-[358px] lg:w-auto lg:h-auto h-[1123px] overflow-hidden grid grid-cols-2 gap-y-6 gap-x-3 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-9 mt-4">
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
      <div className="line w-[358px] mx-4 mt-6 mb-5 lg:ml-[100px] lg:w-[925px] bg-[#0000001a] h-[1px] lg:my-8"></div>
      <div className="navigation w-[359px] h-9 lg:w-[920px] lg:h-10 flex gap-2 lg:gap-[216px] text-xs leading-[20px] font-medium lg:text-sm rounded-lg">
        <button className="w-[90px] lg:w-[110px] h-9 rounded-lg py-2 px-[14px] border-[1px] border-[#0000001a] gap-2 flex items-center">
          <span className="lg:text-lg">
            <FaArrowLeft />
          </span>
          <span>Previous</span>
        </button>
        <div className="pagination h-9 lg:w-[292px] lg:h-10 flex lg:gap-1">
          <NavNumbers navNumber="1" />
          <NavNumbers navNumber="2" />
          <div className="hidden lg:block">
            <NavNumbers navNumber="3" />
          </div>
          <NavNumbers navNumber="..." />
          <div className="hidden lg:block">
            <NavNumbers navNumber="8" />
          </div>
          <NavNumbers navNumber="9" />
          <NavNumbers navNumber="10" />
        </div>
        <button className="w-[90px] lg:w-[110px] h-9 rounded-lg py-2 px-[14px] border-[1px] border-[#0000001a] gap-2 flex items-center">
          <span>Next</span>
          <span className="lg:text-lg">
            <FaArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Casual;
