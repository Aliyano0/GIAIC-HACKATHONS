import Image from "next/image";
import casualImage from "@/app/images/HomePageImages/ClothesImages/casualImage.png";
import formalImage from "@/app/images/HomePageImages/ClothesImages/formalImage.png";
import partyImage from "@/app/images/HomePageImages/ClothesImages/partyImage.png";
import gymImage from "@/app/images/HomePageImages/ClothesImages/gymImage.png";
const Browse = () => {
  return (
    <div
      className="container w-[1240px] h-[866px]
    rounded-[40px] mx-[100px]"
    >
      <h2
        className="text-5xl leading-[57.6px]
      text-center font-bold integralCF mt-[70px] mb-[64px]"
      >
        BROWSE BY DRESS STYLE
      </h2>
      <div className="flex gap-4 flex-col lg:flex-row lg:mb-5">
        {/* Casual */}
        <div className="lg:w-[407px] lg:h-[289px] overflow-hidden shadow-md rounded-[20px] relative">
          <Image
            src={casualImage}
            alt="Casual Style"
            className="object-cover absolute h-[600px] top-[-130px] scale-x-[-1]"
          />
          <div className="absolute z-20  text-center font-bold text-[36px] leading-[48.6px] top-[25px] left-9 bg-white">
            Casual
          </div>
        </div>

        {/* Formal */}
        <div className="lg:w-[684px] lg:h-[289px] overflow-hidden shadow-md rounded-[20px] relative">
          <Image
            src={formalImage}
            alt="Formal Style"
            className="object-cover absolute h-[760px] top-[-130px] left-[305px]"
          />
          <div className="absolute z-20  text-center font-bold text-[36px] leading-[48.6px] top-[25px] left-9 bg-white">
            Casual
          </div>
        </div>
      </div>

      <div className="flex gap4 flex-col lg:flex-row">
        {/* Party */}
        <div className="lg:w-[684px] lg:h-[289px] overflow-hidden shadow-md rounded-[20px] relative">
          <Image
            src={partyImage}
            alt="Party Style"
            className="object-cover absolute h-[500px] top-[-130px] left-[90px]"
          />
          <div className="absolute z-20  text-center font-bold text-[36px] leading-[48.6px] top-[25px] left-9 bg-white">
            Party
          </div>
        </div>
        {/* Gym */}
        <div className="lg:w-[407px] lg:h-[289px] overflow-hidden shadow-md rounded-[20px] relative">
          <Image
            src={gymImage}
            alt="Gym Style"
            className="object-cover absolute h-[650px] top-[-140px] left-[90px]"
          />
          <div className="absolute z-20  text-center font-bold text-[36px] leading-[48.6px] top-[25px] left-9 bg-white">
            Gym
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
