import {
  GetproductById,
  Getproducts,
  DeleteproductsById,
  createproductsById,
  UpdateproductsById,
} from "../service/products.service.js";

async function GetproductCtr(request, response) {
  //we can also write html codes in send .. it can render the file
  const allproducts = await Getproducts();
  response.send(allproducts.data);
}

async function GetproductByIdCtr(request, response) {
  //we can also write html codes in send .. it can render the file
  const { id } = request.params;
  //   console.log(id);

  // const res = movies.find((findd) => findd.id == id);
  const data = await GetproductById(id);
  response.send(data);
}

async function DeleteproductByIdCtr(request, response) {
  //we can also write html codes in send .. it can render the file
  const { id } = request.params;

  // const res = movies.filter((findd) => findd.id != id);
  // const data = await Movies.query.primary({ movieId: `${id}` }).go();
  const data = await DeleteproductsById(id);
  console.log(data.data);
  if (data) {
    response.send({
      msg: "Product deleted successfully",
      data: `${data.data}`,
    });
  } else {
    response.send({ msg: "Product not found" });
  }
}

async function createproductByIdCtr(request, response) {
  const data = request.body;

  await createproductsById(data);

  response.send(data);
}

async function UpdateproductByIdCtr(request, response) {
  const { id } = request.params;
  //   console.log(id);
  const updatedData = request.body;

  const existingData = await GetproductById();
  if (existingData.data) {
    const res = await UpdateproductsById(existingData, updatedData);
    console.log(res.data);
    response.send(res.data);
  } else {
    response.status(404).send({ msg: "Product not found" });
  }
}

export {
  UpdateproductByIdCtr,
  createproductByIdCtr,
  DeleteproductByIdCtr,
  GetproductCtr,
  GetproductByIdCtr,
};
