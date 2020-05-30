import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React from "react";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'

const AboutPage = () => (
    <>
        <Container>
            <Row>
                <h2>About</h2>
            </Row>
            <Row>
                <div id="readme" className="Box-body readme blob js-code-block-container p-5 p-xl-6">
                    <article className="markdown-body entry-content container-lg" itemProp="text"><p>This demo
                        application demonstrates a use case of a shopping cart with payment integration.
                        The following functions are implemented.</p>
                        <ul>
                            <li>Browse the product catalog.</li>
                            <li>Add items to the shopping cart.</li>
                            <li>Browse the shopping cart.</li>
                            <li>Initiate the checkout process.</li>
                            <li>Pay using PayPal (Sandbox environment) and receive order confirmation details.</li>
                        </ul>
                        <p>Following design and technologies have been used.</p>
                        <table>
                            <thead>
                            <tr>
                                <th>Category</th>
                                <th>Details</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Architecture</td>
                                <td><a href="https://en.wikipedia.org/wiki/Single-page_application" rel="nofollow">Single
                                    page web application</a></td>
                            </tr>
                            <tr>
                                <td>UI JavaScript library</td>
                                <td><a href="https://reactjs.org/" rel="nofollow">React</a></td>
                            </tr>
                            <tr>
                                <td>Payment</td>
                                <td><a href="https://developer.paypal.com/docs/business/checkout/" rel="nofollow">PayPal
                                    checkout</a></td>
                            </tr>
                            <tr>
                                <td>State management library</td>
                                <td><a href="https://react-redux.js.org/" rel="nofollow">React Redux</a>,Hooks</td>
                            </tr>
                            <tr>
                                <td>Styling and CSS</td>
                                <td><a href="https://react-bootstrap.netlify.app/" rel="nofollow">React Bootstrap</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Router library</td>
                                <td><a href="https://reacttraining.com/react-router/" rel="nofollow">React Router</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Tool chain</td>
                                <td><a href="https://create-react-app.dev/" rel="nofollow">Create react app</a>,<a
                                    href="https://www.npmjs.com/" rel="nofollow">npm</a>,<a
                                    href="https://webpack.js.org/" rel="nofollow">webpack</a></td>
                            </tr>
                            <tr>
                                <td>Deployment</td>
                                <td><a href="https://muhammadwasay.github.io/index" rel="nofollow">GitHub pages</a></td>
                            </tr>
                            </tbody>
                        </table>
                    </article>
                </div>
            </Row>
        </Container>
    </>
);

export default withRouter(connect()(AboutPage));
