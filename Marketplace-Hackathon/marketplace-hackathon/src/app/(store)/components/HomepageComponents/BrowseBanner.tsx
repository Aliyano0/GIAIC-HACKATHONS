import Image from "next/image";

interface IBrowseBanner {
  size: "small" | "large";
  image: string;
  title: string;
  alt: string;
  top?: string;
  left?: string;
  titlePosition: "right" | "left";
  mirrored?: boolean;
}

const BrowseBanner = ({
  size,
  image,
  alt,
  title,
  top,
  left,
  titlePosition,
  mirrored = true,
}: IBrowseBanner) => {
  return (
    <>
      {size === "small" && (
        <div className="w-[310px] h-[190px] sm:w-[305px] sm:h-[200px] md:w-[240px] md:h-[220px] lg:w-[300px] lg:h-[260px] xl:w-[407px] xl:h-[289px] overflow-hidden shadow-md rounded-[20px] relative">
          <Image
            src={image}
            alt={alt}
            width={407}
            height={289}
            className={`absolute left-0 ${left}
              ${top ? top : "bottom-[-30%] md:-top-[100px] xl:top-[-240px]"}  
              ${mirrored ? "scale-x-[-1]" : " "} lg:bottom-auto hover:scale-110 duration-500 transition-transform `}
          />
          <div
            className={`text-[24px] leading-[32.4px] top-4 absolute z-20 font-bold lg:text-[36px] lg:leading-[48.6px] lg:top-[25px]
               ${titlePosition == "right" ? "right-6  lg:right-9" : " "}
               ${titlePosition == "left" ? "left-6  lg:left-9" : " "}
               `}
          >
            {title}
          </div>
        </div>
      )}
      {size === "large" && (
        <div className="w-[310px] h-[190px] sm:w-[305px] sm:min-h-[200px] md:w-[400px] lg:w-[550px] md:h-[220px] lg:h-[260px] xl:w-[684px] xl:h-[289px] overflow-hidden shadow-md rounded-[20px] relative">
          <Image
            src={image}
            alt={alt}
            width={684}
            height={500}
            className={`bottom-0 lg:bottom-auto absolute lg:h-[500px] lg:top-[-130px] lg:left-[0px] ${top} ${left} hover:scale-110 duration-500 transition-transform `}
          />
          <div
            className={`text-[24px] leading-[32.4px] top-4 absolute z-20 font-bold lg:text-[36px] lg:leading-[48.6px] lg:top-[25px] 
              ${titlePosition == "right" ? "right-6  lg:right-9" : " "}
               ${titlePosition == "left" ? "left-6  lg:left-9" : " "}
               `}
          >
            {title}
          </div>
        </div>
      )}
    </>
  );
};

export default BrowseBanner;
