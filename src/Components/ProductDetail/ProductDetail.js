import React from "react"
import IconUser from "../../Assets/img/user_icon.png"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"

function ProductDetail(){

    const [product, setProduct] = useState({})
    
    const {id} = useParams()

    const API = `http://localhost:3030/api/package/${id}`

    useEffect(()=>{
        fetch(API)
        .then(res => res.json())
        .then(data => {
            setProduct(data.data)
                  
        })
        .catch(error => console.log(error))
    }, [])

    

    return(
    <React.Fragment>
        <div className="Users">
        <Header />
            <br/>
            <div className="MainContent"></div>
        <div className="ContainerSumUp">
            <div className="TitleContainer"><h2 className="SumUpTitle">User Sum Up Dashboard</h2></div>
            <div className="ContentSumUP">
                
                    
                        { product !=={} && 
                           <div className="cardLast"> 
                            <img className="IconUser" src={IconUser} alt="icono usuario" />
                            <h5>{product.name} - {product.Location.name}</h5>
                            <span>{product.price}</span>
                            <p>{product.Sport.name}</p>
                            <p>{product.description}</p>
                           </div>
                        }
                    
            
                

            </div>
        </div>
        <Footer />
    </div>
    </React.Fragment>
    )


}

export default ProductDetail