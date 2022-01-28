import SearchContext from "../contexts/SearchContext";

import {useState} from "react";

function ContextWrapper({children}) {
    
    const [searchResults,setSearchResults] = useState([])
    const [searching,setSearching] = useState(false)

    const values = {
        searchResults,
        setSearchResults,
        searching,
        setSearching
    }
    return (
        <SearchContext.Provider value={values}>
            { children }
            
        </SearchContext.Provider>
    )
    
}

export default ContextWrapper