import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";

export const About = () => {
    return (
        <Container>
            <Row>
                <div>
                    <h2>About</h2>
                    <ul>
                        <li>
                            <a href="/store-a">Store A</a> demonstrate PayPal Checkout (Client-side)
                        </li>
                        <li>
                            <a href="/store-b">Store B</a> demonstrate PayPal Checkout (Server-side)
                        </li>
                    </ul>
                </div>
            </Row>
        </Container>

    );
}