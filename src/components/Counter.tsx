import {useState} from "react";
import "../styles/Counter.css";

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
    return (
        <div className="counter">
            <h1>Counter</h1>
            <p>{count}</p>
            <input value={input} onChange={(e) => setInput(Number(e.target.value))}/>
            <div>
                <button onClick={() => setCount(addCount(count,input))}>+</button>
                <button onClick={() => setCount(subtractCount(count,input))}>-</button>
                <button onClick={() => setCount(input)}>Reset</button>
            </div>
        </div>
    )
}

export default Counter