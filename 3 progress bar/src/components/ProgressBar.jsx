import React, { useEffect, useState } from "react";

const ProgressBar = ({ value }) => {
    const [percent, setPercent] = useState(value);

    useEffect(() => {
        setPercent(Math.min(100, Math.max(value, 0)));
    }, [value]);

    return (
        <div className="progress">
            <span style={{ color: percent > 49 ? "white" : "black" }} role="progressbar">
                {percent.toFixed()}%
            </span>
            <div
                style={{ width: `${percent}` }}
                area-valuemin={0}
                area-valuemax={100}
                area-valuenow={percent.toFixed()}
            ></div>
        </div>
    );
};

export default ProgressBar;
