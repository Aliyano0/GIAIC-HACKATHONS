import { client } from "@/sanity/lib/client";

export async function GET(req) {
  try {
    const data = await client.fetch(`
      *[_type == "product"] {
        _id,
        name,
        imagePath,
        price,
        description,
        category,
        stockLevel,
        isFeaturedProduct,
        discountPercentage,
      }
    `);

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch or insert data' }),
      { status: 500 }
    );
  }
}