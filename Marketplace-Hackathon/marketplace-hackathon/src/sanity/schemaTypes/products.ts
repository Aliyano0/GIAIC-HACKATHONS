export default {
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "material",
      title: "Material",
      type: "string",
    },
    {
      name: "dimensions",
      title: "Dimensions",
      type: "string",
    },
    {
      name: "stock",
      title: "Stock",
      type: "number",
    },
    {
      name: "imageGallery",
      title: "Image Gallery",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
