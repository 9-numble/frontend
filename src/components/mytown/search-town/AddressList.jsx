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

function AddressList({ searchResults, setIsSearchMode }) {
  const address = searchResults;
  const setUser = useSetRecoilState(user);

  const onClick = async ({ target }) => {
    console.log(user);
    console.log(target.innerText);
    console.log(address);
    const data = await callRegisterMyTownApi({
      addreessName: address.addressName,
      regionDepth1: address.regionDepth1,
      regionDepth2: address.regoinDepth2,
    });
    console.log(data);
    setUser(data);
    setIsSearchMode(false);
    return;
  };

  return (
    <AddressItem onClick={onClick}>
      <div>
        {address.regionDepth1} {address.regionDepth2}
      </div>
    </AddressItem>
  );
}

AddressList.propTypes = {
  searchResults: PropTypes.object,
  setIsSearchMode: PropTypes.func,
};

export default AddressList;
