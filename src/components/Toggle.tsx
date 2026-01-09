import { useState } from "react";
import "../styles/Toggle.css";

type Props = {
    onToggle?: (isOn: boolean) => void;
}

function Toggle({onToggle }: Props) {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        const newState = !isOn;
        setIsOn(newState);
        onToggle?.(newState);
    };

    return (
        <div className="toggle">
            <div
                className={`toggle-switch ${isOn ? 'active' : ''}`}
                onClick={handleToggle}
            >
                <div className="toggle-slider"></div>
            </div>
        </div>
    );
}

export default Toggle;