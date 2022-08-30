import React from "react"

import { useState, useEffect } from "react"
import DonaChart from "../DonaChart/DonaChart"
import "./ActivitiesByLocations.css"

function ActivitiesByLocations(){
    const [categoriesTotal, setCategoriesTotal] = useState([])
    // const [activityData, setActivityData] = useState({
    //     labels: [categoriesTotal.map(category => category.Deporte)],
    //     datasets: [{
    //         label: "Actividades Por Deporte",
    //         data:[categoriesTotal.map(category => category.Count)],
    //         backgroundColor: ["RGB(121,255,160)"]
    //     }],
    // })

    const api = "http://localhost:3030/api/Package/categoriesLocations/show"

    useEffect( () => {
        fetch(api)
        .then(res => res.json())
        .then(data => {
            setCategoriesTotal(data.data)
        })
        .catch(error => console.log(error))
}, [])

    const dataChart = {
        labels: categoriesTotal.map(category => category.Provincia),
        datasets: [{
            label: "Actividades Por Deporte",
            data: categoriesTotal.map(category => category.Count),
            backgroundColor: ["RGB(121,255,160)"]
        }],

    }

    return(
    // <React.Fragment>
    //     <div className="SubContainerSumUp">
    //         <div className="TitleCategories"><h2 className="CategoriesTitle">Product By Location</h2></div>
    //         <div className="CategoriesList">
                
    //                     {
    //                         categoriesTotal.length !== 0 && categoriesTotal.map((categorie,i) =>{
    //                             return(
    //                         <div key={i} className="cardTotalCategories">
    //                             <h5>{categorie.Provincia}</h5>
    //                             <span>{categorie.Count}</span>
    //                         </div>)
                        
    //                         })
    //                     }
    //         </div>
    //     </div>
    // </React.Fragment>
    <React.Fragment>
        <div className="ChartActivities2">
        <DonaChart chartData={dataChart} />
        </div>
    </React.Fragment>
    )
}

export default ActivitiesByLocations