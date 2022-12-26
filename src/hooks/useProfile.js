import { useState, useEffect } from "react";
import { callGetMyProfileApi, callGetMyCommentsApi } from "../api";

const useProfile = () => {
  const [profileData, setProfileData] = useState({});
  const [myComments, setMyComments] = useState({});

  const getMyProfileApi = async () => {
    const response = await callGetMyProfileApi();
    if (response.status !== 500) {
      setProfileData(response.data);
    }
    console.log(profileData);
  };

  const getMyCommentsApi = async () => {
    const response = await callGetMyCommentsApi();
    if (response.status !== 500) {
      setMyComments(response.data);
    }
    console.log(myComments);
  };

  useEffect(() => {
    getMyProfileApi();
    getMyCommentsApi();
  }, []);

  return { profileData, myComments };
};

export default useProfile;
