import Header from "../Header/Header"
import Footer from "../Footer/Footer"

import ActivitiesByLocations from "../ActivitiesByLocation/ActivitiesByLocations"
import ActivitiesBySports from "../ActivitiesBySports/ActivitiesBySports"

function ProductCharts(){
    return(
        <div className="Products">
            <Header />
                <br/>
                <div className="MainContent">
                    {/* <SearchProduct />
                     <br /> */}
                    <ActivitiesByLocations  />
                     <br />
                    <ActivitiesBySports />
                </div>
            <Footer />
        </div>)
}

export default ProductCharts