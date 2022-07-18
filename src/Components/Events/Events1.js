import React, { useState } from 'react'

function Counter(props) {

    let [count, setCount] = useState(0)
    let [increment, setIncrement] = useState(props.increment)
    let [increase, setIncrease] = useState(true)

    let incrementCount = (e) => {
        console.log(e.type + " " + count);
        setCount(count + increment)
    }

    const style = {
        border: "solid black 10px",
        width: "fit-content"
    }
    return (
        <div style={{ display: "grid", gridTemplateAreas: `"one one" "two" "three"`, }} >
            {/* <div style={{ border: "solid black 2px", gridArea: "two", width: "auto" }}> */}
            {/* </div> */}
            <div >
                {count}
            </div>
            <div  >
                <button onClick={incrementCount}>increment</button>
            </div>
            <div >
                <select onChange={(e) => { setIncrement(parseInt(e.target.value)) }} >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
            </div>
        </ div>
    )
}

export default Counter
