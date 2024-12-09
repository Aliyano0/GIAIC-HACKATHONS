import Image from "next/image";
import mainImage from "@/app/images/DetailsPageImages/mainImage.png";
import thumbnailTwo from "@/app/images/DetailsPageImages/ThumbnailTwo.png";
import thumbnailThree from "@/app/images/DetailsPageImages/ThumbnailThree.png";

const ProductDetail = () => {
  return (
    <div className="container mt-5 w-[358px] mx-4 lg:w-[1240px] lg:ml-[100px] lg:mr-[90px] lg:my-9 flex flex-col lg:flex-row">
      {/* Image Section */}
      <div>
        <div className="thumbnails mb-5 lg:mb-0 w-[358px] lg:w-[152px] flex  lg:flex-col gap-[14px] lg:order-0">
          <Image
            src={mainImage}
            alt="T-Shirt Thumbnail 1"
            className="w-[111px] h-[106px] lg:w-[152px] lg:h-[167px] rounded-[20px] object-cover border-[1px] border-[#000000] cursor-pointer"
          />
          <Image
            src={thumbnailTwo}
            alt="T-Shirt Thumbnail 2"
            className="w-[112px] h-[106px] lg:w-[152px] lg:h-[168px] rounded-[20px] object-cover border-[1px] border-[#00000018] cursor-pointer"
          />
          <Image
            src={thumbnailThree}
            alt="T-Shirt Thumbnail 3"
            className="w-[111px] h-[106px] lg:w-[152px] lg:h-[167px] rounded-[20px] object-cover border-[1px] border-[#00000018] cursor-pointer"
          />
        </div>
      </div>
      <div className="main-image mb-3 lg:mb-0 order-[-1] lg:order-1 lg:ml-[14px] lg:mr-10">
        <Image
          src={mainImage}
          alt="One Life Graphic T-Shirt"
          className="w-[358px] h-[290px] lg:w-[444px] lg:h-[530px] rounded-[20px] object-cover"
        />
      </div>
      {/* Product Details Section */}
      <div className="product-details w-[358px] lg:order-2 lg:h-[530px] lg:w-[600px] flex flex-col gap-3 lg:gap-[14px]">
        <h1 className="w-[267px] h-[56px] leading-[28px] text-2xl lg:w-[600px] lg:text-[40px] lg:leading-[48px] font-bold integralCF">
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
        <div className="prices flex items-center font-bold text-xl leading-[27px] text-[24px] leading-3-[32.4px] gap-[10px] lg:text-[32px] lg:leading-[43.2px] lg:gap-3">
          <p className="price">$260</p>

          <div className="flex gap-[10px] lg:gap-3 items-center">
            <p className="line-through text-[#0000004d]">$300</p>
            <span className="w-[62px] h-[31px] lg:w-[72px] lg:h-[34px] rounded-[62px] py-[6px] px-3 bg-[#ff33331a] text-[#ff3333] text-[14px] leading-[18.9px] lg:text-base lg:leading-[21.6px] font-medium">
              -40%
            </span>
          </div>
        </div>
        <p className="text-[#00000099] w-[358px] h-[50px] text-sm lg:w-[590px] lg:h-[33px] lg:text-base lg:leading-[22px]">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
        <div className="line w-[358px] lg:w-[590px] h-[1px] bg-[#0000001a]"></div>
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
        <div className="line lg:w-[590px] h-[1px] bg-[#0000001a]"></div>
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
                } text-sm leading-[18.9px] lg:text-base px-5 py-[10px] rounded-[62px]`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="line w-[358px] lg:w-[590px] h-[1px] bg-[#0000001a]"></div>
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
          <button className="w-[236px] h-[44px] lg:w-[400px] lg:h-[52px] bg-black text-sm leading-[18.9px] lg:text-base lg:leading-[21.6px] text-white py-4 px-[54px] rounded-[62px] hover:bg-gray-800 text-center">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
