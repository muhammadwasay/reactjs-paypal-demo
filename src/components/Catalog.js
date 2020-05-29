import React from 'react'
import CatalogItem from './CatalogItem'

let key = 1;
const Catalog = ({ catalogData }) => (
    <>
        {catalogData.map((catalogItem, index) => (
            <CatalogItem key={key++} catalogItem={catalogItem}/>
        ))}
    </>
)

export default Catalog