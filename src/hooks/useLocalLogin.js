import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  authenticated,
  loginInputsSelector,
  loginValidationMessage,
} from "../store";
import axios from "axios";
import { validateLoginInput } from "../util";
import { validateErrorMessage } from "../constants";
import { BASE_URL } from "../constants";

const useLocalLogin = () => {
  const setIsAuthenticated = useSetRecoilState(authenticated);
  const [loginInputs, setLoginInputs] = useRecoilState(loginInputsSelector);
  const [errorField, setErrorField] = useState({
    email: false,
    password: false,
  });
  const [validationMessage, setValidationMessage] = useRecoilState(
    loginValidationMessage
  );
  const login = async () => {
    const { errorField, errorMessage } = validateLoginInput(loginInputs);
    setErrorField(errorField);
    setValidationMessage(errorMessage);
    if (!errorMessage) {
      const response = axios
        .post(`${BASE_URL}/auth/sign-in`, loginInputs, {
          withCredentials: true,
          headers: {
            "X-Auth-Token": localStorage.loginToken,
          },
        })
        .then((res) => {
          const token = res.headers["x-auth-token"];
          console.log(token);
          localStorage.setItem("loginToken", token);
          if (res.status === 400) {
            setErrorField({ email: true, password: true });
            setValidationMessage(validateErrorMessage.loginFailed);
          } else {
            setIsAuthenticated(true);
          }
        });
      console.log(response);
      return response;
    }
  };

  return { errorField, validationMessage, login, setLoginInputs };
};

export default useLocalLogin;
