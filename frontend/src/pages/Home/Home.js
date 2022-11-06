import React from "react";
//
import "./Home.scss";
import Content from "../../components/Content/Content";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Content />
    </div>
  );
};

export default Home;
