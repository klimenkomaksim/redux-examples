import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { increment, decrement } from '../actions/counter'

const CounterWithHooks = () => {
    const count = useSelector((state) => state.counter.count, shallowEqual);
    const dispatch = useDispatch();
    const _handleDecrement = () => dispatch(decrement());
    const _handleIncrement = () => dispatch(increment());

    return (
        <div>
            <button onClick={_handleDecrement}>Decrement</button>
                <p>{count}</p>
            <button onClick={_handleIncrement}>Increment</button>
        </div>
    );
}

export default CounterWithHooks;
