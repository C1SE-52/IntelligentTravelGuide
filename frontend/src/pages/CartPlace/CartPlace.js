import { useContext } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import MessageBox from "../../components/MessageBox/MessageBox";
import { Store } from "../../hook/Store";
import { BsFillTrashFill } from "react-icons/bs";
import "./CartPlace.scss";
import Rating from "../../components/Content/component/Rating/Rating";

export default function CartPlace() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const removeItemHandler = (item) => {
    ctxDispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  return (
    <div className="cartPlace">
      <Container>
        <Row>
          <Col md={8} style={{ paddingRight: "2rem" }}>
            {cartItems.length === 0 ? (
              <MessageBox>
                Giỏ hàng rỗng <Link to="/">Về Trang Chủ</Link>
              </MessageBox>
            ) : (
              <div className="cartPlace__container">
                {cartItems.map((item) => (
                  <div className="cartPlace__content">
                    <img
                      className="cartPlace__img"
                      src={item.image}
                      alt={item.name}
                    />
                    <div style={{ padding: "1rem" }}>
                      <Link
                        className="cartPlace__name"
                        to={`/place/${item.slug}`}
                      >
                        {item.name}
                      </Link>
                      <Rating
                        rating={item.rating}
                        numReviews={item.numReviews}
                        setColor
                      />
                    </div>
                    <div
                      className="cartPlace__icon"
                      onClick={() => removeItemHandler(item)}
                    >
                      <BsFillTrashFill />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Col>
          <Col
            md={4}
            style={{ paddingLeft: "2rem", borderLeft: "1px solid #ccc" }}
          >
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>
                      Tổng cộng :{" "}
                      {cartItems.reduce((a, c) => a + c.quantity, 0)} địa điểm
                    </h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button
                        type="button"
                        style={{
                          padding: "2rem",
                          marginTop: "2rem",
                          fontSize: "1.5rem",
                        }}
                        variant="primary"
                        disabled={cartItems.length === 0}
                      >
                        Hiển thị tuyến đường tốt nhất
                      </Button>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
