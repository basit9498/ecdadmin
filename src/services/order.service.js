// import { API_VERSION } from "@env";
import httpService from "./http.services";

const getOrderSupplier = (id) => {
  return httpService
    .get(`/supplier/get_order/${id}`)
    .then((data) => data)
    .catch((err) => err);
};

const setOrderLoaderPick = (orderLoaderData) => {
  return httpService
    .post(`/order_loader/set_pick`, orderLoaderData)
    .then((data) => data)
    .catch((err) => err);
};
export default {
  getOrderSupplier,
  setOrderLoaderPick,
};
