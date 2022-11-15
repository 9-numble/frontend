import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import PropTypes from "prop-types";
import { Button, buttonColors } from "../common";
import { isJoinCompleted, joinInputsSelector } from "../../store";
import { callJoinApi } from "../../api";
import { joinButtonProps as defaultJoinButtonProps } from "../../constants";

const joinButtonStyle =
  (isDisabled) =>
  ({ fontSizes, sizes, colors }) => {
    return {
      ...sizes.size1,
      ...buttonColors(isDisabled)({ colors }),
      position: "absolute",
      left: 0,
      bottom: 0,
      fontSize: fontSizes.body1,
      fontWeight: 500,
    };
  };

function JoinButton({ isDisabled, failToJoin }) {
  const joinInputs = useRecoilValue(joinInputsSelector);
  const setIsCompleted = useSetRecoilState(isJoinCompleted);

  const joinButtonProps = () => {
    if (!isDisabled) {
      return {
        ...defaultJoinButtonProps,
        isDisabled: false,
      };
    }

    return defaultJoinButtonProps;
  };

  const payload = Object.entries(joinInputs).reduce(
    (payload, [fieldName, input]) =>
      fieldName !== "passwordCheck"
        ? { ...payload, [fieldName]: input }
        : payload,
    {}
  );

  const onClickJoinButton = async (e) => {
    e.preventDefault();
    const response = await callJoinApi(payload);
    if (response.status === 201) {
      setIsCompleted(true);
    } else if (response.status === 400) {
      const message = response.data.message;
      failToJoin(message);
    }
  };

  return (
    <Button
      {...joinButtonProps()}
      onClick={onClickJoinButton}
      style={joinButtonStyle(isDisabled)}
    />
  );
}

JoinButton.propTypes = {
  isDisabled: PropTypes.bool,
  failToJoin: PropTypes.func,
};

export default JoinButton;
