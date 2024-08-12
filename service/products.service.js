import { Products } from "../entity/products.entity.js";

function UpdateproductsById(existingData, updatedData) {
  return Products.put({ ...existingData.data, ...updatedData }).go();
}

function createproductsById(addproduct) {
  return Products.create(addproduct).go();
}

function DeleteproductsById(id) {
  return Products.delete({
    productId: id,
  }).go();
}

function GetproductById(id) {
  return Products.get({ productId: id }).go();
}

function Getproducts() {
  return Products.scan.go();
}

export {
  UpdateproductsById,
  createproductsById,
  DeleteproductsById,
  Getproducts,
  GetproductById,
};
