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
                <h5>{catalogItem.title}</h5>
            </Row>
            <Row>
                <Col>
                    <Image width={200}
                           height={200}
                           src={catalogItem.images[0]}/>
                </Col>
            </Row>
            <Row>
                <h5><strong>${catalogItem.price}</strong></h5>
            </Row>
            <Row>
                <AddToCartButton catalogItem={catalogItem}/>
            </Row>
            <br/>
        </Container>
    </>
)

export default CatalogItem
