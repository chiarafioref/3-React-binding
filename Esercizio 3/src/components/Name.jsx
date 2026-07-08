import { useState } from "react";

function Name() {
    const [search, setSearch] = useState("");
    const names = ["Lucia", "Giovanna", "Matteo", "Chiara"];
    const filteredNames = names.filter((name) => name.toLowerCase().includes(search.toLowerCase()));
    return (
        <>
            <div>
                <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} />
                <ul>
                    {filteredNames.map((name) => (
                        <li key={name}>{name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Name;