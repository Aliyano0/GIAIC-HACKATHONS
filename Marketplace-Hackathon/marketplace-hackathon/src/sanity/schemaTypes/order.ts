
export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "Id",
      title: "Order ID",
      type: "string"
    },
    {
      name: "customerInfo",
      title: "Customer Info",
      type: "reference",
      to: [{ type: "customers" }],
    },
    {
      name: "products",
      title: "Products",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "product",
              title: "Product",
              type: "reference",
              to: [{ type: "product" }]
            },

            {
              name: "quantity",
              title: "Quantity",
              type: "number"
            },
          ],
        },
      ],
    },
    {
      name: "totalPrice",
      title: "Total Price",
      type: "number",
    },
    {
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: ["Pending", "Shipped", "Delivered", "Cancelled"],
      },
    },
  ],
};
