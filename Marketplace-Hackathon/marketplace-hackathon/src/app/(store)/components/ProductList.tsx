import ProductCard from "./ProductCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RxMixerVertical } from "react-icons/rx";
import NavNumbers from "./NavNumbers";
import { IProduct } from "@/app/(store)/types/product";
import Link from "next/link";
import { getProducts } from "../Shop/fetchProductList";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const ProductList = async ({ slug }: { slug: string }) => {
  const productsData: IProduct[] = await getProducts(slug);
  const totalProducts = productsData?.length;
  return (
    <div className="lg:w-full w-full pl-3 xxs:px-3 sm:px-5">
      <div className="relative page-pathname w-full h-8 text-sm md:text-base md:leading-[21.6px] lg:mt-0 lg:mb-6 mb-3 flex justify-between items-center gap-1">
        <div className="w-full flex gap-1">
          <span className="inline-block">
            <span className="text-[#00000099] inline-block">Home</span>{" "}
            <span className="inline-block">&gt;</span>
          </span>
          <span className="inline-block">Shop</span>{" "}
          {slug && (
            <span className="inline-block">
              &gt; {slug == "1" || "2" ? "All" : slug}
            </span>
          )}
        </div>
      </div>
      <div className="header w-full grid gap-x-10 gap-y-3 justify-between items-end grid-cols-1">
        <div className="flex h-5 gap-2 items-center justify-start">
          <h2 className="md:h-[43px] font-bold text-2xl leading-[32.4px] md:text-[32px] md:leading-[43.2px]">
            Products
          </h2>
        </div>
        <div className="w-auto min-w-[310px] flex justify-between text-[#00000099] md:leading-[21.6px] leading-[18.9px] mb-[2px]">
          {slug === "Bed" ||
          slug === "Sofa" ||
          slug === "Chair" ||
          slug === "Table" ? (
            <div className="text-xs sm:text-sm lg:text-base h-[10xp] lg:h-4 flex justify-center items-center">
              Showing 1 - {totalProducts} of {totalProducts} Products
            </div>
          ) : (
            ""
          )}
          {slug === "1" || slug === "2" ? (
            <div className="text-xs sm:text-sm lg:text-base h-[10xp] lg:h-4 flex justify-center items-center">
              Showing{" "}
              {slug === "1" && (
                <span className="mx-1"> 1 - {productsData?.length} </span>
              )}
              {slug === "2" && (
                <span className="mx-1">
                  {" "}
                  12 - {productsData && productsData?.length + 12}
                </span>
              )}{" "}
              of 21 Products
            </div>
          ) : (
            ""
          )}
          <div className="filter-icon items-center justify-center hidden text-xl font-black cursor-pointer">
            <RxMixerVertical />
          </div>
          <div className="relative w-[120px] xs:w-[140px] sm:w-[160px] md:w-[180px]">
            <Accordion
              className="w-full absolute left-0 -top-8 z-20 text-black"
              type="single"
              collapsible
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base md:text-lg xs:px-2 xs:mr-1">
                  Category: {slug === "1" || slug === "2" ? "All" : slug}
                </AccordionTrigger>
                <AccordionContent
                  className={`${slug === "1" || slug === "2" ? "font-semibold" : "font-normal"} text-base bg-white pl-2 `}
                >
                  <a href="/Shop/1">All</a>
                </AccordionContent>
                <AccordionContent
                  className={`${slug === "Sofa" ? "font-semibold" : "font-normal"} text-sm xs:text-base bg-white pl-2 `}
                >
                  <a href="/Shop/Sofa">Sofa</a>
                </AccordionContent>
                <AccordionContent
                  className={`${slug === "Chair" ? "font-semibold" : "font-normal"} text-sm xs:text-base bg-white pl-2 `}
                >
                  <a href="/Shop/Chair">Chairs</a>
                </AccordionContent>
                <AccordionContent
                  className={`${slug === "Bed" ? "font-semibold" : "font-normal"} text-sm xs:text-base bg-white pl-2 `}
                >
                  <a href="/Shop/Bed">Beds</a>
                </AccordionContent>
                <AccordionContent
                  className={`${slug === "Table" ? "font-semibold" : "font-normal"} text-sm xs:text-base bg-white pl-2 `}
                >
                  <a href="/Shop/Table">Tables</a>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      {productsData?.length === 0 && (
        <div className="w-full h-[300px] flex justify-center items-center">
          <h1 className="text-xl "> Products Not Found.</h1>
        </div>
      )}
      <div className="cards-container w-[306px] xxs:w-[90%] mx-auto xs:mx-0 xs:w-full mt-5 xs:mt-7 sm:mx-0 sm:w-full h-auto overflow-hidden grid grid-cols-1 xs:grid-cols-2 gap-y-6 gap-x-3 sm:grid-cols-3 xl:grid-cols-4 lg:gap-x-5 lg:gap-y-7 lg:mt-4">
        {productsData &&
          productsData.map((elem: IProduct) => {
            return (
              <Link key={elem._id} href={`/ProductDetail/${elem.slug.current}`}>
                <ProductCard
                  productPicture={elem.imagePath}
                  productName={elem.name}
                  stock={elem.stockLevel}
                  productCategory={elem.category}
                  description={elem.description}
                  productRating={elem.rating}
                  productPrice={elem.price}
                  discountPercentage={elem.discountPercentage}
                />
              </Link>
            );
          })}
      </div>
      <div className="line mt-6 mb-5 mx-auto w-[95%] bg-[#0000001a] h-[1px] lg:my-8"></div>
      {/* Pagination */}
      {slug === "1" || slug === "2" ? (
        <div className="pagination w-auto lg:h-10 flex gap-2 justify-center text-xs leading-[20px] font-medium lg:text-sm rounded-lg">
          <Link href={`/Shop/${slug === "2" && parseInt(slug) - 1}`}>
            <button className="w-[90px] shadow-md lg:w-[110px] rounded-lg py-2 px-[14px] border-[1px] border-[#0000001a] gap-2 flex items-center">
              <span className="lg:text-lg">
                <FaArrowLeft />
              </span>
              <span>Previous</span>
            </button>
          </Link>
          <div className=" lg:h-10 flex lg:gap-1">
            <Link href="/Shop/1" className="border shadow-md">
              <NavNumbers navNumber="1" />
            </Link>

            <Link href="/Shop/2" className="border shadow-md">
              <NavNumbers navNumber="2" />
            </Link>
          </div>
          <Link href={`/Shop/${slug === "1" && parseInt(slug) + 1}`}>
            <button className="w-[90px] shadow-md lg:w-[110px]  rounded-lg py-2 px-[14px] border-[1px] border-[#0000001a] gap-2 flex items-center">
              <span>Next</span>
              <span className="lg:text-lg">
                <FaArrowRight />
              </span>
            </button>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductList;
