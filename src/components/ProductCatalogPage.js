import React from "react";
import { connect } from "react-redux";
import Catalog from "./Catalog";

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
export default connect(mapStateToProps)(ProductCatalogPage);
