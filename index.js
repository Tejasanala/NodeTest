import express from "express";
import cors from "cors";
import productRouter from "./route.products.js";
import orderRouter from "./route.orders.js";

const app = express();

const PORT = 4500;

app.use(cors());
app.use(express.json());

app.use("/products", productRouter);
app.use("/orders", orderRouter);

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
