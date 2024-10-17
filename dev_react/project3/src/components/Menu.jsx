import React from "react";

function Menu(props) {
    return (
        <div style={{border: '1px solid gray', borderRadius: '20px', textAlign:"center"}}>
            <h1>{props.name}</h1>
            <p>{props.price}</p>
        </div>
    )
}

export default Menu