import React, { useState } from 'react'

const External = () => {

    const [count, setCount] = useState(0);
    return (
        <div className='container'>

            <h2>Counter is = {count}</h2>
            <button onClick={() => setCount(count + 1)} className='plus'>+</button>
            <button onClick={() => setCount(count - 1)} className='minus'>-</button>
            <br />
            <button onClick={() => setCount(0)} className='reset'>Reset</button>


        </div>
    )
}

export default External
