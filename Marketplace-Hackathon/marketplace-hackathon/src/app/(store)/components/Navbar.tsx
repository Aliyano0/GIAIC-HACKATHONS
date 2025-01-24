"use client";
// import {
//   ClerkLoaded,
//   SignedIn,
//   SignInButton,
//   SignUpButton,
//   UserButton,
//   useUser,
// } from "@clerk/nextjs";
import { SignUpButton, useUser } from "@clerk/nextjs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";
import Form from "next/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

const Navbar = () => {
  //Clerk User
  const { user } = useUser();
  const [promoHeadlineStatus, setPromoHeadlineStatus] = useState(true);
  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);
  const handlepromoHeadlineClick = () => {
    setPromoHeadlineStatus(!promoHeadlineStatus);
  };
  return (
    <>
      <header className="w-full bg-[#fff] text-black">
        {promoHeadlineStatus && !user ? (
          <div
            className={`discount-headline w-full h-[34px] py-[9px] px-[20px] xs:px-[54px] bg-black text-white lg:h-[38px] md:flex items-center text-center leading-[16.2px] text-[10px] xs:text-[12px] lg:text-[14px] lg:leading-[18.9px] `}
          >
            <p className="max-w-[310px] mx-auto lg:max-w-[355px]">
              Sign up and get 20% off to your first order.{" "}
              <SignUpButton>
                <span className="font-medium underline cursor-pointer">
                  Sign Up Now
                </span>
              </SignUpButton>
            </p>
            <div
              onClick={handlepromoHeadlineClick}
              className="cursor-pointer cross w-5 h-5 hidden font-bold text-[24px] md:block"
            >
              x
            </div>
          </div>
        ) : (
          ""
        )}
        <nav className="w-full flex justify-between items-center px-3 xs:px-5 lg:h-[48px] lg:px-10 xl:px-[60px] my-5 lg:my-6">
          <div className="hamburger-brand md:w-[25%] flex gap-3 items-center">
            <div
              onClick={() => setMobileMenuStatus(!mobileMenuStatus)}
              className="flex pt-1 items-center justify-center md:hidden cursor-pointer"
            >
              {/* <GiHamburgerMenu /> */}
              <GiHamburgerMenu className="text-[23px]" />
            </div>
            <div
              className={` ${mobileMenuStatus ? " block " : " hidden"} Mobile-Menu-Container md:hidden w-full absolute top-0 left-0 h-screen bg-[#fff] z-20  bg-transparent transition-all duration-500 `}
            >
              <div
                onClick={() => setMobileMenuStatus(!mobileMenuStatus)}
                className="opacity-50 bg-black z-20 w-full h-full absolute top-0 left-0 blur"
              ></div>
              <div
                className={`Mobile-Menu-Content sm:w-1/2 h-full absolute z-40 top-0 left-0 bg-white transition-all duration-700 delay-500 ${mobileMenuStatus ? "w-[70%]" : "w-[10%]"}`}
              >
                <div
                  onClick={() => setMobileMenuStatus(!mobileMenuStatus)}
                  className="cursor-pointer cross font-bold text-[32px] px-5 mt-10"
                >
                  x
                </div>
                <h1 className="text-xl integralCF font-bold mt-10 text-center">
                  TIMELESS TIMBER
                </h1>
                <div className="flex flex-col items-center justify-center gap-5 mt-10 text-[18px] xxs:text-[20px]">
                  <Link href={"/Shop/1"}>
                    <h3>Category</h3>
                  </Link>
                  <Link href={"#featured-products"}>
                    <h3>Featured Products</h3>
                  </Link>
                  <Link href={"/Orders"}>
                    <h3>Orders</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="brand mr-2 sm:mr-0 cursor-pointer flex items-center justify-center">
              <Link href="/">
                <h3 className=" md:px-5 font-bold text-[23px] xxs:text-[25.2px] md:text-[34px] leading-7 integralCF">
                  TIMELESS TIMBER
                </h3>
              </Link>
            </div>
          </div>
          <div className="PcNavList w-[270px] hidden md:block">
            <ul className="flex items-center justify-between leading-[21.6px] text-[15px] xl:text-[16px]">
              <Link href={"/Shop/1"}>
                <li>Category</li>
              </Link>
              <Link href={"#featured-products"}>
                <li>Featured Products</li>
              </Link>
              <Link href={"/Orders"}>
                <li>Orders</li>
              </Link>
            </ul>
          </div>
          <Form
            action="/Search"
            className="search-bar w-[30%] h-[48px] rounded-[62px] px-4 py-3 hidden lg:flex gap-3 items-center bg-[#F0F0F0]"
          >
            <div className="search-icon w-6 h-6 flex items-center justify-center">
              <button type="submit">
                <FaSearch className="text-[23px]" />
              </button>
            </div>
            <input
              type="search"
              name="query"
              placeholder="Search for products"
              className="leading-[21.6px] p-1 sm:pr-5 lg:pr-12 bg-[#F0F0F0] focus:ring-black focus:ring-opacity-50"
            />
          </Form>
          <div className="Cart-User-Section flex items-center gap-2">
            <Popover>
              <PopoverTrigger>
                <FaSearch className="text-[22px] xxs:text-[24px] lg:hidden" />
              </PopoverTrigger>
              <PopoverContent>
                <Form
                  action="/Search"
                  className={`Search-bar w-[230px] h-[48px] rounded-[62px] px-2 py-3 lg:hidden flex gap-3 justify-between items-center bg-[#F0F0F0]`}
                >
                  <input
                    type="search"
                    name="query"
                    placeholder="Search for products"
                    className="leading-[21.6px] p-1 pr-12 bg-[#F0F0F0] focus:ring-black focus:ring-opacity-50"
                  />
                  <div className="search-icon w-6 h-6 flex items-center justify-center pr-1">
                    <button type="submit">
                      <FaSearch className="text-[23px]" />
                    </button>
                  </div>
                </Form>
              </PopoverContent>
            </Popover>
            <div className="lg:hidden relative"></div>
            <Link
              href="/Cart"
              className="flex  xs:w-[30%] h-[46px] xs:min-w-[130px] max-w-[130px] items-center gap-1 font-semibold hover:shadow-none shadow-md transition-all duration-500 border py-1 px-2 xxs:p-2 "
            >
              <span className="text-sm xxs:text-base sm:text-lg">
                Your Cart{" "}
              </span>
              <LuShoppingCart className="text-[20px] md:text-[24px]" />
              {/* Span item count with global state or localStorage */}
            </Link>

            {/* User section Will Complete this in the future. */}
            {/* <ClerkLoaded>
              <SignedIn>
                <Link href={"/orders"}>
                  <button className="bg-black text-white px-4 py-2 rounded-md tracking-[1px] shadow-md ">
                    Orders
                  </button>
                </Link>
              </SignedIn>
              {user ? (
                <UserButton />
              ) : (
                <div className="w-[50%] flex gap-2">
                  <SignUpButton mode="modal">
                    <span className="gap-1 font-semibold 2xl:text-lg hover:shadow-none shadow-md transition-all duration-500 border p-2 ">
                      Sign Up
                    </span>
                  </SignUpButton>

                  <SignInButton mode="modal">
                    <span className="gap-1 font-semibold 2xl:text-lg hover:shadow-none shadow-md transition-all duration-500 border p-2 ">
                      Log In
                    </span>
                  </SignInButton>
                </div>
              )}
            </ClerkLoaded> */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
