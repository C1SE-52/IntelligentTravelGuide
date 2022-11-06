import React from "react";
import "./Heading.scss";

const Heading = (props) => {
  const { head, title, desc, setColor } = props;
  return !setColor ? (
    <div className="headingContent">
      <h2 className="headingContent__head">{head}</h2>
      <h3 className="headingContent__title">{title}</h3>
      <p className="headingContent__desc">{desc}</p>
    </div>
  ) : (
    <div className="headingContent">
      <h2 className="headingContent__head text-white">{head}</h2>
      <h3 className="headingContent__title text-white">{title}</h3>
      <p className="headingContent__desc text-white">{desc}</p>
    </div>
  );
};

export default Heading;
