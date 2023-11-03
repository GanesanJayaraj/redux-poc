import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
    // let [count, setCount] = useState(0);
    // need sccess to count state

    let count = useSelector((store)=> { return store.counterState.count })
    function handleIncrement() {
        setCount(count+1)
    }
    function handleDecrement() {
        setCount(count-1)
    }
    return (
        <>
            <button onClick={handleIncrement}>+</button>
            {count}
            <button onClick={handleDecrement}>-</button>
        </>
    )
}

export default Counter