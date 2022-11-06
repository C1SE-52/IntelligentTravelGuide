import React, { useEffect, useReducer } from "react";
import Container from "react-bootstrap/esm/Container";
import Heading from "../component/Heading/Heading";
import logger from "use-reducer-logger";
import axios from "axios";
import { reducer } from "../../../hook/reducer";
// Swipper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./Culture.scss";

// import required modules
import { EffectCube, Autoplay, Pagination } from "swiper";

const Culture = () => {
  const [{ loading, error, places }, dispatch] = useReducer(logger(reducer), {
    places: [],
    loading: true,
    error: "",
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
    <div className="culture">
      <Container>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div>
            {" "}
            <Heading
              head="Plan The"
              title="Perfect Holiday"
              desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the"
              setColor
            />
            <div className="culture__container">
              <div className="culture__content">
                <h2 className="culture__title">Văn hoá tín ngưỡng</h2>
                <p className="culture__desc">
                  Tín ngưỡng, tôn giáo là những thành tố của văn hóa, nó phản
                  ánh tâm tư, nguyện vọng, cũng như đóng vai trò vô cùng quan
                  trọng trong đời sống tinh thần của một bộ phận cư dân. Bên
                  cạnh đó, tín ngưỡng, tôn giáo còn thể hiện lối ứng xử giữa con
                  người với thiên nhiên, con người với con người và con người
                  với xã hội. Và đây là những địa điểm được mọi người săn đón và
                  chú ý khi đến Đà Nẵng
                </p>
              </div>
              <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                pagination={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[EffectCube, Autoplay, Pagination]}
                className="mySwiper"
              >
                {places.map((place) =>
                  place.category === "Văn hoá tín ngưỡng bản địa" ? (
                    <SwiperSlide key={place.slug}>
                      <img
                        src={place.image}
                        alt="Culture"
                        className="culture__img"
                      />
                      <h2 className="culture__name">{place.name}</h2>
                    </SwiperSlide>
                  ) : null
                )}
              </Swiper>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Culture;
