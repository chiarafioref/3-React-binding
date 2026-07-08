import { useState } from "react"

function TextAlign() {
    const [align, setAlign] = useState("");


    return (
        <>
            <div>
                <label>
                    <input type="radio" name="align" value="left" checked={align === "left"} onChange={(event) => setAlign(event.target.value)} />
                    Sinistra
                </label>
                <label>
                    <input type="radio" name="align" value="center" checked={align === "center"} onChange={(event) => setAlign(event.target.value)} />
                    Centro
                </label>
                <label>
                    <input type="radio" name="align" value="right" checked={align === "right"} onChange={(event) => setAlign(event.target.value)} />
                    Destra
                </label>
            </div>
            <div>
                <h1 style={{ textAlign: align }}> Benvenuto</h1>
            </div>

        </>
    )
};
export default TextAlign;