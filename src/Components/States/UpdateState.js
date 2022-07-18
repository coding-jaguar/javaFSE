import React, { Component } from 'react'
export default class DetailsBox extends Component {
    state = {
        name: 'John',
        color: 'green',
        backgroundColor: 'pink',
        subject: 'psychology'
    }
    style = {
        color: 'red',
        backgroundColor: "black"
    }
    pickRandomName = () => {
        var names = [
            'Alice',
            'Bob',
            'Charles',
            'Darwin',
            'Emily',
            'Fiona',
            'Garret'
        ]
        var nameIndex = Math.floor(Math.random() * names.length)
        this.setState(
            { name: names[nameIndex] }
        )
    }
    pickRandomColor = () => {
        var colors = [
            'blue',
            'magenta',
            'lavender',
            'violet',
            'red'
        ]
        var colorIndex = Math.floor(Math.random() * colors.length)
        this.setState(
            {
                color: colors[colorIndex]
            }
        )
    }
    pickRandomBackgroundColor = () => {
        var colors = [
            'blue',
            'magenta',
            'lavender',
            'violet',
            'red'
        ]
        var colorIndex = Math.floor(Math.random() * colors.length)
        this.setState(
            {
                backgroundColor: colors[colorIndex]
            }
        )
    }
    pickRandomSubject = () => {
        var subject = [
            "hindi",
            "english",
            "maths",
            "science"
        ]
        var subIndex = Math.floor(Math.random() * subject.length)
        this.setState(
            {
                subject: subject[subIndex]
            }
        )
    }
    render() {
        return (
            <div>
                <div className="details" style={{ color: this.state.color, backgroundColor: this.state.backgroundColor }}>
                    Name: {this.state.name} <br />
                    Subject: {this.state.subject}
                </div>
                <button onClick={this.pickRandomName}>
                    name
                </button>
                <button onClick={this.pickRandomColor}>
                    text color
                </button>
                <button onClick={this.pickRandomBackgroundColor}>
                    background
                </button>
                <button onClick={this.pickRandomSubject}>
                    subject
                </button>
            </div>
        )
    }
}