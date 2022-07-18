import React from 'react'

const DynamicTypesWithProps = (props) => {
    return RandomCircle(props.index)
}

// export default DynamicTypesWithProps

const Circle = (props) => {
    const cirStyle = {
        backgroundColor: props.color
    }
    return (
        <div className="circle" style={cirStyle}>

        </div>
    )
}



function PurpleCircle(props) {
    return <Circle color="purple" />
}
function GreenCircle(props) {
    return <Circle color="green" />
}
function RedCircle(props) {
    return <Circle color="red" />
}
function BlackCircle(props) {
    return <Circle color="black" />
}

let RandomCircle = (props) => {
    const Circles = [
        PurpleCircle,
        GreenCircle,
        RedCircle,
        BlackCircle
    ]
    const SomeCircle = Circles[props.index]
    return <SomeCircle />
}

export { RandomCircle, PurpleCircle, RedCircle }