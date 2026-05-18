import React from "react";
import Header from "./component/Header/Header.jsx";
import Footer from "./component/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import YouTubeVideoes from "./AppleYouTubeApi/AppleYoutube.jsx";

function SharedLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <YouTubeVideoes />
      <Footer />
    </>
  );
}

export default SharedLayout;
