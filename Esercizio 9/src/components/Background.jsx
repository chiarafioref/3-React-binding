import { useState } from "react";

function Background() {
    const [colors, setColors] = useState("pink");

    return (
        <div style={{ backgroundColor: colors, width: "100vw", minHeight: "100vh", margin: 0, padding: "20px", boxSizing: "border-box" }}>
            <button onClick={() => setColors("pink")}>Rosa</button>
            <button onClick={() => setColors("red")}>Rosso</button>
            <button onClick={() => setColors("orange")}>Arancione</button>
            <button onClick={() => setColors("green")}>Verde</button>
            <button onClick={() => setColors("blue")}>Blu</button>
            <button onClick={() => setColors("yellow")}>Giallo</button>
        </div>
    )
};
export default Background;