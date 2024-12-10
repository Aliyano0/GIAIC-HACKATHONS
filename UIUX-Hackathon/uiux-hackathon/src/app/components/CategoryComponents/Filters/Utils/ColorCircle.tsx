import { FaCheck } from "react-icons/fa6";

interface ICircleColor {
  colorClass: string;
  tick?: boolean;
}

const ColorCircle = ({ colorClass, tick = false }: ICircleColor) => {
  return (
    <div
      className={`w-[37px] h-[37px] border-[2px] border-[#00000033] ${colorClass} flex items-center justify-center rounded-full text-white font-medium`}
    >
      {tick && <FaCheck />}
    </div>
  );
};

export default ColorCircle;
