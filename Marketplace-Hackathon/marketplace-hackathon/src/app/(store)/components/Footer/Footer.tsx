import { TfiEmail } from "react-icons/tfi";
import { FaTwitter, FaGithub } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import FooterLinks from "./FooterLinks";
import Image from "next/image";
import visaCard from "@/app/images/FooterImages/visaCard.png";
import masterCard from "@/app/images/FooterImages/masterCard.png";
import paypal from "@/app/images/FooterImages/paypal.png";
import applePay from "@/app/images/FooterImages/applePay.png";
import googlePay from "@/app/images/FooterImages/googlePay.png";
import Button from "../Buttons/Button";

const footerLinksData = [
  {
    id: 5,
    heading: "COMPANY",
    listOne: "About",
    listTwo: "Features",
    listThree: "Works",
    listFour: "Career",
  },
  {
    id: 6,
    heading: "HELP",
    listOne: "Customer Support",
    listTwo: "Delivery Details",
    listThree: "Terms & Conditions",
    listFour: "Privacy Policy",
  },
  {
    id: 7,
    heading: "FAQ",
    listOne: "Account",
    listTwo: "Manage Deliveries",
    listThree: "Orders",
    listFour: "Payments",
  },
  {
    id: 8,
    heading: "RESOURCES",
    listOne: "Free eBook",
    listTwo: "Development Tutorial",
    listThree: "How to - Blog",
    listFour: "Youtube Playlist",
  },
];

const Footer = () => {
  return (
    <>
      <footer className="w-full py-5 lg:h-[589px] flex flex-col justify-center items-center bg-[#f0f0f0] px-1 xs:px-5">
        <div className="newsletter w-full rounded-[20px] bg-black mx-0 flex flex-col items-center md:flex-row md:gap-4 lg:gap-6 lg:justify-between px-4 pb-3 pt-8  md:py-5 md:px-[30px] lg:px-[60px] xl:px-20 lg:py-9">
          <h4 className="max-w-[551px] text-[28px] xs:text-[30px] sm:text-[32px] leading-[35px] font-bold text-white integralCF lg:text-[40px] lg:leading-[45px]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h4>
          <div className="mt-8 md:mt-0 flex flex-col items-center gap-3 lg:gap-[14px]">
            <div className="input-box w-[280px] xs:w-[311px] h-[42px] lg:h-12 rounded-[62px] py-3 px-4 flex gap-3 items-center bg-white lg:w-[349px]">
              <div className="discount-icon text-[#00000066] text-lg lg:text-2xl font-black">
                <TfiEmail />
              </div>
              <input
                type="text"
                placeholder="Enter your email address"
                className="pr-6"
              />
            </div>
            <div className="subscribe-btn">
              <Button
                btnText="Subscribe to Newsletter"
                arrowIcon={false}
                large={true}
                small={false}
                fontWeight="font-medium"
                width="w-[280px] xs:w-[311px]  lg:w-[349px]"
                height="h-[42px] lg:h-[46px]]"
                bg="bg-white"
                textColor="text-black"
              />
            </div>
          </div>
        </div>
        <div className="footer-section w-full mt-8">
          <div className="w-full flex justify-center items-center">
            <div className=" lg:h-[177px] lg:flex lg:gap-[80px] xl:gap-[112px]">
              <div className="heading flex flex-col gap-5 lg:gap-[35px] lg:w-[248px] lg:h-[177px]">
                <div className="text flex flex-col gap-[14px] lg:gap-[25px] lg:max-w-[248px] lg:h-[114px] px-2 xs:px-0">
                  <h3 className="integralCF font-bold text-[28.85px] leading-[34.62px] lg:text-[33.45px] lg:leading-[40.15px] text-black">
                    SHOP.CO
                  </h3>
                  <p className="text-sm leading-5 max-w-[357px] h-[40px] text-[#00000099] lg:w-[248px] lg:[66px] lg:leading-[22px]">
                    We have clothes that suits your style and which you&apos;re
                    proud to wear. From women to men.
                  </p>
                </div>
                <div className="icons px-2 xs:px-0 min-w-[148px] h-7 flex items-center gap-3">
                  <div className="icon w-[28px] h-[28px] text-black bg-white border-[1px] border-[#00000033] rounded-full flex items-center justify-center">
                    <FaTwitter />
                  </div>
                  <div className="icon w-[28px] h-[28px] text-white bg-black border-[1px] border-[#00000033] rounded-full flex items-center justify-center">
                    <FaFacebookF />
                  </div>
                  <div className="icon w-[28px] h-[28px] text-black bg-white border-[1px] border-[#00000033] rounded-full flex items-center justify-center">
                    <FaInstagram />
                  </div>
                  <div className="icon w-[28px] h-[28px] text-black bg-white border-[1px] border-[#00000033] rounded-full flex items-center justify-center">
                    <FaGithub />
                  </div>
                </div>
              </div>
              <div className="links-li my-6 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 items-center justify-center xs:justify-between lg:justify-normal lg:items-start md:justify-between gap-x-12 gap-y-7 xs:gap-x-20 sm:gap-x-[60px] md:gap-x-[90px] lg:gap-x-[60px] xl:gap-x-[90px] px-2 xs:px-0 lg:mt-2">
                {footerLinksData.map((elem) => {
                  return (
                    <FooterLinks
                      key={elem.id}
                      heading={elem.heading}
                      listOne={elem.listOne}
                      listTwo={elem.listTwo}
                      listThree={elem.listThree}
                      listFour={elem.listFour}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="company-name flex flex-col justify-center items-center gap-4 lg:my-[50px]">
            <div className="w-full h-[1px] rounded-[1px] bg-[#0000001A] lg:max-w-[1240px] lg:mb-5"></div>
            <div className="md:w-full max-w-[1240px] md:flex items-center md:justify-between">
              <p className="h-[19px] text-sm leading-[18.9px] text-[#00000099] ">
                Shop.co &copy; 2000-2023, All Rights Reserved
              </p>
              <div className="payment-methods w-[240.93px] h-[25.74px] flex gap-[10.29px] mt-4 items-center lg:w-auto lg:h-[30.03px] lg:gap-3 lg:mt-0">
                <Image src={visaCard} alt="Visa Card Logo"></Image>

                <Image src={masterCard} alt="Master Card Logo"></Image>

                <Image src={paypal} alt="Paypal Logo"></Image>

                <Image src={applePay} alt="Apple Pay Logo"></Image>

                <Image src={googlePay} alt="Google Pay Logo"></Image>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
