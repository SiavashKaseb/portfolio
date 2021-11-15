import React from "react"
import "./product.css"
import list from "../../img/banner3.png"
const Product = (props) => {
    return (
        <div className="list">
            <div className="prdocut-br">
                <div className="product-circle"></div>
                <div className="product-circle"></div>
                <div className="product-circle"></div>
            </div>
            <a href={props.link} target="_blank" rel="noreferrer">
                <img src={list} alt="" className="product-image" />
            </a>
        </div>
    )
}

export default Product
