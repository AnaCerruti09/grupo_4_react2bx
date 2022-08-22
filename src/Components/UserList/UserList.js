import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./UserList.css"

function UserList(){
    const [users, setUsers] = useState([])
    const [totalUsers, setTotalUsers] = useState(0)
    const [range, setRange] = useState([]);
    const [page, setPage] = useState(1)
    const [slice, setSlice] = useState([]);

    const api = "http://localhost:3030/api/Users"

    useEffect(()=>{
        fetch(api)
        .then(res => res.json())
        .then(data => {
            setUsers(data.data)
            setTotalUsers(data.meta.total)
        })
        .catch(error => console.log(error))
    }, [])



    const calculateRange = (totalUsers) => {
        const rowsPerPage = 5
        const range = [];
        const num = Math.ceil(totalUsers / rowsPerPage);
        for (let i = 1; i <= num; i++) {
          range.push(i);
        }
        return range;
    }

    const sliceData = (users, page) => {
        const rowsPerPage = 5
        return users.slice((page - 1) * rowsPerPage, page * rowsPerPage);
      }



    useEffect(() => {
        const range = calculateRange(totalUsers);
        setRange([...range]);
    
        const slice = sliceData(users, page);
        setSlice([...slice]);

      }, [totalUsers, users, setRange, page, setSlice]);
    
    
    useEffect(() => {
          if (slice.length < 1 && page !== 1) {
            setPage(page - 1);
          }
    }, [slice, page, setPage])
    




    return(
    <React.Fragment>
    <div className="sectionList">
        <div className="TitleListContainer"><h2 className="ListTitle">User List</h2></div>
        <div className="ContainerList">
            
            <div className="ListContent">
                
            <table className="Table">
        <thead className="tableRowHeader">
          <tr>
            <th className="tableHeader">Nombre</th>
            <th className="tableHeader">Apellido</th>
            <th className="tableHeader">Mail</th>
            <th className="tableHeader">Fecha de Nac.</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className="tableRowItems" key={el.id}>
              <td className="tableCell">{el.name}</td>
              <td className="tableCell">{el.last_name}</td>
              <td className="tableCell"><Link to={`/api/users/${el.id}`} style={{ textDecoration: 'none' }}>{el.email}</Link></td>
              <td className="tableCell">{el.birth_date}</td>
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

export default UserList