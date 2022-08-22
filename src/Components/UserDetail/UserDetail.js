import React from "react"
import IconUser from "../../Assets/img/user_icon.png"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"

function UserDetail(){
    const [user, setUser] = useState({})
    
    const {id} = useParams()
    
    const API = `http://localhost:3030/api/users/${id}`

    useEffect(()=>{
        fetch(API)
        .then(res => res.json())
        .then(data => {
            setUser(data.data)
                  
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
                
                    
                        { user !=={} && 
                           <div className="cardLast"> 
                            <img className="IconUser" src={IconUser} alt="icono usuario" />
                            <h5>{user.name} - {user.last_name}</h5>
                            <span>{user.email}</span>
                            <p>{user.birth_date}</p>
                            <p>{user.tellus}</p>
                           </div>
                        }
                    
            
                

            </div>
        </div>
        <Footer />
    </div>
    </React.Fragment>
    )
}

export default UserDetail