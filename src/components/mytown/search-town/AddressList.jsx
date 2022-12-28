import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { useSetRecoilState } from "recoil";
import { user } from "../../../store";
import { callRegisterMyTownApi } from "../../../api";

const AddressItem = styled.div`
  ${({ theme: { fontSizes, colors } }) =>
    css`
      ${{
        display: "flex",
        alignItems: "center",
        height: "46px",
        fontSize: fontSizes.body2,
        borderBottom: `1px solid ${colors.lineMedium}`,
      }}
    `}
`;

function AddressList({ searchResults, setIsSearchMode, isSearchMode }) {
  const address = searchResults;
  const setUser = useSetRecoilState(user);

  const onClickRegisterTown = async ({ target }) => {
    const response = await callRegisterMyTownApi({
      addressName: target.innerText,
      regionDepth1: address.regionDepth1,
      regionDepth2: address.regionDepth2,
    });
    setIsSearchMode(false);
    return response;
  };
  if (isSearchMode === false) {
    setUser(onClickRegisterTown);
  }

  return (
    <AddressItem onClick={onClickRegisterTown}>
      <div>
        {address.regionDepth1} {address.regionDepth2}
      </div>
    </AddressItem>
  );
}

AddressList.propTypes = {
  searchResults: PropTypes.object,
  setIsSearchMode: PropTypes.func,
  isSearchMode: PropTypes.bool,
};

export default AddressList;
