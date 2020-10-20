import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  //we use the state value to update cart value
  const [state, dispatch] = useStateValue();
  const handleAuth = () => {
    //console.log(state?.user);
    //console.log(state?.user);
    if (state?.user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          alt="headerImg"
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          {" "}
          <Link
            to={!state?.user && "/login"}
            style={{ color: "white", textDecoration: "none" }}
          >
            <div onClick={handleAuth}>
              <div className="header__optionLineOne">
                Hello {state?.user?.email}
              </div>
              <span className="header__optionLineTwo">
                {/*if user is present show Sign Out otherwise Sign In */}
                {state?.user ? "Sign Out" : "Sign In"}
              </span>
              <span role="img" aria-label="signin Image">
                📥
              </span>
            </div>
          </Link>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Amazon</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>

      <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">
            {state.basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}
export default Header;
