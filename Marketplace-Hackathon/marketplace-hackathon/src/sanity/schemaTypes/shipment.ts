const shipment = {
  name: "shipment",
  title: "Shipment",
  type: "document",
  fields: [
    {
      name: "shipmentId",
      title: "Shipment ID",
      type: "string",
    },
    {
      name: "orderId",
      title: "Order ID",
      type: "reference",
      to: [{ type: "order" }],
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "In Transit", value: "inTransit" },
          { title: "Delivered", value: "delivered" },
        ],
      },
    },
    {
      name: "deliveryDate",
      title: "Delivery Date",
      type: "datetime",
    },
  ],
};

export default shipment;