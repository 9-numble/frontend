import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ContentText, ContentImage } from "./contents";

const Wrapper = styled.div`
  margin: 8px 20px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  display: flex;
  justify-content: center;
  /* or 22px */

  color: #111111;
`;

function Content({ content, imageIds, boardId, type }) {
  if (content !== null && imageIds === null) {
    return (
      <Wrapper>
        <Link to={`/post/${boardId}`}>
          <ContentText content_text={content} type={type} />
        </Link>
      </Wrapper>
    );
  }
  if (imageIds !== null && content === null) {
    return (
      <Wrapper>
        <Link to={`/post/${boardId}`}>
          <ContentImage imageIds={imageIds} type={type} />
        </Link>
      </Wrapper>
    );
  }
  if (content !== null && imageIds !== null) {
    return (
      <Wrapper>
        <Link to={`/post/${boardId}`}>
          <ContentText content_text={content} type={type} />
          <ContentImage imageIdsArray={imageIds} type={type} />
        </Link>
      </Wrapper>
    );
  }
}

Content.propTypes = {
  boardId: PropTypes.number,
  type: PropTypes.node,
  content: PropTypes.string,
  imageIds: PropTypes.array,
};
export default Content;
