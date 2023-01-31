import React from "react";
import styled from "styled-components";
import { UserInfoHeader, Tags } from "../../../components";
import Content from "./Content";
import CardFooter from "./CardFooter";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  box-sizing: border-box;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-bottom: 8px;
  padding-top: 20px;
`;

function ViewCard({ post, type }) {
  const {
    nickname,
    boardAddress,
    createdDate,
    boardId,
    likeCheck,
    bookmarkCheck,
    likeCount,
    bookmarkCount,
    categoryType,
    boardAnimalTypes,
    content,
    imageIds,
  } = post;
  console.log(categoryType);
  console.log(boardAnimalTypes);
  return (
    <Wrapper>
      <UserInfoHeader
        author={nickname}
        village={boardAddress}
        time={createdDate}
      />
      <Tags categoryTag={categoryType} animalTag={boardAnimalTypes} />
      <Content
        type={type}
        content={content}
        boardId={boardId}
        imageIds={imageIds}
      />
      <CardFooter
        boardId={boardId}
        likeCheck={likeCheck}
        bookmarkCheck={bookmarkCheck}
        likeCount={likeCount}
        bookmarkCount={bookmarkCount}
      />
    </Wrapper>
  );
}
ViewCard.propTypes = {
  post: PropTypes.object,
  postId: PropTypes.string,
  setPost: PropTypes.func,
  setComments: PropTypes.func,
  type: PropTypes.string,
  boardId: PropTypes.number,
  content: PropTypes.string,
  nickname: PropTypes.string,
  boardAnimalTypes: PropTypes.array,
  categoryType: PropTypes.string,
  likeCount: PropTypes.number,
  likeCheck: PropTypes.bool,
  bookmarkCount: PropTypes.number,
  bookmarkCheck: PropTypes.bool,
  boardAddress: PropTypes.string,
  createdDate: PropTypes.string,
  imageIds: PropTypes.array,
};

export default ViewCard;
