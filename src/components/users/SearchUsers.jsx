import React from "react";
import { useState } from "react";
import "./searchUsers.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import torreService from "../../services/torreService";
import UserCard from "./UserCard";
import RecentSearches from "./RecentSearches";




function SearchUsers() {
    const [searchData, setSearchData] = useState({
        searchInput: "",
    })

    const [searchHistory, setSearchHistory] = useState([])
    const [searchResults, setSearchResults] = useState({
        data: [],
        mappedResponse: []
    })


    const payload = {
        excludeContacts: true,
        excludedPeople: [],
        identityType: "person",
        limit: 10,
        meta: false,
        query: searchData.searchInput,
        torreGgId: "1330502",
    }

    const searchCounter = () => {
        const searchQuery = searchData.searchInput;
        setSearchHistory((prevState) => {
            return [...prevState, searchQuery];
        });
        console.log(searchHistory)
    }

    const onSearchClick = (e) => {
        e.preventDefault();
        torreService
            .getUsers(payload)
            .then(onGetUsersSuccess)
            .catch(onGetUsersError)
            .finally(() => {
                searchCounter();
            });
    };

    const onGetUsersSuccess = (response) => {
        const responseData = response.data
        const jsonResponseArray = responseData.split('\n');
        const nonEmptyJsonResponseArray = jsonResponseArray.filter((item) => item.trim() !== '');
        const mappedArray = nonEmptyJsonResponseArray.map((item) => JSON.parse(item));

        setSearchResults((prevState) => {
            const newSt = { ...prevState };
            newSt.mappedResponse = mappedArray.map(mapResponse)
            newSt.data = mappedArray;
            return newSt
        })

    }

    const onGetUsersError = (error) => {
        console.log(error)
    }

    const handleChildData = (ggId, username) => {
        const navigationUrl = `https://bio.torre.co/${username}`
        const redirectToWebsite = (url) => {
            window.location.href = url;
        }
        redirectToWebsite(navigationUrl)
    }

    const mapResponse = (anUser) => {
        return (
            <UserCard
                anUser={anUser}
                key={anUser.ggId}
                sendDataToParent={handleChildData}
            />
        )
    }

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
                <div className="d-flex justify-content-center h-100 mb-5 pb-5">
                    <div className="search border">
                        <input
                            type="text"
                            className="search-input"
                            id="searchbar"
                            autoComplete="off"
                            placeholder="Search for someone..."
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
            <div className="container">
                <div className="row justify-content-center">{searchResults.mappedResponse}
                </div>
            </div>
            <div>
                <RecentSearches history={searchHistory} />
            </div>

        </React.Fragment>
    )
}

export default SearchUsers;