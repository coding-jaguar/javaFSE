import React from 'react'

function NestedProps(props) {
    let { firstName, lastName } = { ...props }
    return (
        <div>
            <span>{firstName} </span>
            <span>{lastName}</span>
            <br />
        </div>
    )
}

const Company = () => {
    const getName = () => {
        return { "firstName": "Alice", "lastName": "Chang" }
    }
    return (
        <div className="company">
            <NestedProps firstName="John" lastName="Rivers"></NestedProps>
            <NestedProps firstName="Emily" lastName="Hill"></NestedProps>
            <NestedProps firstName={"Ni" + "na"} lastName={"Mat" + "hew"}></NestedProps>
            <NestedProps firstName={getName().firstName} lastName={getName().lastName}></NestedProps>
        </div>
    )
}

export default Company
