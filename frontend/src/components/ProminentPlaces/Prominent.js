import { React, useReducer, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import { Link } from "react-router-dom";
import { reducer } from "../../hook/reducer";

import "./Prominent .scss";

const Prominent = () => {
  const [{ places }, dispatch] = useReducer(reducer, {
    places: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/places");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);
  const randomPlaces = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };
  const getPlaces = randomPlaces(places, 5);
  return (
    <div className="prominent">
      <h2 className="prominent__title">Địa điểm nổi bật</h2>
      <span className="divider"></span>
      <ListGroup>
        {getPlaces.map((place) => (
          <ListGroup.Item key={place._id}>
            <Link to={`/place/${place.slug}`} className="prominent__img">
              <img src={place.image} alt={place.name} />
            </Link>
            <div>
              <Link to={`/place/${place.slug}`} className="promient__name">
                <h2>{place.name}</h2>
              </Link>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Prominent;
