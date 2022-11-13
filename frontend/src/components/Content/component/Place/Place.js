import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
//
import "./Place.scss";
import Rating from "../Rating/Rating";
import { BsFillBagPlusFill } from "react-icons/bs";
import { Store } from "../../../../hook/Store";
import axios from "axios";
const Place = (props) => {
  const { place } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === place._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/places/${place._id}`);
    if (data.quantity < quantity) {
      window.alert("Xin lỗi bạn chỉ thêm được 1 lần");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...place, quantity },
    });
  };
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
        {place.quantity === 0 ? (
          <div className="place__cart">
            <BsFillBagPlusFill />
          </div>
        ) : (
          <div className="place__cart" onClick={() => addToCartHandler(place)}>
            <BsFillBagPlusFill />
          </div>
        )}
      </div>
    </Card>
  );
};

export default Place;
