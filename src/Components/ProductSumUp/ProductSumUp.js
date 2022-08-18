import React from "react"

import { useState, useEffect } from "react"

function ProductSumUp(){
    const [products, setProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)

    const api = "http://localhost:3030/api/Package"

    useEffect(()=>{
        fetch(api)
        .then(res => res.json())
        .then(data => {
            setProducts(data.data)
            setTotalProducts(data.meta.total)
        })
        .catch(error => console.log(error))
    }, [])

    const lastProduct = products[totalProducts-1]

    return(
    <React.Fragment>
        <div className="ContainerSumUp">
            <div><h2 className="SumUpTitle">Product Sum Up Dashboard</h2></div>
            <div className="ContentSumUP">
                <div className="lastInDB">
                    
                        { products.length !== 0 &&
                           <div className="cardLast"> 
                            <h5>{lastProduct.name}</h5>
                            <span>{lastProduct.Sport.name}</span>
                           </div>
                        }
                    
                </div>
                <div className="totalInDB">
                        {
                            totalProducts !== 0 &&
                            <div className="cardTotal">
                                <h5>Total de Actividades</h5>
                                <span>{totalProducts}</span>
                            </div>
                        }
                </div>

            </div>
        </div>
    </React.Fragment>
    )
}

export default ProductSumUp