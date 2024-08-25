import { useState } from 'react'
import CounterBtn from './CounterBtn';
import './Counter.css'

export default function Counter() {

    const [count, setCount] = useState(0);

    function incrCounterParentFunction(byValue) {
        setCount(count + byValue);
    }

    function decrCounterParentFunction(byValue) {
        setCount(count - byValue);
    }

    function resetCounter() {
        setCount(0);
    }

    return (
        <div>
            <span className="totalCount">{count}</span>
            <CounterBtn byValue = {1} 
                incrMethod={incrCounterParentFunction} 
                decrMethod={decrCounterParentFunction}/>
            <CounterBtn byValue = {3} 
                incrMethod={incrCounterParentFunction} 
                decrMethod={decrCounterParentFunction}/>
            <CounterBtn byValue = {5} 
                incrMethod={incrCounterParentFunction} 
                decrMethod={decrCounterParentFunction}/>

            <button className='resetBtn' onClick={resetCounter}>Reset</button>
        </div>
    )
}


