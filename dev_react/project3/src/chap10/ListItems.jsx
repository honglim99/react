import React from 'react'

function ListItems(props) {
    const { items } = props

    const listItems = items.map((item) => <li key={item.id}>{item.name}</li>);
    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    )
}

export default ListItems