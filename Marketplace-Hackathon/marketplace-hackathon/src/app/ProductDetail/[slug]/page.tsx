import ProductDetail from "../../components/ProductsDetails/ProductDetail";
import ProductsSuggestions from "../../components/ProductsDetails/Utils/ProductsSuggestions";
import ProductTestimonials from "../../components/ProductsDetails/Testimonials/ProductTestimonials";
import { client } from "@/sanity/lib/client";

const ProductDetailPage = ({params}: {params:string}) => {

  

  return (
    <div className="w-full">
      <div className="page-pathname mt-10 px-4 h-[19px] text-sm leading-[18.9] lg:text-base lg:leading-[21.6px] lg:mt-12  flex items-center gap-[10px] lg:min-w-[992px] w-full max-w-[1240px] mx-auto">
        <p>
          <span className="text-[#00000099]">Home</span> <span>&gt;</span>
        </p>
        <p>
          <span className="text-[#00000099]">Shop</span> <span>&gt;</span>
        </p>
        <p>
          <span className="text-[#00000099]">Men</span> <span>&gt;</span>
        </p>
        <p>T-shirts</p>
      </div>
      <ProductDetail />
      <ProductTestimonials />
      <ProductsSuggestions />
    </div>
  );
};

export default ProductDetailPage;
