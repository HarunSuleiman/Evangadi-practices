import Section6img1 from "../apple by Strap/images/icons/new-ipad-logo.png";

function Section6() {
  return (
    <>
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

export default Section6;
