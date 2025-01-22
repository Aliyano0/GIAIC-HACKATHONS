"use client";
import {
  ClerkLoaded,
  SignedIn,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";
import Form from "next/form";
import { useEffect, useState } from "react";

const Navbar = () => {
  //Clerk User
  const { user } = useUser();
  const [promoHeadlineStatus, setPromoHeadlineStatus] = useState(true);
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
        <nav className="w-full h-[58px] flex justify-between items-center px-5 lg:h-[48px] lg:px-[50px] xl:px-[100px] lg:my-6">
          <div className="hamburger-brand flex gap-3 items-center">
            <div className="flex pt-1 items-center justify-center lg:hidden cursor-pointer">
              {/* <GiHamburgerMenu /> */}
              <GiHamburgerMenu className="text-[23px]" />
            </div>
            <div className="brand cursor-pointer flex items-center justify-center">
              <Link href="/">
                <h3 className="w-[190px] font-bold text-[25.2px] lg:text-[34px] leading-7 integralCF">
                  TIMELESS TIMBER
                </h3>
              </Link>
            </div>
          </div>
          <div className="navList hidden lg:block max-w-[350px] h-[22px]">
            <ul className="flex items-center gap-6 leading-[21.6px] lg:text-[15px] xl:text-[16px]">
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
              <FaSearch className="text-[23px]" />
            </div>
            <input
              type="search"
              name="query"
              placeholder="Search for products"
              className="leading-[21.6px] p-1 pr-12 bg-[#F0F0F0] focus:ring-black focus:ring-opacity-50"
            />
          </Form>
          <div className="Cart-User-Section flex gap-3 sm:gap-5 w-24 lg:w-[24%]">
            <Link href="/Search">
              <FaSearch className="text-[24px] sm:hidden" />
            </Link>
            <Link
              href="/Cart"
              className="flex items-center gap-1 font-semibold text-lg hover:shadow-none shadow-md transition-all duration-500 border p-2 "
            >
              Your Cart <LuShoppingCart className="text-[24px]" />
              {/* Span item count with global state or localStorage */}
            </Link>

            {/* User section */}
            <ClerkLoaded>
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
                <div className="flex gap-2">
                  <SignUpButton mode="modal">
                    <span className="bg-black text-white px-4 py-2 rounded-[62px] cursor-pointer hover:shadow-none shadow-md transition-all duration-500">
                      Sign Up
                    </span>
                  </SignUpButton>

                  <SignInButton mode="modal">
                    <span className="bg-black text-white px-4 py-2 rounded-[62px] cursor-pointer hover:shadow-none shadow-md transition-all duration-500">
                      Log In
                    </span>
                  </SignInButton>
                </div>
              )}
            </ClerkLoaded>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
