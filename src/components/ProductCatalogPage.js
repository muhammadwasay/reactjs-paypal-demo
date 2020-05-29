import React from "react";
import { connect } from "react-redux";
import Catalog from "./Catalog";
import { withRouter } from 'react-router-dom'

const ProductCatalogPage = ({ catalogData }) => (
    <div>
        <h3>Product Catalog Page</h3>
        <Catalog catalogData={catalogData}/>
    </div>
);

const mapStateToProps = state => {
    const catalogData = state.store.products;
    return { catalogData };
};
export default withRouter(connect(mapStateToProps)(ProductCatalogPage));
