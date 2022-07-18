import React from 'react'
const Todo = (props) => {
    return <li>Todo : {props.item}</li>
}

function List(props) {
    var list = ['clear desk', 'complete mail', 'shopping', 'exercise']
    return (
        <ul>{list.map((todo) => { return <Todo key={todo} item={todo} /> })}</ul>
    )
}

export { List }