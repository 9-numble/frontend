import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0px;
  padding-bottom: 2px;
  padding-right: 20px;
  padding-left: 20px;
`;
const Photo = styled.span`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: black;
  margin-right: 8px;
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const UserName = styled.span`
  font-family: Pretendard;
  font-size: 12px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
`;
const UserInfo = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 140%;
  font-size: 11px;
  color: #767676;
`;

function UserInfoHeaderSmall({ author, village, time }) {
  const detailTime = (time) => {
    const timeNumber = Date.parse(time);
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
    <CardHeaderInfo>
      <Photo></Photo>
      <InfoBox>
        <UserName>{author}</UserName>
        <UserInfo>
          {village} · {detailTime(time)}
        </UserInfo>
      </InfoBox>
    </CardHeaderInfo>
  );
}

UserInfoHeaderSmall.propTypes = {
  author: PropTypes.node,
  village: PropTypes.node,
  time: PropTypes.node,
};
export default UserInfoHeaderSmall;
