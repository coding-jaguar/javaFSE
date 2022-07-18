import React from 'react'

const Company2 = (props) => {
    return (
        <div>
            <div>
                Company: {props.companyName}
            </div>
            <Employee {...props} />
            <Activities {...props} />
        </div>
    )
}

export default Company2



function Employee(props) {
    return (
        <div>
            <div>
                Name: {props.employeeName}
            </div>
            <div>
                designation: {props.designation}
            </div>
        </div>
    )
}

const Activities = (props) => {
    return (
        <div>
            <div>
                Committees: {props.committees}
            </div>
            <div>
                Forums: {props.forums}
            </div>

        </div>
    )
}

