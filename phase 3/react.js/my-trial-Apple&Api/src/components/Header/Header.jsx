
import ImageLogo from "../../components/apple by Strap/images/icons/logo.png";
import SearchLogo from "../../components/apple by Strap/images/icons/search-icon.png";
import CartLogo from "../../components/apple by Strap/images/icons/cart.png";

function Header() {
  return (
    <>
      <div className="outer-wrapper">
        <header className="myheader">
          <div className="internal-wrapper ">
            <div className="links-wrapper">
              <ul>
                <li className="logo-link">
                  <a href="/"></a>
                  <img src={ImageLogo} alt="" />
                </li>
                <li>
                  <a href="/">Mac</a>
                </li>
                <li>
                  <a href="/">iphone</a>
                </li>
                <li>
                  <a href="/">ipad</a>
                </li>
                <li>
                  <a href="/">watch</a>
                </li>
                <li>
                  <a href="/">tv</a>
                </li>
                <li>
                  <a href="/">music</a>
                </li>
                <li>
                  <a href="/">support</a>
                </li>
                <li className="search-link">
                  <a href="/">
                    <img src={SearchLogo} alt="search-link" />
                  </a>
                </li>
                <li className="cart-link ">
                  <img src={CartLogo} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
