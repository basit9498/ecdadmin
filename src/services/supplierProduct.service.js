import httpServices from "./http.services";

// supplier product Add

const supplierProductAdd = (body) => {
  return httpServices
    .post("/product/create", body)
    .then((data) => data)
    .catch((error) => error);
};

const supplierProductList = (supplierId) => {
  return httpServices
    .get(`/product/supplier/${supplierId}`)
    .then((data) => data)
    .catch((error) => error);
};

const supplierProductDelete = (id) => {
  return httpServices
    .remove(`/product/${id}`)
    .then((data) => data)
    .catch((error) => error);
};

export default {
  supplierProductAdd,
  supplierProductList,
  supplierProductDelete,
};
