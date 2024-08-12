import { Orders } from "../entity/order.entity.js";

function UpdateorderById(existingData, updatedData) {
  return Orders.put({ ...existingData.data, ...updatedData }).go();
}

function createorderById(addproduct) {
  return Orders.create(addproduct).go();
}

function DeleteorderById(id) {
  return Orders.delete({
    orderId: id,
  }).go();
}

function GetorderById(id) {
  return Orders.get({ orderId: id }).go();
}

function Getorders() {
  return Orders.scan.go();
}

export {
  UpdateorderById,
  createorderById,
  DeleteorderById,
  GetorderById,
  Getorders,
};
