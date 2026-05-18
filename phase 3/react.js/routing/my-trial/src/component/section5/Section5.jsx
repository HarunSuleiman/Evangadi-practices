import Section5img1 from "../../apple by Strap/images/icons/apple-tv-logo.png";
import Section5img2 from "../../apple by Strap/images/icons/servant-logo.png";

function Section5() {
  return (
    <>
      <div className="container-fluid">
        <h1 style={{ color: "green" }}>
          <center>Tv Logo and AirPods</center>
        </h1>
        <div className="fifth-heghlight-wrapper row mt-md-1 mb-md-1">
          <div className="left-side-wrapper text-center col-md-6 ">
            <div className="top-logo-wraper"></div>
            <div className="logo-wrapper">
              <img src={Section5img1} alt="" />
            </div>
            <div className="servant-logo">
              <img src={Section5img2} alt="" />
            </div>
            <div className="watch-more-wrapper">
              <a href="/">Watch the trailer </a>
            </div>
          </div>
          <div className="right-side-wrapper text-center col-md-6 ">
            <div className="top-logo-wrapper"></div>
            <div className="logo-wrapper ">AirPods Pro</div>
            <div className="description-wraper">
              {" "}
              Magic like you’ve never heard.{" "}
            </div>
            <div className="links">
              <ul>
                <li>
                  <a href="/"> Learn more</a>
                </li>
                <li>
                  <a href="/">Buy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section5;
