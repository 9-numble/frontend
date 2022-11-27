import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { BottomButton } from "../common";
import { isJoinCompleted, joinInputsSelector } from "../../store";
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
    try {
      await axios.post("http://3.36.78.249/auth/sign-up", payload, {
        maxBodyLength: 100000,
        maxContentLength: 100000,
      });
      setIsCompleted(true);
    } catch (error) {
      const message = "failed";
      failToJoin(message);
    }
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
