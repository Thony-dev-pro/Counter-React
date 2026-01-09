import "../styles/CounterHistory.css";

type Props = {
    history: number[];
}

function ShowCounterHistory({history} : Props) {
    return (
        <div className="counter-history">
            <h2>Counter History</h2>
            <ul>
                {history.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </div>
    )
}

export default ShowCounterHistory;
