import Image from "next/image";
import Link from "next/link";
import FeaturedProducts from "./components/HomepageComponents/FeaturedProducts";
import BrandInfo from "./components/HomepageComponents/BrandInfo";
import Button from "./components/Buttons/Button";
import BrowseBanner from "./components/HomepageComponents/BrowseBanner";
import {
  customerReviews,
  getHeroImage,
  getHomeProducts,
} from "../fetchHomePage";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Review from "./components/HomepageComponents/Review";

export default async function Home() {
  const products = await getHomeProducts();
  const [bedImage, chairImage, sofaImage, tableImage] = products;
  const heroImage = await getHeroImage();
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="w-full h-[853px] px-4 xs:px-0 sm:pt-16 md:pt-5 lg:pt-0 xs:h-auto md:pl-5 xl:pl-0 xl:w-auto lg:h-[663px] bg-[#F2F0F1] flex flex-col md:flex-row md:justify-center md:items-center pr-[2px]">
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

        <div className="Hero-Image mt-11 w-full xs:w-[70%] xs:self-end md:w-[50%] md:min-w-[374px] lg:min-w-[512px] xl:w-[620px] relative z-0 overflow-hidden flex items-end justify-center">
          <div className="h-full overflow-hidden flex items-end justify-center">
            <Image
              src={heroImage}
              width={800}
              alt="Red Sofa Image"
              height={500}
              className="w-full h-full object-contain"
            ></Image>
          </div>
        </div>
      </div>
      {/* Banner */}
      <div className="Black-Banner bg-white w-full h-[194px] relative z-20">
        <div className=" w-full h-[122px] bg-black px-6 justify-between md:px-0 text-white flex md:justify-evenly lg:flex-none flex-wrap items-center relative z-30">
          <h1 className="xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold integralCF">
            SOFA
          </h1>
          <h1 className="xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold integralCF">
            BED
          </h1>
          <h1 className="xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold integralCF">
            CHAIR
          </h1>
          <h1 className="xxs:text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold integralCF">
            TABLE
          </h1>
        </div>
      </div>
      {/* Featured Products */}
      <FeaturedProducts />
      <div className="line h-[1px] bg-[#0000001a] w-[95%] mx-auto"></div>
      {/* Browse by Category Section */}
      <div className="Container mt-10  bg-[#f0f0f0] 2xl:w-[80%] pb-[70px] mx-auto sm:px-2 md:px-0 w-full flex flex-col items-center rounded-[20px] lg:rounded-[40px]">
        <h2 className="text-[32px] leading-[36px] lg:text-5xl lg:leading-[57.6px] mb-7 text-center font-bold uppercase integralCF mt-10 xs:mb-5 sm:mb-8 md:mt-[70px] md:mb-[64px]">
          BROWSE BY CATEGORY
        </h2>

        <div className="flex gap-[10px] flex-col sm:w-auto sm:flex-row mb-4 lg:mb-5">
          <Link href="/Shop/Chair">
            <BrowseBanner
              size="small"
              image={chairImage}
              alt="Chair Image"
              title="Chairs"
              titlePosition="left"
              mirrored={false}
            />
          </Link>
          <Link href={`/Shop/Sofa`}>
            <BrowseBanner
              size="large"
              image={sofaImage}
              alt="Chair Image"
              title="Sofa"
              titlePosition="right"
            />
          </Link>
        </div>

        <div className="flex gap-[10px] flex-col sm:w-auto sm:flex-row">
          <Link href={"/Shop/Bed"}>
            <BrowseBanner
              size="large"
              image={bedImage}
              alt="Bed Image"
              title="Beds"
              titlePosition="left"
            />
          </Link>
          <Link href={"/Shop/Table"}>
            <BrowseBanner
              size="small"
              image={tableImage}
              alt="Table Image"
              title="Tables"
              top="bottom-[-68%] md:bottom-[-20%] lg:bottom-[-50%] lg:top-[-70px]"
              mirrored={false}
              titlePosition="right"
            />
          </Link>
        </div>
      </div>
      {/* Testimonials  */}
      <div className="Container w-full py-8 mt-20 flex flex-col items-center justify-center overflow-hidden">
        {/* Section Title */}
        <div className="heading px-4 xs:px-5 sm:px-7 md:px-10 lg:px-20 w-full flex items-center justify-between">
          <h2 className="text-[32px] leading-[36px] sm:text-5xl font-bold sm:leading-[57.6px] mb-5 md:mb-10 integralCF">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="navigation flex gap-3 text-xl xs:gap-6 xs:text-2xl">
            <FaArrowLeft className="cursor-pointer" />
            <FaArrowRight className="cursor-pointer" />
          </div>
        </div>

        {/* Testimonials Wrapper */}
        <div className="flex w-full gap-3 xs:gap-5 no-scrollbar overflow-x-scroll px-4 sm:px-10">
          {customerReviews.map((elem) => {
            return (
              <Review
                key={elem.id}
                name={elem.name}
                paragraph={elem.paragraph}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
