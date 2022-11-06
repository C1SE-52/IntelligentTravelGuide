import React from "react";
//
import VisitPlaces from "./VisitPlaces/VisitPlaces";
import Discovery from "./Discovery/Discovery";
import Beach from "./BeachGr/Beach";
import Gretting from "./component/Grettings/Gretting";
import Advertise from "./component/Advertise/Advertise";
import Culture from "./Culture/Culture";
import Destination from "./Destination/Destination";

const Conent = () => {
  return (
    <div className="content__wrapper d-flex flex-column">
      <VisitPlaces />
      <Gretting />
      <Discovery />
      <Advertise />
      <Beach />
      <Culture />
      <Destination />
    </div>
  );
};

export default Conent;
