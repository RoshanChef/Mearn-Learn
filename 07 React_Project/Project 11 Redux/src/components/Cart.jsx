import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { change } from '../slices/changeSlice';

function Cart() {
    const dispatch = useDispatch();
    const data = useRef('');
    const getting = useSelector(state => state.change);
    useEffect(() => {
        console.log('rendered ');
    })
    function submitHandler(e) {
        e.preventDefault();
        dispatch(change({ data: data.current.value }));
        console.log(getting);
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" ref={data} />
            </form>
        </div>
    )
}

export default Cart