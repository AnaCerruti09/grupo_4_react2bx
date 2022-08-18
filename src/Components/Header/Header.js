import React from "react"
import UserLogo from "../../Assets/img/UserLogo.png"

function Header(){
    return(
    <React.Fragment>
        <div className="Header">
            <div className="UserLogged">
                Hola Usuario
                <img className="FotoUsuario" src={UserLogo} alt="Imagen Usuario" />
            </div>|
        </div>
    </React.Fragment>
    )
}

export default Header