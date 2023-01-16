import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
import styled from "styled-components";
import { callComments } from "../api/comments";
const Wrapper = styled.div`
  background-color: white;
`;
function CommentBox() {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const fetchCommentsData = async () => {
    const response = await callComments(postId);
    return response;
  };
  //dependency에 comments 넣으면 무한루프될 것 같아서 일단 안 넣음
  useEffect(() => {
    fetchCommentsData().then((res) => {
      setComments(res);
    });
  }, []);

  return;
}
export default CommentBox;
