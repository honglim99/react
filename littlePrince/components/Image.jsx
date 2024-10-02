import React from "react";
import littlePrince from './littleprince.jpg';

function Image() {
    return (
        <div>
            <img
                src={littlePrince}
                style={{ width: "300px", margin: "10px" }}
                alt="littlePrince"
            ></img>
        </div>

    )
}

export default Image