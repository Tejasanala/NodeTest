import { Entity } from "electrodb"; // ORM - object relational mapping
import { client } from "../util/db.connention.js";

const Products = new Entity(
  {
    model: {
      entity: "Product",
      version: "1",
      service: "ProductService",
    },
    attributes: {
      productId: {
        type: "string",
      },
      name: {
        type: "string",
      },
      description: {
        type: "string",
      },
      price: {
        type: "number",
      },
      category: {
        type: "string",
      },
      stockQuantity: {
        type: "number",
      },
    },
    indexes: {
      primary: {
        pk: {
          // highlight-next-line
          field: "pk",
          facets: ["productId"],
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
  { client, table: "products" }
);

export { Products };
