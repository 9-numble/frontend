import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ContentText, ContentImage } from "./contents";
import { callPostUrl } from "../../../api";

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
  const getPost = () => {
    callPostUrl(boardId);
  };
  if (content !== null && imageIds === null) {
    return (
      <Wrapper onClick={getPost}>
        <Link to={`/post/${boardId}`}>
          <ContentText content_text={content} type={type} />
        </Link>
      </Wrapper>
    );
  }
  if (imageIds !== null && content === null) {
    return (
      <Wrapper onClick={getPost}>
        <Link to={`/post/${boardId}`}>
          <ContentImage content_image={imageIds} type={type} />
        </Link>
      </Wrapper>
    );
  }
  if (content !== null && imageIds !== null) {
    return (
      <Wrapper onClick={getPost}>
        <Link to={`/post/${boardId}`}>
          <ContentText content_text={content} type={type} />
          <ContentImage content_image={imageIds} type={type} />
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
