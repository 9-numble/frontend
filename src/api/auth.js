import axios from "axios";
import { BASE_URL } from "../constants";

export const callHomeApi = async (payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/`, payload);
    if (response.status !== 200) throw new Error("Request failed");
    return response.status;
  } catch (error) {
    console.log(error);
  }
};

export const callLoginApi = async (payload) => {
  try {
    const response = await axios.post(
      "http://3.36.78.249/auth/sign-in",
      payload
    );
    console.log(payload);
    console.log(response);
    if (response.status !== 200) throw new Error("Request failed");
    return response;
  } catch (error) {
    console.log(error);
    return error.response.status;
  }
};

export const callSocialLoginApi = async (type) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/oauth2/authorization/${type}`
    );
    if (response.status !== 302) throw new Error("Request faild");
    return response.status;
  } catch (error) {
    console.log(error);
    return error.response.status;
  }
};

export const callGetUserApi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users/static-info`);
    if (response.status !== 200) throw new Error("Request failed");
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
