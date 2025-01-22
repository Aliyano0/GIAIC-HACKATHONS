import { client } from "@/sanity/lib/client";
import BrowseBanner from "./BrowseBanner";
import Link from "next/link";

const getProducts = async () => {
  // Fetching image of each category to display on category banner.
  const bedImage = await client.fetch(`
      *[_type == "product" && category=="Bed"][1] {
    imagePath
}`);
  const chairImage = await client.fetch(`
        *[_type == "product" && category=="Chair"][0] {
      imagePath
  }`);
  const sofaImage = await client.fetch(`
        *[_type == "product" && category=="Sofa"][1] {
      imagePath
  }`);
  const tableImage = await client.fetch(`
        *[_type == "product" && category=="Table"][2] {
      imagePath
  }`);
  const products = [];
  products.push(
    bedImage.imagePath,
    chairImage.imagePath,
    sofaImage.imagePath,
    tableImage.imagePath
  );
  return products;
};

const Browse = async () => {
  const products = await getProducts();
  const [bedImage, chairImage, sofaImage, tableImage] = products;

  return (
    <div className="Container bg-[#f0f0f0]  2xl:w-[80%] pb-[70px] mx-auto sm:px-4 md:px-0 w-full flex flex-col items-center rounded-[20px] lg:rounded-[40px]">
      <h2 className="text-[32px] leading-[36px] lg:text-5xl lg:leading-[57.6px] mb-7 text-center font-bold uppercase integralCF mt-10 xs:mb-5 sm:mb-8 md:mt-[70px] md:mb-[64px]">
        BROWSE BY CATEGORY
      </h2>

      <div className="flex gap-4 flex-col sm:w-full md:w-[90%] xl:w-auto sm:flex-row mb-4 lg:mb-5">
        <Link href="/Shop/Chair">
          <BrowseBanner
            size="small"
            image={chairImage}
            alt="Chair Image"
            title="Chairs"
            titlePosition="left"
            mirrored={false}
          />
        </Link>
        <Link href={`/Shop/Sofa`}>
          <BrowseBanner
            size="large"
            image={sofaImage}
            alt="Chair Image"
            title="Sofa"
            titlePosition="right"
          />
        </Link>
      </div>

      <div className="flex gap-4 flex-col sm:w-full md:w-[90%] xl:w-auto sm:flex-row">
        <Link href={"/Shop/Bed"}>
          <BrowseBanner
            size="large"
            image={bedImage}
            alt="Bed Image"
            title="Beds"
            titlePosition="left"
          />
        </Link>
        <Link href={"/Shop/Table"}>
          <BrowseBanner
            size="small"
            image={tableImage}
            alt="Table Image"
            title="Tables"
            top="bottom-[-68%] sm:bottom-[-50%] lg:top-[-70px]"
            mirrored={false}
            titlePosition="right"
          />
        </Link>
      </div>
    </div>
  );
};

export default Browse;
