interface IReviews {
  name: string;
  paragraph: string;
}

const Review = ({ name, paragraph }: IReviews) => {
  return (
    <>
      <div className="w-[400px] h-[240px] rounded-[20px] border-[1px] border-[rgba(0, 0, 0, 0.1)] px-[28px] py-8 bg-white p-4 shadow-md">
        <div className="flex flex-col w-[336px] h-[161.58px] justify-between">
          <div className="stars flex items-center mb-2">
            <div className="flex gap-[6.49px]">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="text-[#ffc633] text-[28px]">
                    ★
                  </span>
                ))}
            </div>
          </div>
          <h3 className="font-bold mb-2 flex items-center text-xl leading-[22px] gap-1">
             {name}
            <span className="text-white flex justify-center items-center text-sm text-center w-[20px] h-[20px] rounded-full bg-green-500">
              ✔
            </span>
          </h3>
          <p className="text-[#00000099] leading-[22px]">
            {paragraph}
            
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;
