import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FeedIcon from "../../css/icon/FeedIcon.svg";
import coloredFeed from "../../css/icon/coloredFeed.svg";
import BookmarkIcon from "../../css/icon/BookmarkIcon.svg";
import coloredBookmark from "../../css/icon/coloredBookmark.svg";
import ProfileIcon from "../../css/icon/ProfileIcon.svg";
import coloredProfile from "../../css/icon/coloredProfile.svg";

const Wrapper = styled(Box)`
  &.MuiBox-root {
    height: 56px;
    width: 100%;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    background-color: white;
  }
`;

const NavButtonBox = styled(BottomNavigation)`
  &.MuiBottomNavigation-root {
    width: 100%;
    display: flex;
    align-items: center;
    box-shadow: 0px -4px 12px rgba(0, 0, 0, 0.06);
  }
`;

const NavButton = styled(BottomNavigationAction)`
  &.MuiButtonBase-root {
    padding: 0px;
    margin: 0px;
    min-width: 0px;
  }
  &&.Mui-selected {
    color: ${({ theme: { colors } }) => colors.main};
  }
`;

const Icon = styled.img`
  color: ${({ theme: { colors } }) => colors.main};
`;

function Nav() {
  const [value, setValue] = React.useState("피드");
  console.log(value);

  return (
    <Wrapper sx={{ width: 500 }}>
      <NavButtonBox
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <NavButton
          value="피드"
          label="피드"
          component={Link}
          to={"/"}
          icon={<Icon src={value === "피드" ? coloredFeed : FeedIcon} />}
        />
        <NavButton
          value="북마크"
          label="북마크"
          component={Link}
          to={"/bookmark"}
          icon={
            <Icon src={value === "북마크" ? coloredBookmark : BookmarkIcon} />
          }
        />
        <NavButton
          value="프로필"
          label="프로필"
          component={Link}
          to={"/profile"}
          icon={
            <Icon src={value === "프로필" ? coloredProfile : ProfileIcon} />
          }
        />
      </NavButtonBox>
    </Wrapper>
  );
}

export default Nav;
