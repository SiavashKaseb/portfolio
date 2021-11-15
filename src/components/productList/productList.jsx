import React from "react"

import { data } from "../../data"
import Product from "../product/product"
import "./productList.css"

const ProductList = () => {
    return (
        <div className="productList">
            <div className="productList-text">
                <h1 className="productList-title">Create People Dream</h1>
                <p className="productList-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, molestias.
                </p>
            </div>
            <div className="product-list">
                {data.map((lis) => (
                    <Product key={ lis.id } image= {lis.img} link={lis.link} />
                ))}
                
            </div>
        </div>
    )
}

export default ProductList
