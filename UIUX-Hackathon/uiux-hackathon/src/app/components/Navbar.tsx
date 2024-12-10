import Image from "next/image";
import hamburger from "@/app/images/HeaderImages/hamburger.png";
import profileIcon from "@/app/images/HeaderImages/profileIcon.png";
import searchIcon from "@/app/images/HeaderImages/searchIcon.png";
import shoppingCartIcon from "@/app/images/HeaderImages/shoppingCartIcon.png";
import downArrow from "@/app/images/HeaderImages/downArrow.png";
import searchIconLg from "@/app/images/HeaderImages/searchIconLg.png";
import headerCross from "@/app/images/HeaderImages/headerCross.png";
const Navbar = () => {
  return (
    <>
      <header className="w-[390px] lg:w-[1440px]">
        <div className="discount-headline w-[390px] h-[34px] py-[9px] px-[54px] bg-black text-white lg:w-[1440px] lg:h-[38px] lg:flex leading-[16.2px] text-[12px] lg:text-[14px] lg:leading-[18.9px]">
          <p className="w-[301px] h-[16px] mx-auto lg:w-[355px] lg:h-[19] ">
            Sign up and get 20% off to your first order.{" "}
            <span className="font-medium underline">Sign Up Now</span>
          </p>
          <div className="cross w-5 h-5 hidden lg:block">
            <Image src={headerCross} alt=" "></Image>
          </div>
        </div>
        <nav className="w-[390px] h-[58px] flex justify-between items-center px-5 lg:w-[1240px] lg:h-[48px] lg:mx-[100px] lg:px-0 lg:my-6 ">
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
            <div className="brand">
              <h3 className="w-[126px] font-bold text-[25.2px] leading-[30.24px] lg:w-[160px] lg:[h-22px] lg:text-[32px] lg:leading-[38.4px] integralCF">
                SHOP.CO
              </h3>
            </div>
          </div>
          <div className="navList hidden lg:block w-[321px] h-[22px]">
            <ul className="flex items-center gap-6 leading-[21.6px]">
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
              <li className="cursor-pointer">On Sale</li>
              <li className="cursor-pointer">New Arrivals</li>
              <li className="cursor-pointer">Brands</li>
            </ul>
          </div>
          <div className="search-bar w-[577px] h-[48px] rounded-[62px] px-4 py-3 hidden lg:flex gap-3 items-center bg-[#F0F0F0]">
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
              className="leading-[21.6px] p-1 pr-12"
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
            <Image
              src={shoppingCartIcon}
              width={24}
              height={24}
              alt="Search Icon"
            ></Image>
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
