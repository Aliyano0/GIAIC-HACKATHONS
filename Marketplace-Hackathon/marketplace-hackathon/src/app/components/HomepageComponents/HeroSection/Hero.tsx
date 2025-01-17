import Image from "next/image";
import BrandInfo from "./Utils/BrandInfo";
import heroSectionStarSmall from "@/app/images/HomePageImages/HeroImages/heroSectionStarSmall.png";
import heroSectionStarLarge from "@/app/images/HomePageImages/HeroImages/heroSectionStarSmall.png";
import modelsImage from "@/app/images/HomePageImages/HeroImages/models-image.jpg";
import Button from "../../Buttons/Button";

const Hero = () => {
  return (
    <>
      <div className="w-full h-[853px] px-4 xs:px-0 sm:pt-16 md:pt-5 lg:pt-0 xs:h-auto md:pl-5 xl:pl-0 xl:w-auto lg:h-[663px] bg-[#F2F0F1] flex flex-col md:flex-row md:justify-center md:items-center">
        <div className="text-section text-center xs:text-start w-full md:w-1/2 xl:w-[620px] flex flex-col items-center xs:items-start gap-5 px-4 md:px-0 md:gap-4 lg:gap-8 mt-10">
          <h1 className="font-bold w-full sm:w-[90%] text-3xl leading-[34px] md:min-w-[374px] lg:w-full lg:min-w-[512px] xl:w-[577px] lg:leading-[64px] md:leading-[55px] xs:text-[64px] xs:leading-[64px] md:text-[48px] lg:text-[58px] xl:text-[64px] integralCF">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>

          <p className="w-[90%] text-[13px] leading-[18px] xs:text-base md:min-w-[374px] lg:min-w-[512px] xl:w-[545px] lg:leading-[22px] text-[#00000099] satoshi">
            Browse through our diverse range of meticulously crafted garments
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          <Button
            btnText="Shop Now"
            arrowIcon={false}
            large={true}
            small={false}
            width="w-[320px] xs:w-[358px] md:w-[210px]"
            height="h-[52px]"
            fontWeight=" font-medium text-base "
          />

          <div className="customer-info w-full xs:w-auto flex flex-col justify-center items-center gap-3 xs:flex-row md:justify-normal md:items-start xl:w-[596px] lg:h-[74px] lg:gap-8">
            <div className="flex lg:gap-8 gap-5">
              <BrandInfo heading="200+" paragraph="International Brands" />
              <BrandInfo heading="2,000+" paragraph="High-Quality Products" />
            </div>
            <BrandInfo heading="30,000+" paragraph="Happy Customers" />
          </div>
        </div>

        <div className="model-section w-full xs:w-[70%] xs:h-[490px] xs:self-end md:self-start h-[448px] md:w-[50%] md:min-w-[374px] lg:min-w-[512px] xl:w-[620px] md:h-[600px] lg:h-[663px] relative z-0 overflow-hidden">
          <div className="hero-small-star self-end absolute top-1/2 translate-y-[-50%] left-4 z-10">
            <Image
              src={heroSectionStarSmall}
              alt="Star Vector"
              className="w-[44px] h-[44px] lg:w-[56px] lg:h-[56px]"
            ></Image>
          </div>
          <div className="models xs:h-[500px] md:h-auto overflow-hidden xs:bottom-0 md:bottom-[-50px] lg840:bottom-auto absolute z-0">
            <Image
              src={modelsImage}
              alt="2 Models wearing brands clothes"
              height={1200}
            ></Image>
          </div>
          <div className="hero-large-star absolute right-5 lg:right-3 z-10 top-[52px] md:top-[100px] lg:top-28">
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
