"use client";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface IProductThumbnails {
  thumbnailImg: StaticImageData;
  thumbnailAlt: string;
}

const ProductThumbnails = ({
  thumbnailImg,
  thumbnailAlt,
}: IProductThumbnails) => {
  const [isOpen, setIsOpen] = useState(false);
  const thumbnailClickHandler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Image
      onClick={thumbnailClickHandler}
      src={thumbnailImg}
      alt={thumbnailAlt}
      className={`w-[111px] h-[106px] md:w-1/3 xl:w-[152px] xl:h-[167px] rounded-[20px] object-cover  cursor-pointer ${
        isOpen ? " border-[1px] border-[#000000] " : "border-none"
      }`}
    >
      {/* <ProductThumbnails thumbnailAlt="T-Shirt" thumbnailImg={mainImage} />
      <ProductThumbnails thumbnailAlt="T-Shirt" thumbnailImg={thumbnailTwo} />
      <ProductThumbnails thumbnailAlt="T-Shirt" thumbnailImg={thumbnailTwo} /> */}
    </Image>
  );
};

export default ProductThumbnails;
