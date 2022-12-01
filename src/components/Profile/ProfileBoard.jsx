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
  const fetchProfileData = () => {
    const response = axios
      .get("http://3.34.109.49/users/my-info", {
        withCredentials: true,
        headers: {
          "X-Auth-Token": localStorage.loginToken,
        },
      })
      .then((res, req) => {
        console.log(res);
        console.log(req);
        setProfileData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return response;
  };
  const fetchMyPostsData = () => {
    const response = axios
      .get("http://3.34.109.49/board/user", {
        withCredentials: true,
        headers: {
          "X-Auth-Token": localStorage.loginToken,
        },
      })
      .then((res) => {
        setMyPostsData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return response;
  };
  const fetchMyCommentsData = () => {
    const response = axios
      .get("http://3.34.109.49/comments/my-comments", {
        withCredentials: true,
        headers: {
          "X-Auth-Token": localStorage.loginToken,
        },
      })
      .then((res) => {
        setMyCommentsData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return response;
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
