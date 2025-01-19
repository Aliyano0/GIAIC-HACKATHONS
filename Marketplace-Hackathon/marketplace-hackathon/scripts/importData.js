import client from './sanityClient.js';

// async function uploadImageToSanity(imageUrl) {
//   try {
//     console.log(`Uploading image: ${imageUrl}`);

//     const response = await fetch(imageUrl);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch image: ${imageUrl}`);
//     }

//     const buffer = await response.arrayBuffer();
//     const bufferImage = Buffer.from(buffer);

//     const asset = await client.assets.upload('image', bufferImage, {
//       filename: imageUrl.split('/').pop(),
//     });

//     console.log(`Image uploaded successfully: ${asset._id}`);
//     return asset._id;
//   } catch (error) {
//     console.error('Failed to upload image:', imageUrl, error);
//     return null;
//   }
// }

// async function uploadProduct(product) {
//   try {
//     // const imageId = await uploadImageToSanity(product.imageUrl);

//     if ("imageId") {
//       const document = {

//       };

//       const createdProduct = await client.create(document);
//       console.log(`Product ${product.title} uploaded successfully:`, createdProduct);
//     } else {
//       console.log(`Product ${product.title} skipped due to image upload failure.`);
//     }
//   } catch (error) {
//     console.error('Error uploading product:', error);
//   }
// }

async function importProducts() {
  try {
    const response = await fetch('https://template-0-beta.vercel.app/api/product');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    for (const product of products) {
      await client.create({
        _type: 'product',
        id: product.id,
        name: product.name,
        imagePath: product.imagePath,
        price: parseFloat(product.price),
        description: product.description,
        discountPercentage: product.discountPercentage,
        isFeaturedProduct: product.isFeaturedProduct,
        stockLevel: product.stockLevel,
        category: product.category,
      });
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

importProducts();