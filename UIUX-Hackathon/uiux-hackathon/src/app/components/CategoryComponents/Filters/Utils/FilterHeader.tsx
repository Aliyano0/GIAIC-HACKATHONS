import { FaAngleUp } from "react-icons/fa6";
interface IFilterHeader {
  headingName: string;
}
const FilterHeader = ({ headingName }: IFilterHeader) => {
  return (
    <div className="header w-[353px] lg:w-[247px] h-[27px] flex justify-between items-center">
      <h4 className="h-[27px] font-bold text-xl leading-[27px]">
        {headingName}
      </h4>
      <div className="filter-icon h-4 w-4 lg:h-6 lg:w-6 flex justify-center items-center text-sm lg:text-base">
        <FaAngleUp />
      </div>
    </div>
  );
};

export default FilterHeader;
