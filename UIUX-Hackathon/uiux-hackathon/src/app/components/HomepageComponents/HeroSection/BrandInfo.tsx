interface IBrandInfo {
  heading: string;
  paragraph: string;
}

const BrandInfo = ({ heading, paragraph }: IBrandInfo) => {
  return (
    <div>
      <div className="intl-brands lg:w-auto lg:h-[74px] ">
        <h5 className="text-2xl leading-[32.4px] lg:text-[40px] font-bold lg:leading-[54px]">
          {heading}
        </h5>
        <p className="text-xs leading-[22px] lg:text-base text-[#00000099]">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default BrandInfo;
