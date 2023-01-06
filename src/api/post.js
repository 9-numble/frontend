import axios from "axios";
import { BASE_URL } from "../constants";

export const callImageUrl = async (image) => {
  const response = await axios
    .get(`${BASE_URL}/image/${image}`, {
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

export const callMainImageUrl = async (image) => {
  const response = await axios
    .get(`${BASE_URL}/image/${image}`, {
      withCredentials: true,
      headers: {
        "X-Auth-Token": localStorage.loginToken,
      },
    })
    .catch((error) => {
      console.log(error);
    });
  return response.imagePath;
};

export const callLikeUrl = async (boardId) => {
  const response = await axios
    .post(`${BASE_URL}/like/${boardId}`, null, {
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

export const callDeleteLikeUrl = async (boardId) => {
  const response = await axios
    .delete(`${BASE_URL}/like/${boardId}`, null, {
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

export const callBookmarkUrl = async (boardId) => {
  const response = await axios
    .post(`${BASE_URL}/bookmark/${boardId}`, null, {
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

export const callDeleteBookmarkUrl = async (boardId) => {
  const response = await axios
    .delete(`${BASE_URL}/bookmark/${boardId}`, null, {
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

export const callPostUrl = async (boardId) => {
  const response = await axios
    .get(`${BASE_URL}/board/${boardId}`, {
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
