import { useState } from "react";

function Characters() {
    const [text, setText] = useState("");
    let warning = "Lunghezza ottimale"
    if (text.length < 10) warning = "Troppo corto"
    if (text.length > 20) warning = "Troppo lungo"


    return (

        <div>
            <textarea value={text} onChange={(event) => setText(event.target.value)} />
            <p>{warning}</p>
        </div>

    )
};
export default Characters;