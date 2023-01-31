import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  background-color: white;
  border-bottom: 1px solid #e5e5ec;
  padding: 0px 20px;
`;
const LeftText = styled.span`
  postion: absolute;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
`;

function ProfileHeader() {
  return (
    <Wrapper>
      <LeftText>내 정보</LeftText>
    </Wrapper>
  );
}

export default ProfileHeader;
