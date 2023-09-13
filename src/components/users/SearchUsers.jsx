import React from "react";
import { useState } from "react";
import "./searchUsers.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import torreService from "../../services/torreService";



function SearchUsers() {
    const [searchData, setSearchData] = useState({
        searchInput: ""
    })
    console.log(searchData)

    const onSearchClick = (e) => {
        e.preventDefault();
        console.log("searching for: ", searchData.searchInput);
    };

    const onSearchbarChange = (e) => {
        const target = e.target;
        const newUserValue = target.value;
        const nameOfField = target.name;
        setSearchData((prevState) => {
            const newSearchObj = {
                ...prevState,
            };
            newSearchObj[nameOfField] = newUserValue;
            return newSearchObj;
        });
    }

    return (
        <React.Fragment>
            <form>
                <div className="d-flex justify-content-center h-100">
                    <div className="search border">
                        <input
                            type="text"
                            className="search-input"
                            id="searchbar"
                            placeholder="search for someone..."
                            name="searchInput"
                            value={searchData.searchInput}
                            onChange={onSearchbarChange}
                        />
                        <button onClick={onSearchClick} className="search-icon">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
            </form>

        </React.Fragment>
    )
}

export default SearchUsers;