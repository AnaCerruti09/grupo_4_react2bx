import React from "react"

import { useState, useEffect } from "react"

function UserSumUp(){
    const [users, setUsers] = useState([])
    const [totalUsers, setTotalUsers] = useState(0)

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

    const lastUser = users[totalUsers-1]

    return(
    <React.Fragment>
        <div className="ContainerSumUp">
            <div><h2 className="SumUpTitle">User Sum Up Dashboard</h2></div>
            <div className="ContentSumUP">
                <div className="lastInDB">
                    
                        { users.length !== 0 &&
                           <div className="cardLast"> 
                            <h5>{lastUser.name}</h5>
                            <span>{lastUser.email}</span>
                           </div>
                        }
                    
                </div>
                <div className="totalInDB">
                        {
                            totalUsers !== 0 &&
                            <div className="cardTotal">
                                <h5>Total de Usuarios</h5>
                                <span>{totalUsers}</span>
                            </div>
                        }
                </div>

            </div>
        </div>
    </React.Fragment>
    )
}

export default UserSumUp