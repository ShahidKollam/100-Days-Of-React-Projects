import React, { useEffect, useState } from "react";

const ProgressBar = ({ value=0, onComplete = () => {} }) => {
    const [percent, setPercent] = useState(value);

    useEffect(() => {
        setPercent(Math.min(100, Math.max(value, 0)));

        if (value >= 100) {
            onComplete();
        }
        
    }, [value]);

    return (
        <div className="progress">
            <span style={{ color: percent > 49 ? "white" : "black" }} role="progressbar">
                {percent.toFixed()}%
            </span>
            <div
                style={{ transform: `scaleX(${percent / 100}`, transformOrigin: "left" }}
                area-valuemin={0}
                area-valuemax={100}
                area-valuenow={percent.toFixed()}
            ></div>
        </div>
    );
};

export default ProgressBar;
