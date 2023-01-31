import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { exitButtonProps } from "../../../constants";

const exitButtonStyle = () => {
  return {
    width: "24px",
    height: "24px",
  };
};

function ExitButton() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(-1);
  };
  return (
    <Button {...exitButtonProps} onClick={onClick} style={exitButtonStyle} />
  );
}

export default ExitButton;
