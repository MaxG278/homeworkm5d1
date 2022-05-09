import React from 'react'
import "./SearchBar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from 'react';



function SearchBar() {
  const [searchValue, setSearchValue] = useState ([])
  
  useEffect(()=> {
       fetchData()
  }, [searchValue])

  const fetchData = async () => {
      try {

      
       let data = await fetch("https://strive-jobs-api.herokuapp.com/jobs?company=olla")
        if (data.ok) {
            let response = await data.json()
            let jsonData = response.data
            console.log(jsonData)
        }
          }
          catch (error) {
              console.log(error)
          }

  }
  
    return (
    <div className="search">
        <div className="searchInputs">
            <input type="text"  />
            <div className="searchIcon" onClick={e => setSearchValue(e.target.value)}> 
            <AiOutlineSearch />
            </div>
        </div>
        <div className="dataResult">
            <ul>
            {searchValue.map(search => (
                <li key={search.id}>{search.title}</li>
                ))}
            </ul> 
        </div>

    </div>
  )
}

export default SearchBar