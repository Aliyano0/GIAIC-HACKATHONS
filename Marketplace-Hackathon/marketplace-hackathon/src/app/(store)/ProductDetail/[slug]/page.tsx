import ProductDetail from "../../components/ProductsDetails/ProductDetail";
import ProductsSuggestions from "../../components/ProductsDetails/ProductsSuggestions";
import ProductTestimonials from "../../components/ProductsDetails/Testimonials/ProductTestimonials";

const ProductDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;

  return (
    <div className="w-full">
      <div className="page-pathname mt-10 pl-3 sm:pl-10 xl:pl-24 w-full h-8 text-sm md:text-base md:leading-[21.6px] lg:mb-6 mb-3 flex justify-between items-center gap-1">
        <div className="w-full flex gap-1">
          <span className="inline-block">
            <span className="text-[#00000099] inline-block">Home</span>{" "}
            <span className="inline-block">&gt;</span>
          </span>
          <span className="inline-block">Shop</span>{" "}
          {slug && (
            <span className="inline-block capitalize">
              &gt;{" "}
              {slug
                .split("-")
                .filter((elem) => elem != "-")
                .join(" ")}
            </span>
          )}
        </div>
      </div>
      <ProductDetail productSlug={slug} />
      <ProductTestimonials />
      <ProductsSuggestions />
    </div>
  );
};

export default ProductDetailPage;
