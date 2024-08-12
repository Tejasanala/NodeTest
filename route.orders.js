import express from "express";
import {
  GetorderCtr,
  GetorderByIdCtr,
  DeleteorderByIdCtr,
  createorderByIdCtr,
  UpdateorderByIdCtr,
} from "./controllers/order.controller.js";

const router = express.Router();

router.route("/").get(GetorderCtr).post(createorderByIdCtr);

router
  .route("/:id")
  .get(GetorderByIdCtr)
  .delete(DeleteorderByIdCtr)
  .put(UpdateorderByIdCtr);

export default router;
