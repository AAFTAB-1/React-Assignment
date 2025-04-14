import React, { useState } from 'react'

const Inline = () => {

    const [count, setCount] = useState(0);
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>

            <h1>Coutnt is = {count} </h1>
            <button style={{ marginRight: "20px", color: "white", backgroundColor: "black", border: "none", fontSize: "30px", borderRadius: "10px", padding: "5px 20px 5px 20px" }} onClick={() => setCount(count + 1)}>+</button>
            <button style={{ color: "white", backgroundColor: "black", border: "none", fontSize: "30px", borderRadius: "10px", padding: "5px 20px 5px 20px" }} onClick={() => setCount(count - 1)}>-</button>
            <br />
            <button style={{ marginTop: "20px", color: "white", backgroundColor: "black", border: "none", fontSize: "30px", borderRadius: "10px", padding: "5px 20px 5px 20px" }} onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Inline
