import React from 'react'

const Company = (props) => {
    return (
        <div className="company">
            <div>
                Company: {props.companyName}
            </div>
            <Employee employeeName={props.employeeName} designation={props.designation}></Employee>
            <Activities comittees={props.comittees} forums={props.forums} />
        </div>
    )
}

function Employee(props) {
    return (
        <div>
            <div>
                Name:{props.employeeName}
            </div>
            <div>
                Designation:{props.designation}
            </div>
        </div>
    )
}

function Activities(props) {
    return (
        <div>
            <div>
                Comittees: {props.comittees}
            </div>
            <div>
                Forums:{props.forums}
            </div>
        </div>
    )
}


export default Company
