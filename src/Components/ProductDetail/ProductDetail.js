import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"

function ProductDetail(){

    const [product, setProduct] = useState({})
    const [location, setLocation] = useState({})
    const [sport, setSport] = useState({})
    
    const {id} = useParams()
  
    const API = `http://localhost:3030/api/package/${id}`

    useEffect(()=>{
        fetch(API)
        .then(res => res.json())
        .then(data => {
            setProduct(data.data)
            setLocation(data.data.Location)
            setSport(data.data.Sport)
        })
        .catch(error => console.log(error))
    }, [])

    

    return(
    <React.Fragment>
        <div className="Users">
        <Header />
            <br/>
            <div className="MainContentDetail">
        <div className="ContainerSumUpDetail">
            <div className="TitleContainer"><h2 className="SumUpTitle">Activity Detail</h2></div>
            <div className="ContentSumUP">
                
                    
                        { product !=={} && 
                           <div className="cardLastDetail"> 
                            <h5>{product.name} {location.geo_region}</h5>
                            <span>${product.price}</span>
                            <p>{sport.name}</p>
                            <p>{product.description}</p>
                           </div>
                        }
                    
            
                

            </div>
        </div>
        </div>
        <Footer />
    </div>
    </React.Fragment>
    )


}

export default ProductDetail