import React, { useEffect, useReducer } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import required modules
import { Navigation, Autoplay, Pagination } from "swiper";

//
import Heading from "../component/Heading/Heading";
import "./Beach.scss";
import axios from "axios";
import { reducer } from "../../../hook/reducer";
import Rating from "../component/Rating/Rating";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";

const Beach = () => {
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
  return (
    <div className="beach">
      <div>
        <Heading
          head="Plan The"
          title="Bãi Biển Đẹp"
          desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the"
        />
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          navigation={false}
          autoplay={{
            delay: 10000,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Navigation, Autoplay, Pagination]}
        >
          {places.map((place) =>
            place.category === "Bãi biển đẹp" ? (
              <SwiperSlide key={place.slug}>
                <Link to={`/place/${place.slug}`} className="beach__container">
                  <img className="beach__img" src={place.image} alt="Beach" />
                  <div className="beach__banner d-flex align-items-center">
                    <GoLocation />
                    <p>{place.address}</p>
                  </div>
                  <div className="beach__content">
                    <h4 className="beach__title">{place.name}</h4>
                    <p className="beach__desc">{place.description}</p>
                    <Rating
                      rating={place.rating}
                      numReviews={place.numReviews}
                      setColor
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ) : null
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Beach;
