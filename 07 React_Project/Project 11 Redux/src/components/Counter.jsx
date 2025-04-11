import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, reset, increaseByAmt } from '../slices/counterSlice';

function Counter() {
    const count = useSelector((state) => state.countery);
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                <h1>{count}</h1>
                <div>
                    <button onClick={() => dispatch(increase())}>Increase</button>
                    <button onClick={() => dispatch(decrease())}>Decrease</button>
                    <button onClick={() => dispatch(reset())}>Reset</button>
                    <button onClick={() => dispatch(increaseByAmt(2))}>Increment by 15</button>
                </div>
            </div>
        </div>
    )
}

export default Counter
