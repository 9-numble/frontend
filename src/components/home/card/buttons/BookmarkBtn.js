import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import EmptyBookmarkIcon from "../../../../css/icon/EmptyBookmarkIcon.svg";
import FullBookmarkIcon from "../../../../css/icon/FullBookmarkIcon.svg";
import { callBookmarkUrl, callDeleteBookmarkUrl } from "../../../../api";
const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;
const Icon = styled.img`
  margin-right: 6px;
`;
function BookmarkBtn({ bookmarkCount, bookmarkCheck, boardId }) {
  const [bookmark, setBookmark] = useState(bookmarkCheck);
  const [bookmarkNumber, setBookmarkNumber] = useState(bookmarkCount);
  const handleBookmark = () => {
    setBookmark(!bookmark);
    if (bookmark === true) {
      setBookmarkNumber(bookmarkNumber - 1);
      callDeleteBookmarkUrl(boardId);
    } else {
      setBookmarkNumber(bookmarkNumber + 1);
      callBookmarkUrl(boardId);
    }
  };
  return (
    <Wrapper onClick={handleBookmark}>
      <Icon src={bookmark ? FullBookmarkIcon : EmptyBookmarkIcon} alt="img" />
      <span>{bookmarkNumber}</span>
    </Wrapper>
  );
}
BookmarkBtn.propTypes = {
  boardId: PropTypes.number,
  bookmarkCheck: PropTypes.bool,
  bookmarkCount: PropTypes.number,
};

export default BookmarkBtn;
