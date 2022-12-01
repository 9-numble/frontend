import axios from "axios";
import { BASE_URL } from "../constants";

export const callSearchTownByQueryApi = (query) => {
  const encodedUrl = encodeURI(
    `${BASE_URL}/users/address/search/query?query=${query}`
  );
  const response = axios
    .get(encodedUrl, {
      withCredentials: true,
      headers: {
        "X-Auth-Token": localStorage.loginToken,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      if (error.name === "AbortError") {
        return "Request Aborted";
      }
      return error.response.status;
    });
  return response;
};

export const callSearchTownByIpApi = () => {
  const response = axios
    .post(`${BASE_URL}/users/address/search/ip`, null, {
      withCredentials: true,
      headers: {
        "X-Auth-Token": localStorage.loginToken,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};

export const callDeleteMyTownApi = async () => {
  try {
    const response = await axios.delete(`${BASE_URL}/delete-mytown`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const callRegisterMyTownApi = (payload) => {
  const response = axios
    .post(`${BASE_URL}/users/address`, payload, {
      withCredentials: true,
      headers: {
        "X-Auth-Token": localStorage.loginToken,
      },
    })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};
