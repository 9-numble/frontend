import React from "react";
import Card from "../card/Card";
import PropTypes from "prop-types";

function CardList({ cardData, type }) {
  return (
    <>
      {cardData.map((it) => (
        <Card key={it.boardId} type={type} {...it} />
      ))}
    </>
  );
}
CardList.propTypes = {
  cardData: PropTypes.array,
  type: PropTypes.string,
};
export default CardList;
