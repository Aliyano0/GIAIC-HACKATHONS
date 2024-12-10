import Filters from "../components/CategoryComponents/Filters/Filters";

const Category = () => {
  return (
    <>
      <div className="line w-[358px] mx-4 my-6 lg:mt-6 lg:mx-[100px] lg:w-[1240px] bg-[#0000001a] h-[1px]"></div>
      <div className="page-pathname px-4 w-[358px] h-[19px] text-sm leading-[18.9] lg:text-base lg:leading-[21.6px] lg:mt-0 lg:mb-6  flex items-center gap-1 lg:w-[1440px] lg:px-[100px]">
        <span>
          <span className="text-[#00000099]">Home</span> <span>&gt;</span>
        </span>
        <span>Casual</span>
      </div>
      <div className="container lg:w-[1240px] lg:mx-[100px]">
        <Filters />
      </div>
    </>
  );
};

export default Category;
