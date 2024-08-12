import {
  GetorderById,
  Getorders,
  DeleteordersById,
  createordersById,
  UpdateordersById,
} from "../service/orders.service.js";

async function GetorderCtr(request, response) {
  //we can also write html codes in send .. it can render the file
  const allproducts = await Getorders();
  response.send(allproducts.data);
}

async function GetorderByIdCtr(request, response) {
  //we can also write html codes in send .. it can render the file
  const { id } = request.params;
  //   console.log(id);

  // const res = movies.find((findd) => findd.id == id);
  const data = await GetorderById(id);
  response.send(data);
}

async function DeleteorderByIdCtr(request, response) {
  //we can also write html codes in send .. it can render the file
  const { id } = request.params;

  // const res = movies.filter((findd) => findd.id != id);
  // const data = await Movies.query.primary({ movieId: `${id}` }).go();
  const data = await DeleteordersById(id);
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

async function createorderByIdCtr(request, response) {
  const data = request.body;

  await createordersById(data);

  response.send(data);
}

async function UpdateorderByIdCtr(request, response) {
  const { id } = request.params;
  //   console.log(id);
  const updatedData = request.body;

  const existingData = await GetorderById();
  if (existingData.data) {
    const res = await UpdateordersById(existingData, updatedData);
    console.log(res.data);
    response.send(res.data);
  } else {
    response.status(404).send({ msg: "Product not found" });
  }
}

export {
  GetorderCtr,
  GetorderByIdCtr,
  DeleteorderByIdCtr,
  createorderByIdCtr,
  UpdateorderByIdCtr,
};
