import axios from "axios";
import { BASE_URL } from "../constants";

export const callRegisterImageApi = (payload) => {
  const response = axios
    .post(`${BASE_URL}/image/upload`, payload, {
      withCredentials: true,
      headers: {
        "X-Auth-Token": localStorage.loginToken,
        processData: false,
        contentType: false,
      },
    })
    .then((res) => {
      let imageIdArray = [];
      const createImages = res.data.createImages;
      for (let i = 0; i < createImages.length; i++) {
        imageIdArray.push(createImages[i].id);
      }
      if (res.status !== 201) throw new Error("Request failed");
      return imageIdArray;
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
        "Content-Type": `application/json`,
      },
    })
    .then((res) => {
      if (res.status === 201) {
        console.log("Going home");
      }
      if (res.status !== 201) throw new Error("Request failed");
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
};
