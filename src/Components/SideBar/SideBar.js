import React from "react"
import { Route, Switch, Link } from "react-router-dom"

import Main from "../Main/Main"
import Users from "../Users/Users"
import Products from "../Products/Products"
import SearchUser from "../SearchUser/SearchUser"
import SearchProduct from "../SearchProduct/SearchProduct"
import NotFound from "../NotFound/NotFound"

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
                <li className="NavigationLink"><Link to="/" style={{ textDecoration: 'none' }}><span>Main Dashboard</span></Link></li>

                <li className="NavigationLink"><Link to="/Users" style={{ textDecoration: 'none' }}><span>Users Dashboard</span></Link></li>

                <li className="NavigationLink"><Link to="/Products" style={{ textDecoration: 'none' }}><span>Products Dashboard</span></Link></li>

                <li className="NavigationLink"><Link to="/SearchProduct" style={{ textDecoration: 'none' }}><span>Product Search</span></Link></li>

                <li className="NavigationLink"><Link to="/SearchUser" style={{ textDecoration: 'none' }}><span>User Search</span></Link></li>

            
            </ul>
        </div>
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

            <Route path="/SearchProduct"> 
                <SearchProduct />
            </Route>

            <Route path="/SearchUser"> 
                <SearchUser />
            </Route>

            <Route> 
                <NotFound />
            </Route>


        </Switch>

    </React.Fragment>
    )
}

export default SideBar