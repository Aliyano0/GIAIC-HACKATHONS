import Image from "next/image";
import casualImage from "@/app/images/HomePageImages/ClothesImages/casualImage.png";
import formalImage from "@/app/images/HomePageImages/ClothesImages/formalImage.png";
import partyImage from "@/app/images/HomePageImages/ClothesImages/partyImage.png";
import gymImage from "@/app/images/HomePageImages/ClothesImages/gymImage.png";
const Browse = () => {
  return (
    <div className="Container bg-[#f0f0f0]  2xl:w-[80%] pb-[70px] mx-auto sm:px-4 md:px-0 w-full flex flex-col items-center rounded-[20px] lg:rounded-[40px]">
      <h2 className="text-[32px] leading-[36px] lg:text-5xl lg:leading-[57.6px] mb-7 text-center font-bold integralCF mt-10 xs:mb-5 sm:mb-8 md:mt-[70px] md:mb-[64px]">
        BROWSE BY DRESS STYLE
      </h2>

      <div className="flex gap-4 flex-col sm:w-full md:w-[90%] xl:w-auto sm:flex-row mb-4 lg:mb-5">
        {/* Casual */}
        <div className="w-[310px] h-[190px] sm:w-[50%] sm:m-w-[310px] sm:h-[200px] md:w-[40%] md:h-[220px] lg:h-[260px] xl:w-[407px] xl:h-[289px] overflow-hidden shadow-md rounded-[20px] relative">
          <Image
            src={casualImage}
            alt="Casual Style"
            className="object-cover absolute h-[360px] top-[-80px] lg:left-0 lg:h-[600px] lg:top-[-130px] scale-x-[-1]"
          />
          <div className="text-[24px] leading-[32.4px] top-4 left-6 absolute z-20 font-bold lg:text-[36px] lg:leading-[48.6px] lg:top-[25px] lg:left-9 bg-white">
            Casual
          </div>
        </div>

        {/* Formal */}
        <div className="w-[310px] h-[190px] sm:w-[50%] sm:m-w-[310px] sm:min-h-[200px] md:w-[60%] md:h-[220px] lg:h-[260px] xl:w-[684px] xl:h-[289px] overflow-hidden shadow-md rounded-[20px] relative">
          <Image
            src={formalImage}
            alt="Formal Style"
            className="h-[360px] left-[150px] top-[-70px] object-cover absolute lg:h-[760px] lg:top-[-130px] lg:left-[305px]"
          />
          <div className="text-[24px] leading-[32.4px] top-4 left-6 absolute z-20 font-bold lg:text-[36px] lg:leading-[48.6px] lg:top-[25px] lg:left-9 bg-white">
            Formal
          </div>
        </div>
      </div>

      <div className="flex gap-4 flex-col sm:w-full md:w-[90%] xl:w-auto sm:flex-row">
        {/* Party */}
        <div className="w-[310px] h-[190px] sm:w-[50%] sm:m-w-[310px] sm:min-h-[200px] md:w-[60%] md:h-[220px] lg:h-[260px] xl:w-[684px] xl:h-[289px] overflow-hidden shadow-md rounded-[20px] relative">
          <Image
            src={partyImage}
            alt="Party Style"
            className="h-[300px] top-[-75px] left-[37px] object-cover absolute lg:h-[500px] lg:top-[-130px] lg:left-[90px]"
          />
          <div className="text-[24px] leading-[32.4px] top-4 left-6 absolute z-20 font-bold lg:text-[36px] lg:leading-[48.6px] lg:top-[25px] lg:left-9 bg-white">
            Party
          </div>
        </div>
        {/* Gym */}
        <div className="w-[310px] h-[190px] sm:w-[50%] sm:m-w-[310px] sm:h-[200px] md:w-[40%] md:h-[220px] lg:h-[260px] xl:w-[407px] xl:h-[289px] overflow-hidden shadow-md rounded-[20px] relative">
          <Image
            src={gymImage}
            alt="Gym Style"
            className="h-[250px] top-[-5px] left-[55px] object-cover absolute lg:h-[650px] lg:top-[-140px] lg:left-[90px]"
          />
          <div className="text-[24px] leading-[32.4px] top-4 left-6 absolute z-20 font-bold lg:text-[36px] lg:leading-[48.6px] lg:top-[25px] lg:left-9 bg-white">
            Gym
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
