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
import { SubTitle1, PageWrapper } from "../styled";

function MyTownPage() {
  const [isSearchMode, setIsSearchMode] = useState(false);
  const { address } = useRecoilValue(user);
  const town = address.regionDepth2;

  const onClickRegisterTownButton = () => {
    setIsSearchMode(true);
  };

  return (
    <PageWrapper>
      {isSearchMode ? (
        <SearchTown
          isSearchMode={isSearchMode}
          setIsSearchMode={setIsSearchMode}
        />
      ) : (
        <>
          <PageHeader pageTitle="내 동네 설정하기" />
          <SubTitle1>동네 선택</SubTitle1>
          <Description />
          {town ? (
            <Address town={town} />
          ) : (
            <AddressSearchOpenButton onClick={onClickRegisterTownButton} />
          )}
        </>
      )}
    </PageWrapper>
  );
}

export default MyTownPage;
