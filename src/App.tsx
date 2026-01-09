import './App.css'
import Counter from "./components/Counter.tsx";
import Toggle from "./components/Toggle.tsx";
import { useState } from "react";



function App() {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <>
        <Toggle onToggle ={setDarkMode} ></Toggle>
        <Counter darkMode={darkMode}></Counter>
    </>
  )
}

export default App
