import Maclaptop from "../../apple by Strap/images/home/mac-laptop.jpg";

function section1() {
  return (
    <>
      <div className="">
        <h1 style={{ color: "green" }}>
          <center>MacBook Pro</center>
        </h1>
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
    </>
  );
}

export default section1;
