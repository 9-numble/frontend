import React from "react";
import { Nav } from "../components";
import { useParams } from "react-router-dom";
import ProfileBoard from "../components/Profile/ProfileBoard";
import ProfileHeader from "../components/Profile/ProfileHeader";

function ProfilePage() {
  const { userId } = useParams();
  return (
    <>
      <ProfileHeader />
      <div>{userId}</div>
      <ProfileBoard />
      <Nav />
    </>
  );
}

export default ProfilePage;
