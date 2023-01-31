import React from "react";
import PropTypes from "prop-types";
import { Tags } from "../common";
import Comment from "./CommentContent";
import PostContent from "./PostContent";
import styled from "styled-components";
const Wrapper = styled.div`
  background-color: white;
  box-sizing: border-box;
  height: 115px;
  border-bottom: 1px solid #f0f0f6;
`;
const MarginLeft = styled.div`
  margin-left: 20px;
`;
const Time = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 140%;
  color: #999999;
  margin-bottom: 8px;
`;

function ProfileCommentCard({
  categoryType,
  commentAnimalTypes,
  content,
  createdDate,
  boardContent,
}) {
  const detailTime = (createdDate) => {
    const timeNumber = Date.parse(createdDate);
    const milliSeconds = new Date() - timeNumber;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  };
  return (
    <Wrapper>
      <Tags categoryTag={categoryType} animalTag={commentAnimalTypes} />
      <MarginLeft>
        <Comment commentContent={content} />
        <Time>{detailTime(createdDate)}</Time>
        <PostContent postContent={boardContent} />
      </MarginLeft>
    </Wrapper>
  );
}

export default ProfileCommentCard;

ProfileCommentCard.propTypes = {
  categoryType: PropTypes.string,
  commentAnimalTypes: PropTypes.array,
  content: PropTypes.string,
  createdDate: PropTypes.node,
  boardContent: PropTypes.string,
};
