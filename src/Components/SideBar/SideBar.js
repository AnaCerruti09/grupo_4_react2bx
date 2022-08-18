import React from "react"
import { Route, Switch, Link } from "react-router-dom"

import Main from "../Main/Main"
import Users from "../Users/Users"
import Products from "../Products/Products"
import SearchUser from "../SearchUser/SearchUser"
import SearchProduct from "../SearchProduct/SearchProduct"
import NotFound from "../NotFound/NotFound"

function SideBar(){
    return(
    <React.Fragment>
    <div className="SideBar">
        <div>Aca va el Logo</div>
        <div className="NavigationContainer">
            <ul>
                <li className="NavigationLink"><Link to="/"><span>Main Dashboard</span></Link></li>

                <li className="NavigationLink"><Link to="/Users"><span>Users Dashboard</span></Link></li>

                <li className="NavigationLink"><Link to="/Products"><span>Products Dashboard</span></Link></li>

                <li className="NavigationLink"><Link to="/SearchProduct"><span>Product Search</span></Link></li>

                <li className="NavigationLink"><Link to="/SearchUser"><span>User Search</span></Link></li>

            <hr />
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