import { useState } from "react"

export const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue)

    const Increase = () => setCount(count + 1)
    const Reset = () => setCount(0)
    const Decrease = () => setCount(count - 1)

    return [count, Increase, Reset, Decrease]
}