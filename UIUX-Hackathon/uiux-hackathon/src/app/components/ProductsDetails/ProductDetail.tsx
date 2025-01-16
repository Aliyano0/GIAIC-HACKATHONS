import Image from "next/image";
import mainImage from "@/app/images/DetailsPageImages/mainImage.png";
import thumbnailTwo from "@/app/images/DetailsPageImages/ThumbnailTwo.png";
import thumbnailThree from "@/app/images/DetailsPageImages/ThumbnailThree.png";

const ProductDetail = () => {
  return (
    <div className="Container mb-5 mt-5 w-full xs:px-5 xl:px-0 xl:mx-auto xl:max-w-[1240px] md:my-9 flex flex-col sm:flex-row gap-5 lg:gap-0">
      {/* Image Section */}
      <div className="full min-w-[320px] w-[90%] xs:min-w-0 mt-5 md:mt-0 xs:w-[440px] mx-auto xs:mx-0 sm:w-[260px] md:w-[300px] lg:w-auto flex xl:flex-row flex-col lg:mr-8 xl:mr-10">
        <div className="thumbnails mt-2 xl:mt-0 mb-5 lg:mb-0 md: lg:w-[366px] xl:w-[152px] flex xl:flex-col gap-[14px] lg:order-0">
          <Image
            src={mainImage}
            alt="T-Shirt Thumbnail 1"
            className="w-[111px] h-[106px] sm:h-[90px] md:h-[100px] lg:w-1/3 xl:w-[152px] xl:h-[167px] rounded-[20px] object-cover border-[1px] border-[#000000] cursor-pointer"
          />
          <Image
            src={thumbnailTwo}
            alt="T-Shirt Thumbnail 2"
            className="w-[112px] h-[106px] sm:h-[90px] md:h-[100px] lg:w-1/3 xl:w-[152px] xl:h-[168px] rounded-[20px] object-cover border-[1px] border-[#00000018] cursor-pointer"
          />
          <Image
            src={thumbnailThree}
            alt="T-Shirt Thumbnail 3"
            className="w-[111px] h-[106px] sm:h-[90px] md:h-[100px] lg:w-1/3 xl:w-[152px] xl:h-[167px] rounded-[20px]  border-[1px] object-cover border-[#00000018] cursor-pointer"
          />
        </div>
        <div className="main-image w-full h-[310px] xs:h-[390px] xs:w-[440px] mx-auto sm:h-[290px] sm:mx-0  sm:w-[260px] md:w-[300px] lg:w-auto xl:w-[444px] lg:h-[400px] xl:h-[530px] rounded-[20px] mb-3 lg:mb-0 order-[-1] xl:order-1 xl:ml-[14px]">
          <Image
            src={mainImage}
            alt="One Life Graphic T-Shirt"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Product Details Section */}
      <div className="product-details min-w-[320px] w-[90%] sm:mt-5 md:mt-0 xs:min-w-0 xs:w-[440px] mx-auto xs:mx-0  sm:w-[56%]  sm:min-w-0 lg:order-2 lg:h-[530px] lg:w-[600px] flex flex-col gap-3 lg:gap-[14px]">
        <h1 className="sm:w-auto leading-[28px] text-2xl xs:text-[28px] lg:w-[600px] md:text-[32px] lg:text-[40px] lg:leading-[48px] font-bold integralCF">
          ONE LIFE GRAPHIC T-SHIRT
        </h1>
        <div className="flex items-center space-x-2">
          <span className="text-yellow-400 text-[24px] lg:text-[28px]">
            ★★★★☆
          </span>
          <span className="text-gray-500 lg:leading-[21.6px] text-sm leading-[18.9px] lg:text-base ">
            4.5/5
          </span>
        </div>
        <div className="prices flex items-center font-bold text-xl leading-[27px] text-[24px] xs:text-[26px] sm:text-[24px] leading-3-[32.4px] gap-[10px] lg:text-[32px] lg:leading-[43.2px] lg:gap-3">
          <p className="price">$260</p>

          <div className="flex gap-[10px] lg:gap-3 items-center">
            <p className="line-through text-[#0000004d]">$300</p>
            <span className="w-[62px] h-[31px] lg:w-[72px] lg:h-[34px] rounded-[62px] py-[6px] px-3 bg-[#ff33331a] text-[#ff3333] text-[14px] leading-[18.9px] lg:text-base lg:leading-[21.6px] font-medium">
              -40%
            </span>
          </div>
        </div>
        <p className="text-[#00000099] w-[80%] text-[13px] xs:text-sm lg:w-[590px] md:text-base lg:leading-[22px]">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
        <div className="line w-[98%] mx-auto h-[1px] bg-[#0000001a]"></div>

        {/* Color Options */}
        <div className="Colors mt-[10px] lg:mt-0">
          <h3 className="text-sm leading-[18.9px] lg:text-base lg:leading-[21.6px] mb-[14px] text-[#00000099]">
            Select Colors
          </h3>
          <div className="flex w-[142px] h-[39.14px] gap-[12.3px] lg:w-[143px] lg:h-[37px] lg:gap-4">
            <div className="w-[39.14px] h-[39.13px] lg:w-[37px] lg:h-[37px] rounded-full bg-[#4f4631] border border-gray-300 cursor-pointer"></div>
            <div className="w-[39.14px] h-[39.13px] lg:w-[37px] lg:h-[37px] rounded-full bg-[#314f4a] border border-gray-300 cursor-pointer"></div>
            <div className="w-[39.14px] h-[39.13px] lg:w-[37px] lg:h-[37px] rounded-full bg-[#31344f] border border-gray-300 cursor-pointer"></div>
          </div>
        </div>
        <div className="line w-[98%] mx-auto h-[1px] bg-[#0000001a]"></div>

        {/* Size Options */}
        <div className="Sizes mt-[10px] lg:mt-0">
          <h3 className="text-sm leading-[18.9px] lg:text-base lg:leading-[21.6px] mb-[14px] text-[#00000099]">
            Choose Size
          </h3>
          <div className="flex space-x-2 lg:gap-3">
            {["Small", "Medium", "Large", "X-Large"].map((size) => (
              <button
                key={size}
                className={`${
                  size === "Large"
                    ? "bg-black text-white"
                    : "bg-[#f0f0f0] text-[#00000099]"
                } text-xs xs:text-sm leading-[18.9px] lg:text-base px-[18px] xs:px-5 py-[10px] rounded-[62px]`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="line w-[98%] mx-auto h-[1px] bg-[#0000001a]"></div>
        {/* Quantity Selector */}
        <div className="mt-[10px] lg:mt-0 h-[44px] flex items-center lg:h-[52px] gap-4 lg:gap-5">
          <div className="h-[44px] w-[110px] flex items-center justify-between py-3 px-4 lg:px-5 lg:py-4 lg:w-[170px] lg:h-[52px] rounded-[62px] text-[28px] lg:text-[32px]">
            <button className="w-5 h-5 lg:w-8 lg:h-8 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200">
              -
            </button>
            <span className="text-sm leading-[18.9px] lg:text-base lg:leading-[21.6px] font-medium">
              1
            </span>
            <button className="w-5 h-5 lg:w-8 lg:h-8 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200">
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button className="w-[236px] xs:w-[71%] sm:w-[210px] md:w-[236px]  lg:w-[400px] h-[52px] bg-black text-sm leading-[18.9px] lg:text-base lg:leading-[21.6px] text-white py-4 px-[54px] rounded-[62px] hover:bg-gray-800 text-center">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
