import React from "react";
import video from "../../../../assets/video/introdanang.mp4";
import "./Modal.scss";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
        <video className="modal__video" controls autoPlay>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Modal;
