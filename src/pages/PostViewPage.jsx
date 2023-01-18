import React, { useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { PageHeader } from "../components";
import { ViewCard, CommentBox } from "../components";
import Menu from "../css/icon/Menu.svg";
import styled from "styled-components";
import { callPostUrl } from "../api/post";

const Wrapper = styled.div`
  background-color: #f0f0f6;
  width: 100%;
  height: 100%;
`;
function PostViewPage() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const fetchPostData = async () => {
    const postRawData = await callPostUrl(postId);
    return postRawData.data;
  };

  useLayoutEffect(() => {
    fetchPostData().then((res) => {
      setPost(res);
    });
  }, []);

  if (JSON.stringify(post) === "{}") {
    return <div>Loading...</div>;
  } else {
    return (
      <Wrapper>
        <PageHeader
          pageTitle="게시글"
          rightButton={<img src={Menu} alt="img" />}
        />
        <ViewCard key={postId} type={"full"} post={post} postId={postId} />
        <CommentBox />
      </Wrapper>
    );
  }
}

export default PostViewPage;
