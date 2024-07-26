import React, { useEffect, useState } from "react";

const ProgressBar = ({ value = 0, onComplete = () => {} }) => {
    const [percent, setPercent] = useState(value);

    useEffect(() => {
        setPercent(Math.min(100, Math.max(value, 0)));

        if (value >= 100) {
            onComplete();
        }
    }, [value, onComplete]);

    return (
        <div className="progress">
            <span className="progress-label" style={{ color: percent > 54 ? "white" : "black" }} role="progressbar">
                {percent.toFixed()}%
            </span>
            <div
                className="progress-bar"
                style={{ width: `${percent}%` }}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={percent.toFixed()}
            ></div>
        </div>
    );
};

export default ProgressBar;
