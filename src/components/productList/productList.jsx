import React from "react";

import Product from "../product/product";
import ProductFive from "../product/productFive";
import ProductFour from "../product/productFour";
import ProductSix from "../product/productSix";
import ProductThree from "../product/productThree";
import ProductTwo from "../product/productTwo";
import "./productList.css";

const ProductList = () => {
    return (
        <div className="productList">
            <div className="productList-text">
                <h1 className="productList-title">Create People Dream</h1>
                <p className="productList-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe, molestias.
                </p>
            </div>
            <div className="product-list">
                {/* {data.map((lis) => (
                    <Product key={ lis.id } image= {lis.img} link={lis.link} />
                ))} */}
                <Product />
                <ProductTwo />
                <ProductThree />
                <ProductFour />
                <ProductFive />
                <ProductSix />
            </div>
        </div>
    );
};

export default ProductList;
