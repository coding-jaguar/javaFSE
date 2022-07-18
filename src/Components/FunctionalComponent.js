import React, { Component } from 'react'

export class Greetings extends Component {

    render() {
        let causal = (Math.floor(Math.random() * 2)) % 2 == 0
        if (causal) return <Hi />
        else return <Hello />
    }
}

const Hello = () => {
    var now = new Date();
    return (
        <div className="pink">
            Hello! the current year is {now.getFullYear()}
        </div>
    )
}

const Hi = () => {
    var now = new Date()
    var days = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
    ]
    return (<div className='blue'>
        Hi today is {days[now.getDay()]}
    </div>)
}

export default Greetings
