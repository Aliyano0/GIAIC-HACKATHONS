// export default {
//   name: "products",
//   title: "Products",
//   type: "document",
//   fields: [
//     {
//       name: "name",
//       title: "Product Name",
//       type: "string",
//     },
//     {
//       name: "Id",
//       title: "Product ID",
//       type: "string"
//     },
//     {
//       name: "slug",
//       title: "Slug",
//       type: "slug",
//       options: {
//         source: "productName",
//         maxLength: 200,
//       },
//     },
//     {
//       name: "description",
//       title: "Description",
//       type: "text",
//     },
//     {
//       name: "price",
//       title: "Price",
//       type: "number",
//     },
//     {
//       name: "category",
//       title: "Category",
//       type: "string",
//     },
//     {
//       name: "material",
//       title: "Material",
//       type: "string",
//     },
//     {
//       name: "dimensions",
//       title: "Dimensions",
//       type: "string",
//     },
//     {
//       name: "stock",
//       title: "Stock",
//       type: "number",
//     },
//     {
//       name: "imageGallery",
//       title: "Image Gallery",
//       type: "array",
//       of: [{ type: "image" }],
//       options: {
//         hotspot: true,
//       },
//     },
//     {
//       name: "tags",
//       title: "Tags",
//       type: "array",
//       of: [{ type: "string" }],
//     },
//   ],
// };

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'imagePath',
      title: 'Image Path',
      type: 'url',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'discountPercentage',
      title: 'Discount Percentage',
      type: 'number',
    },
    {
      name: 'isFeaturedProduct',
      title: 'Is Featured Product',
      type: 'boolean',
    },
    {
      name: 'stockLevel',
      title: 'Stock Level',
      type: 'number',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
  ],
};
