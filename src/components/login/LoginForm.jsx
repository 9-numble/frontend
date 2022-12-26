import React from "react";
import LoginButton from "./LoginButton";
import { FormErrorMessage, FormTextField } from "../common";
import { FormField } from "../../styled";
import { useLocalLogin } from "../../hooks";
import {
  emailFieldProps,
  localLoginButtonProps,
  passwordFieldProps,
} from "../../constants";

const authType = "login";

function LoginForm() {
  const { errorField, validationMessage, login, setLoginInputs } =
    useLocalLogin();

  const onBlurTextField = ({ target }) => {
    const { value, name } = target;
    const textFieldInput = { [name]: value };
    setLoginInputs(textFieldInput);
  };

  return (
    <>
      <form>
        <FormField>
          <FormTextField
            {...emailFieldProps(authType)}
            onBlur={onBlurTextField}
            isValid={!errorField.email}
            autocomplete="on"
          />
          <FormTextField
            {...passwordFieldProps(authType)}
            onBlur={onBlurTextField}
            isValid={!errorField.password}
            autocomplete="on"
          />
        </FormField>
        <FormErrorMessage
          message={validationMessage}
          style={{ padding: "6px 0 16px" }}
        />
        <LoginButton loginFn={login} buttonProps={localLoginButtonProps} />
      </form>
    </>
  );
}

export default LoginForm;
