import React from 'react'
import FancyBorder from './FancyBorder'

function Dialog(props) {
    return (
        <FancyBorder color={props.color}>
            <h1>{props.title}</h1>
            <p>{props.message}</p>
            {props.children}
        </FancyBorder>
    )
}

export default Dialog