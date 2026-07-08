import { useState } from "react";

function ItemType() {
    const [type, setType] = useState("Tutti")
    const items = [
        { name: "Maglia", color: "Blu" },
        { name: "Vestito", color: "Rosso" },
        { name: "Pantalone", color: "Nero" },
        { name: "Jeans", color: "Blu" },
        { name: "Foulard", color: "Rosso" },
        { name: "Scarpe", color: "Rosso" }
    ];
    const filteredItems = type === "Tutti" ? items : items.filter((item) => item.color === type);

    return (
        <>
            <div>
                <select value={type} onChange={(event) => setType(event.target.value)}>
                    <option value="Tutti">Tutti</option>
                    <option value="Blu">Blu</option>
                    <option value="Rosso">Rosso</option>
                    <option value="Nero">Nero</option>
                </select>
            </div>
            <ul>{filteredItems.map((item) => (
                <li key={item.name}>{item.name}</li>
            ))}
            </ul>
        </>
    )
};
export default ItemType;