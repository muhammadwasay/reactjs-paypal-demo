import {useScript} from "../app/LoadScript";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import React, {useRef} from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export const ProductCatalogPage = () => {
    const [loaded, error] = useScript(
        'https://www.paypal.com/sdk/js?client-id=AQZ6f1ZuaeA4wB7iXh7texfqM269P7wRKXxOv8VcBEYTuIQfqd9Rl8HvVWAK-AbH2p3v03ilScvr90PM'
    );
    const product1Details = {id : 8234723,
        price : 0.99,
        description : 'Nulla mollis quam ornare lacus sodales aliquam. Vivamus blandit consectetur iaculis. Nunc gravida lacus non mollis cursus. Nullam imperdiet tellus eu arcu venenatis euismod. Donec ut quam sed justo vehicula suscipit eget eget massa. Proin quis finibus urna. Morbi tortor quam, aliquet ut urna eu, lobortis maximus odio. Quisque sodales ligula viverra urna ultricies interdum. Maecenas eu turpis sed turpis consectetur lobortis sit amet et dui.'
    };
    return (
        <Container>
            <Row>
                <div>
                    <h4>Store A ( Implemented with PayPal client side integration!)</h4>
                </div>
                <div>
                    <div>
                        Script loaded: <b>{loaded.toString()}</b>
                        Script error: <b>{error.toString()}</b>
                    </div>

                    {loaded && !error && (
                        <div>
                            {/*Script function call response: <b>{TEST_SCRIPT.start()}</b>*/}
                            Script function call response: <b>SUCCESS</b>
                        </div>
                    )}
                </div>
            </Row>
            <Row>
                <img
                    alt=""
                    src="/bdg_now_accepting_pp_2line_w.png"
                />{' '}
            </Row>
            <Row>
                <ProductGallery/>
                <ProductDetails product1Details/>
            </Row>
        </Container>
    );
}

const ProductGallery = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col >
                        <Image width={339}
                               height={265}
                               src="/749543-main.jpg" thumbnail />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image width={58}
                               height={55}
                               src="/749543-detail1.jpg" thumbnail />
                    </Col>
                    <Col>
                        <Image width={58}
                               height={55}
                               src="/749543-detail2.jpg" thumbnail />
                    </Col>
                    <Col>
                        <Image width={58}
                               height={55}
                               src="/749543-detail3.jpg" thumbnail />
                    </Col>
                    <Col>
                        <Image width={58}
                               height={55}
                               src="/749543-detail4.jpg" thumbnail />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

const ProductDetails = ({product}) => {
    const payPalButtonRef = useRef();

    /*useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    currency_code: 'USD',
                                    value: product.price,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    /!*setPaidFor(true);*!/
                    console.log(order);
                },
                onError: err => {
                    /!*setError(err);*!/
                    console.error(err);
                },
            })
            .render(payPalButtonRef.current);
    }, [product.id]);*/

    return (
        <>
            <Container>
                <Row>
                    <Row>
                        <h5>Product Details</h5>
                    </Row>
                    <Row>
                        <small>Product ID : 122121</small>
                    </Row>
                    <Row>
                        <strong>$0.99</strong>
                    </Row>
                    <Row>
                        <p>abc</p>
                    </Row>
                    <Row>
                        <div ref={payPalButtonRef}/>
                    </Row>
                </Row>
            </Container>
        </>
    );
};