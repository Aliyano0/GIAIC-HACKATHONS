import Image from "next/image";

const ProductDetail = () => {

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Image Section */}
      <div>
        <div className="border border-gray-300 rounded-md mb-4">
          <Image
            src="/images/tshirt-main.jpg"
            alt="One Life Graphic T-Shirt"
            width={500}
            height={500}
            className="w-full object-cover rounded-md"
          />
        </div>
        <div className="flex space-x-2">
          <Image
            src="/images/tshirt-1.jpg"
            alt="T-Shirt Thumbnail 1"
            width={80}
            height={80}
            className="border border-gray-300 rounded-md cursor-pointer"
          />
          <Image
            src="/images/tshirt-2.jpg"
            alt="T-Shirt Thumbnail 2"
            width={80}
            height={80}
            className="border border-gray-300 rounded-md cursor-pointer"
          />
          <Image
            src="/images/tshirt-3.jpg"
            alt="T-Shirt Thumbnail 3"
            width={80}
            height={80}
            className="border border-gray-300 rounded-md cursor-pointer"
          />
        </div>
      </div>

      {/* Product Details Section */}
      <div>
        <h1 className="text-3xl font-bold mb-2">ONE LIFE GRAPHIC T-SHIRT</h1>
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-yellow-400 text-lg">★★★★☆</span>
          <span className="text-gray-500 text-sm">4.5/5</span>
        </div>
        <div className="text-2xl font-bold text-gray-800">
          $260 <span className="line-through text-gray-500 text-lg">$330</span>
          <span className="text-red-600 text-lg ml-2">-40%</span>
        </div>
        <p className="text-gray-600 my-4">
          This graphic t-shirt, perfect for any occasion, is crafted from a soft
          and breathable fabric, offering superior comfort and style.
        </p>

        {/* Color Options */}
        <div className="my-4">
          <h3 className="text-lg font-semibold mb-2">Select Colors</h3>
          <div className="flex space-x-2">
            <div className="w-8 h-8 rounded-full bg-green-600 border border-gray-300 cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-black border border-gray-300 cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-navy-700 border border-gray-300 cursor-pointer"></div>
          </div>
        </div>

        {/* Size Options */}
        <div className="my-4">
          <h3 className="text-lg font-semibold mb-2">Choose Size</h3>
          <div className="flex space-x-2">
            {["Small", "Medium", "Large", "X-Large"].map((size) => (
              <button
                key={size}
                className={"px-4 py-2 border rounded-md border-gray-300 text-gray-600"
                }
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="my-4">
          <h3 className="text-lg font-semibold mb-2">Quantity</h3>
          <div className="flex items-center space-x-4">
            <button
              className="w-8 h-8 flex items-center justify-center border rounded-md bg-gray-100 hover:bg-gray-200"
            >
              -
            </button>
            <span className="text-lg">1</span>
            <button
              className="w-8 h-8 flex items-center justify-center border rounded-md bg-gray-100 hover:bg-gray-200"
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-black text-white py-3 rounded-md mt-6 hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
