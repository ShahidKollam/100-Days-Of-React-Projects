import React, { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

const App = () => {
    const [value, setValue] = useState(0);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setValue((val) => val + 1);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="app">
            <h1>Progress Bar</h1>
            <ProgressBar value={value} onComplete={() => setSuccess(true)} />
            <p className="status">{success ? "Completed!" : "Loading..."}</p>
        </div>
    );
};

export default App;
