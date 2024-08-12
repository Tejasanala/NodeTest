import { Entity } from "electrodb"; // ORM - object relational mapping
import { client } from "../util/db.connention.js";

const Orders = new Entity(
  {
    model: {
      entity: "Order",
      version: "1",
      service: "OrderService",
    },
    attributes: {
      userId: {
        type: "string",
      },
      products: {
        type: "list",
        items: {
          type: "string",
        },
      },
      totalPrice: {
        type: "number",
      },
      orderDate: {
        type: "string",
      },
      status: {
        type: "string",
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["orderId"],
        },
        sk: {
          // highlight-next-line
          field: "sk",
          facets: [],
        },
      },
    },
    // add your DocumentClient and TableName as a second parameter
  },
  { client, table: "orders" }
);

export { Orders };
