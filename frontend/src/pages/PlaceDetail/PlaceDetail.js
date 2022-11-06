import axios from "axios";
import React, { useEffect, useReducer } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Link, useParams } from "react-router-dom";
import Rating from "../../components/Content/component/Rating/Rating";
import Button from "react-bootstrap/Button";
// import Prominent from "../../components/ProminentPlaces/Prominent";
//
import "./PlaceDetail.scss";
import Iframe from "react-iframe";

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        place: action.payload,
        loading: false,
      };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

const PlaceDetail = () => {
  const params = useParams();
  const { slug } = params;
  const [{ loading, error, place }, dispatch] = useReducer(reducer, {
    place: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/places/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [slug]);

  return (
    <div className="placeDetail">
      <Container>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div>
            <Row className="gx-5">
              <Col md={7}>
                <div className="placeDetail__img">
                  <img src={place.image} alt={place.image} />
                  {place.imageCaption ? <p>{place.imageCaption}</p> : null}
                </div>
              </Col>
              <Col md={5}>
                <div className="placeDetail__content">
                  <div className="placeDetail__head">
                    <Link to="/">Trang chủ</Link>
                    {"/"}
                    <span>{place.category}</span>
                  </div>
                  <h2 className="placeDetail__name">{place.name}</h2>
                  <div className="placeDetail__address">
                    <span>Địa chỉ: </span>
                    <p>{place.address}</p>
                  </div>
                  <div className="divide"></div>
                  <Rating
                    rating={place.rating}
                    numReviews={place.numReviews}
                    setColor
                  />
                  <p className="place__desc">{place.description}</p>
                  <Button className="button button-primary">
                    Thêm vào giỏ
                  </Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Iframe
                width="100%"
                height="500px"
                src={place.mapUrl}
                styles={{ backgroundColor: "#ccc" }}
              />
            </Row>
          </div>
        )}
      </Container>
    </div>
  );
};

export default PlaceDetail;
