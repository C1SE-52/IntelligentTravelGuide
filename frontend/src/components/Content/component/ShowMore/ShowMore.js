import React from "react";
//
import "./ShowMore.scss";

const ShowMore = (props) => {
  const { setShow } = props;

  const handleShowMoreButton = () => {
    setShow((preValue) => preValue * 4);
  };
  return (
    <button onClick={handleShowMoreButton} className="showMoreBtn">
      Show More
    </button>
  );
};

export default ShowMore;
