import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Link, useNavigate, useParams } from "react-router-dom";
import Rating from "../../components/Content/component/Rating/Rating";
import Button from "react-bootstrap/Button";
// import Prominent from "../../components/ProminentPlaces/Prominent";
import "./PlaceDetail.scss";
import Iframe from "react-iframe";
import LoadingBox from "../../components/LoadingBox/LoadingBox";
import MessageBox from "../../components/MessageBox/MessageBox";
import { getError } from "../../utils/utils";
import { Store } from "../../hook/Store";
//
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/css/effect-fade";
// import required modules
import { Autoplay } from "swiper";

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
  const navigate = useNavigate();
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
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    fetchData();
  }, [slug]);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === place._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/places/${place._id}`);
    if (data.quantity < quantity) {
      window.alert("Xin lỗi.Bạn chỉ được thêm 1 lần");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...place, quantity },
    });
    navigate("/cart");
  };
  console.log(place.imageArr);
  return (
    <div className="placeDetail">
      <Container>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="placeDetail__container">
            <Row className="gx-5">
              <Col md={7} className="overflow-hidden">
                <div className="placeDetail__img">
                  <img src={place.image} alt={place.image} />
                  {place.imageCaption ? <p>{place.imageCaption}</p> : null}
                </div>
              </Col>
              <Col md={5} className="overflow-hidden">
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
                  <p className="placeDetail__desc">{place.description}</p>
                  {place.quantity === 0 ? (
                    <Button className="button button__primary">
                      Thêm vào giỏ
                    </Button>
                  ) : (
                    <Button
                      className="button button__primary"
                      onClick={addToCartHandler}
                    >
                      Thêm vào giỏ
                    </Button>
                  )}
                </div>
              </Col>
            </Row>
            <div className="placeDetail__imageArr">
              <h2>Các hình ảnh tương tự</h2>
              <Swiper
                slidesPerView={4}
                spaceBetween={10}
                loop={true}
                navigation={false}
                autoplay={{
                  delay: 10000,
                }}
                pagination={false}
                modules={[Autoplay]}
              >
                {place.imageArr.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img src={item} alt="name" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <Row>
              <Iframe width="100%" height="600px" src={place.mapUrl} />
            </Row>
            <Row style={{ background: "#fff" }}>
              <Col md={8}>
                <div>
                  <h2 className="head">Đánh giá địa điểm</h2>
                </div>
              </Col>
              <Col md={4}>
                <div>
                  <h2 className="head">Top các địa điểm yêu thích</h2>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </div>
  );
};

export default PlaceDetail;
