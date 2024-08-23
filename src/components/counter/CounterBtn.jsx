import { useState } from 'react'
import { PropTypes } from 'prop-types'

export default function CounterBtn({by, incrMethod, decrMethod}) {

    const [count, setCount] = useState(0);

    function incrCounter() {
        setCount(count + by);
        incrMethod(by);
    }
 
    function decrCounter() {
        setCount(count - by);
        decrMethod(by);
    }

    return (
        <div className="Counter">
            {/* <span className="count">{count}</span> */}
            <div>
                <button className="cunterBtn" onClick={decrCounter}>-{by}</button>
                <button className="cunterBtn" onClick={incrCounter}>+{by}</button>
            </div>
        </div>
    )
}

CounterBtn.propTypes = {
    by: PropTypes.number
}