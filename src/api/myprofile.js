import axios from "axios";
import { BASE_URL } from "../constants";

export const callGetMyProfileApi = async (payload) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/my-info`, payload);
    if (response.status !== 200) throw new Error("Request failed");
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};

export const callGetMyCommentsApi = async (payload) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/comments/my-comments`,
      payload
    );
    if (response.status !== 200) throw new Error("Request failed");
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
