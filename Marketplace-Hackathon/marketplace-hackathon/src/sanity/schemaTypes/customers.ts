export default {
  name: "customers",
  title: "Customers",
  type: "document",
  fields: [
    {
      name: "customerId",
      title: "Customer ID",
      type: "string"
    },
    {
      name: "customerName",
      title: "Customer Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "address",
      title: "Customer Address",
      type: "string",
    },
    {
      name: "orderHistory",
      title: "Order History",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "productName",
              title: "Product Name",
              type: "reference",
              to: [{ type: "products" }]
            },
            {
              name: "quantity",
              title: "Quantity",
              type: "number"
            },
            {
              name: "orderDate",
              title: "Order Date",
              type: "reference",
              to: [{ type: "order" }]
            }
          ],
        },
      ],
    }
  ]
}