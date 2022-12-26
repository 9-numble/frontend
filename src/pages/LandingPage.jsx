import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Logo from "../css/icon/Logo.svg";
import styled from "styled-components";
import { BottomButton } from "../components/common";
import { startButtonProps } from "../constants";

const Whole = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  position: relative;
  width: 98px;
  height: 96px;
  margin-top: 298px;
`;
const Icon_start = styled.img`
  position: relative;
  width: 98px;
  height: 96px;
  margin-top: 140px;
`;
const Name = styled.div`
  position: relative;
  width: 49px;
  height: 39px;
  margin-top: 20px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 140%;
  text-align: center;

  color: #111111;
`;
const Explanation = styled.div`
  position: relative;
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
    return (
      <Whole>
        <Icon src={Logo} />
      </Whole>
    );
  }

  return (
    <Whole>
      <Icon_start src={Logo} />
      <Name>펫모</Name>
      <Explanation>지역기반 반려동물 커뮤니티</Explanation>
      <BottomButton onClick={handleBtnClick} buttonProps={startButtonProps} />
    </Whole>
  );
}

export default LandingPage;
