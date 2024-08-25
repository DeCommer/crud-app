import { PropTypes } from 'prop-types'

export default function CounterBtn({byValue, incrMethod, decrMethod}) {
    return (
        <div className="Counter">
            <div>
                <button className="cunterBtn" onClick={() =>decrMethod(byValue)}>-{byValue}</button>
                <button className="cunterBtn" onClick={() =>incrMethod(byValue)}>+{byValue}</button>
            </div>
        </div>
    )
}

CounterBtn.propTypes = {
    by: PropTypes.number
}