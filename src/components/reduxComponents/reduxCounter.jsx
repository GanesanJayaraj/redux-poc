import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import counterSlice from '../../redux/counterSlice'

const actions = counterSlice.actions;
console.log(actions)
console.log(counterSlice)
const ReduxCounter = () => {
    // let [count, setCount] = useState(0);
    let count = useSelector((store)=>{return store.counterState.count}) // counterState from store

    const dispatch = useDispatch();

    function handleIncrement() {
        // setCount(count+1)
        dispatch(actions.increment())
    }
    function handleDecrement() {
        // setCount(count-1)
        dispatch(actions.decrement())
    }
    return (
        <>
            <button onClick={handleIncrement}>+</button>
            {count}
            <button onClick={handleDecrement}>-</button>
        </>
    )
}

export default ReduxCounter