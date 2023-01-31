import axios from "axios";
import { BASE_URL } from "../constants";

export const callComments = async (boardId) => {
  const response = await axios
    .get(`${BASE_URL}/comments/${boardId}`, {
      withCredentials: true,
      headers: {
        "X-Auth-Token": localStorage.loginToken,
      },
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};
export const callRegisterCommentApi = (payload) => {
  const response = axios
    .post(`${BASE_URL}/comments/add`, payload, {
      withCredentials: true,
      headers: {
        "X-Auth-Token": localStorage.loginToken,
        "Content-Type": `application/json`,
      },
    })
    .then((res) => {
      if (res.status === 201) {
        console.log("Comment Registered");
      }
      if (res.status !== 201) throw new Error("Request failed");
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
};
export const callRegisterSubcommentApi = (payload) => {
  const response = axios
    .post(`${BASE_URL}/comments/reply`, payload, {
      withCredentials: true,
      headers: {
        "X-Auth-Token": localStorage.loginToken,
        "Content-Type": `application/json`,
      },
    })
    .then((res) => {
      if (res.status === 201) {
        console.log("Comment Registered");
      }
      if (res.status !== 201) throw new Error("Request failed");
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
};
