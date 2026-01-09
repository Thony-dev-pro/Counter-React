import {useEffect, useState} from "react";
import "../styles/Counter.css";
import ShowCounterHistory from "./CounterHistory.tsx";

type Props = {
    darkMode?: boolean;
}

function addCount(count: number, input: number): number {
    const newNumber : number = count + input;
    return newNumber > 100 ? 100 : newNumber;
}

function subtractCount(count: number, input: number): number {
    const newNumber: number = count - input;
    return newNumber < 0 ? 0 : newNumber;
}

function undoCount(history: number[]): number | null {
    if (history.length === 0) {
        return null;
    }
    return history[history.length - 2] ?? 0;
}

function redoCount(history: number[]): number | null {
    if (history.length === 0) {
        return null;
    }
    return history[history.length - 1] ?? 0;
}

function Counter ({darkMode}: Props) {
    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem("count");
        return savedCount ? Number(savedCount) : 0;
    });
    const [input, setInput] = useState(1);
    const [history, setHistory] = useState<number[]>([]);
    const [redoHistory, setRedoHistory] = useState<number[]>([]);

    useEffect(() => {
        localStorage.setItem("count",count.toString());
    }, [count]);

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

    function handleUndoCount() {
        const previousCount = undoCount(history);
        if (previousCount !== null) {
            setRedoHistory([...redoHistory, count]);
            setCount(previousCount);
            setHistory(history.slice(0, -1));
        }
    }

    function handleRedoCount() {
        const nextCount = redoCount(redoHistory);
        if (nextCount !== null) {
            setHistory([...history, count]);
            setCount(nextCount);
            setRedoHistory(redoHistory.slice(0, -1));
        }
    }

    return (
        <div className={`counter ${darkMode ? 'dark' : ''}`}>
            <h1>Counter</h1>
            <p>{count}</p>
            <input value={input} onChange={(e) => setInput(Number(e.target.value))}/>
            <div>
                <button onClick={handleAddCount}>+</button>
                <button onClick={handleSubtractCount}>-</button>
                <button onClick={() => setCount(input)}>Reset</button>
                <button onClick={handleUndoCount}>Undo</button>
                <button onClick={handleRedoCount}>Redo</button>
            </div>
            <ShowCounterHistory history={history}/>
        </div>
    )
}

export default Counter