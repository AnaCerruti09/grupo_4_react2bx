import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


function ProductList(){
    
    const [products, setProducts] = useState([])
    const [totalProducts, setTotalProducts] = useState(0)
    const [range, setRange] = useState([]);
    const [page, setPage] = useState(1)
    const [slice, setSlice] = useState([]);

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



    const calculateRange = (totalProducts) => {
        const rowsPerPage = 5
        const range = [];
        const num = Math.ceil(totalProducts / rowsPerPage);
        for (let i = 1; i <= num; i++) {
          range.push(i);
        }
        return range;
    }

    const sliceData = (products, page) => {
        const rowsPerPage = 5
        return products.slice((page - 1) * rowsPerPage, page * rowsPerPage);
      }



    useEffect(() => {
        const range = calculateRange(totalProducts);
        setRange([...range]);
    
        const slice = sliceData(products, page);
        setSlice([...slice]);

      }, [totalProducts, products, setRange, page, setSlice]);
    
    
    useEffect(() => {
          if (slice.length < 1 && page !== 1) {
            setPage(page - 1);
          }
    }, [slice, page, setPage])
    




    return(
    <React.Fragment>
      <div className="sectionList">
      <div className="TitleListContainer"><h2 className="ListTitle">Activities List</h2></div>
        <div className="ContainerList">
            
            <div className="ListContent">
                
            <table className="Table">
        <thead className="tableRowHeader">
          <tr>
            <th className="tableHeader c1">Actividad</th>
            <th className="tableHeader c2">Deporte</th>
            <th className="tableHeader c3">Locación</th>
            <th className="tableHeader c4">Precio</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className="tableRowItems" key={el.id}>
              <td className="tableCell c1"><Link to={`/api/package/${el.id}`} style={{ textDecoration: 'none' }}>{el.name}</Link></td>
              <td className="tableCell c2">{el.Sport.name}</td>
              <td className="tableCell c3">{el.Location.province}</td>
              <td className="tableCell c4">$ {el.price}</td>
            </tr>
          ))}
        </tbody>
      </table> 

      <div className="tableFooter">
      {range.map((el, index) => (
        <button
          key={index}
            className={`${"buttonList"} ${
            page === el ? " activeButton" : " inactiveButton"
          }`}
            onClick={() => setPage(el)}
      >
          {el}
      </button>
      ))}
    </div>          
                

    </div>
    </div>
    </div>
    </React.Fragment>
    )

}

export default ProductList