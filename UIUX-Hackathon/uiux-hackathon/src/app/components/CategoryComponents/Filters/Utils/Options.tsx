import { FaAngleRight } from "react-icons/fa6";
interface IOptions {
  options: string;
}

const Options = ({ options }: IOptions) => {
  return (
    <div className="option w-[353px] lg:w-[247px] h-[16px] flex justify-between items-center leading-[21.6px] text-[#00000099]">
      <p>{options}</p>
      <span>
        <FaAngleRight />
      </span>
    </div>
  );
};

export default Options;
