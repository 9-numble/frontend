import React from "react";
import styled from "styled-components";
import CardList from "./CardList";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  box-sizing: border-box;
  background: rgba(241, 241, 245, 1);
  width: 100%;

  margin-top: 158px;
  overflow: scroll;
  -ms-overflow-style: none;

  &&::-webkit-scrollbar {
    display: none;
  }
`;

function Board({ type, cardData }) {
  return (
    <Wrapper>
      <CardList cardData={cardData} type={type} />
    </Wrapper>
  );
}

export default Board;

Board.propTypes = {
  type: PropTypes.string,
  cardData: PropTypes.array,
};
