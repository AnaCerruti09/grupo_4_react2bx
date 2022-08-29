import React from "react"

import { useState, useEffect } from "react"

function ActivitiesByLocations(){
    const [categoriesTotal, setCategoriesTotal] = useState([])

    const api = "http://localhost:3030/api/Package/categoriesLocations/show"

    useEffect( () => {
        fetch(api)
        .then(res => res.json())
        .then(data => {
            setCategoriesTotal(data.data)
        })
        .catch(error => console.log(error))
}, [])


    return(
    <React.Fragment>
        <div className="SubContainerSumUp">
            <div className="TitleCategories"><h2 className="CategoriesTitle">Product By Location</h2></div>
            <div className="CategoriesList">
                
                        {
                            categoriesTotal.length !== 0 && categoriesTotal.map((categorie,i) =>{
                                return(
                            <div key={i} className="cardTotalCategories">
                                <h5>{categorie.Provincia}</h5>
                                <span>{categorie.Count}</span>
                            </div>)
                        
                            })
                        }
            </div>
        </div>
    </React.Fragment>
    )
}

export default ActivitiesByLocations