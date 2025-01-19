import { Rule } from "sanity";

export default {
  name: "reviews",
  title: "Reviews",
  type: "document",
  fields: [
    {
      name: "product",
      title: "Product",
      type: "reference",
      to: [{ type: "product" }],
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule: Rule) => Rule.min(1).max(5),
    },
    {
      name: "comment",
      title: "Comment",
      type: "text",
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      options: {
        default: new Date().toISOString(),
      },
    },
  ],
};
