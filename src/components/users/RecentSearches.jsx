import React from "react";

function RecentSearches(props) {
    const history = props.history;
    console.log(history)

    // removeLastItem = () => {
    //     if (history.length >= 10) {
    //         history.shift()
    //     }
    //     console.log(history)

    return ( //List of items would go here. After removing the last item of the list if the length is greater than 10
        //the code would populate a new list item with the mapped data from the history array.
        <div>
            <h1>Recent searches</h1>
            <ul class="list-group">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
    )
}

export default RecentSearches;