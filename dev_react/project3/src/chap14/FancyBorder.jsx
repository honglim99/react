import React from 'react'

function FancyBorder(props) {
    return (
    <div style={{ border: '1px solid gray', padding: "8px", backgroundColor: props.color || "white" }}>
        {props.children}
        {/* <p>여기는 리액트 공부방입니다.</p> */}
    </div>
    );
}

export default FancyBorder