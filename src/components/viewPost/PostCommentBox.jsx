import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SubmitBtn from "../../css/icon/SubmitBtn.svg";
import ColoredSubmitBtn from "../../css/icon/ColoredSubmitBtn.svg";
import { callRegisterCommentApi, callRegisterSubcommentApi } from "../../api";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0px;
  height: 64px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    color: #999999;
  }
`;
const InputBox = styled.form`
  width: 320px;
  height: 46px;
  left: 20px;
  top: 841px;
  background: #ffffff;
  border: 1px solid #e5e5ec;
  border-radius: 8px;
  display: flex;
  align-items: center;

  input {
    width: 260px;
    padding: 12px;
    caret-color: #fa3c89;
  }
  button {
    display: flex;
    justify-content: center;
  }
`;
const CommentInfo = styled.div`
  background: #f1f1f5;
  height: 36px;
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 64px;
`;
const CommentInfoText = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #767676;
  margin-left: 20px;
  span {
    color: #fa3c89;
  }
`;
function PostCommentBox({
  handleCommentInput,
  isSubcomment,
  handleSubcommentSubmit,
  commentInfo_Writer,
  commentInfo_Id,
}) {
  const { postId } = useParams();
  const [input, setInput] = useState();
  const [isValid, setIsValid] = useState(false);
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const registerComment = async () => {
    const response = await callRegisterCommentApi({
      boardId: postId,
      content: input,
    });
    return response;
  };

  const registerSubcomment = async () => {
    const response = await callRegisterSubcommentApi({
      boardId: postId,
      commentId: commentInfo_Id,
      content: input,
    });
    return response;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isSubcomment) {
      await registerComment();
    } else {
      await registerSubcomment();
      handleSubcommentSubmit();
    }

    handleCommentInput();
    setInput("");
  };

  return (
    <Wrapper>
      {isSubcomment ? (
        <CommentInfo>
          <CommentInfoText>
            <span>{commentInfo_Writer}</span>님에게 답글 남기는 중
          </CommentInfoText>
        </CommentInfo>
      ) : null}
      <InputBox onSubmit={handleSubmit}>
        <input
          value={input || ""}
          type="text"
          placeholder="댓글을 입력하세요."
          onChange={handleInput}
          onKeyUp={(e) => {
            e.target.value.length > 0 ? setIsValid(true) : setIsValid(false);
          }}
        />
        <button type="submit" disabled={isValid ? false : true}>
          <img src={isValid ? ColoredSubmitBtn : SubmitBtn} alt="img" />
        </button>
      </InputBox>
    </Wrapper>
  );
}
PostCommentBox.propTypes = {
  isSubcomment: PropTypes.bool,
  handleSubcommentSubmit: PropTypes.func,
  handleCommentInput: PropTypes.func,
  commentInfo_Id: PropTypes.number,
  commentInfo_Writer: PropTypes.string,
};

export default PostCommentBox;
