import React from "react"
import { useState, useEffect, useRef} from "react"
import IconUser from "../../Assets/img/user_icon.png"
import "./SearchUser.css"

function SearchUser(){
    const [users, setUsers] = useState([])
	const [keyword, setKeyword] = useState("")


	const input = useRef()
	

	useEffect( () => {
		const API = `http://localhost:3030/api/users/searchUsers/${keyword}`
		
		fetch(API)
		.then(res => res.json())
		.then(data => {
			if(data.data == undefined) {
				setUsers([])
			}else{
				setUsers(data.data)}})
		.catch(error => console.log(error))
 
	}, [keyword])

	const search= (e) => {
		e.preventDefault()

		setKeyword(input.current.value)
	}

	return(
		<div className="SearchContainer">
				<>
					<div className="SearchHead">
						<div className="SearchForm">
							{/* Buscador */}
							<form method="GET" onSubmit={search}>
								<div className="form-group">
									<label htmlFor="">Buscar por nombre:</label>
									<div className="divSearchCenter">
									<input ref={input} type="text" className="SearchInput" />
									<button className="SearchButton">GO</button>
									</div>
								</div>
								
							</form>
						</div>
					</div>
					{users.length !== 0 && keyword.length>0 && (
            			<div className="SearchResultTitle">
							<h2>Usuarios con nombre: {keyword}</h2>
						</div>
          			)}
					
					<div className="SearchResult">
						{
							users.length > 0 && users.map((user, i) => {
								return (
									<div className="CardResult" key={i}>

											<div className="CardHeader">
												<h5 className="ResultTitle">{user.email}</h5>
											</div>
											<div className="CardBody">
												<div className="ConteinerIcon">
													<img 
														className="IconUser" 
														src={IconUser}
														alt="icono usuario"
													/>
												</div>
												<div className="personalDataResult">
												<p>{user.name}</p>
                                                <p>{user.last_name}</p>
                                                <p>{user.birth_date}</p>
												</div>
											</div>
										
									</div>
								)
							})
						}
					
					
					{users.length === 0 && keyword.length>0 && (
            			<div className="AlertSearch">
             				 No se encontraron usuarios
            			</div>
          			)}
					</div>
				</>
		</div>
	)

}

export default SearchUser