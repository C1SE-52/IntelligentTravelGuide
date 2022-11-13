import axios from "axios";
import React, { useEffect, useReducer } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import logger from "use-reducer-logger";
import Heading from "../component/Heading/Heading";
import Place from "../component/Place/Place";
import { reducer } from "../../../hook/reducer";
import "./VisitPlaces.scss";

const VisitPlaces = () => {
  const [{ places }, dispatch] = useReducer(logger(reducer), {
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

  return (
    <div>
      <div className="visitPlaces" id="visitPlaces">
        <Container>
          <div>
            <Heading
              head="Choose Your"
              title="Địa điểm tham quan"
              desc="Tổng hợp các địa điểm tham quan nổi tiếng tại Đà Nẵng, nơi bạn và mọi người cùng nhau khám phá những điều thú vị"
            />
            <Row className="mb-5">
              {places.slice(0, 8).map((place) =>
                place.category === "Địa điểm tham quan" ? (
                  <Col sm={6} md={4} lg={3} className="mb-3" key={place.slug}>
                    <Place place={place} />
                  </Col>
                ) : null
              )}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default VisitPlaces;
