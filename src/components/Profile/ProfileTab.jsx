import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import styled from "@emotion/styled";
import Card from "../home/card/Card";
import ProfileCommentCard from "./ProfileCommentCard";
import axios from "axios";
import { BASE_URL } from "../../constants";

const BigBox = styled(Box)`
  padding: 0px;
`;
const StyledBox = styled(Box)`
  padding: 0px 12px;
  &&.MuiTabs-indicator {
    background-color: #fa3c89;
  }
`;
const StyledTab = styled(Tab)`
  padding: 0px;
  &&.MuiButtonBase-root {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    padding: 8px;
    width: 50%;
  }
  &&.Mui-selected {
    color: #fa3c89;
  }
`;

const Board = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: white;
`;
const StyledTabPanel = styled(TabPanel)`
  padding: 0px;
`;
export default function ProfileTab() {
  const [value, setValue] = React.useState("1");
  const [myPosts, setMyPostsData] = useState([]);
  const [myComments, setMyCommentsData] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const fetchMyPostsData = () => {
    const response = axios
      .get(`${BASE_URL}/board/user`, {
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
      .get(`${BASE_URL}/comments/my-comments`, {
        withCredentials: true,
        headers: {
          "X-Auth-Token": localStorage.loginToken,
        },
      })
      .then((res) => {
        console.log("fetchMyCommentsData");
        setMyCommentsData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    return response;
  };
  useEffect(() => {
    fetchMyCommentsData();
    fetchMyPostsData();
  }, []);

  return (
    <BigBox sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <StyledBox sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            TabIndicatorProps={{
              style: { background: "#FA3C89" },
            }}
          >
            <StyledTab label="게시글" value="1" />
            <StyledTab label="작성댓글" value="2" />
          </TabList>
        </StyledBox>
        <StyledTabPanel value="1">
          <Board>
            {myPosts.map((it) => (
              <Card key={it.id} {...it} />
            ))}
          </Board>
        </StyledTabPanel>
        <StyledTabPanel value="2">
          <Board>
            {myComments
              ? myComments.map((it) => (
                  <ProfileCommentCard key={it.commentId} {...it} />
                ))
              : null}
          </Board>
        </StyledTabPanel>
      </TabContext>
    </BigBox>
  );
}
