import ImageLogo from "../..//apple by Strap/images/icons/logo.png";
import SearchLogo from "../../apple by Strap/images/icons/search-icon.png";
import CartLogo from "../../apple by Strap/images/icons/cart.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="outer-wrapper">
        <header className="myheader">
          <div className="internal-wrapper ">
            <div className="as-wrapper">
              <ul>
                <li className="logo-a">
                  <Link to="/"></Link>
                  <img src={ImageLogo} alt="" />
                </li>
                <li>
                  <Link to="/Mac">Mac</Link>
                </li>
                <li>
                  <Link to="/iphone">iphone</Link>
                </li>
                <li>
                  <Link to="/ipad">ipad</Link>
                </li>
                <li>
                  <Link to="/watch">watch</Link>
                </li>
                <li>
                  <Link to="/tv">tv</Link>
                </li>
                <li>
                  <Link to="/music">music</Link>
                </li>
                <li>
                  <Link to="/support">support</Link>
                </li>
                <li className="search-a">
                  <Link to="/">
                    <img src={SearchLogo} alt="search-a" />
                  </Link>
                </li>
                <li className="cart-a ">
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
