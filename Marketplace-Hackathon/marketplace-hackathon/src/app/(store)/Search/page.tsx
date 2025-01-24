import { client } from "@/sanity/lib/client";
import Form from "next/form";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const searchProductByName = async (searchParam: string) => {
  const searcheResult = await client.fetch(`
    *[_type == "product" && category match "${searchParam}"] | order(name asc)
    `);
  return searcheResult || [];
};

const SearchPage = async ({
  searchParams,
}: {
  searchParams: {
    query: string;
  };
}) => {
  const { query } = await searchParams;
  const products = await searchProductByName(query);

  if (!products.length) {
    return (
      <div className="flex flex-col items-center justify-start min-h-screen bg-[#F0F0F0] p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-center ">
            No products found for {query}.
          </h1>
          <p className="text-gray-600 text-center">
            Try seaching with different keywords.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-[#F0F0F0] p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center ">
          Search results for {query}.
        </h1>
        <div className="grid grid-cols-1 xxs:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product: any) => (
            <Link
              key={product._id}
              href={`/ProductDetail/${product.slug.current}`}
            >
              <div className="bg-gray-100 p-4 shadow-md rounded-lg border">
                <Image
                  src={product.imagePath}
                  alt={product.name}
                  width={200}
                  height={160}
                  className="object-contain rounded-md hover:scale-105 transition-transform duration-500"
                ></Image>
                <h2 className="text-lg mt-1 font-bold">{product.name}</h2>
                <p className="text-sm text-gray-600">{product.description}</p>
                <div className="prices mt-2 flex gap-[5px] lg:gap-3 items-center">
                  <p className="price font-bold text-lg lg:text-xl">
                    $
                    {parseFloat(product.discountPercentage) !== 0
                      ? Math.floor(
                          product.price -
                            product.price *
                              (parseFloat(product.discountPercentage) / 100)
                        )
                      : product.price}
                  </p>

                  {parseFloat(product.discountPercentage) !== 0 ? (
                    <div className="flex gap-[5px] lg:gap-[10px]">
                      <p className="line-through text-[#00000066] font-bold text-lg lg:text-xl">
                        ${product.price}
                      </p>
                      <p className="w-[30px] h-5 lg:w-[45px] lg:h-6 rounded-[62px] bg-[#ff33331a] text-[#ff3333] text-[10px] leading-[13.5px] lg:text-xs lg:leading-[16.2px] font-medium flex justify-center items-center">
                        {product.discountPercentage}%
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
