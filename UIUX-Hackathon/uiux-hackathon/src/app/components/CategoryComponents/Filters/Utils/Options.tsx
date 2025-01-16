import { FaAngleRight } from "react-icons/fa6";
interface IOptions {
  options: string;
}

const Options = ({ options }: IOptions) => {
  return (
    <div className="option w-full h-[16px] text-base md:text-sm lg:text-base flex justify-between items-center leading-[21.6px] text-[#00000099]">
      <p>{options}</p>
      <span>
        <FaAngleRight />
      </span>
    </div>
  );
};

export default Options;
