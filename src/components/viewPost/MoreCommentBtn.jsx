import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const Button = styled.button`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  color: #767676;
  margin-left: 56px;
`;

function MoreCommentBtn({ handleSubcomment, commentId, author }) {
  const sendCommentInfo = () => {
    handleSubcomment(commentId, author);
  };
  return <Button onClick={sendCommentInfo}>답글달기</Button>;
}

export default MoreCommentBtn;
MoreCommentBtn.propTypes = {
  handleSubcomment: PropTypes.func,
  commentId: PropTypes.number,
  author: PropTypes.string,
};
