import React from "react";
import useStore from "./store.jsx";

const App = () => {
    const { bears, increasePopulation, resetBears } = useStore(state => state);

    return (
        <>
        <h1>{bears}</h1>
        <button onClick={increasePopulation}>up</button>
        <button onClick={resetBears}>reset</button>
        </>
    )
}

export default App;