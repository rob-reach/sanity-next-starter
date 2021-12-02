import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, incrementByAmount } from "../store/slices/counterSlice"

const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className="my-8">
            <h3>Counter redux example component</h3>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span className="text-4xl font-bold px-8">{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button
                    className="ml-4"
                    aria-label="Increment value by 50"
                    onClick={() => dispatch(incrementByAmount(50))}
                >
                    Increment by 50
                </button>
            </div>
        </div>
    )
}

export default Counter
