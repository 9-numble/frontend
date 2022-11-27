import React from "react";
import PropTypes from "prop-types";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { BottomButton } from "../common";
import { isJoinCompleted, joinInputsSelector } from "../../store";
import axios from "axios";
import { joinButtonProps as defaultJoinButtonProps } from "../../constants";

function JoinButton({ isDisabled, failToJoin }) {
  const joinInputs = useRecoilValue(joinInputsSelector);
  const setIsCompleted = useSetRecoilState(isJoinCompleted);

  const payload = Object.entries(joinInputs).reduce(
    (payload, [fieldName, input]) =>
      fieldName !== "passwordCheck"
        ? { ...payload, [fieldName]: input }
        : payload,
    {}
  );

  const onClickJoinButton = async (e) => {
    e.preventDefault();
    const response = axios
      .post("http://3.36.78.249/auth/sign-up", payload)
      .then((res) => {
        if (res.status !== 201) throw new Error("Request failed");
        if (res.status === 201) {
          setIsCompleted(true);
        }
      })
      .catch((error) => {
        const message = error;
        failToJoin(message);
      });
    console.log(response);
  };

  return (
    <BottomButton
      buttonProps={defaultJoinButtonProps}
      onClick={onClickJoinButton}
      isDisabled={isDisabled}
    />
  );
}

JoinButton.propTypes = {
  isDisabled: PropTypes.bool,
  failToJoin: PropTypes.func,
};

export default JoinButton;
