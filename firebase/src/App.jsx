
import './App.css'
import React from 'react'
import { useState } from 'react';

export const App = () => {

    const [value, setValue] = useState(0);
    const { counter } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        setValue(parseInt(e.target.value));
    }

    const handleIncrement = () => {
        dispatch(incrementByAmount(value));
    }
    
    return (
        <>
        <h1> App </h1>
        <hr />
        <span> Counter is: {counter}</span>
        <button 
            className='btn btn-primary'
            onClick={() => dispatch(increment())}  
        >
            +1
        </button>
        <input className= 'input' type="number"  value= {value} onChange={handleChange}/>
        <button 
            className='btn-secundary'
            onClick={() => dispatch(incrementByAmount(value))}  
        >
            add
        </button>
        </>
    )
}

export default App