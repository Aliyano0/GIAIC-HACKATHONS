import Image from "next/image";
import versaceLogo from "@/app/images/HomePageImages/BannerImages/versace.png";
import zaraLogo from "@/app/images/HomePageImages/BannerImages/zara.png";
import gucciLogo from "@/app/images/HomePageImages/BannerImages/gucci.png";
import pradaLogo from "@/app/images/HomePageImages/BannerImages/prada.png";
import calvinKleinLogo from "@/app/images/HomePageImages/BannerImages/calvinKlein.png";
const Banner = () => {
  return (
    <>
      <div className="bg-white h-[194px] w-[1440px] relative z-20">
        <div className="w-[1440px] h-[122px] bg-black text-white flex justify-evenly items-center relative z-30">
          <div className="logo">
            <Image src={versaceLogo} alt="Versace Logo"></Image>
          </div>
          <div className="logo">
            <Image src={zaraLogo} alt="Zara Logo"></Image>
          </div>
          <div className="logo">
            <Image src={gucciLogo} alt="Gucci Logo"></Image>
          </div>
          <div className="logo">
            <Image src={pradaLogo} alt="Prada Logo"></Image>
          </div>
          <div className="logo">
            <Image src={calvinKleinLogo} alt="Calvin Klein Logo"></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
