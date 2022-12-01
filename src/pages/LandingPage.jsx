import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Logo from "../css/icon/Logo.svg";
import styled from "styled-components";
import { BottomButton } from "../components/common";
import { startButtonProps } from "../constants";

const Icon = styled.img`
  position: absolute;
  width: 98px;
  height: 96px;
  left: 131px;
  top: 322px;
`;
const Icon_start = styled.img`
  position: absolute;
  width: 98px;
  height: 96px;
  left: 131px;
  top: 164px;
`;
const Name = styled.div`
  position: absolute;
  width: 49px;
  height: 39px;
  left: 156px;
  top: 280px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 140%;
  /* or 39px */

  text-align: center;

  color: #111111;
`;
const Explanation = styled.div`
  position: absolute;
  left: 93px;
  top: 319px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  text-align: center;

  color: #767676;
`;

function LandingPage() {
  const [start, setStart] = useState(true);
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate("./sign-in");
  };
  useEffect(() => {
    if (start) {
      const timeOut = setTimeout(() => {
        console.log("timeOut");
        setStart(false);
      }, 1000);
      return () => {
        clearTimeout(timeOut);
      };
    }
  }, []);
  if (start) {
    console.log("Logo");
    return <Icon src={Logo} />;
  }

  return (
    <>
      <Icon_start src={Logo} />
      <Name>펫모</Name>
      <Explanation>지역기반 반려동물 커뮤니티</Explanation>
      <BottomButton onClick={handleBtnClick} buttonProps={startButtonProps} />
    </>
  );
}

export default LandingPage;
