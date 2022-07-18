import React, { useState } from 'react'

function StatusBox(props) {

    let [enabled, setEnabled] = useState(true)
    let [message, setMessage] = useState("Message is enabled")
    console.log("rerender")

    const handleClick = (e) => {
        e.preventDefault()
        setEnabled(!enabled)
        setMessage(enabled ? "Message is Enabled" : "Message is not enabled")
    }

    return (
        <div>
            <div style={{ margin: "0 auto", backgroundColor: "black", height: "50px", width: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>

                <div style={
                    {
                        backgroundColor: enabled ? "green" : "red",
                        height: "40px",
                        width: "40px",
                        margin: "o auto"

                    }}
                    onClick={handleClick}
                >
                </div>
                <br />
            </div>
            {message}

        </div>
    )
}

export default StatusBox
