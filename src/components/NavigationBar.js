import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import CartButton from "./CartButton";

const NavigationBar = () => (
    <>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">
                <img
                    alt=""
                    src="/1280px-PayPal.svg.png"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                <img
                    alt=""
                    src="/react.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                React PayPal Integration
            </Navbar.Brand>
            <Navbar id="basic-navbar-nav">
                <Nav variant="tabs" defaultActiveKey="#about">
                    <Nav.Item>
                        <Nav.Link eventKey="about" href="#about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="store" href="#store">Store</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
            <Navbar className="justify-content-end">
                <CartButton/>
            </Navbar>
        </Navbar>
    </>
)

export default NavigationBar