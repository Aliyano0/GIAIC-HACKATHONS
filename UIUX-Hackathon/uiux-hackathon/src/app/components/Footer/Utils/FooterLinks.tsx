interface IFooterLinks {
  heading: string;
  listOne: string;
  listTwo: string;
  listThree: string;
  listFour: string;
}

const FooterLinks = ({
  heading,
  listOne,
  listTwo,
  listThree,
  listFour,
}: IFooterLinks) => {
  return (
    <div className="flex flex-col gap-4 mt-6 lg:mt-0 lg:gap-[26px]">
      <h6 className="font-medium text-sm leading-[18px] tracking-[3px] lg:text-base text-black">
        {heading}
      </h6>
      <ul className="text-sm leading-4 text-[#00000099] flex flex-col gap-4 lg:text-base lg:leading-[19px]">
        <li className="cursor-pointer">{listOne}</li>
        <li className="cursor-pointer">{listTwo}</li>
        <li className="cursor-pointer">{listThree}</li>
        <li className="cursor-pointer">{listFour}</li>
      </ul>
    </div>
  );
};

export default FooterLinks;
