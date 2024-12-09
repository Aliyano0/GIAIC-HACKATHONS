import Image from "next/image";
import BrandInfo from "./BrandInfo";
import heroSectionStarSmall from "@/app/images/HomePageImages/HeroImages/heroSectionStarSmall.png";
import heroSectionStarLarge from "@/app/images/HomePageImages/HeroImages/heroSectionStarSmall.png";
import modelsImage from "@/app/images/HomePageImages/HeroImages/models-image.jpg";

const Hero = () => {
  return (
    <>
      <div className="w-[390px] h-[853px] lg:w-[1440px] lg:h-[663px] bg-[#F2F0F1] flex flex-col lg:flex-row lg:justify-center lg:items-center">
        <div className="text-section w-[390px] lg:w-[620px] flex flex-col items-center lg:items-start gap-5 px-4 lg:px-0 lg:gap-8 mt-10">
          <h1 className="font-bold w-[358px] h-[93px] text-4xl leading-[34px] lg:w-[577px] lg:h-[173px] lg:leading-[64px] lg:text-[64px] integralCF">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="w-[358px] h-[50px] text-sm leading-[20px] lg:text-base  lg:w-[545px] lg:h-[33px] lg:leading-[22px] text-[#00000099] satoshi">
            Browse through our diverse range of meticulously crafted garments
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="shop-now-btn w-[358px] h-[52px]  bg-black text-white rounded-[62px] py-4 px-[54px] lg:w-[210px] lg:h-[52px] leading-[21.6px] font-medium">
            Shop Now
          </button>
          <div className="customer-info w-[278px] flex flex-col justify-center items-center gap-3 lg:flex-row lg:justify-normal lg:items-start lg:w-[596px] lg:h-[74px] lg:gap-8">
            <div className="flex lg:gap-8 gap-5">
              <BrandInfo heading="200+" paragraph="International Brands" />
              <BrandInfo heading="2,000+" paragraph="High-Quality Products" />
            </div>
            <BrandInfo heading="30,000+" paragraph="Happy Customers" />
          </div>
        </div>

        <div className="stars-section w-[390px] h-[448px] lg:w-[620px] lg:h-[663px] relative z-0">
          <div className="hero-small-star self-end absolute top-1/2 translate-y-[-50%] left-4 z-10">
            <Image
              src={heroSectionStarSmall}
              alt="Star Vector"
              className="w-[44px] h-[44px] lg:w-[56px] lg:h-[56px]"
            ></Image>
          </div>
          <div className="models absolute z-0">
            <Image
              src={modelsImage}
              alt="2 Models wearing brands clothes"
              height={1200}
            ></Image>
          </div>
          <div className="hero-large-star absolute right-5 lg:right-3 z-10 top-[52px] lg:top-28">
            <Image
              src={heroSectionStarLarge}
              alt="Star Vector"
              className="w-[76px] h-[76px] lg:w-[104px] lg:h-[104px]"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
