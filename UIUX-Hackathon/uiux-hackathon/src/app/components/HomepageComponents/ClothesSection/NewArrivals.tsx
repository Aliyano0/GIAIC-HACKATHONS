"use client";
import ClothesCard from "./Utils/ClothesCard";
import ViewAllButton from "./Utils/ViewAllButton";
import blackT from "@/app/images/HomePageImages/ClothesImages/BlackTShirt.png";
import blueJeans from "@/app/images/HomePageImages/ClothesImages/BlueJeans.png";
import checkeredShirt from "@/app/images/HomePageImages/ClothesImages/RedCheckedShirt.png";
import orangeStripedT from "@/app/images/HomePageImages/ClothesImages/OrangeStripedTShirt.png";
// import { useEffect, useState } from "react";

const productsCardData = [
  {
    id: 1,
    productPicture: blackT,
    productName: "T-shirt with Tape Details",
    productRating: 5,
    productPrice: "120",
  },
  {
    id: 2,
    productPicture: blueJeans,
    productName: "Skinny Fit Jeans",
    productRating: 4,
    productPrice: "240",
    discountedPrice: "260",
    discountPercentage: "-20%",
  },
  {
    id: 3,
    productPicture: checkeredShirt,
    productName: "Checkered Shirt",
    productRating: 3,
    productPrice: "180",
  },
  {
    id: 4,
    productPicture: orangeStripedT,
    productName: "Sleeve Striped T-shirt",
    productRating: 4.6,
    productPrice: "130",
    discountedPrice: "160",
    discountPercentage: "-30%",
  },
];
const NewArrivals = () => {
  // const [productsCardData, setProductsCardData] = useState([]);
  // useEffect(() => {
  //   const fetcher = async () => {
  //     const response = await fetch(
  //       "https://678597d1f80b78923aa3fa82.mockapi.io/inventory"
  //     );
  //     const data = await response.json();
  //     setProductsCardData(data);
  //   };

  //   fetcher();
  // }, []);

  return (
    <>
      <div className="section w-full flex flex-col items-center justify-center bg-white mb-16">
        <div className="heading integralCF font-bold text-[32px] leading-[38.4px] lg:mt-0 lg:text-5xl lg:leading-[57.6px] flex items-center justify-center relative z-20 mb-[55px]">
          <h1 className="w-[269px] h-[38px] lg:w-[403px] lg:h-[58px]">
            NEW ARRIVALS
          </h1>
        </div>
        <div className="clothes-row w-full lg:w-auto md:gap-4 xl:gap-5 flex gap-[14px] lg:gap-5 no-scrollbar overflow-scroll lg:overflow-visible pl-4 lg:mx-auto lg:pl-0">
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

export default NewArrivals;
