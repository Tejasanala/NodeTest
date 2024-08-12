import express from "express";
import {
  GetproductCtr,
  GetproductByIdCtr,
  DeleteproductByIdCtr,
  createproductByIdCtr,
  UpdateproductByIdCtr,
} from "./controllers/product.controller.js";

const router = express.Router();

router.route("/").get(GetproductCtr).post(createproductByIdCtr);

router
  .route("/:id")
  .get(GetproductByIdCtr)
  .delete(DeleteproductByIdCtr)
  .put(UpdateproductByIdCtr);

export default router;
