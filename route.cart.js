import express from "express";

import {
  getAllCartProductsCtr,
  createCartProductsCtr,
  deleteCartProductsCtr,
} from "./controllers/cart.controller.js";

const router = express.Router();

router.get("/", getAllCartProductsCtr);
router.post("/", createCartProductsCtr);
router.delete("/:id", deleteCartProductsCtr);

export default router;
