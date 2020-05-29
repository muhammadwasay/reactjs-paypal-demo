import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const CartItem = ({cartItem}) => (
    <>
        <Container>
            <Row>
                <Col>
                    <Image width={58}
                           height={55}
                           src={cartItem.image} thumbnail/>
                </Col>
            </Row>
            <Row>
                <p>{cartItem.title}</p>
            </Row>
            <Row>
                <small>Product ID : {cartItem.pid}</small>
            </Row>
            <Row>
                <strong>${cartItem.price}</strong>
            </Row>
        </Container>
    </>
)

export default CartItem
