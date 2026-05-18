import "./CSS/style.css";
import "./CSS/bootstrap.css";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Section1 from "./components/section1/section1.jsx";
import Section2 from "./components/section2/section2.jsx";
import Section3 from "./components/section3/section3.jsx";
import Section4 from "./components/section4/section4.jsx";
import Section5 from "./components/section5/section5.jsx";
import Section6 from "./components/section6/section6.jsx";
import YouTubeVideoes from "./components/AppleYouTubeApi/AppleYoutube.jsx";

function App() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <YouTubeVideoes />
      <Footer />
    </>
  );
}

export default App;
