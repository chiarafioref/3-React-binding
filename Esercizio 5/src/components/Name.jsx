import { useState } from "react";

function Name() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    return (
        <>
            <div>
                <p>Nome: </p>
                <input type="name" value={name} onChange={(event) => setName(event.target.value)} />

            </div>

            <div>
                <p>Cognome: </p>
                <input type="surname" value={surname} onChange={(event) => setSurname(event.target.value)} />
                <h2>{name} {surname}</h2>

            </div>
        </>
    )
};
export default Name;