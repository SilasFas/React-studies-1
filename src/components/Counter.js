import { useCounter } from "./useCounter"

export const Counter = () => {
    const [count, Increase, Reset, Decrease] = useCounter()

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={Increase}>Increase</button>
            <button onClick={Reset} >Reset</button>
            <button onClick={Decrease} >Decrease</button>
        </div>
    )
}