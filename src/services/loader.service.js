import httpServices from "./http.services";

const addsupplierLoader = (body) => {
  return httpServices
    .post("/loader/just_register", body)
    .then((data) => data)
    .catch((error) => error);
};

const getAllLoader = () => {
  return httpServices
    .get("/loader/list")
    .then((data) => data)
    .catch((error) => error);
};

const deleteLoader = (id) => {
  return httpServices
    .get(`/loader/delete_loader/${id}`)
    .then((data) => data)
    .catch((error) => error);
};

const updateLoader = (id, data) => {
  return httpServices
    .put(`/loader/update_loader/${id}`, data)
    .then((data) => data)
    .catch((error) => error);
};
export default {
  addsupplierLoader,
  getAllLoader,
  deleteLoader,
  updateLoader,
};
