"use client";
import Image from "next/image";
import hamburger from "@/app/images/HeaderImages/hamburger.png";
import profileIcon from "@/app/images/HeaderImages/profileIcon.png";
import searchIcon from "@/app/images/HeaderImages/searchIcon.png";
import shoppingCartIcon from "@/app/images/HeaderImages/shoppingCartIcon.png";
import downArrow from "@/app/images/HeaderImages/downArrow.png";
import searchIconLg from "@/app/images/HeaderImages/searchIconLg.png";
import headerCross from "@/app/images/HeaderImages/headerCross.png";
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [promoHeadlineStatus, setPromoHeadlineStatus] = useState(true);
  const handlepromoHeadlineClick = () => {
    setPromoHeadlineStatus(!promoHeadlineStatus);
  };
  return (
    <>
      <header className="w-full bg-[#fff] text-black">
        {promoHeadlineStatus && (
          <div
            className={`discount-headline w-full h-[34px] py-[9px] px-[20px] xs:px-[54px] bg-black text-white lg:h-[38px] md:flex items-center text-center leading-[16.2px] text-[10px] xs:text-[12px] lg:text-[14px] lg:leading-[18.9px] `}
          >
            <p className="max-w-[310px] mx-auto lg:max-w-[355px]">
              Sign up and get 20% off to your first order.{" "}
              <span className="font-medium underline">Sign Up Now</span>
            </p>
            <div
              onClick={handlepromoHeadlineClick}
              className="cursor-pointer cross w-5 h-5 hidden md:block"
            >
              <Image src={headerCross} alt=" "></Image>
            </div>
          </div>
        )}
        <nav className="w-full h-[58px] flex justify-between items-center px-5 lg:h-[48px]  lg:px-[50px] xl:px-[100px] lg:my-6">
          <div className="hamburger-brand flex gap-3 items-center">
            <div className="flex pt-1 items-center justify-center h-[23px] lg:hidden cursor-pointer">
              {/* <GiHamburgerMenu /> */}
              <Image
                src={hamburger}
                width={23}
                height={23}
                alt="Hamburger menu"
              ></Image>
            </div>
            <div className="brand cursor-pointer">
              <Link href={"/"}>
                <h3 className="w-[126px] font-bold text-[25.2px] leading-[30.24px] lg:w-[160px] lg:[h-22px] lg:text-[32px] lg:leading-[38.4px] integralCF">
                  SHOP.CO
                </h3>
              </Link>
            </div>
          </div>
          <div className="navList hidden lg:block max-w-[350px] h-[22px]">
            <ul className="flex items-center gap-6 leading-[21.6px] lg:text-[15px] xl:text-[16px]">
              <li className="flex items-center cursor-pointer">
                Shop{" "}
                <span className="w-4 h-4 flex items-center justify-center">
                  <Image
                    src={downArrow}
                    height={6.5}
                    width={11.5}
                    alt=""
                    className="mt-[3px]"
                  ></Image>
                </span>
              </li>
              <Link href={"/Category"} className="cursor-pointer">
                <li>Category</li>
              </Link>
              <li className="cursor-pointer">New Arrivals</li>
              <li className="cursor-pointer">Brands</li>
            </ul>
          </div>
          <div className="search-bar max-w-[800px] h-[48px] rounded-[62px] px-4 py-3 hidden lg:flex gap-3 items-center bg-[#F0F0F0]">
            <div className="search-icon w-6 h-6 flex items-center justify-center">
              <Image
                src={searchIconLg}
                width={20.27}
                height={20.27}
                alt="Search Icon"
              ></Image>
            </div>
            <input
              type="search"
              placeholder="Search for products"
              className="leading-[21.6px] p-1 pr-12 bg-[#F0F0F0]"
            />
          </div>
          <div className="search-cart flex gap-3 w-24 h-6 lg:w-[62px]">
            <Image
              src={searchIcon}
              width={24}
              height={24}
              alt="Search Icon"
              className="lg:hidden"
            ></Image>
            <Link href="/Cart">
              <Image
                src={shoppingCartIcon}
                width={24}
                height={24}
                alt="Search Icon"
              ></Image>
            </Link>
            <Image
              src={profileIcon}
              width={24}
              height={24}
              alt="Search Icon"
            ></Image>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
