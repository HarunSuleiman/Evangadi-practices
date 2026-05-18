import React from "react";
import "../../my-trial/src/CSS/style.css";
import "./CSS/bootstrap.css";
// import Footer from "../src/component/Footer/Footer.jsx";
// import Header from "../src/component/Header/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Music from "./music.jsx";
import MainBody from "./component/MainBody/index.jsx";
import Section1 from "../src/component/section1/section1.jsx";
// import Section2 from "./component/section2/Section2.jsx";
import Section3 from "./component/section3/Section3.jsx";
import Section6 from "./component/section6/Section6.jsx";
import Section4 from "./component/section4/Section4.jsx";
import Section5 from "./component/section5/Section5.jsx";
import Support from "./support.jsx"
import Four04 from"./Four04.jsx"
import SharedLayout from "./SharedLayout.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}

        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<MainBody />} />
            <Route path="/music" element={<Music />} />
            <Route path="Mac" element={<Section1 />} />
            <Route path="iphone" element={<Section3 />} />
            <Route path="ipad" element={<Section6 />} />
            <Route path="watch" element={<Section4 />} />
            <Route path="tv" element={<Section5 />} />
            <Route path="support" element={<Support />} />
            <Route path="*" element={<Four04 />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
