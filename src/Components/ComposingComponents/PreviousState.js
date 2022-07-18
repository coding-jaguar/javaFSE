import React, { useState } from 'react'

function Counter(props) {
    let [state, setState] = useState({ ...props })
    console.log(state)
    const incrementCount = () => {
        var { count } = { ...state }
        count = count + state.increment
        setState({ ...state, count: count })
    }

    const stepSize = () => {
        setState(
            prev => {
                prev.increment += 1
                return prev
            },
            console.log(state)
        )

    }

    return (
        <div>
            {state.count}
            <br />
            <button onClick={incrementCount}>Increment</button>
            <button onClick={stepSize}>increment++ ({state.increment})</button>
        </div>
    )
}

export default Counter
