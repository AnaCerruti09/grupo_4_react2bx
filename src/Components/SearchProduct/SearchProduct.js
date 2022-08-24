import React from "react"
import { useState, useEffect, useRef} from "react"
import IconUser from "../../Assets/img/user_icon.png"

function SearchProduct(){
    const [products, setProducts] = useState([])
	const [keywordCriteria, setKeywordCriteria] = useState("")
    const [keywordValue, setKeywordValue] = useState("")
    const [locations, setLocations]= useState([])
    const [sports, setSports] = useState([])


	const inputCriteria = useRef()
    const inputValue = useRef()

    useEffect(() => {
        const apiLocations= "http://localhost:3030/api/locations"
        const apiSports = "http://localhost:3030/api/sports"

        if(keywordCriteria === "location_id"){
            fetch(apiLocations)
            .then(res => res.json())
            .then(data => {
                if(data.data === undefined) {
                    setLocations([])
                }else{
                    setLocations(data.data)}})
            .catch(error => console.log(error))
        }else{
            fetch(apiSports)
            .then(res => res.json())
            .then(data => {
                if(data.data === undefined) {
                    setSports([])
                }else{
                    setSports(data.data)}})
            .catch(error => console.log(error))
        }


    }, [keywordCriteria])

	useEffect( () => {
		const API = `http://localhost:3030/api/package/searchPackages/${keywordCriteria}/${keywordValue}`
		
		fetch(API)
		.then(res => res.json())
		.then(data => {
			if(data.data === undefined) {
				setProducts([])
			}else{
				setProducts(data.data)}
            	})
		.catch(error => console.log(error))
 
	}, [keywordValue, keywordCriteria])


	const search= (e) => {
		e.preventDefault()

		setKeywordCriteria(inputCriteria.current.value)
        setKeywordValue(inputValue.current.value)
        console.log("inputValue", inputValue)
        console.log("inputCriteria", inputCriteria)
	}

	return(
		<div className="SearchContainer">
				<>
					<div className="SearchHead">
						<div className="SearchForm">
							{/* Buscador */}
							<form method="GET" onSubmit={ () => search()}>
								<div className="form-group">
									<label htmlFor="">Buscar por criterio:</label>
                                    <select name="searchCriteria" ref={inputCriteria} onSelect={ (value) => setKeywordCriteria(value)}>
										<option  value="" disabled>Elige</option>
										<option  value="sport_id">Deporte</option>
                                        <option  value="location_id">Locación</option>
                                        
                                    </select>

                                    <select name="searchValue">
                                    {locations.length >0 && locations.map((location,i)=>{
                                        return(
                                            
                                                <option key={i} ref={inputValue} value={location.id}>{location.name}</option>
                                                
                                        
                                        )
                                    })}
                                    </select>

                                    <select name="searchValue">
                                    {sports.length >0 && sports.map((sport,i)=>{
                                        return(
                                            
                                                <option key={i} ref={inputValue} value={sport.id}>{sport.name}</option>
                                                
                                        
                                        )
                                    })}
                                    </select>

								</div>
								<button className="SearchButton">Search</button>
							</form>
						</div>
					</div>
					<div className="SearchResult">
						<div className="SearchResultTitle">
							<h2>Actividades por {keywordCriteria}: {keywordValue}</h2>
						</div>
						{/* Listado de películas */}
						{
							products.length > 0 && products.map((product, i) => {
								return (
									<div className="CardResult" key={i}>

											<div className="CardHeader">
												<h5 className="ResultTitle">{product.name}</h5>
											</div>
											<div className="CardBody">
												<div className="ConteinerIcon">
													<img 
														className="IconUser" 
														src={IconUser}
														alt="icono usuario"
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{product.Location.name}</p>
                                                <p>{product.Sports.Name}</p>
                                                <p>{product.price}</p>
											</div>
										
									</div>
								)
							})
						}
					</div>
					
					{products.length === 0 && (
            			<div className="AlertSearch">
             				 No se encontraron productos
            			</div>
          			)}

				</>
		</div>
	)
}

export default SearchProduct