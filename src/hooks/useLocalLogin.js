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
        .post("http://3.36.78.249/auth/sign-in", loginInputs, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.status === 400) {
            setErrorField({ email: true, password: true });
            setValidationMessage(validateErrorMessage.loginFailed);
            return res;
          } else {
            setIsAuthenticated(true);
          }
        });

      return { response };
    }
  };

  return { errorField, validationMessage, login, setLoginInputs };
};

export default useLocalLogin;
