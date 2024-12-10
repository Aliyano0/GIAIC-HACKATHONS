import Options from "./Utils/Options";
import Size from "./Utils/Size";
import ColorCircle from "./Utils/ColorCircle";
import { RxMixerVertical, RxCross1 } from "react-icons/rx";

import Line from "./Utils/Line";
import FilterHeader from "./Utils/FilterHeader";

const filterOptions = [
  {
    id: 1,
    optionName: "T-shirts",
  },
  {
    id: 2,
    optionName: "Shorts",
  },
  {
    id: 3,
    optionName: "Shirts",
  },
  {
    id: 4,
    optionName: "Hoodie",
  },
  {
    id: 55,
    optionName: "Jeans",
  },
];
const rowOneColors = [
  {
    id: 1,
    color: "bg-[#00c12b]",
  },
  {
    id: 2,
    color: "bg-[#f50606]",
  },
  {
    id: 3,
    color: "bg-[#f5dd06]",
  },
  {
    id: 4,
    color: "bg-[#f57906]",
  },
  {
    id: 55,
    color: "bg-[#06caf5]",
  },
];
const rowTwoColors = [
  {
    id: 66,
    color: "bg-[#063af5]",
    tick: true,
  },
  {
    id: 77,
    color: "bg-[#7d06f5]",
  },
  {
    id: 88,
    color: "bg-[#f506a4]",
  },
  {
    id: 99,
    color: "bg-white",
  },
  {
    id: 56,
    color: "bg-black",
  },
];
const sizes = [
  {
    id: 984,
    text: "XX-Small",
  },
  {
    id: 664,
    text: "X-Small",
  },
  {
    id: 554,
    text: "Small",
  },
  {
    id: 384,
    text: "Medium",
  },
  {
    id: 884,
    text: "Large",
    black: true,
  },
  {
    id: 674,
    text: "X-Large",
  },
  {
    id: 784,
    text: "XX-Large",
  },
  {
    id: 684,
    text: "3X-Large",
  },
  {
    id: 584,
    text: "4X-Large",
  },
];
const styles = [
  {
    id: 919,
    optionName: "Casual",
  },
  {
    id: 717,
    optionName: "Formal",
  },
  {
    id: 818,
    optionName: "Party",
  },
  {
    id: 616,
    optionName: "Gym",
  },
];
const Filters = () => {
  return (
    <>
      <div className="w-[390px] h-[1066px] rounded-t-[20px] lg:w-[295px] lg:h-[1220px] lg:rounded-[20px] border-[1px] flex flex-col gap-5 px-[19px] py-5 lg:gap-6 border-[#0000001a] lg:py-5 lg:px-6">
        <div className="header w-[353px] lg:w-[247px] h-[27px] flex justify-between items-center">
          <h4 className="w-[57px] h-[27px] font-bold text-xl leading-[27px]">
            Filter
          </h4>
          <div className="cross h-6 w-6 lg:hidden">
            <RxCross1 />
          </div>
          <div className="filter-icon h-6 w-6 justify-center items-center text-2xl hidden lg:flex">
            <RxMixerVertical />
          </div>
        </div>
        <Line />
        <div className="options w-[353px] lg:w-[247px] h-[160px] flex flex-col gap-5">
          {filterOptions.map((elem) => {
            return <Options key={elem.id} options={elem.optionName} />;
          })}
        </div>
        <Line />
        <div className="price-filter w-[247px] h-[90px] flex flex-col justify-between">
          <FilterHeader headingName="Price" />
          <div className="price-filter w-[353px] lg:w-[247px] h-[43px] mt-4 lg:mt-5">
            <div className="filter w-[353px] lg:w-[247px] h-5 flex items-center justify-center">
              <div className="circle w-5 h-5 rounded-full bg-black"></div>
              <div className="connecting-line w-[250px] lg:w-[145px] h-[6px] bg-black"></div>
              <div className="circle w-5 h-5 rounded-full bg-black"></div>
            </div>
            <div className="filter-price mt-2 mx-[31px] lg:w-[194px] flex justify-between items-center">
              <p className="text-sm font-medium leading-[18.9px]">$50</p>
              <p className="text-sm font-medium leading-[18.9px]">$200</p>
            </div>
          </div>
        </div>
        <Line />
        <div className="colors-filter w-[353px] lg:w-[247px] h-[137px]">
          <FilterHeader headingName="Colors" />
          <div className="colors w-[353px] lg:w-[247px] h-[90px] flex flex-col gap-4 items-center lg:items-start mt-4 lg:mt-5">
            <div className="rowOne w-[247px] h-[37px] flex justify-between">
              {rowOneColors.map((elem) => {
                return <ColorCircle key={elem.id} colorClass={elem.color} />;
              })}
            </div>
            <div className="rowTwo w-[247px] h-[37px] flex justify-between">
              {rowTwoColors.map((elem) => {
                return (
                  <ColorCircle
                    key={elem.id}
                    colorClass={elem.color}
                    tick={elem.tick}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Line />
        <div className="size-filters w-[247px] h-[274px]">
          <FilterHeader headingName="Size" />
          <div className="sizes w-[353px] h-[133px] lg:w-[247px] lg:h-[227px] flex gap-2 flex-wrap mt-4 lg:mt-5">
            {sizes.map((elem) => {
              return <Size key={elem.id} text={elem.text} black={elem.black} />;
            })}
          </div>
        </div>
        <Line />
        <div className="dress-style w-[353px] lg:w-[247px] lg:h-[171px]">
          <FilterHeader headingName="Dress Style" />
          <div className="styles w-[247px] h-[124px] flex flex-col gap-5 mt-4 lg:mt-5">
            {styles.map((elem) => {
              return <Options key={elem.id} options={elem.optionName} />;
            })}
          </div>
        </div>
        <button className="w-[353px] lg:w-[247px] h-12 rounded-[62px] py-4 px-[54px] bg-black text-white text-sm leading-[18.9px] font-medium">
          Apply Filter
        </button>
      </div>
    </>
  );
};

export default Filters;
