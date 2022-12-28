import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userSelector, authenticated } from "../store";
import { callGetUserApi } from "../api";

const useUser = () => {
  const isAuthenticated = useRecoilValue(authenticated);
  const setUser = useSetRecoilState(userSelector);

  useEffect(() => {
    async function getUserApi() {
      const response = await callGetUserApi();
      console.log(response);
      setUser(response);
    }
    getUserApi();
  }, [isAuthenticated]);

  return isAuthenticated;
};

export default useUser;
