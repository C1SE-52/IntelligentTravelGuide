import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
//
import "./Place.scss";
import Rating from "../Rating/Rating";
const Place = (props) => {
  const { place } = props;
  return (
    <Card className="place">
      <div className="place__container">
        <Link to={`/place/${place.slug}`} className="place__img">
          <img src={place.image} alt={place.name} />
        </Link>
        <Card.Body className="place__content">
          <Link to={`/place/${place.slug}`} className="place__name">
            <p>{place.name}</p>
          </Link>
          <Rating rating={place.rating} numReviews={place.numReviews} />
        </Card.Body>
      </div>
    </Card>
  );
};

export default Place;
