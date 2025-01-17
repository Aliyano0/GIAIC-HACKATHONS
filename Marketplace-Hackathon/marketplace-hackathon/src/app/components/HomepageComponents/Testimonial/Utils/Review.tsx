interface IReviews {
  name: string;
  paragraph: string;
}

const Review = ({ name, paragraph }: IReviews) => {
  return (
    <>
      <div className=" min-w-[304px] xs:min-w-[358px] sm:min-w-[400px] rounded-[20px] border-[1px] border-[#0000001a] p-6 sm:px-[28px] sm:py-8 bg-white shadow-md">
        <div className="w-full flex flex-col gap-[8px] lg:gap-0 lg:justify-between">
          <div className="stars w-full flex items-center lg:mb-2">
            <div className="flex gap-[5.51px] lg:gap-[6.49px]">
              {Array(5)
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
          <h3 className="w-full font-bold lg:mb-2 flex items-center lg:text-xl leading-[22px] gap-1">
            {name}
            <span className="text-white flex justify-center items-center text-[10px] lg:text-sm text-center w-[15px] h-[15px] lg:w-[20px] lg:h-[20px] rounded-full bg-green-500">
              ✔
            </span>
          </h3>
          <p className="w-full text-[#00000099] text-[13px] xs:text-sm  sm:text-base sm:leading-[22px]">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;
