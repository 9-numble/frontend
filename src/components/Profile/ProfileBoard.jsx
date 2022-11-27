import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { UserProfile } from "../../components";
import ProfileTab from "./ProfileTab";
import axios from "axios";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 604px;
  background: #f0f0f6;
`;

const PostWrapper = styled.div`
  height: 437px;
  box-sizing: border-box;
  width: 100%;
  background: #ffffff;
  margin-top: 8px;
`;

function ProfileBoard() {
  const [profileData, setProfileData] = useState({});
  const [myPosts, setMyPostsData] = useState([]);
  const [myComments, setMyCommentsData] = useState([]);
  const fetchProfileData = async () => {
    try {
      const response = await axios.get("http://3.36.78.249/users/my-info");
      setProfileData(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchMyPostsData = async () => {
    try {
      const response = await axios.get("http://3.36.78.249/board/user");
      setMyPostsData(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchMyCommentsData = async () => {
    try {
      const response = await axios.get(
        "http://3.36.78.249/comments/my-comments"
      );
      setMyCommentsData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProfileData();
    fetchMyCommentsData();
    fetchMyPostsData();
  }, []);

  return (
    <Wrapper>
      <UserProfile
        nickname={profileData.nickname}
        regionDepth2={profileData.regionDepth2}
        animals={profileData.animals}
      ></UserProfile>
      <PostWrapper>
        <ProfileTab userPosts={myPosts} userComments={myComments} />
      </PostWrapper>
    </Wrapper>
  );
}

export default ProfileBoard;
