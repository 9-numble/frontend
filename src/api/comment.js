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
