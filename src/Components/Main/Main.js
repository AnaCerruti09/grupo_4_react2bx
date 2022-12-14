import React from "react"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import UserSumUp from "../UserSumUp/UserSumUp"
import ProductSumUp from "../ProductSumUp/ProductSumUp"

import "./Main.css"

function Main(){
    return(
        <div className="Main">
            <Header />
            <br/>
            <div className="MainContent">
                <UserSumUp />
                 <br />
                <ProductSumUp />
            </div>
            <Footer />
        </div>)
}

export default Main