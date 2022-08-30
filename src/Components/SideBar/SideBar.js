import React from "react"
import { Route, Switch, Link } from "react-router-dom"

import Main from "../Main/Main"
import Users from "../Users/Users"
import Products from "../Products/Products"
import Search from "../Search/Search"
// import SearchUser from "../SearchUser/SearchUser"
// import SearchProduct from "../SearchProduct/SearchProduct"
import UserDetail from "../UserDetail/UserDetail"
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import ProductCharts from "../ProductCharts/ProductCharts"

import Logo from "../../Assets/img/Logo1FondoNegro.jpg"
import "./SideBar.css"

function SideBar(){
    return(
    <React.Fragment>
    <div className="SideBar">
        <div>
            <img className="logo" src={Logo} alt="Logo 2BX" />
        </div>
        <div className="NavigationContainer">
            <ul>
                <li className="NavigationLink"><Link className="Link" to="/" style={{ textDecoration: 'none' }}> Main Dashboard</Link></li>

                <li className="NavigationLink"><Link className="Link" to="/Users" style={{ textDecoration: 'none' }}> Users Dashboard</Link></li>

                <li className="NavigationLink"><Link className="Link" to="/Products" style={{ textDecoration: 'none' }}> Products Dashboard</Link></li>

                <li className="NavigationLink"><Link className="Link" to="/ProductCharts" style={{ textDecoration: 'none' }}> Product Charts</Link></li>

                <li className="NavigationLink"><Link className="Link" to="/SearchUser" style={{ textDecoration: 'none' }}> User Search</Link></li>

            
            </ul>
        </div>
        <div className="filler"></div>
    </div>

        <Switch>
            <Route path="/" exact={true}> 
                <Main />
            </Route>

            <Route path="/Users"> 
                <Users />
            </Route>

            <Route path="/Products"> 
                <Products />
            </Route>

            <Route path="/ProductCharts"> 
                <ProductCharts />
            </Route>

            <Route path="/SearchUser"> 
                <Search />
            </Route>

            <Route path="/api/users/:id"> 
                <UserDetail />
            </Route>

            <Route path="/api/package/:id"> 
                <ProductDetail />
            </Route>

            <Route> 
                <NotFound />
            </Route>


        </Switch>

    </React.Fragment>
    )
}

export default SideBar