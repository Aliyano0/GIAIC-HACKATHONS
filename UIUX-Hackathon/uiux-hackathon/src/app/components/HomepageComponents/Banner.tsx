import Image from "next/image";
import versaceLogo from "@/app/images/HomePageImages/BannerImages/versace.png";
import zaraLogo from "@/app/images/HomePageImages/BannerImages/zara.png";
import gucciLogo from "@/app/images/HomePageImages/BannerImages/gucci.png";
import pradaLogo from "@/app/images/HomePageImages/BannerImages/prada.png";
import calvinKleinLogo from "@/app/images/HomePageImages/BannerImages/calvinKlein.png";
const Banner = () => {
  return (
    <>
      <div className="bg-white w-full h-[194px] relative z-20">
        <div className="h-[146px] w-full lg:h-[122px] bg-black px-6 justify-between md:px-0 text-white flex md:justify-evenly lg:flex-none flex-wrap items-center relative z-30">
          <div className="logo pr-3 xs:pr-5">
            <Image
              src={versaceLogo}
              alt="Versace Logo"
              className="w-[116.74px] h-[23.25px] lg:w-[166.48px] lg:h-[33.16px]"
            ></Image>
          </div>
          <div className="logo pr-3 xs:pr-5">
            <Image
              src={zaraLogo}
              alt="Zara Logo"
              className="w-[63.81px] h-[26.65px] lg:w-[91px] lg:h-[38px]"
            ></Image>
          </div>
          <div className="logo pr-3 xs:pr-5">
            <Image
              src={gucciLogo}
              alt="Gucci Logo"
              className="w-[109.39px] h-[25.24px] lg:w-[156px] lg:h-[36px]"
            ></Image>
          </div>
          <div className="logo pr-3 xs:pr-5">
            <Image
              src={pradaLogo}
              alt="Prada Logo"
              className="w-[127px] h-[21px] lg:w-[194px] lg:h-[32px]"
            ></Image>
          </div>
          <div className="logo">
            <Image
              src={calvinKleinLogo}
              alt="Calvin Klein Logo"
              className="w-[134.84px] h-[21.75px] lg:w-[206.79px] lg:h-[33.35px]"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
