import React from "react"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import UserSumUp from "../UserSumUp/UserSumUp"
import ProductSumUp from "../ProductSumUp/ProductSumUp"

function Main(){
    return(
        <div className="Main">
            <Header />
            <br/>
            <UserSumUp />
            <br />
            <ProductSumUp />

            <Footer />
        </div>)
}

export default Main