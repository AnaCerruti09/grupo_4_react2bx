import React from "react"

import ProductSumUp from "../ProductSumUp/ProductSumUp"
import ProductList from "../ProductList/ProductList"
import SearchProduct from "../SearchProduct/SearchProduct"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

import "./Products.css"

function Products(){
    return(
        <div className="Products">
            <Header />
                <br/>
                <div className="MainContent">
                    <SearchProduct />
                     <br />
                    <ProductSumUp />
                     <br />
                    <ProductList />
                </div>
            <Footer />
        </div>)
}

export default Products