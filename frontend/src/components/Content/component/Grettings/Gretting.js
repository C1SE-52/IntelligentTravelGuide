import React from "react";
import Container from "react-bootstrap/esm/Container";
//
import grettings from "../../../../assets/grettings.jpg";
import "./Gretting.scss";
const Gretting = () => {
  return (
    <div className="grettings">
      <Container>
        <img src={grettings} alt="Grettings" />
      </Container>
    </div>
  );
};

export default Gretting;
