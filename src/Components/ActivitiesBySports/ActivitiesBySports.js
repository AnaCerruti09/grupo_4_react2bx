import React from "react"
import "./ActivitiesBySports.css"
import BarChart from "../BarChart/BarChart"

import { useState, useEffect } from "react"


function ActivitiesBySports(){
    const [categoriesTotal, setCategoriesTotal] = useState([])

    const api = "http://localhost:3030/api/Package/categoriesSports/show"

    useEffect( () => {
        fetch(api)
        .then(res => res.json())
        .then(data => {
            setCategoriesTotal(data.data)            
        })
        .catch(error => console.log(error))
}, [])
    

    const activityData = {
            labels: categoriesTotal.map(category => category.Deporte),
            datasets: [{
                label: "Actividades Por Deporte",
                data: categoriesTotal.map(category => category.Count),
                backgroundColor: ["RGB(157,59,225)"]
            }],
            }


    return(
    // <React.Fragment>
    //     <div className="SubContainerSumUp">
    //         <div className="TitleCategories"><h2 className="CategoriesTitle">Product By Sport</h2></div>
    //         <div className="CategoriesList">
                
    //                     {
    //                         categoriesTotal.length !== 0 && categoriesTotal.map((categorie,i) =>{
    //                             return(
    //                         <div key={i} className="cardTotalCategories">
    //                             <h5>{categorie.Deporte}</h5>
    //                             <span>{categorie.Count}</span>
    //                         </div>)
                        
    //                         })
    //                     }
    //         </div>
    //     </div>
    // </React.Fragment>
    <React.Fragment>
        <div className="ChartActivities">
        <BarChart chartData={activityData} />
        </div>
    </React.Fragment>
    )
}

export default ActivitiesBySports