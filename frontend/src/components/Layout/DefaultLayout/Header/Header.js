import React, { useState, useContext, useEffect, useReducer } from "react";
import Container from "react-bootstrap/Container";
import { FaFacebook, FaInstagram, FaMailBulk, FaYoutube } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { MdPlace } from "react-icons/md";
import { RiLuggageCartFill } from "react-icons/ri";
import Logo from "../../../../assets/logo.png";
import { BsSearch } from "react-icons/bs";
import { TfiAlignRight } from "react-icons/tfi";
import Sidebar from "../../../Sidebar/Sidebar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

//
import "./Header.scss";
import { Store } from "../../../../hook/Store";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { reducer } from "../../../../hook/reducer";

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

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    window.location.href = "/signin";
  };
  const handleAddToCart = () => {
    navigate("/cart");
  };

  const [categories, setCategories] = useState([]);
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

            {userInfo ? (
              <NavDropdown
                title={userInfo.name}
                id="basic-nav-dropdown"
                className="userInfo"
              >
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Thay đổi mật khẩu</NavDropdown.Item>
                </LinkContainer>
                {/* <LinkContainer to="/orderhistory">
                  <NavDropdown.Item>Order History</NavDropdown.Item>
                </LinkContainer> */}
                <NavDropdown.Divider />
                <Link
                  className="dropdown-item"
                  to="#signout"
                  onClick={signoutHandler}
                  style={{ color: "red" }}
                >
                  Đăng xuất
                </Link>
              </NavDropdown>
            ) : (
              <div className="header__auth">
                <div
                  className="header__auth-signup"
                  onClick={() => navigate("/signup")}
                >
                  <button className="button button__primary">Đăng kí</button>
                </div>
                <div
                  className="header__auth-signin"
                  onClick={() => navigate("/signin")}
                >
                  <button className="button button__primary">Đăng nhập</button>
                </div>
              </div>
            )}
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
                <Link to="#" className="header__menu-link">
                  Giới thiệu
                </Link>
              </li>
              <NavDropdown
                title="Các địa điểm hấp dẫn"
                id="basic-nav-dropdown"
                className="header__menu-link"
              >
                <LinkContainer to="/">
                  <NavDropdown.Item>Thay đổi mật khẩu</NavDropdown.Item>
                </LinkContainer>
                {categories.map((category, index) => (
                  <LinkContainer
                    to={`/search?category=${category}`}
                    key={index}
                  >
                    <NavDropdown.Item>{category}</NavDropdown.Item>
                  </LinkContainer>
                ))}
                <Link
                  className="dropdown-item"
                  to="#signout"
                  style={{ color: "red" }}
                >
                  Đăng xuất
                </Link>
              </NavDropdown>
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
