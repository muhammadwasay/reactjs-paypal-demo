import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'

const AboutPage = () => (
    <Container>
        <Row>
            <div>
                <h2>About</h2>
            </div>
        </Row>
    </Container>
);

export default withRouter(connect()(AboutPage));
