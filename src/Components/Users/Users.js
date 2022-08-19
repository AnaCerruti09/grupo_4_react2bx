import React from "react"

import UserSumUp from "../UserSumUp/UserSumUp"
import UserList from "../UserList/UserList"
import SearchUser from "../SearchUser/SearchUser"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

import "./Users.css"

function Users(){
    return(
    <div className="Users">
        <Header />
            <br/>
            <div className="MainContent">
                <SearchUser />
                 <br />
                <UserSumUp />
                 <br />
                <UserList />
            </div>
        <Footer />
    </div>)
}

export default Users