interface IProductReviews {
  name: string;
  paragraph: string;
  datePosted: string;
}

const ProductReview = ({ name, paragraph, datePosted }: IProductReviews) => {
  return (
    <>
      <div className="w-[358px] h-[224.19px] lg:h-[241.58px] rounded-[20px] border-[1px] border-[#0000001a] p-6 lg:py-[28px] lg:px-8 bg-white shadow-md lg:w-[610px]">
        <div className="flex flex-col w-[310px] h-[176.19px] lg:w-[546px] lg:h-[139.58px] gap-[8px] lg:gap-0 lg:justify-between">
          <div className="stars flex items-center lg:mb-2">
            <div className="flex gap-[5.51px] lg:gap-[6.49px]">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <span
                    key={i}
                    className="text-[#ffc633] text-2xl lg:text-[28px]"
                  >
                    ★
                  </span>
                ))}
            </div>
          </div>
          <h3 className="font-bold lg:mb-2 flex items-center lg:text-xl leading-[22px] gap-1">
            {name}
            <span className="text-white flex justify-center items-center text-[10px] lg:text-sm text-center w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] rounded-full bg-green-500">
              ✔
            </span>
          </h3>
          <p className="text-[#00000099] text-sm lg:text-base lg:leading-[22px] h-20 lg:h-auto line-clamp-4 lg:line-clamp-none">
            {paragraph}
          </p>
          <p className="datePosted lg:mt-5 lg:w-[546px] lg:text-base w-[171px] h-[22px] text-sm leading-[22px] font-medium text-[#00000099]">
            {datePosted}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductReview;
