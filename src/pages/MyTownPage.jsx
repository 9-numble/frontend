import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import {
  AddressSearchOpenButton,
  PageHeader,
  SearchTown,
  Description,
  Address,
} from "../components";
import { user } from "../store";
import { SubTitle1, Wrapper } from "../styled";

function MyTownPage() {
  const [isSearchMode, setIsSearchMode] = useState(false);
  const { town } = useRecoilValue(user);

  const onClickSetUpTownButton = () => {
    setIsSearchMode(true);
  };

  return (
    <Wrapper>
      {isSearchMode ? (
        <SearchTown />
      ) : (
        <>
          <PageHeader pageTitle="내 동네 설정하기" />
          <SubTitle1>동네 선택</SubTitle1>
          <Description />
          {town ? (
            <Address town={town} />
          ) : (
            <AddressSearchOpenButton onClick={onClickSetUpTownButton} />
          )}
        </>
      )}
    </Wrapper>
  );
}

export default MyTownPage;