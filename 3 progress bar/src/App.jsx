import React, { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar.jsx";

const App = () => {
    const [value, setValue] = useState(0);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setInterval(() => {
            setValue((val) => val + 1);
        }, 100);
    }, []);

    return (
        <div className="app">
            <span>Progress Bar</span>

            <ProgressBar value={value} onComplete={() => setSuccess(true)} />
            <span>{success ? "Completed!" : "Loading..."}</span>
        </div>
    );
};

export default App;
