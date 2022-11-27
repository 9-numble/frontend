import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { HeaderTitle } from "../../../styled";
import { GoBackButton, ExitButton } from "../button";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: white;
  border-bottom: 1px solid #e5e5ec;
  padding: 0px 20px;
`;

const LeftButton = styled.span`
  position: absolute;
`;

const RightButton = styled.span`
  position: absolute;
  right: 0;
  padding-right: 20px;
`;

function PageHeader({ leftButtonType, pageTitle, rightButton }) {
  const leftButton =
    leftButtonType === "exit" ? <ExitButton /> : <GoBackButton />;

  return (
    <Wrapper>
      <LeftButton>{leftButton}</LeftButton>
      <HeaderTitle>{pageTitle}</HeaderTitle>
      <RightButton>{rightButton}</RightButton>
    </Wrapper>
  );
}

PageHeader.propTypes = {
  leftButtonType: PropTypes.string,
  pageTitle: PropTypes.string,
  rightButton: PropTypes.node,
};

export default PageHeader;
