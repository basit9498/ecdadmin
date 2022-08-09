// import { API_VERSION } from "@env";
import httpService from "./http.services";

// User Login Request
const userLogin = (body) => {
  return httpService
    .post(`/login`, body)
    .then((data) => data)
    .catch((err) => err);
};

const userLogout = () => {
  return httpService
    .get(`/logout`)
    .then((data) => data)
    .catch((err) => err);
};

const userGetData = (id) => {
  return httpService
    .get(`/managesingleuserdata/${id}`)
    .then((data) => data)
    .catch((err) => err);
};

// const userRegister = (body) => {
//   return httpService
//     .post(`${API_VERSION}/loader/register`, body)
//     .then((data) => data)
//     .catch((err) => err);
// };

export default {
  userLogin,
  userLogout,
  userGetData,
  // userRegister,
};
