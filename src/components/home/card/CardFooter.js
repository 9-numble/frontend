import React from "react";
import styled from "styled-components";
import HeartBtn from "./buttons/HeartBtn.js";
import BookmarkBtn from "./buttons/BookmarkBtn.js";
import CommentBtn from "./buttons/CommentBtn.js";
import Watched from "./buttons/Watched.js";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  border-top: 1px solid rgba(241, 241, 245, 1);
  width: 100%;
  height: 40px;
  bottom: 0px;
  padding: 0px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Column_buttons = styled.div`
  display: flex;
`;
const Button = styled.button`
  background-color: white;
  font-family: Pretendard;
  font-weight: Regular;
  font-size: 14px;
  color: #767676;
  opacity: 1;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Collumn_watched = styled.div`
  color: #9a9a9a;
  font-family: Pretendard;
  font-weight: Regular;
  font-size: 14px;
  opacity: 1;
`;

function CardFooter({
  likeCount,
  bookmarkCount,
  commentNumberProps,
  likeCheck,
  bookmarkCheck,
  boardId,
}) {
  return (
    <Wrapper>
      <Column_buttons>
        <Button>
          <HeartBtn
            likeCheck={likeCheck}
            likeCount={likeCount}
            boardId={boardId}
          />
        </Button>
        <Button>
          <BookmarkBtn
            bookmarkCheck={bookmarkCheck}
            bookmarkCount={bookmarkCount}
            boardId={boardId}
          />
        </Button>
        <Button>
          <CommentBtn commentNumber={commentNumberProps} />
        </Button>
      </Column_buttons>

      <Collumn_watched>
        <Watched />
      </Collumn_watched>
    </Wrapper>
  );
}
CardFooter.propTypes = {
  likeCount: PropTypes.number,
  bookmarkCount: PropTypes.number,
  commentNumberProps: PropTypes.number,
  likeCheck: PropTypes.bool,
  bookmarkCheck: PropTypes.bool,
  boardId: PropTypes.number,
};

export default CardFooter;
