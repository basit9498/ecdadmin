import httpServices from "./http.services";

const getAllSupplier = () =>
  httpServices
    .get("/allsuppliers")
    .then((data) => data)
    .catch((err) => err);

const addSuppier = (body) =>
  httpServices
    .post("/addsupplier", body)
    .then((data) => data)
    .catch((error) => error);

const deleteSuppier = (id) =>
  httpServices
    .get(`/supplier/delete/${id}`)
    .then((data) => data)
    .catch((error) => error);

export default {
  getAllSupplier,
  addSuppier,
  deleteSuppier,
};
