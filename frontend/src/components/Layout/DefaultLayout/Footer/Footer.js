import React from "react";
import ScrollToTop from "react-scroll-to-top";

//
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p
        className="p-2 m-0 w-full text-center"
        style={{ color: "#fff", background: "#065471" }}
      >
        © 2022 C1SE.52 TEAM, All Rights Reserved
      </p>
      <ScrollToTop
        className="border border-1 border-secondary"
        smooth
        style={{ background: "#fff", color: "white !important" }}
      />
    </footer>
  );
};

export default Footer;
