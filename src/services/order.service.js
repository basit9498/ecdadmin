// import { API_VERSION } from "@env";
import httpService from "./http.services";

const getOrderSupplier = (id) => {
  return httpService
    .get(`/supplier/get_order/${id}`)
    .then((data) => data)
    .catch((err) => err);
};

export default {
  getOrderSupplier,
};
