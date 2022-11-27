import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Reset } from "styled-reset";
import { CookiesProvider } from "react-cookie";

import { useUser } from "./hooks";
import {
  HomePage,
  LandingPage,
  LoginPage,
  JoinPage,
  MyTownPage,
  MyPetPage,
  WritePostPage,
  PostViewPage,
  BookmarkPage,
  ProfilePage,
  NotFoundPage,
} from "./pages";

function App() {
  const isAuthenticated = useUser();

  return (
    <CookiesProvider>
      <BrowserRouter>
        <Reset />
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <HomePage /> : <LandingPage />}
          />

          <Route path="sign-in" element={<LoginPage />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="mytown" element={<MyTownPage />} />
          <Route path="mypet" element={<MyPetPage />} />

          <Route path="post/:postId" element={<PostViewPage />} />

          <Route path="write" element={<WritePostPage />}>
            <Route path=":postId" element={<WritePostPage />} />
          </Route>

          <Route path="bookmark" element={<BookmarkPage />} />
          <Route path="profile/:userId" element={<ProfilePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
