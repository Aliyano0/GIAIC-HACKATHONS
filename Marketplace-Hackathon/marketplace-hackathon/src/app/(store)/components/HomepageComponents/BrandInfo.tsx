interface IBrandInfo {
  heading: string;
  paragraph: string;
}

const BrandInfo = ({ heading, paragraph }: IBrandInfo) => {
  return (
    <div>
      <div className="intl-brands lg:w-auto">
        <h5 className="text-2xl leading-[32.4px] md:text-[27px] lg:text-[30px] xl:text-[40px] font-bold lg:leading-[54px]">
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
