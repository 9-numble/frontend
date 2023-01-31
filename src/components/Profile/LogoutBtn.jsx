import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { callLogoutApi } from "../../api";
import { authenticated } from "../../store";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const navigate = useNavigate();
  const setIsAuthenticated = useSetRecoilState(authenticated);
  const handleLogout = () => {
    callLogoutApi().then(() => {
      setIsAuthenticated(false);
      navigate("/");
    });
  };
  const StyledLogoutBtn = styled.span`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #767676;
    margin-left: 75px;
    background: #f1f1f5;
    border-radius: 8px;
    width: 61px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return <StyledLogoutBtn onClick={handleLogout}>로그아웃</StyledLogoutBtn>;
}
export default LogoutBtn;
