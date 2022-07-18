import React, { Component } from 'react'

export default class Circle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            color: "green",
            backgroundColor: "pink"
        }
    }

    render() {
        const cirStyle = {
            color: this.state.color,
            backgroundColor: this.state.backgroundColor
        }
        return (
            <div className='circle' style={cirStyle}>
                Hello React Developers
            </div>
        )
    }
}
