import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

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
                React PayPal Integration </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav variant="tabs" defaultActiveKey="#about">
                    <Nav.Item>
                        <Nav.Link eventKey="about" href="#about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="store" href="#store">Store</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Button variant="primary" href="#cart">
                    Cart <Badge variant="light">0</Badge>
                    <span className="sr-only">items in cart</span>
                </Button>
            </Navbar.Collapse>
        </Navbar>
    </>
)

export default NavigationBar