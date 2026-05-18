import Maclaptop from "../../apple by Strap/images/home/mac-laptop.jpg";
import Section4leftimg from "../../apple by Strap/images/icons/watch-series5-logo.png";
import Section4rightimg from "../../apple by Strap/images/icons/apple-card-logo.png";
import Section5img1 from "../../apple by Strap/images/icons/apple-tv-logo.png";
import Section5img2 from "../../apple by Strap/images/icons/servant-logo.png";
import Section6img1 from "../../apple by Strap/images/icons/new-ipad-logo.png";

function MainBody() {
  return (
    <>
      <div className="">
        <section className="main-highlight-wrapper ">
          <div className="internal-wrapper text-center">
            <div className="model">16-inch model </div>
            <div className="pro">MacBook Pro</div>
            <div className="the-best">The best for the brightest.</div>
            <div className="links ">
              <ul>
                <li>
                  <a href="/">Learn more</a>
                </li>
                <li>
                  <a href="/">Buy</a>
                </li>
              </ul>
            </div>
            <div className="MacBook text-center">
              <img src={Maclaptop} alt="" />
            </div>
          </div>
        </section>
      </div>
      <div className="">
        <section className="main-highlight-wrapper-2 ">
          <div className="internal-wrapper text-center">
            <div className="title-wraper pt-5 text-center">iPhone 11 Pro </div>
            <div className="description-wraper pt-1 pt-2 pb-2 text-center">
              Pro cameras. Pro display. Pro performance.
            </div>
            <div className="price-wrapper pt-1 text-center">
              From $24.95/mo. or $599 with trade‑in.
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
        </section>
      </div>
      <div className="">
        <section className="third-highlight-wrapper">
          <div className="internal-wrapper text-center">
            <div className="title-wraper">iPhone 11 </div>
            <div className="description-wrapper">
              {" "}
              Just the right amount of everything.
            </div>
            <div className="price-wrapper">
              {" "}
              From $16.62/mo. or $399 with trade‑in.
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
        </section>
      </div>
      <section className="container-fluid  ">
        <div className="fourth-heghlight-wrapper row mt-md-1">
          <div className="left-side-wrapper text-center col-md-6 ">
            <div className="top-logo-wraper"></div>
            <div className="logo-wrapper">
              <img src={Section4leftimg} alt="" />
            </div>
            <div className="description-wraper">
              With the new Always-On Retina display. <br />
              You’ve never seen a watch like this.
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

          <div className="right-side-wrapper text-center col-md-6">
            <div className="top-logo-wrapper"></div>
            <div className="logo-wrapper ">
              <img src={Section4rightimg} alt="" />
            </div>
            <div className="description-wraper">
              With the new Always-On Retina display. <br />
              You’ve never seen a watch like this.
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
      </section>
      <div className="container-fluid">
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
      <div className="container">
        <div className="sixth-heghlight-wrapper row mb-md-1">
          <div className="left-side-wrapper text-center col-md-6">
            <div className="model">16-inch model</div>
            <div className="small-pro">MacBook Pro</div>
            <div className="description-wraper">
              {" "}
              The best for the brightest.{" "}
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
          <div className="right-side-wrapper text-center col-md-6">
            <div className="top-logo-wrapper"></div>
            <div className="logo-wrapper ">
              <img src={Section6img1} alt="" />
            </div>
            <div className="description-wraper">
              Like a computer. Unlike any computer.
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
export default MainBody;
