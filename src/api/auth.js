import axios from "axios";
import { BASE_URL } from "../constants";
export const callHomeApi = async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/`, payload, {
      withCredentials: true,
      headers: {
        x_auth_token: localStorage.loginToken,
      },
    });
    if (response.status !== 200) throw new Error("Request failed");
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const callSocialLoginApi = (type) => {
  const response = axios
    .get(`${BASE_URL}/oauth2/authorization/${type}`)
    .then((res) => {
      if (res.status !== 302) {
        console.log("Request failed");
      }
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
};

export const callGetUserApi = async () => {
  try {
    const response = await axios
      .get(`${BASE_URL}/users/static-info`, {
        withCredentials: true,
        headers: {
          "X-Auth-Token": localStorage.loginToken,
        },
      })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Request failed");
        }
        console.log(res.data);
        return res.data;
      });
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
