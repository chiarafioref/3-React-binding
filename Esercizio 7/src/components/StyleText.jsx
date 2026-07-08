import { useState } from "react";

function StyleText() {
    const [confirmed, setConfirmed] = useState(false);

    return (
        <>
            <div>
                <label>
                    <input type="checkbox" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} />
                    CORSIVO
                </label>
                <h1 style={{ fontStyle: confirmed ? "italic" : "normal" }}>Benvenuto!!!</h1>
            </div>

        </>
    )
}
export default StyleText;