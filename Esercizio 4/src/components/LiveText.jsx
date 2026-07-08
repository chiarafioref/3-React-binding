import { useState } from "react";

function LiveText() {
    const [text, setText] = useState("");

    return (
        <>
            <div>
                <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
                <h1>{text}</h1>
            </div>


        </>
    )
}
export default LiveText;