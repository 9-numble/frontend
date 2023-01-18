import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlankComment from "./ BlankComment";
import Comment from "./Comment";
import PostCommentBox from "./PostCommentBox";
import styled from "styled-components";
import { callComments } from "../../api/comment";
const Wrapper = styled.div`
  background-color: white;
`;
const CommentsWrapper = styled.div`
  margin-bottom: 70px;
`;
function CommentBox() {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  //새로운 Comment를 작성하였을 때 실시간으로 CommentBox에 반영되되, useEffect가 무한루프에 빠지게 하지 않기 위해
  //"myNewCommentsNum"이라는 임의의 state를 새로 설정하였습니다.
  const [myNewCommentsNum, setMyNewCommentsNum] = useState(0);
  const fetchCommentsData = async () => {
    const response = await callComments(postId);
    return response.data;
  };

  //PostCommentBox에서 submit를 할 때마다 해당 함수가 실행됨
  const handleCommentInput = () => {
    setMyNewCommentsNum(myNewCommentsNum + 1);
    console.log(myNewCommentsNum);
  };

  useEffect(() => {
    fetchCommentsData().then((res) => {
      setComments(res);
    });
  }, [myNewCommentsNum]);

  if (JSON.stringify(comments) === "[]") {
    console.log("blank");
    return <BlankComment />;
  } else {
    console.log(comments);
    return (
      <Wrapper>
        <CommentsWrapper>
          {comments.map((it) => (
            <Comment key={it.commentId} {...it} />
          ))}
        </CommentsWrapper>
        <PostCommentBox handleCommentInput={handleCommentInput} />
      </Wrapper>
    );
  }
}
export default CommentBox;
