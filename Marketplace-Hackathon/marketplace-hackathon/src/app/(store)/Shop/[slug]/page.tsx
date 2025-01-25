import ProductList from "../../components/ProductList";
// import Filters from "../../components/CategoryComponents/Filters/Filters";
import LineSeparator from "../../components/LineSeparator";

const Shop = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const category = slug;
  return (
    <div className="w-full md:pl-5 md:pr-3 lg:px-5 xl:px-10">
      <LineSeparator />

      <div className="Container pb-20 w-full xl:mx-auto flex gap-5 mb-[50px] lg:mb-0">
        {/* <div
          className={` bg-white text-black z-50 absolute md:static 
            
           transition-all hidden ease-in duration-150`}
        >
          {/* ${  // ? "block w-full xs:w-[70%] sm:w-1/2 left-0"
              // : "hidden w-0 -left-4 md:w-[28%]  md:block" 
            } 
          <Filters />
        </div> */}

        <div className="w-full mx-auto md:w-auto">
          <ProductList slug={category} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
