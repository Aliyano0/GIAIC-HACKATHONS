import Review from "./Review";

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
    <div className="container mx-auto px-4 py-8 mt-20">
      {/* Section Title */}
      <h2 className="text-5xl font-bold leading-[57.6px] mb-10 integralCF">
        OUR HAPPY CUSTOMERS
      </h2>

      {/* Testimonials Wrapper */}
      <div className="lg:hidden">
        <Review
          name="Sarah M."
          paragraph={`"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`}
        />
      </div>
      <div className="hidden lg:flex w-[1700px] relative left-[-450px] gap-5 overflow-hidden">
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
