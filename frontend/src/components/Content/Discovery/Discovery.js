import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Heading from "../component/Heading/Heading";
import "./Discovery.scss";
import discovery from "../../../assets/discovery4.jpg";
import { FaPlay } from "react-icons/fa";
import Modal from "../component/Modal/Modal";

const Discovery = () => {
  const [opeanModal, setOpenModal] = useState(false);
  if (opeanModal) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }
  return (
    <div>
      <div className="discovery">
        <Container>
          3e
          <Heading
            head="Go & Discover"
            title="Breathtaking Cities"
            desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the"
            setColor
          />
          <div className="discovery__container">
            <div className="discovery__content">
              <img
                src={discovery}
                alt="People Da Nang"
                className="discovery__img"
              />
              <FaPlay
                className="discovery__icon"
                onClick={() => setOpenModal(true)}
              />
            </div>
          </div>
        </Container>
        <Modal open={opeanModal} onClose={() => setOpenModal(false)} />
      </div>
    </div>
  );
};

export default Discovery;
