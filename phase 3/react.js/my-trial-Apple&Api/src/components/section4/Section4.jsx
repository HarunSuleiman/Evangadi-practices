import Section4leftimg from "../apple by Strap/images/icons/watch-series5-logo.png";
import Section4rightimg from "../apple by Strap/images/icons/apple-card-logo.png";
function Section4() {
  return (
    <>
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
    </>
  );
}

export default Section4;
