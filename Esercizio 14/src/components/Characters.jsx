import { useState } from "react";

function Characters() {
    const [text, setText] = useState("");
    const maxLength = 20;

    return (

        <div>
            <textarea value={text} onChange={(event) => setText(event.target.value)} />
            <p>Caratteri rimanenti: {maxLength - text.length}</p>
        </div>

    )
};
export default Characters;