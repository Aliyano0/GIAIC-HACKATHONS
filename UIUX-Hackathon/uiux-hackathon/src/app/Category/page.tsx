"use client";
import { useState } from "react";
import Casual from "../components/CategoryComponents/Casual/Casual";
import Filters from "../components/CategoryComponents/Filters/Filters";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="line w-[358px] mx-4 my-6 lg:mt-6 lg:ml-[100px] lg:w-[1240px] bg-[#0000001a] h-[1px]"></div>
      <div className="page-pathname px-4 w-[390px] h-8 text-sm lg:text-base lg:leading-[21.6px] lg:mt-0 lg:mb-6 mb-3 flex items-center gap-1 lg:w-[1440px] lg:px-[100px]">
        <span>
          <span className="text-[#00000099]">Home</span> <span>&gt;</span>
        </span>
        <span>Casual</span>
        <button
          onClick={handleClick}
          className="enable-filter-btn ml-[85px] h-8 px-3 py-3 bg-black rounded-[62px] flex items-center justify-center text-[#fff] lg:hidden leading-3"
        >
          {isOpen ? "Disable Filters Container" : "Enable Filters Container"}
        </button>
      </div>
      <div className="container lg:w-[1240px] flex gap-5 lg:mx-[100px] mb-[50px] lg:mb-0">
        <div
          className={`${
            isOpen ? "block" : "hidden lg:block"
          } transition-all ease-in duration-150`}
        >
          <Filters />
        </div>
        <div>
          <Casual />
        </div>
      </div>
    </>
  );
};

export default Category;
