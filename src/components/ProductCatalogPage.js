import React from "react";
import {connect} from "react-redux";
import Catalog from "./Catalog";
import ToastSide from "./Toast";
import {withRouter} from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const ProductCatalogPage = ({catalogData}) => (
    <>
        <Container>
            <Row>
                <h3>Product Catalog</h3>
            </Row>
            <Row>
                <Catalog catalogData={catalogData}/>
            </Row>
            {/*<ToastSide/>*/}
        </Container>
    </>
);

const mapStateToProps = state => {
    const catalogData = state.store.products;
    return {catalogData};
};
export default withRouter(connect(mapStateToProps)(ProductCatalogPage));
