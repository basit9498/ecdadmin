import axios from "axios";
// import { BASE_URL } from '@env';
// const baseURL = "http://localhost:5000/api/v1/";
const baseURL = "https://dev-ecd-api-v1.herokuapp.com/api/v1/";

const http = axios.create({
  baseURL: `${baseURL}`,
});

function headerAuth() {
  const accessToken = localStorage.getItem("userToken");
  // console.log("UserToken", accessToken);
  let authHeader = { "Content-Type": "application/json" };
  if (accessToken) {
    authHeader = {
      "Content-Type": "application/json",
      Authorization: `${accessToken}`,
    };
    // console.log("authHeader", authHeader);
  }
  return authHeader;
}

function get(url, header = {}, params = {}) {
  return http.get(url, {
    params,
    headers: { ...headerAuth(), ...header },
  });
}

function post(url, data, header = {}, params = {}) {
  return http.post(url, data, {
    ...params,
    headers: { ...headerAuth(), ...header },
  });
}

function put(url, data, header = {}) {
  return http.put(url, data, {
    headers: { ...headerAuth(), ...header },
  });
}

function remove(url, data, header = {}, params = {}) {
  return http.delete(
    url,
    {
      ...params,
      headers: { ...headerAuth(), ...header },
    },
    data
  );
}

export default {
  get,
  post,
  put,
  remove,
};
