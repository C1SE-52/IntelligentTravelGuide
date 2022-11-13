import React, { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import { FaFacebook, FaInstagram, FaMailBulk, FaYoutube } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { MdPlace } from "react-icons/md";
import { RiLuggageCartFill } from "react-icons/ri";
import Logo from "../../../../assets/logo.png";
import { BsSearch } from "react-icons/bs";
import { TfiAlignRight } from "react-icons/tfi";
import Sidebar from "../../../Sidebar/Sidebar";

//
import "./Header.scss";
import { Store } from "../../../../hook/Store";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isOpenSidebar, setIsopenSidebar] = useState(false);
  const [nav, setNav] = useState(false);

  const sticky = () => {
    const navbar = document.querySelector(".header");
    const navHeight = navbar.getBoundingClientRect().height;
    window.scrollY > navHeight ? setNav(true) : setNav(false);
  };
  window.addEventListener("scroll", sticky);

  const ToggleSidebar = () => {
    isOpenSidebar === true ? setIsopenSidebar(false) : setIsopenSidebar(true);
  };

  const { state } = useContext(Store);
  const { cart } = state;
  const handleAddToCart = () => {
    navigate("/cart");
  };
  return (
    <header className={!nav ? "header" : "header sticky"}>
      <div className="header__top">
        <Container>
          <div className="header__top-left">
            <ul>
              <li>
                <FaMailBulk />
                <span>travelcaps@gmail.com</span>
              </li>
              <li>
                <BiPhoneCall />
                <span>012345678</span>
              </li>
              <li>
                <MdPlace />
                <span>travelcaps@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="header__top-right">
            <ul>
              <li>
                <FaYoutube />
              </li>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaInstagram />
              </li>
            </ul>
            <div className="header__auth">
              <div className="header__auth-signup">
                <button className="button button__primary">Đăng kí</button>
              </div>
              <div className="header__auth-signin">
                <button className="button button__primary">Đăng nhập</button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="header__bot">
        <Container>
          <div className="header__nav">
            <a href="/" className="header__logo">
              <img src={Logo} alt={Logo} />
            </a>
            <ul className="header__menu">
              <li className="header__menu-item">
                <Link to="#" className="header__menu-link">
                  Trang chủ
                </Link>
              </li>
              <li className="header__menu-item">
                <Link to="# " className="header__menu-link">
                  Giới thiệu
                </Link>
              </li>
              <li className="header__menu-item">
                <Link to="#" className="header__menu-link">
                  Các địa điểm hấp dẫn
                </Link>
              </li>
              <li className="header__menu-item">
                <Link to="# " className="header__menu-link">
                  Tours
                </Link>
              </li>
              <li className="header__menu-item">
                <Link to="# " className="header__menu-link">
                  Liên hệ
                </Link>
              </li>
            </ul>
            <div className="header__bot-right">
              <div className="header__cart" onClick={handleAddToCart}>
                <RiLuggageCartFill />
                {cart.cartItems.length > 0 ? (
                  <div className="place__quantity">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </div>
                ) : null}
              </div>
              <div className="header__search">
                <input type="text" />
                <button>
                  <BsSearch />
                </button>
              </div>
              <div className="header__sidebar" onClick={ToggleSidebar}>
                <TfiAlignRight />
                <Sidebar
                  isOpenSidebar={isOpenSidebar}
                  ToggleSidebar={ToggleSidebar}
                />
                <div
                  className={`sidebar-overlay ${
                    isOpenSidebar === true ? "active" : ""
                  }`}
                  onClick={ToggleSidebar}
                ></div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
