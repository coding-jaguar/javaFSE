import React, { useState } from 'react'

function Counter() {

    let [count, setCounter] = useState(0)
    let [increment, setIncrement] = useState(1)
    let incrementCount = (e) => {
        e.preventDefault()
        if (e.shiftKey) {
            // increment=10
            setIncrement(10)
        }
        else {
            // increment=100
            setIncrement(100)
        }
        setCounter(count + increment)
    }

    return (
        <div onClick={(e) => {
            incrementCount(e)
        }}>
            {count}
            <br />

        </div>
    )
}

export default Counter
