import { useState } from 'react';

function Text() {
    const [text, setText] = useState("");
    return (
        <>
            <div>
                <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
                <p>Caratteri: {text.length}</p>
            </div>
        </>
    )
}
export default Text;