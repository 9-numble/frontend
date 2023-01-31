import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import EmptyHeartIcon from "../../../../css/icon/EmptyHeart.svg";
import FullHeartIcon from "../../../../css/icon/FullHeart.svg";
import { callLikeUrl, callDeleteLikeUrl } from "../../../../api";

const Wrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;
const Icon = styled.img`
  margin-right: 6px;
`;

function HeartBtn({ likeCheck, likeCount, boardId }) {
  const [like, setLike] = useState(likeCheck);
  const [likeNumber, setLikeNumber] = useState(likeCount);
  const handleLike = () => {
    setLike(!like);
    if (like === true) {
      setLikeNumber(likeNumber - 1);
      callDeleteLikeUrl(boardId);
    } else {
      setLikeNumber(likeNumber + 1);
      callLikeUrl(boardId);
      console.log("callLikeUrl");
    }
  };
  return (
    <Wrapper onClick={handleLike}>
      <Icon src={like ? FullHeartIcon : EmptyHeartIcon} alt="img" />
      <span>{likeNumber}</span>
    </Wrapper>
  );
}
HeartBtn.propTypes = {
  likeCheck: PropTypes.bool,
  likeCount: PropTypes.number,
  boardId: PropTypes.number,
};

export default HeartBtn;
