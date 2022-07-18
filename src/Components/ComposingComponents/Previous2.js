import React, { useEffect, useState } from 'react'

function Previous2(props) {

    let [count, setCount] = useState(0)
    let [inc, setInc] = useState(1)


    useEffect(() => {
        // setInterval(() => { setCount(count + inc) }, 500)
        console.log(count)
    }
        , [count])

    return (
        <div>
            <div>{count}</div>
            <div>
                <button onClick={() => { setCount(prev => (prev + inc)) }}>count inc</button>
                <br />
                <button onClick={() => setInc((prev) => { return prev + 1 })}>inc inc {inc}</button>
            </div>
        </div>
    )
}

export default Previous2
