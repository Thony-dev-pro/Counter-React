import {useState} from "react";
import "../styles/Counter.css";
import ShowCounterHistory from "./CounterHistory.tsx";

function addCount(count: number, input: number): number {
    const newNumber : number = count + input;
    return newNumber > 100 ? 100 : newNumber;
}

function subtractCount(count: number, input: number): number {
    const newNumber: number = count - input;
    return newNumber < 0 ? 0 : newNumber;
}

function Counter () {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState(1);
    const [history, setHistory] = useState<number[]>([]);

    function handleAddCount() {
        const newCount = addCount(count, input);
        setCount(newCount);
        setHistory([...history, newCount]);
    }

    function handleSubtractCount() {
        const newCount = subtractCount(count, input);
        setCount(newCount);
        setHistory([...history, newCount]);
    }

    return (
        <div className="counter">
            <h1>Counter</h1>
            <p>{count}</p>
            <input value={input} onChange={(e) => setInput(Number(e.target.value))}/>
            <div>
                <button onClick={handleAddCount}>+</button>
                <button onClick={handleSubtractCount}>-</button>
                <button onClick={() => setCount(input)}>Reset</button>
            </div>
            <ShowCounterHistory history={history}/>
        </div>
    )
}

export default Counter