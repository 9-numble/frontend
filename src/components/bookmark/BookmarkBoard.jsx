import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import BookmarkCard from "./BookmarkCard";
import axios from "axios";
import { BASE_URL } from "../../constants";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 604px;
  padding-top: 4px;
`;

function BookmarkBoard() {
  const [myBookmarks, setMyBookmarksData] = useState([]);
  const fetchMyBookmarksData = () => {
    const response = axios
      .get(`${BASE_URL}/board/bookmark`, {
        withCredentials: true,
        headers: {
          "X-Auth-Token": localStorage.loginToken,
        },
      })
      .then((res) => {
        setMyBookmarksData(res.data);
      });
    return response;
  };

  useEffect(() => {
    fetchMyBookmarksData();
  }, []);
  return (
    <Wrapper>
      {myBookmarks.map((it, index) => (
        <BookmarkCard key={index} {...it} />
      ))}
    </Wrapper>
  );
}

export default BookmarkBoard;

BookmarkBoard.propTypes = {
  cards: PropTypes.array,
};
