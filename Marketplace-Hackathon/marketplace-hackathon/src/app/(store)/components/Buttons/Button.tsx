import React from "react";
import { FaArrowRight } from "react-icons/fa6";
interface IButton {
  small: boolean;
  large: boolean;
  arrowIcon: boolean;
  btnText: string;
  width?: string | null;
  height?: string | null;
  bg?: string;
  textColor?: string;
  fontWeight?: string;
}
const Button = ({
  small,
  large,
  btnText,
  arrowIcon,
  width = null,
  height = null,
  bg = "bg-black",
  textColor = "text-white",
  fontWeight = "font-normal",
}: IButton) => {
  return (
    <button
      className={` hover:bg-gray-800 flex gap-3 items-center justify-center ${width} ${height} ${bg} ${textColor} text-sm ${fontWeight}  rounded-[62px] ${
        small ? " py-3 px-4  " : " "
      } ${large ? "px-[54px] py-4" : " "} `}
    >
      {btnText} {arrowIcon && <FaArrowRight className="text-lg" />}
    </button>
  );
};

export default Button;
