import { client } from "@/sanity/lib/client";

export async function GET() {
  try {
    const data = await client.fetch(`
    *[_type == "product" && slug.current == "blue-bed"]{ 
      _id, 
      id, 
      name, 
      imagePath, 
      price, 
      description, 
      category, 
      stockLevel, 
      rating 
      isFeaturedProduct, 
      discountPercentage,
      }`);

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch or insert data' }),
      { status: 500 }
    );
  }
}