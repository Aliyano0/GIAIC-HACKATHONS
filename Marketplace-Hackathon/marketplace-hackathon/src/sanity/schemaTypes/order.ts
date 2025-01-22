import { title } from "process";

export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "orderid",
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
      name: "clerkUserId",
      title: "Store User ID",
      type: "string",
    },
    {
      name: "stripeCustomerId",
      title: "Stripe Customer ID",
      type: "string",
    },
    {
      name: "stripeCheckoutSessionId",
      title: "Stripe Checkout Session ID",
      type: "string",
    },
    {
      name: "stripePaymentIntentId",
      title: "Stripe Payment Intent ID",
      type: "string",
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
              title: "Product Bought",
              type: "reference",
              to: [{ type: "product" }]
            },

            {
              name: "quantity",
              title: "Quantity Purchased",
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
      name: "discountAmount",
      title: "Discount Amount",
      type: "number"
    },
    {
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
    },
    {
      name: "orderStatus",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" }, { title: "Shipped", value: "shipped" }, { title: "Delivered", value: "delivered" }, { title: "Cancelled", value: "cancelled" }],
      },
    },
  ],
};
