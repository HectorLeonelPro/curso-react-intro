import React from "react";

function EmptySearchResults(props){
    return(
        <p>{props.searchText} no fue encontrado en tu lista de TODO's.</p>
    )
}

export {EmptySearchResults}