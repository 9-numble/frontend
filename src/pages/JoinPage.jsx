import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import history from "history/browser";
import { CancelJoinPopup, PageHeader, JoinForm } from "../components";
import { PageWrapper } from "../styled";
import { isJoinCompleted } from "../store";
import styled from "styled-components";
const Completed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;

  text-align: center;

  color: #767676;
`;
function JoinPage() {
  const [isCompleted, setIsCompleted] = useRecoilState(isJoinCompleted);
  const [isGoBack, setIsGoBack] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let unlisten = history.listen(() => {
      if (history.action === "POP") {
        navigate("../join");
        setIsGoBack(true);
      }
    });

    return () => {
      unlisten();
    };
  }, [history]);

  useEffect(() => {
    if (isCompleted) {
      const timeOut = setTimeout(() => {
        setIsCompleted(false);
        navigate("../sign-in");
      }, 1000);

      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [isCompleted, navigate, setIsCompleted]);

  if (isCompleted) {
    return <Completed>회원가입이 완료되었습니다.</Completed>;
  }

  return (
    <PageWrapper>
      <PageHeader pageTitle="계정정보" />
      <JoinForm />
      {isGoBack && <CancelJoinPopup setIsGoBack={setIsGoBack} />}
    </PageWrapper>
  );
}

export default JoinPage;
