import React, { useEffect, useReducer } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "react-bootstrap/esm/Container";

// Import Swiper styles
import "swiper/scss";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
//
import Heading from "../component/Heading/Heading";
import "./Destination.scss";
import logger from "use-reducer-logger";
import axios from "axios";
import { reducer } from "../../../hook/reducer";
import { Link } from "react-router-dom";

const Destination = () => {
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
    <div className="destination">
      <Container>
        <div>
          {" "}
          <Heading
            head="Choose Your"
            title="Nơi Check-in Lý Tưởng"
            desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the"
            setColor
          />
          <Swiper
            slidesPerView={3}
            spaceBetween={60}
            loop={true}
            autoplay={{
              delay: 10000,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
          >
            {places.map((place) =>
              place.category === "Check-in Đà Nẵng" ? (
                <SwiperSlide key={place.slug}>
                  <Link to={`/place/${place.slug}`}>
                    <img
                      className="destination__img"
                      src={place.image}
                      alt=""
                    />
                    <h2 className="destination__name">{place.name}</h2>
                  </Link>
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Destination;
