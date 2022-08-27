import React from "react"

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


    return(
    <React.Fragment>
        <div className="SubContainerSumUp">
            <div className="TitleCategories"><h2 className="CategoriesTitle">Product By Sport</h2></div>
                
                
                        {
                            categoriesTotal.length !== 0 && categoriesTotal.map((categorie,i) =>{
                                return(
                            <div key={i} className="cardTotal">
                                <h5>{categorie.Deporte}</h5>
                                <span>{categorie.Count}</span>
                            </div>)
                        
                            })
                        }
        
        </div>
    </React.Fragment>
    )
}

export default ActivitiesBySports