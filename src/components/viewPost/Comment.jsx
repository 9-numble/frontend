import React from "react";
import PropTypes from "prop-types";
import { UserInfoHeaderSmall } from "../../components";
import styled from "styled-components";
import MoreCommentBtn from "./MoreCommentBtn";
import SubComment from "./SubComment";
const MainComment = styled.div`
  height: 93px;
  padding-top: 20px;
`;
const CommentText = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  margin-left: 56px;
  margin-bottom: 2px;
  color: #000000;
`;

function Comment({
  commentId,
  author,
  address,
  content,
  createdDate,
  handleSubcomment,
  children,
}) {
  return (
    <>
      <MainComment>
        <UserInfoHeaderSmall
          author={author}
          village={address}
          time={createdDate}
        />
        <CommentText>{content}</CommentText>
        <MoreCommentBtn
          author={author}
          commentId={commentId}
          handleSubcomment={handleSubcomment}
        />
      </MainComment>
      <>
        {children ? (
          <>
            {children.map((it) => (
              <SubComment key={it.commentId} {...it} />
            ))}
          </>
        ) : null}
      </>
    </>
  );
}
Comment.propTypes = {
  boardId: PropTypes.number,
  handleSubcomment: PropTypes.func,
  commentId: PropTypes.number,
  author: PropTypes.node,
  address: PropTypes.node,
  content: PropTypes.node,
  createdDate: PropTypes.node,
  parentId: PropTypes.node,
  children: PropTypes.array,
};
export default Comment;
