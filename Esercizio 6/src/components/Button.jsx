import { useState } from "react"

function Button() {
    const [confirmed, setConfirmed] = useState(false);

    return (
        <>
            <div>
                <label>
                    <input type="checkbox" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} />
                    Accetto i termini e le condizioni d'uso
                </label>
            </div>
            <div>
                <button disabled={!confirmed}>Continua</button>
            </div>
        </>
    )
};
export default Button;