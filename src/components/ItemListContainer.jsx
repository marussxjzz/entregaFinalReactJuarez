import React from "react"

const ItemListContainer = (props) => {

    return (
        <div className="itemListContainer">
            <p className="iLCgreeting">{props.greeting}</p>
        </div>
    )
}

export default ItemListContainer