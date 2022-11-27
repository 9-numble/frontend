import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import BookmarkCard from "./BookmarkCard";
import axios from "axios";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 604px;
  padding-top: 4px;
`;

function BookmarkBoard() {
  const [myBookmarks, setMyBookmarksData] = useState([]);
  const fetchMyBookmarksData = async () => {
    const response = await axios.get("http://3.36.78.249/board/bookmark");
    setMyBookmarksData(response.data);
  };

  useEffect(() => {
    fetchMyBookmarksData();
  });
  return (
    <Wrapper>
      {myBookmarks.map((it) => (
        <BookmarkCard key={it.id} {...it} />
      ))}
    </Wrapper>
  );
}

export default BookmarkBoard;

BookmarkBoard.propTypes = {
  cards: PropTypes.array,
};
