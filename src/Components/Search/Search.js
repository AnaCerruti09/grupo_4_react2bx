import Header from "../Header/Header"
import Footer from "../Footer/Footer"

import SearchUser from "../SearchUser/SearchUser"

function Search(){
    return(
        <div className="Main">
            <Header />
                <br/>
                <div className="MainContent">
                    <SearchUser  />
                </div>
            <Footer />
        </div>)
}

export default Search