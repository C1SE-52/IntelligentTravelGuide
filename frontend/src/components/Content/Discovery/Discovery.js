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
          <Heading
            head="Go & Discover"
            title="Thành phố đáng sống"
            desc="Được bao bọc bởi dòng sông Hàn thơ mộng,hình ảnh thành phố Đà Nẵng thân thương luôn được khắc hoạ trong tâm trí người dân nơi này"
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
