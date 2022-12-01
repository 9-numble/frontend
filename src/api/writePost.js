import axios from "axios";
import { BASE_URL } from "../constants";
export const callRegisterImageApi = (payload) => {
  const response = axios
    .post(`${BASE_URL}/image/upload`, payload, {
      withCredentials: true,
      headers: {
        "X-Auth-Token": localStorage.loginToken,
      },
    })
    .then((res) => {
      if (res.status !== 200) throw new Error("Request failed");
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export const callRegisterPostApi = (payload) => {
  const response = axios
    .post(`${BASE_URL}/board/add`, payload, {
      withCredentials: true,
      headers: {
        "X-Auth-Token": localStorage.loginToken,
      },
    })
    .then((res) => {
      if (res.status !== 200) throw new Error("Request failed");
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};
