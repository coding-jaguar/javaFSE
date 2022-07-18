import React, { useState } from 'react'

function PreventDefault() {

    let [change, setChange] = useState(1)

    const preventer = (e) => {
        e.preventDefault()
        console.log(e.type)
        console.log(e.nativeEvent);
        setCount(count + change)
    }

    const upDown = (e) => {
        if (e.target.checked == true) setChange(-1)
        else setChange(1)
    }
    let [count, setCount] = useState(0)

    return (
        <div>
            <label htmlFor="checkbox">decrease?</label>
            <input type="checkbox" name="" id="checkbox" onClick={upDown} />

            <br />
            <a href="google.com" onClick={preventer}>Click Me For Count!!</a>
            <br />
            {count}
        </div>
    )
}

export default PreventDefault
