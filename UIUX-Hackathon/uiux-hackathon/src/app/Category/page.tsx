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
    <div className="w-full md:pl-5 md:pr-3 lg:px-5 xl:px-0">
      <div className="line mx-auto w-[95%] bg-[#0000001a] h-[1px] my-6 lg:mt-6"></div>
      <div className="page-pathname pl-3 xxs:px-4 sm:px-5 md:px-0 w-full max-w-[1240px] xl:mx-auto h-8 text-sm md:text-base md:leading-[21.6px] lg:mt-0 lg:mb-6 mb-3 flex justify-between items-center gap-1">
        <div className="flex gap-1">
          <span className="inline-block">
            <span className="text-[#00000099] inline-block">Home</span>{" "}
            <span className="inline-block">&gt;</span>
          </span>
          <span className="inline-block">Casual</span>
        </div>
        <button
          onClick={handleClick}
          className="enable-filter-btn xxs:ml-[85px] h-8 px-3 py-3 bg-black rounded-[62px] flex items-center justify-center text-[#fff] md:hidden leading-3"
        >
          {isOpen ? "Disable Filters Container" : "Enable Filters Container"}
        </button>
      </div>
      <div className="Container w-full xl:max-w-[1240px] xl:mx-auto flex gap-5 mb-[50px] lg:mb-0">
        <div
          className={` bg-white text-black z-50 absolute md:static ${
            isOpen
              ? "block w-full xs:w-[70%] sm:w-1/2 left-0"
              : "hidden w-0 -left-4 md:w-[28%]  md:block"
          } transition-all ease-in duration-150`}
        >
          <Filters />
        </div>
        <div className="w-full md:w-[69%] xl:w-auto">
          <Casual />
        </div>
      </div>
    </div>
  );
};

export default Category;
