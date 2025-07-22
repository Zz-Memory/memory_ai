import { useCounterStore } from "@/store/count";

// 来自store
const Counter = () => {
    const {
        count,
        increment,
        decrement
    } = useCounterStore();
    return (
        <>
            <h2>当前计数: {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}

export default Counter