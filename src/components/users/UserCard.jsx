import React from "react";
import "./searchUsers.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function UserCard(props) {
    const anUser = props.anUser;
    const sendDataToParent = props.sendDataToParent;

    const onUserClick = (e) => {
        e.preventDefault();
        sendDataToParent(anUser.ggId, anUser.username)
    };

    return (
        <div className="col-md-3 p-2 m-2 center container">
            <div className="card" onClick={onUserClick}>
                <img className="card-img-top" src={anUser.imageUrl === null ? "https://tinyurl.com/5y6vb26d" : anUser.imageUrl} alt="User profile picture" style={{ height: '312.400px' }} />
                <div className="card-body">
                    <h5 className="card-title">{anUser.name}</h5>
                    <p className="card-text truncate">Username: {anUser.username}</p>
                    <button className="btn m-auto d-flex align-text-bottom">
                        <FontAwesomeIcon className="" icon={faStar} style={{}} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserCard;
