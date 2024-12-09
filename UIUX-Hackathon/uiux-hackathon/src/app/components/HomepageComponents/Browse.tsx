import Image from "next/image";
import casualImage from "@/app/images/HomePageImages/ClothesImages/casualImage.png";
import formalImage from "@/app/images/HomePageImages/ClothesImages/formalImage.png";
import partyImage from "@/app/images/HomePageImages/ClothesImages/partyImage.png";
import gymImage from "@/app/images/HomePageImages/ClothesImages/gymImage.png";
const Browse = () => {
  return (
    <div
      className="container w-[358px] h-[975px] mx-4
      flex flex-col items-center lg:block rounded-[20px] lg:w-[1240px] lg:h-[866px]
    lg:rounded-[40px] lg:mx-[100px]"
    >
      <h2 className="text-[32px] leading-[36px] w-[246px] lg:w-auto lg:text-5xl lg:leading-[57.6px] mb-7 text-center font-bold integralCF mt-10 lg:mt-[70px] lg:mb-[64px]">
        BROWSE BY DRESS STYLE
      </h2>
      <div className="flex gap-4 flex-col lg:flex-row mb-4 lg:mb-5">
        {/* Casual */}
        <div className="w-[310px] h-[190px] lg:w-[407px] lg:h-[289px] overflow-hidden shadow-md rounded-[20px] relative">
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
        <div className="w-[310px] h-[190px] lg:w-[684px] lg:h-[289px] overflow-hidden shadow-md rounded-[20px] relative">
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

      <div className="flex gap-4 flex-col lg:flex-row">
        {/* Party */}
        <div className="w-[310px] h-[190px] lg:w-[684px] lg:h-[289px] overflow-hidden shadow-md rounded-[20px] relative">
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
        <div className="w-[310px] h-[190px] lg:w-[407px] lg:h-[289px] overflow-hidden shadow-md rounded-[20px] relative">
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
