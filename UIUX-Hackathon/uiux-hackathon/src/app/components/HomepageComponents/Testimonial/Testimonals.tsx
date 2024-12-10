import Review from "./Utils/Review";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const customerReviews = [
  {
    id: 1,
    name: "Sarah M.",
    paragraph: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`,
  },
  {
    id: 2,
    name: "Sarah M.",
    paragraph: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`,
  },
  {
    id: 3,
    name: "Alex K.",
    paragraph: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
  },
  {
    id: 4,
    name: "James L.",
    paragraph: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
  },
  {
    id: 5,
    name: "Moore",
    paragraph: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`,
  },
];

const Testimonials = () => {
  return (
    <div className="container lg:mx-[100px] px-4 py-8 mt-20">
      {/* Section Title */}
      <div className="heading w-[357px] h-[72px] lg:h-[58px] lg:w-[1240px] flex items-center lg:justify-between">
        <h2 className="text-[32px] leading-[36px] lg:text-5xl font-bold lg:leading-[57.6px] mb-10 integralCF">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="navigation flex gap-6 text-2xl">
          <FaArrowLeft className="cursor-pointer" />
          <FaArrowRight className="cursor-pointer" />
        </div>
      </div>

      {/* Testimonials Wrapper */}
      <div className="flex w-[358px] lg:w-[1700px] relative lg:left-[-450px] lg:gap-5 overflow-hidden">
        {/* Testimonial 1 */}
        {customerReviews.map((elem) => {
          return (
            <Review key={elem.id} name={elem.name} paragraph={elem.paragraph} />
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
