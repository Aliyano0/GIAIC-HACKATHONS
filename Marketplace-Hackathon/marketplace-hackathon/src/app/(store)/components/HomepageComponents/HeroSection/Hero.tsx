import Image from "next/image";
import BrandInfo from "./BrandInfo";
import Button from "../../Buttons/Button";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
const getHeroImage = async () => {
  const heroImage = await client.fetch(`
      *[_type == "product" && slug.current=="high-quality-modern-sofa"] {
    imagePath,
}`);
  return heroImage ? heroImage[0].imagePath : "";
};
const Hero = async () => {
  const heroImage = await getHeroImage();
  return (
    <>
      <div className="w-full h-[853px] px-4 xs:px-0 sm:pt-16 md:pt-5 lg:pt-0 xs:h-auto md:pl-5 xl:pl-0 xl:w-auto lg:h-[663px] bg-[#F2F0F1] flex flex-col md:flex-row md:justify-center md:items-center">
        <div className="text-section text-center xs:text-start w-full md:w-1/2 xl:w-[620px] flex flex-col items-center xs:items-start gap-5 px-4 md:px-0 md:gap-4 lg:gap-6 mt-8">
          <h1 className="font-bold w-full sm:w-[90%] text-3xl leading-[34px] md:min-w-[374px] lg:w-full lg:min-w-[512px] xl:w-[577px] lg:leading-[64px] md:leading-[55px] xs:text-[64px] xs:leading-[64px] md:text-[48px] lg:text-[58px]  integralCF">
            ONE STOP SOLUTION FOR YOUR HOME FURNITURE NEEDS
          </h1>

          <p className="w-[90%] text-[13px] leading-[18px] xs:text-base md:min-w-[374px] lg:min-w-[512px] xl:w-[545px] lg:leading-[22px] text-[#00000099] satoshi">
            Browse through our diverse range of meticulously crafted furniture
            to bring out your house interior and cater to your sense of style.
          </p>
          <Link href="/Shop">
            <Button
              btnText="Shop Now"
              arrowIcon={false}
              large={true}
              small={false}
              width="w-[320px] xs:w-[358px] md:w-[210px]"
              height="h-[52px]"
              fontWeight=" font-medium text-base "
            />
          </Link>

          <div className="customer-info w-full xs:w-auto flex flex-col justify-center items-center gap-3 xs:flex-row md:justify-normal md:items-start xl:w-[596px] lg:h-[74px] lg:gap-8">
            <div className="flex lg:gap-8 gap-5">
              <BrandInfo heading="200+" paragraph="International Brands" />
              <BrandInfo heading="2,000+" paragraph="High-Quality Products" />
            </div>
            <BrandInfo heading="30,000+" paragraph="Happy Customers" />
          </div>
        </div>

        <div className="Hero-Image mt-11 w-full xs:w-[70%] xs:self-end md:self-start md:w-[50%] md:min-w-[374px] lg:min-w-[512px] xl:w-[620px] relative z-0 overflow-hidden flex items-end justify-center">
          <div className="h-full overflow-hidden flex items-end justify-center">
            <Image
              src={heroImage}
              width={800}
              alt="Red Sofa Image"
              height={500}
              className="object-contain"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
