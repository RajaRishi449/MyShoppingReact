import React, { useContext, useState } from 'react';
import { counterContext } from '../contexts/counter';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementbyvalue } from '../reducers/counterSlice';

function Counter() {
    //const { countValue, setCountValue } = useContext(counterContext);
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);

    const handleIncrement = () => {
        if (value !== 0) {
            dispatch(incrementbyvalue(parseInt(value)));
        } else {
            dispatch(increment());
        }
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }

    return (
        <>
            <div>This is Counter component:</div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <input type='number' onChange={(e) => setValue(e.target.value)} />
            <div>Count value: {count}</div>
        </>
    );
}

export default Counter;
