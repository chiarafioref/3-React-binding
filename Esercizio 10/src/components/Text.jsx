import { useState } from "react";

function Text() {
    const [size, setSize] = useState("16");
    return (
        <>
            <div>
                <label>
                    <input type="radio" name="size" value="12" checked={size === 12} onChange={(event) => setSize(event.target.value)} />
                    Piccolo
                </label>
                <label>
                    <input type="radio" name="size" value="16" checked={size === 16} onChange={(event) => setSize(event.target.value)} />
                    Medio
                </label>
                <label>
                    <input type="radio" name="size" value="20" checked={size === 20} onChange={(event) => setSize(event.target.value)} />
                    Grande
                </label>
                <label>
                    <input type="radio" name="size" value="28" checked={size === 28} onChange={(event) => setSize(event.target.value)} />
                    Grandissimo
                </label>
            </div>
            <p style={{ fontSize: size + "px" }}>Benvenuto</p>
        </>
    )
};
export default Text;