import Header from "../Header/Header"
import Footer from "../Footer/Footer"

import SearchUser from "../SearchUser/SearchUser"
import "./Search.css"


function Search(){
    return(
        <div className="MainSearchView">
            <Header />
                <br/>
                <div className="MainContent">
                    <SearchUser  />
                </div>
            <Footer />
        </div>)
}

export default Search