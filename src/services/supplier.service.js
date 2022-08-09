import httpServices from "./http.services";

const getAllSupplier = () =>
  httpServices
    .get("/allsuppliers")
    .then((data) => data)
    .catch((err) => err);

export default {
  getAllSupplier,
};
