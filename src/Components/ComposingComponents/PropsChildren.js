import React from 'react'

function RedText(props) {
    return (
        <div className="red">{props.children}</div>
    )
}
function GreenText(props) {
    return (
        <div className="green">{props.children}</div>
    )
}

export { RedText, GreenText }
