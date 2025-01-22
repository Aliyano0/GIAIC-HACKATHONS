import ProductReview from "./ProductReview";
import { RxMixerVertical } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa6";
const customerReviews = [
  {
    id: 1,
    name: "Samantha D.",
    paragraph: `"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`,
    datePosted: "Posted on August 14, 2023",
  },
  {
    id: 2,
    name: "Alex M..",
    paragraph: `"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."`,
    datePosted: "Posted on August 15, 2023",
  },
  {
    id: 3,
    name: "Ethan R.",
    paragraph: `"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
    datePosted: "Posted on August 16, 2023",
  },
  {
    id: 22,
    name: "Olivia P.",
    paragraph: `"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`,
    datePosted: "Posted on August 17, 2023",
  },
  {
    id: 4,
    name: "Liam K.",
    paragraph: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
    datePosted: "Posted on August 18, 2023",
  },
  {
    id: 33,
    name: "Ava H.",
    paragraph: `"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."`,
    datePosted: "Posted on August 19, 2023",
  },
];

const ProductTestimonials = () => {
  return (
    <div className="w-full xs:px-5 xl:px-0  lg:mx-0 xl:mx-auto mt-[50px] lg:mt-0 xl:max-w-[1240px]">
      <div className="testimonials-nav w-full flex justify-between xl:justify-normal xl:gap-[45px] leading-[22px] text-sm xs:text-base lg:text-[20px] text-[#00000099]">
        <p className="h-[11px] w-[31.5%] xl:w-[413px] lg:h-[14px] text-center cursor-pointer">
          Product Details
        </p>
        <p className=" pb-[38px] h-[12px] text-black border-b-[2px] border-b-black w-[31.5%] xl:w-[413px] lg:h-[14px] font-medium text-center cursor-pointer">
          Rating & Reviews
        </p>
        <p className=" h-[11px] text-center w-[31.5%] xl:w-[413px] lg:h-[14px] cursor-pointer">
          FAQs
        </p>
      </div>

      <div className="line w-[95%] mx-auto h-[1px] bg-[#0000001a]"></div>

      <div className="header xs:min-w-0 min-w-[320px] w-[90%] mx-auto xs:mx-0 flex items-center justify-between xs:w-full my-[20px] md:px-5 xl:px-0 xl:mx-auto xl:max-w-[1240px]">
        <div className="heading-text flex items-center gap-2 h-[27px] jus">
          <h5 className="w-[104px] h-[27px] font-bold text-xl leading-[27px] lg:w-[125px] lg:h-8 lg:text-2xl lg:leading-[32.4px] ">
            All Reviews
          </h5>
          <span className="w-[29px] text-sm leading-[22px] text-[#00000099]">
            (451)
          </span>
        </div>
        <div className="filters-btn flex items-center gap-1">
          <div className="filter w-10 h-10 flex items-center justify-center lg:w-12 lg:h-12 cursor-pointer">
            <RxMixerVertical />
          </div>
          <div className="latest hidden w-[120px] h-12 rounded-[62px] py-4 px-5 leading-[21.6px] font-medium lg:flex justify-between items-center cursor-pointer">
            <span>Latest</span>
            <span>
              <FaAngleDown />
            </span>
          </div>
          <button className="w-[113px] rounded-[62px] px-4 py-3 font-medium text-xs leading-[16.2px] bg-black text-white xs:w-[166px] xs:py-5">
            Write a Review
          </button>
        </div>
      </div>
      <div className="reviews xs:min-w-0 min-w-[320px] w-[90%] mx-auto xs:mx-0 xs:w-full xs:h-[230px] overflow-clip sm:overflow-visible sm:h-[740px] md:h-[705px] grid grid-cols-1 md:px-5 xl:px-0 sm:grid-cols-2 gap-3 md:gap-4 xl:w-[1240px] lg:h-[850px] xl:h-[770px] lg:gap-5">
        {customerReviews.map((elem) => {
          return (
            <ProductReview
              key={elem.id}
              name={elem.name}
              paragraph={elem.paragraph}
              datePosted={elem.datePosted}
            />
          );
        })}
      </div>
      <div className="load-more-btn flex justify-center items-center">
        <button className="mt-5 lg:mt-9 w-[195px] h-[47px] rounded-[62px] border-[1px] border-[#0000001a] py-[14px] px-9 text-sm leading-[18.9px] sm:w-[230px] sm:h-[52px] sm:text-base lg:leading-[21.6px]">
          Load More Reviews
        </button>
      </div>
    </div>
  );
};

export default ProductTestimonials;
