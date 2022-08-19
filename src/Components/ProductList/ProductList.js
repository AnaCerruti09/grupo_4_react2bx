import React from "react"
import { useState, useEffect } from "react"


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
        <div className="ContainerList">
            <div className="TitleListContainer"><h2 className="ListTitle">User List</h2></div>
            <div className="ListContent">
                
            <table className="Table">
        <thead className="tableRowHeader">
          <tr>
            <th className="tableHeader">Actividad</th>
            <th className="tableHeader">Deporte</th>
            <th className="tableHeader">Locación</th>
            <th className="tableHeader">Precio</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className="tableRowItems" key={el.id}>
              <td className="tableCell">{el.name}</td>
              <td className="tableCell">{el.Sport.name}</td>
              <td className="tableCell">{el.Location.province}</td>
              <td className="tableCell">{el.price}</td>
            </tr>
          ))}
        </tbody>
      </table> 

      <div className="tableFooter">
      {range.map((el, index) => (
        <button
          key={index}
        //   className={`${styles.button} ${
        //     page === el ? styles.activeButton : styles.inactiveButton
        //   }`}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))}
    </div>          
                

            </div>
        </div>
    </React.Fragment>
    )

}

export default ProductList