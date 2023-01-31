import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { UserProfile } from "../../components";
import ProfileTab from "./ProfileTab";
import axios from "axios";
import { BASE_URL } from "../../constants";

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
  const fetchProfileData = () => {
    const response = axios
      .get(`${BASE_URL}/users/my-info`, {
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

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <Wrapper>
      <UserProfile
        nickname={profileData.nickname}
        regionDepth2={profileData.regionDepth2}
        animals={profileData.animals}
      ></UserProfile>
      <PostWrapper>
        <ProfileTab />
      </PostWrapper>
    </Wrapper>
  );
}

export default ProfileBoard;
