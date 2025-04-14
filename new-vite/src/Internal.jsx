import React, { useState } from 'react'

const Internal = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const minus = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }



    const divstyle = {
        marginTop: "100px",
        textAlign: "center"
    }


    const bttn = {
        color: "white",
        backgroundColor: "black",
        border: "none",
        fontSize: "30px",
        borderRadius: "10px",
        padding: "5px 20px 5px 20px",
        marginLeft: "20px",
        marginTop: "20px"
    }
    return (
        <div style={divstyle}>

            <h2>Count is  = {count}</h2>
            <button style={bttn} onClick={increment}>+</button>
            <button style={bttn} onClick={minus}>-</button>
            <br />
            <button style={bttn} onClick={reset}>Reset</button>

        </div>
    )
}

export default Internal
