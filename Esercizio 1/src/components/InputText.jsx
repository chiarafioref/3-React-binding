import { useState } from "react";

function InputText(props) {
    const [text, setText] = useState("")

    return (
        <>
            <div>
                <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
                <p>{text}</p>
            </div>



        </>
    )
};
export default InputText;