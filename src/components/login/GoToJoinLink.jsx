import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";

const goToJoinButtonText = "아직 회원이 아니신가요? 회원가입하기";

export const goToJoinLinkStyle = ({
  size,
  colors,
  borderRadius,
  fontSizes,
  lineHeights,
  layout,
}) => {
  return {
    ...size.bigButtonSize,
    ...layout.flexCenter,
    fontSize: fontSizes.body1,
    fontWeight: 500,
    lineHeight: lineHeights[150],
    border: `1px solid ${colors.black}`,
    borderRadius: borderRadius.big,
  };
};

function GoToJoinLink() {
  const theme = useTheme();

  return (
    <Link to="../join" style={goToJoinLinkStyle(theme)}>
      {goToJoinButtonText}
    </Link>
  );
}

export default GoToJoinLink;
