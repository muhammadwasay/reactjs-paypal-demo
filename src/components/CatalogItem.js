import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import AddToCartButton from "./AddToCart";

const CatalogItem = ({catalogItem}) => (
    <>
        <Container>
            <Row>
                <small>Product ID : {catalogItem.pid}</small>
            </Row>
            <Row>
                <Col>
                    <Image width={58}
                           height={55}
                           src={catalogItem.images[0]} thumbnail/>
                </Col>
            </Row>
            <Row>
                <strong>${catalogItem.price}</strong>
            </Row>
            <Row>
                <AddToCartButton catalogItem={catalogItem}/>
            </Row>
            <Row>
                <p>{catalogItem.title}</p>
            </Row>
        </Container>
    </>
)

export default CatalogItem
