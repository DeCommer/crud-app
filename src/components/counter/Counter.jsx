import { useState } from 'react'
import CounterBtn from './CounterBtn';
import './Counter.css'

export default function Counter() {

    const [count, setCount] = useState(0);

    function incrCounterParentFunction(by) {
        setCount(count + by);
    }

    function decrCounterParentFunction(by) {
        setCount(count - by);
    }

    function resetCounter() {
        setCount(0);
    }

    return (
        <div>
            <span className="totalCount">{count}</span>
            <CounterBtn by = {1} 
                incrMethod={incrCounterParentFunction} 
                decrMethod={decrCounterParentFunction}/>
            <CounterBtn by = {3} 
                incrMethod={incrCounterParentFunction} 
                decrMethod={decrCounterParentFunction}/>
            <CounterBtn by = {5} 
                incrMethod={incrCounterParentFunction} 
                decrMethod={decrCounterParentFunction}/>

            <button className='resetBtn' onClick={resetCounter}>Reset</button>
        </div>
    )
}


